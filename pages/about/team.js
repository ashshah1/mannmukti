import NavBar from '../../components/NavBar.js'
import Profile from '../../components/Profile.js'
import Head from 'next/head'
import styles from '../../styles/team.module.css'
const GSheetReader = require('g-sheets-api');

export default function Team(props) {
    console.log(props.team);
    let profiles = props.team
      .map(function(member) {
        return (
          <Profile
            name={member.name}
            image={member.image}
            position={member.position}
            bio={member.bio}
          />
        );
      })

    return (
        <div>
            <Head>
                <title>Mann Mukti | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar></NavBar>
            <h1 className={styles.title}>Our Team</h1>
            <div className={styles.container}>
              {profiles}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    let options = {
      sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
      sheetNumber: parseInt(process.env.ABOUT_INDEX),
      returnAllResults: false
    };
  
    // get team info
    let team;
    await GSheetReader(
        options,
        results => {
          team = results;
        },
        error => {
          console.log(error)
        });
  
    return {
      props: {
        team: team
      }
    }
  }