
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const handleRequest = async (endpoint) => {
    try {
      const res = await fetch(`/api/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.text();
      setOutput(data);
    } catch (err) {
      setOutput("Something went wrong.");
    }
  };

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
          <button onClick={() => handleRequest("storyline")}>Start Storyline</button>
          <button onClick={() => handleRequest("summary")}>Generate Summary</button>
          <button onClick={() => handleRequest("script")}>Generate Script</button>
          <button onClick={() => handleRequest("storyboard")}>Create Storyboard</button>
        </div>

        <div id="outputContainer">
          <pre>{output}</pre>
        </div>
      </main>
    </>
  );
}
