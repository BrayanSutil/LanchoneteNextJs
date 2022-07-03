import Head from 'next/head'

function PageHead({ titulo }) {
  return (
    <>
    <Head>
      {/* <link
        href="https: //fonts.googleapis.com/css2? family= Poppins:wght@500 & display=swap"
        rel="stylesheet"
      ></link> */}
      {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content="Site sobre ..." />
      <meta name="author" content="Brayan - Sutil" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <title>{titulo}</title>
    </Head>
    
        </>
  )
}

export default PageHead