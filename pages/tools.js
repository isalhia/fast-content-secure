// /pages/tools.js
import Head from "next/head";

export default function ToolsPage() {
  return (
    <>
      <Head>
        <title>AI Tools – Fast Content</title>
      </Head>
      <main style={{ background: 'black', color: 'white', padding: '4rem' }}>
        <h1 style={{ textAlign: 'center' }}>🛠️ AI Tools Dashboard</h1>
        <p style={{ textAlign: 'center' }}>
          PDF export and LoRA uploader will appear here.
        </p>
      </main>
    </>
  );
}
