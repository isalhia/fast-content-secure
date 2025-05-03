
import Head from "next/head";
import Script from "next/script";

export default function Home() {
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
          <span className="red-dot">●</span>
        </div>

        <input type="text" id="userInput" placeholder="Type your story idea..." />

        <div className="button-row">
          <button onclick="startStoryline()">Start Storyline</button>
          <button onclick="generateSummary()">Generate Summary</button>
          <button onclick="generateScript()">Generate Script</button>
          <button onclick="generateStoryboard()">Create Storyboard</button>
        </div>

        <div id="outputContainer"></div>
      </main>

      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
