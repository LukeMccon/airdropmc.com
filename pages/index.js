import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { BsDownload, BsGithub } from 'react-icons/bs';
import ModrinthIcon from '../components/ModrinthIcon';
import bg from '../public/bkg.png'
import Link from 'next/link';

const iconEffect = 'transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110';

export default function Home() {

  return (
    <div className={styles.container} style={{
      backgroundImage: `url(${bg.src})`,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      
      <Head>
        <title>Airdrop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Airdrop
        </h1>
        <h4 className={styles.subTitle}><i>from the skies!</i></h4>
        <div className="grid grid-cols-3 gap-6">
          <div className={`${styles.icon} ${iconEffect} group relative`}>
            <Link href="https://github.com/LukeMccon/Airdrop">
              <BsGithub size={40}/>
              <span className="absolute top-12 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1">Github</span>
            </Link>
          </div>
          <div className={`${styles.icon} ${iconEffect} group relative`}>
            <Link href="https://github.com/LukeMccon/Airdrop/releases/latest">
              <BsDownload size={40} />
              <span className="absolute top-12 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1">Download</span>
            </Link>
          </div>
          <div className={`${styles.icon} ${iconEffect} group relative`}>
            <Link href="https://modrinth.com/plugin/airdrop">
              <ModrinthIcon size={40} />
              <span className="absolute top-12 left-1/2 -translate-x-1/2 hidden group-hover:block bg-gray-800 text-white text-sm rounded px-2 py-1">Modrinth</span>
            </Link>
          </div>
        </div>
      </main>

      <style jsx>{`
        main {
          color: white;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
