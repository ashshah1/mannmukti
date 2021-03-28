import NavBar from '../../components/NavBar.js'
import styles from '../../styles/Contact.module.css'
import Head from "next/dist/next-server/lib/head";
const GSheetReader = require('g-sheets-api');

export default function Contact(props) {
  // parse props for page text
  let titleText = props.pageInfo
    .filter(function(result) {
      return result.type === "title"
    })[0].text;

  let pageText = props.pageInfo
  .filter(function(result) {
    return result.type === "paragraph";
  })
  .map((info, i) => {
    return (
      <p className={styles[info.type]}>{info.text}</p>
    )
  });

  // get form inputs
  let form = props.pageInfo
    .filter(function(result) {
      // get input results
      return result.type.includes("input") || result.type.includes("textarea");
    })
    .map((info, i) => {
      let label = info.text.replace(" ", "");
      if (info.type.includes("input")) {
        console.log(info);
        let type = info.type.split("-")[1];
        return (
          <div className={styles["form-input"]}>
            <label for={label}>{info.text}</label>
            <input type={type} id={label} name={label}></input>
          </div>
        );
      } else {
        return (
          <div className={styles["form-input"]}>
            <label for={label}>{info.text}</label>
            <textarea name={label} rows="20" cols="30"></textarea>
          </div>
        );
      }  
    });
    console.log(form);


  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(e);

    // construct email text
    let messageInfo = "";
    for (let i = 0; i < e.target.length - 1; i++) {
      messageInfo += e.target[i].name + ": " + e.target[i].value + " ";
    }
    console.log(messageInfo)
  }

  return (
      <div className={styles["full-page"]}>
        <Head>
          <title>Mann Mukti | Contact</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar></NavBar>
        <h1 className={styles.title}>{titleText}</h1>
        <div className={styles["contact-container"]}>
          <div className={styles["page-text"]}>
            {pageText}
          </div>
          <form className={styles["contact-form"]} onSubmit={onSubmit}>
            {form}
            <button className={styles.submit}>SEND MESSAGE</button>
          </form>
        </div>
      </div>
  )
}

export async function getStaticProps() {
  let options = {
    sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
    sheetNumber: parseInt(process.env.CONTACT_INDEX),
    returnAllResults: false
  };

  // get page info
  options.sheetNumber = parseInt(process.env.CONTACT_INDEX);
  let pageInfo;
  await GSheetReader(
      options,
      results => {
        pageInfo = results;
      },
      error => {
        console.log(error)
      });

  return {
    props: {
      pageInfo: pageInfo
    }
  }
}