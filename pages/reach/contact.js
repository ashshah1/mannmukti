import NavBar from '../../components/NavBar.js'
import styles from '../../styles/Contact.module.css'
import Head from "next/dist/next-server/lib/head";
import emailjs from 'emailjs-com'
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


  // send email on form submission
  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q3viq0x', 'template_zvlivob', e.target, 'user_pQexe1vVDnYlIyE9wV3dV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
      <div className={styles["full-page"]}>
        <Head>
          <title>Mann Mukti | Contact</title>
          <link rel="icon" href="/images/kite-white.jpg" />
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
    },
    revalidate: 300
  }
}