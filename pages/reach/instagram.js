const GSheetReader = require('g-sheets-api');

export default function Instagram(props) {
  console.log(parseInt(process.env.INSTAGRAM_PHOTOS_INDEX));
  let posts = props.posts.map((post, i) => {
    return (
      <a key={i} href={post.url} target="_blank">
        <img src={post.src} />
      </a>
    )
  })
    
  return (
    <div>
      {posts}
    </div>
  )
}

export async function getStaticProps() {
  const options = {
    sheetId: '1t8GrOu__5dAX3_qFDjVZ7SoK9TVVSEXo1kPDjRrxLWo',
    sheetNumber: parseInt(process.env.INSTAGRAM_PHOTOS_INDEX),
    returnAllResults: false
  };

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
      posts: res
    }
  }
}