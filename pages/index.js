import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast Content AI Portal</title>
      </Head>
      <main style={{
        backgroundColor: 'black',
        color: 'white',
        minHeight: '100vh',
        padding: '4rem',
        textAlign: 'center'
      }}>
        <h1>🚀 Fast Content AI Portal</h1>
        <p>Powered by Fast Films — <i>Let us tell your story.</i> ●</p>
      </main>
    </>
  );
}
