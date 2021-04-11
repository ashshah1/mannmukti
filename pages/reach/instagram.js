import NavBar from "../../components/NavBar";
import styles from "../../styles/Instagram.module.css"
import Image from "next/dist/client/image";
import Head from "next/dist/next-server/lib/head";

const GSheetReader = require('g-sheets-api');

export default function Instagram(props) {
  let posts = props.posts.map((post, i) => {
    return (
      <a key={i} className={styles["post-link"]} href={post.url} target="_blank">
        <img className={styles["post-image"]} src={post.src} />
        {/*<Image src={post.src} layout="fill"/>*/}
      </a>
    )
  });

  let pageText = props.pageText.map((info, i) => {
    return (
      <p className={styles[info.type]}>{info.text}</p>
    )
    });
    
  return (
    <div>
      <Head>
        <title>Mann Mukti | Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
        <div className={styles["intro-container"]}>
            {pageText}
        </div>
        <div className={styles["posts-container"]}>
          {posts}
        </div>
    </div>
  )
}

export async function getStaticProps() {
  let options = {
    sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
    sheetNumber: parseInt(process.env.INSTAGRAM_PHOTOS_INDEX),
    returnAllResults: false
  };

  // get photos
  let photos;
  await GSheetReader(
      options,
      results => {
        photos = results;
      },
      error => {
        console.log(error)
      });

  // get page text
  options.sheetNumber = parseInt(process.env.INSTAGRAM_INFO_INDEX);
  let pageText;
  await GSheetReader(
      options,
      results => {
        pageText = results;
      },
      error => {
        console.log(error)
      });

  return {
    props: {
      posts: photos,
      pageText: pageText
    },
    revalidate: 300
  }
}