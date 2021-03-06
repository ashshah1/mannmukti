import styles from "../styles/Apply.module.css";

const GSheetReader = require('g-sheets-api');
import NavBar from '../components/NavBar.js'
import Head from "next/dist/next-server/lib/head";

export default function Apply(props) {
  // get page text
  let pageText = props.pageText
    .filter(function(result) {
      return result.type !== "form";
    })
    .map((info, i) => {
      return (
        <p className={styles[info.type]}>{info.text}</p>
      )
    });

  // get form(s) to embed
  let form = props.pageText
    .filter(function(result) {
      return result.type === "form";
    })
    .map((info, i) => {
      return (
        <iframe
          className={styles[info.type]}
          src={info.text}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0">Loading...
        </iframe>
      );
    });

  return (
    <div className={styles["full-page"]}>
      <Head>
        <title>Mann Mukti | Apply</title>
        <link rel="icon" href="/images/kite-white.jpg" />
      </Head>
      <NavBar></NavBar>
      <main>
        <div className={styles["intro-container"]}>
          {pageText}
        </div>
        <div className={styles["form-container"]}>
          {form}
        </div>

      </main>
    </div>
  )
}

export async function getStaticProps() {
    const options = {
        sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
        sheetNumber: parseInt(process.env.APPLY_INDEX),
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
            pageText: res
        },
        revalidate: 300 
    }
}
