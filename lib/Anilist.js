import jwtDecode from 'jwt-decode';
import { GraphQLClient } from 'graphql-request';
import {
  getUserListById,
  searchAnime,
  updateMedia,
  removeMedia
} from './querys/index';

/**
 * The media object
 * @typedef {Object} Media
 * @property {Number} id - id of media entry
 * @property {Number} episodes - number of episodes of the series
 * @property {Object} coverImage
 * @property {String} coverImage.medium - url of medium image
 * @property {Object} title
 * @property {String} title.userPreferred - title in user perferred
 * @property {String} title.romaji - title of media in romaji
 * @property {String} title.english - title of media in egnlish
 */

/**
 * The user List media Object
 * @typedef {Object} entries
 * @property {Number} id - id of entry in list
 * @property {Number} mediaId - id of media entry
 * @property {Number} progress - the current episode number
 * @property {...Media} media {@link Media}
 */

/**
 * The user List media Object created/updated
 * @typedef {Object} updateEntry
 * @property {Number} id - id of entry in list
 * @property {Number} mediaId - id of media entry
 * @property {Number} progress - the current episode number
 * @property {String} status - CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
 */


/**
 * Class Used to Interact with API
 * @class
 * */
class Anilist {
  /**
   * Create an instance of Anilist
   * @param {String} accessToken jwt token from Anilist API
   */
  constructor(accessToken) {
    this.url = "https://graphql.anilist.co/api/v2/";
    this.decode = jwtDecode(accessToken);
    this.client = new GraphQLClient(this.url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  }
  /**
   * get the anime currently watching list for signed in user
   * @returns {Promise} MediaListCollection.lists[0].entries {@link entries}
   * @example
    const token = '<Your_TOKEN>';
    const anilist = new Anilist(token);
    anilist.getUserList()
      .then((result) => console.log(result));
   */
  getUserList() {
    const variables = {
      id: this.decode.sub,
      listType: "ANIME",
      status: "CURRENT"
    };
    return getUserListById(this.client, variables);
  }

  /**
   * Retriees the list specified by the parameters
   * @param {Object} vars {
          id: Int,
          'listType': 'ANIME', 'MANGA',
          'status': CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
      }
   * @param {Number} vars.id   - Integer id of user
   * @param {String} vars.listType - Type of list - 'ANIME', 'MANGA'
   * @param {String} vars.status - CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
   * @returns {Promise} MediaListCollection.lists[0].entries {@link entries}
   * @example
    const vars = {
      id: 1,
      listType: 'Anime',
      status: 'CURRENT'
    };
    const token = '<Your_TOKEN>';
    const anilist = new Anilist(token);
    anilist.getUserListForUser(vars)
      .then((result) => console.log(result));
    */
  getUserListForUser(vars) {
    const variables = Object.assign({}, vars);
    return getUserListById(this.client, variables);
  }

  /**
   * search for an anime
   * @param {String} name name of anime
   * @returns {Promise}  AnimeSearch.media {@link Media}
   * @example
    const name = 'nar';
    const token = '<Your_TOKEN>';
    const anilist = new Anilist(token);
    anilist.searchAnime(name)
      .then((result) => console.log(result));
   */
  searchAnime(name) {
    const variables = Object.assign({}, { query: name });
    return searchAnime(this.client, variables);
  }

  /**
   * update anime for the current logged in user
   * @param {Object} vars {
  id: Number,
  mediaId: Number,
  status: CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
  score: Float,
  progress: Number
  }
   * @param {Number} vars.id   - Integer id of entry in list
   * @param {Number} vars.mediaId   - Integer id of media
   * @param {Number} vars.score - float value
   * @param {Number} vars.progress - The current episode
   * @param {String} vars.status - CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
     @returns {Promise} SaveMediaListEntry {@link updateEntry}
   * @example
   * // if the entry for this media id is already there this will update it
    const vars = { mediaId: 100240, status: 'CURRENT', progress: 1 }
    const token = '<Your_TOKEN>';
    const anilist = new Anilist(token);
    anilist.updateAnime(vars)
      .then((result) => console.log(result));
    */
  updateAnime(vars) {
    const variables = Object.assign({}, vars);
    return updateMedia(this.client, variables);
  }

  /**
     * add anime to current logged in user
   * @param {Object} vars {
    id: Number,
    mediaId: Number,
    status: CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
    score: Float,
    progress: Number
    }
   * @param {Number} vars.mediaId   - Integer id of media
   * @param {Number} vars.score - float value
   * @param {Number} vars.progress - The current episode
   * @param {String} vars.status - CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
   * @example
    const vars = { mediaId: 100240, status: 'CURRENT', progress: 1 }
    const token = '<Your_TOKEN>';
    const anilist = new Anilist(token);
    anilist.addAnime(vars)
      .then((result) => console.log(result));
     @returns {Promise} SaveMediaListEntry {@link updateEntry}
     */
  addAnime(vars) {
    const variables = Object.assign({}, vars);
    return updateMedia(this.client, variables);
  }

  /**
   * remove anime from the user list
   * @param {Number} id The id of the media list entry to delete
   * @returns {Promise} deleted: {Boolean}
   * @example
    const id = 104012; //  needs to be the list id
    const token = '<Your_TOKEN>';
    const anilist = new Anilist(token);
    anilist.removeAnime(id)
      .then((result) => console.log(result));
   */
  removeAnime(id) {
    const variables = Object.assign({}, { id });
    return removeMedia(this.client, variables);
  }
}

export default Anilist;
