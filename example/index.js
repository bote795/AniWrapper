const Anilist = require('../dist/anilist/node');
const dotenv = require('dotenv'); // eslint-disable-line

dotenv.config();
function main() {
  const token = process.env.TOKEN;
  const aniClient = new Anilist(token);
  aniClient
    .getUserList()
    .then((result) => {
      const media = result.MediaListCollection.lists[0].entries.find(val => val.mediaId === 100240);
      console.log('This is the element: %O', media);
      return media.mediaId;
    })
    .then(id => aniClient.updateAnime({ mediaId: id, progress: 2 }))
    .then((result) => {
      console.log('This is what the result of update is: %O', result);
    })
    .catch((err) => {
      console.log('There was an error %O', err)
      throw err;
    });
}
try {
  main();
} catch (error) {
  process.exit(1);
}
