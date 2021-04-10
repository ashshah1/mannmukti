import NavBar from '../../components/NavBar.js'
import Head from 'next/head'
import styles from '../../styles/Collaborations.module.css'
import Collaborator from '../../components/Collaborator.js'
const GSheetReader = require('g-sheets-api');

// import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card } from "react-bootstrap";

export default function Collaborations(props) {
  let pageText = props.pageText.map((info, i) => {
    return (
      <p className={styles[info.type]}>{info.text}</p>
    )
  });

    let collabs = props.collabs
        .map(function (c, index) {
            let collabId = "collab" + index;
            return (
                <Card key={index}>
                    <Accordion.Toggle as={Card.Header} eventKey={collabId} className={styles.project}>
                        {c.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={collabId}>
                        <Card.Body>
                            <Collaborator
                                name={c.name}
                                project={c.project}
                                image={c.image}
                                caption={c.caption}
                                description={c.description}
                            />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
          );
      })

      // for loop to create array of accordian cards (eventkey = i); accordian toggle header is the c.name and the body is the collab element
    return (
        <div>
            <Head>
                <title>Mann Mukti | Collaborations</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <div className={styles.container}>
              {pageText}
            </div>
            <Accordion className={styles.accordion} defaultActiveKey="0">
                {collabs}
            </Accordion>
        </div>
    )
}

export async function getStaticProps() {
    let options = {
      sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
      sheetNumber: parseInt(process.env.COLLABORATIONS_INFO_INDEX),
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

    options.sheetNumber = parseInt(process.env.COLLABORATIONS_INDEX)
    let collabs;
    await GSheetReader(
      options,
      results => {
        collabs = results;
      },
      error => {
        console.log(error)
      });
  
    return {
      props: {
        pageText: pageText,
        collabs: collabs
      }
    }
  }