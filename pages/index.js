
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  return (
    <>
      <Head>
        <title>Fast Content AI Portal</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <main className="container">
        <div className="logo-container">
          <img src="/logo.png" alt="Fast Films Logo" className="logo" />
        </div>

        <div className="tagline">
          Powered by Fast Films — <i>Let us tell your story.</i>
          <span className="red-dot"></span>
        </div>

        <input
          type="text"
          id="userInput"
          placeholder="Type your story idea..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="button-row">
          <button onClick={() => setOutput(<pre>This is a hardcoded test output.</pre>)}>Start Storyline</button>
          <button onClick={() => setOutput(<pre>This is a test summary.</pre>)}>Generate Summary</button>
          <button onClick={() => setOutput(<pre>This is a test script.</pre>)}>Generate Script</button>
          <button onClick={() => setOutput(<pre>[Storyboard image placeholder]</pre>)}>Create Storyboard</button>
        </div>

        <div id="outputContainer">{output}</div>
      </main>
    </>
  );
}
