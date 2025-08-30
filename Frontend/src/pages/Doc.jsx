import React from 'react'
import CopyableCode from '../components/CopyableCode'
import AppFooter from '../components/AppFooter';


    function Doc() {
  const exampleCode = ``;

  return (
    <div>

    <div className="p-8  min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Copy this .yml code to your node.js </h1>
      {/* <p>Here's how you can use the component:</p> */}
      <CopyableCode codeString={exampleCode} />
        <pre></pre>
    </div>
        <AppFooter/>
    </div>
  );
}
export default Doc;

