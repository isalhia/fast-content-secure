
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <Head>
        <title>Fast Content AI Portal</title>
        <script src="/script.js" defer></script>
      </Head>
      <h1 style={{ textAlign: 'center' }}>Fast Content AI Portal</h1>
      <p style={{ textAlign: 'center' }}>
        Powered by Fast Films — <em>Let us tell your story.</em> <span style={{ color: 'red' }}>●</span>
      </p>
      <input id="prompt" placeholder="Enter your idea..." style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <button id="storylineBtn">Start Storyline</button>
        <button id="summaryBtn">Generate Summary</button>
        <button id="scriptBtn">Generate Script</button>
        <button id="storyboardBtn">Create Storyboard</button>
      </div>
      <div id="output" style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}></div>
    </div>
  );
}
