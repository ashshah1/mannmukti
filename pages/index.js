import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const GSheetReader = require('g-sheets-api');
import NavBar from '../components/NavBar.js'


export default function Home(props) {
  let introParagraphs = props.res
    .filter(function(result) {
      return result.type === "paragraph";
    })
    .map(function(para) {
      return <p>{para.text}</p>
    });

    let stats = props.res
    .filter(function(result) {
      return result.type === "stat";
    })
    .map(function(stat, index) {
      return (
        <div className={styles["stat-container"]}>
          <p className={styles["stat-num"]}>{index + 1}</p>
          <p className={styles["stat-text"]}>{stat.text}</p>
        </div>
      )
    });

  
  // todo: replace favicon
  return (
    <div className={styles.container}>
      
      <Head>
        <title>Mann Mukti</title>
        <link rel="icon" href="/images/kite-white.jpg" />
      </Head>
      <div className={styles.bgWrap}>
      <Image
        src="/images/background.png" 
        alt="illustrated image of faceless people"
        layout="fill"
        objectFit="cover"
        quality={100}
        // className={styles.background}
      />
      </div>
      <NavBar></NavBar>
      <div className={styles.bgText}>
        <h1 className={styles.topHead}>Mann Mukti</h1>
        <h2 className={styles.subHead}>AT UCLA</h2>
      </div>
      <main className={styles.main}>
        <div className={styles["intro-paragraphs"]}>
          {introParagraphs}
        </div>
        <div className={styles.stats}>
          {stats}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const options = {
    sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
    sheetNumber: parseInt(process.env.LANDING_INDEX),
    returnAllResults: false
  }
  
  let res;
  await GSheetReader(
    options,
    results => {
      res = results;
    },
    error => {
      console.log(error)
    });
  return {
    props: {
      res
    },
    revalidate: 300
  }
}
