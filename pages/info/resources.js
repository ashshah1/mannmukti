import styles from '../../styles/Resources.module.css'
const GSheetReader = require('g-sheets-api');
import NavBar from '../../components/NavBar.js'


export default function Resources(props) {
    let data = props.res;

    let socal = [];
    let nationwide = [];
    let genResources = [];
    let relationship = [];


    for (let i = 0; i < data.length; i++) {
        let resource = data[i];
        console.log(resource);
        let newObj = (<div>
            <h1 className={styles.resourceHeader}>{resource.name} {resource.category}</h1>
            <p>{resource.description}</p>
        </div>)
        if (resource.category == "sa nationwide") {
            nationwide.push(newObj)
        } else if (resource.category == "sa socal") {
            socal.push(newObj)
        } else if (resource.category == "relationship") {
            relationship.push(newObj)
        } else {
            genResources.push(newObj)
        }
    }

    return (
        <div className={styles["full-page"]}>
            <NavBar></NavBar>
            <div className={styles.splash}>
                <div className={styles["splash-border"]}>
                    <a className={styles.headers}>TEXT HOME TO</a><a className={styles.number}> 741741</a>
                    <p>CRISIS TEXT LINE</p>
                    <p className={styles.headers}>1-800-273-8255</p>
                    <p>NATIONAL SUICIDE PREVENTION LIFELINE</p>
                </div>
            </div>
            <div className={styles["sa-specific"]}>
                <div>
                    <h1 className={styles["section-header"]}>SOUTH ASIAN SPECIFIC RESOURCES</h1>
                    <div className={styles["sa-nationwide"]}>
                        <div>
                            <img className={styles.images} src="/images/us.png" alt="outline of the united states"></img>
                            <h1 className={styles.places}>NATIONWIDE</h1>
                        </div>
                        <div className={styles.resources}>
                            {nationwide}
                        </div>
                    </div>
                    <div className={styles["sa-socal"]}>
                    <div>
                        <img className={styles.images} src="/images/california.png" alt="outline of california"></img>
                        <h1 className={styles.places}>SOUTHERN CALIFORNIA</h1>
                        </div>
                        <div className={styles.resources}>
                            {socal}
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className={styles["section-header"]}>GENERAL RESOURCES</h1>
                    <div className={styles.resources}>
                    {genResources}
                    </div>
                </div>
                <div>
                    <h1 className={styles["section-header"]}>RELATIONSHIP VIOLENCE RESOURCES</h1>
                    <div className={styles.resources}>
                    {relationship}
                    </div>
                </div>

            </div>
            </div>
    )

}

export async function getStaticProps() {
    const options = {
      sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
      sheetNumber: 5,
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