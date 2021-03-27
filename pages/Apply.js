const GSheetReader = require('g-sheets-api');
import NavBar from '../components/NavBar.js'


export default function Apply(props) {

    return (
        <div className={styles.container}>

            <Head>
                <title>Mann Mukti</title>
                <link rel="icon" href="/favicon.ico" />
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
        }
    }
}
