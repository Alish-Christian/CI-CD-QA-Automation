const fs = require('fs');
const path = require('path');

/**
 * Decodes JSON and creates files with proper directory structure
 * @param {string} jsonString - The JSON string containing file paths and contents
 * @param {string} baseDir - Base directory where files should be created (default: current directory)
 */
function createFilesFromJson(jsonString, baseDir = '.') {
  try {
    // Parse the JSON string
    const fileData = JSON.parse(jsonString);
    
    // Track created files and directories
    const createdFiles = [];
    const createdDirectories = [];
    
    // Process each file in the JSON
    Object.entries(fileData).forEach(([filePath, content]) => {
      // Resolve the full path
      const fullPath = path.resolve(baseDir, filePath);
      const directory = path.dirname(fullPath);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
        createdDirectories.push(directory);
        console.log(`✓ Created directory: ${directory}`);
      }
      
      // Write the file (this will replace if it exists)
      fs.writeFileSync(fullPath, content, 'utf8');
      createdFiles.push(fullPath);
      
      // Check if file was replaced or newly created
      console.log(`✓ ${fs.existsSync(fullPath) ? 'Created/Replaced' : 'Created'} file: ${fullPath}`);
    });
    
    return {
      success: true,
      createdFiles,
      createdDirectories,
      message: `Successfully processed ${createdFiles.length} files`
    };
    
  } catch (error) {
    console.error('Error processing JSON:', error.message);
    return {
      success: false,
      error: error.message
    };
  }
}

/**
 * Example usage function demonstrating how to use the createFilesFromJson function
 */
function exampleUsage() {
  // Example JSON data (same as provided)
  const exampleJson = `{
    "tests/binary-search.test.js": "const binarySearch = require('../binary-search.js');\\nconst testCases = require('./binary-search.testCase.json');\\n\\ndescribe('binarySearch', () => {\\n  test.each(testCases.binarySearch)(\\n    'Function should %s',\\n    ({ input, expected, description }) => {\\n      expect(binarySearch(...input)).toBe(expected);\\n    }\\n  );\\n});",
    "tests/binary-search.testCase.json": "{\\n  \\"binarySearch\\": [\\n    {\\n      \\"input\\": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5],\\n      \\"expected\\": 4,\\n      \\"description\\": \\"find target in the middle of an even-length array\\"\\n    },\\n    {\\n      \\"input\\": [[10, 20, 30, 40, 50], 10],\\n      \\"expected\\": 0,\\n      \\"description\\": \\"find target at the beginning of the array\\"\\n    },\\n    {\\n      \\"input\\": [[1, 3, 5, 7, 9], 9],\\n      \\"expected\\": 4,\\n      \\"description\\": \\"find target at the end of the array\\"\\n    },\\n    {\\n      \\"input\\": [[-5, 0, 5, 10, 15], 7],\\n      \\"expected\\": -1,\\n      \\"description\\": \\"return -1 when target is not in the array\\"\\n    },\\n    {\\n      \\"input\\": [[], 5],\\n      \\"expected\\": -1,\\n      \\"description\\": \\"return -1 for an empty array\\"\\n    }\\n  ]\\n}"
  }`;
  
  console.log('Creating files from example JSON...');
  const result = createFilesFromJson(exampleJson);
  
  if (result.success) {
    console.log('\\n' + result.message);
  } else {
    console.log('Failed:', result.error);
  }
}

/**
 * Alternative function that accepts an object directly instead of JSON string
 * @param {Object} fileData - Object containing file paths as keys and contents as values
 * @param {string} baseDir - Base directory where files should be created
 */
function createFilesFromObject(fileData, baseDir = '.') {
  return createFilesFromJson(JSON.stringify(fileData), baseDir);
}

/**
 * Utility function to validate file paths and contents before creation
 * @param {Object} fileData - Object containing file paths and contents
 */
function validateFileData(fileData) {
  const errors = [];
  
  Object.entries(fileData).forEach(([filePath, content]) => {
    // Check for invalid characters in file path
    if (/[<>:"|?*]/.test(filePath)) {
      errors.push(`Invalid characters in file path: ${filePath}`);
    }
    
    // Check if content is string
    if (typeof content !== 'string') {
      errors.push(`Content for ${filePath} must be a string`);
    }
    
    // Check for very long file paths (Windows limitation)
    if (filePath.length > 260) {
      errors.push(`File path too long: ${filePath}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Export the functions
module.exports = {
  createFilesFromJson,
  createFilesFromObject,
  validateFileData,
  exampleUsage
};

// If this file is run directly, execute the example
if (require.main === module) {
  exampleUsage();
}