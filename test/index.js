import { assert } from 'chai';
import Anilist  from '../dist/Anilist.js';
const dotenv = require("dotenv");
dotenv.config();
const debug = false;
function log() {
    if(debug){
        console.log(...arguments);
    }
}
const qaToken = process.env.QA_TOKEN;
describe('Anilist test.', () => {
    let aniClient;
    beforeEach(function () {
        aniClient = new Anilist(qaToken);
        assert.isDefined(aniClient);
    });
    it("should getUserList: get all current logged in users list ", done => {
        aniClient
        .getUserList()
        .then(result => {
            assert.equal(result.MediaListCollection.lists.length, 1);
            done();
        });
    });
    it("should getUserList: get all current logged in users list and update tokyo ghoul to ep 2 ", done => {
        const updateEp = 2;
        aniClient
          .getUserList()
          .then(result => {
            const media = result.MediaListCollection.lists[0].entries.find(val => val.mediaId === 100240);
            log("This is the element: %O", media);
            return media.mediaId;
          })
          .then(id =>
            aniClient.updateAnime({ mediaId: id, progress: updateEp })
          )
          .then(result => {
            log("This is what the result of update is: %O", result);
              assert.equal(result.SaveMediaListEntry.progress, updateEp);
            done();
          })
          .catch(err => log("There was an error %O", err));
    });
    it("should searchAnime for naruto and return a list", done => {
        aniClient
        .searchAnime("naruto")
        .then(result =>{
            log(result);
            done();
        })
    });

    it("should getUserListForUser", done => {
        const vars = {
            id: 1,
            'listType': 'ANIME',
            'status': 'CURRENT',
        };
        aniClient.getUserListForUser(vars).then(result => {
          log(result);
          done();
        });
    });
});
