import NavBar from '../../components/NavBar.js'
import Report from '../../components/Report.js'
import Head from 'next/head'
import styles from '../../styles/Report.module.css'
const GSheetReader = require('g-sheets-api');

export default function Reports(props) {
    console.log(props);
    let pageText = props.pageText.map((info, i) => {
      return (
        <p className={styles[info.type]}>{info.text}</p>
      )
    });

    let reports = props.reports
      .map(function(r, index) {
        return (
          <div>
            <Report
              name={r.name}
              description={r.description}
              link={r.link}
            />
            {(index !== props.reports.length - 1) &&
            <div className={styles.break}></div>
            }
          </div>
        );
      })

    return (
      <div className={styles["container"]}>
        <Head>
            <title>Mann Mukti | Reports</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar></NavBar>
        <div className={styles["intro-container"]}>
          {pageText}
        </div>
        <div className={styles["reports-container"]}>
          {reports}
        </div>
      </div>
    )
}

export async function getStaticProps() {
    let options = {
      sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
      sheetNumber: parseInt(process.env.REPORTS_INFO_INDEX),
      returnAllResults: false
    };
  
    // get page text
    let pageText;
    await GSheetReader(
        options,
        results => {
          pageText = results;
        },
        error => {
          console.log(error)
        });

    // get reports
    options.sheetNumber = parseInt(process.env.REPORTS_INDEX)
    let reports;
    await GSheetReader(
      options,
      results => {
        reports = results;
      },
      error => {
        console.log(error)
      });
  
    return {
      props: {
        pageText: pageText,
        reports: reports
      }
    }
  }