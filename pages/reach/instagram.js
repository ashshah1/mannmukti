// import InstagramReader from 'instagram-web-api';
// import styles from '../styles/Home.module.css'


export default function Instagram(props) {
  console.log(props);
  // let posts = props.posts.map(({ node }, i) => {
  //     return (
  //       <li key={i}>
  //         <img src={node.display_resources[0].src} />
  //         <p>{node.edge_media_to_caption.edges[0]?.node.text}</p>
  //       </li>
  //     )
  //   })
    
  return (
    <div>
      hi
    </div>
  )
}

export async function getStaticProps() {
  // const { username, password } = process.env;
  // const client = new InstagramReader({ username, password });
  // // const client = new Instagram({ username: 'mannmukti'});
  // await client.login();
  
  // const response = await client.getPhotosByUsername({
  //   username: 'mannmukti',
  // });

  let test = "hi";
  return {
    props: {
      posts: test
    }
  };
}