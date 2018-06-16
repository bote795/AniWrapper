require('graphql-request');
const Anilist = require("./../Anilist");
const dotenv = require("dotenv");
const result = dotenv.config()
function main() {
    const token = process.env.TOKEN;    
    const aniClient = new Anilist(token);
     const params = {
        "listType": "ANIME",
        "status": "CURRENT"
    };
    aniClient.getUserListById(params)
        .then((result) => {
            result.MediaListCollection.lists[0].entries.forEach(
              element => {
                console.log(element.media.title.userPreferred);
              }
            );
        })
        .catch((err) => console.log("There was an error %O", err));
}
main();