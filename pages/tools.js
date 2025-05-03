import Head from "next/head";

export default function Tools() {
  return (
    <>
      <Head>
        <title>AI Tools | Fast Content AI</title>
      </Head>
      <main style={{ backgroundColor: 'black', color: 'white', padding: '4rem' }}>
        <h1 style={{ textAlign: 'center' }}>🛠 AI Tools Dashboard</h1>
        <p style={{ textAlign: 'center' }}>
          This is the tools page. Export PDFs and upload LoRA models here.
        </p>
      </main>
    </>
  );
}
