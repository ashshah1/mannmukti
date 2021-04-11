import NavBar from "../../components/NavBar";
import styles from "../../styles/Issue.module.css"
import Head from "next/dist/next-server/lib/head";

const GSheetReader = require('g-sheets-api');

export default function Instagram(props) {
  let pageText = props.text.map((info, i) => {
    return (
      <p className={styles[info.type]}>{info.text}</p>
    )
  });
    
  return (
    <div>
      <Head>
        <title>Mann Mukti | The Issue</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles["full-page"]}>
        <div className={styles.container}>
          {pageText}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  let options = {
    sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
    sheetNumber: parseInt(process.env.ISSUE_INDEX),
    returnAllResults: false
  };

  // get page text
  let text;
  await GSheetReader(
      options,
      results => {
        text = results;
      },
      error => {
        console.log(error)
      });

  return {
    props: {
      text: text,
    },
    revalidate: 300
  }
}