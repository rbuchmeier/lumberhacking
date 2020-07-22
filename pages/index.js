import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LumberHacking LLC</title>
        <link rel="icon" href="/tree-favicon.png" />
      </Head>

      <main>
        <Header />
        <p className="description">
          Custom Web and Software for small businesses: affordable, effective, built for the community. <span className="madein">Made in Lander, WY.</span>
        </p>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
		  color: white;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
		.madein {
		  color: #DA744B;
		}
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
		  background-color: #1E3026;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
