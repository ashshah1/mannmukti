import NavBar from '../../components/NavBar.js'
import Committee from '../../components/Committee.js'
import Head from 'next/head'
import styles from '../../styles/Comm.module.css'
const GSheetReader = require('g-sheets-api');

export default function Committees(props) {
    let committees = props.committees
      .map(function(c, index) {
        return (
          <Committee
            name={c.name}
            summary={c.summary}
            info={c.info}
            filled={index % 2 === 0}
          />
        );
      })

    return (
        <div>
            <Head>
                <title>Mann Mukti | Committees</title>
                <link rel="icon" href="/images/kite-white.jpg" />
            </Head>
            <NavBar></NavBar>
            <h1 className={styles.title}>Committees</h1>
            <div className={styles.container}>
              {committees}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    let options = {
      sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
      sheetNumber: parseInt(process.env.COMMITTEES_INDEX),
      returnAllResults: false
    };
  
    // get committees info
    let committees;
    await GSheetReader(
        options,
        results => {
          committees = results;
        },
        error => {
          console.log(error)
        });
  
    return {
      props: {
        committees: committees
      },
      revalidate: 300
    }
  }