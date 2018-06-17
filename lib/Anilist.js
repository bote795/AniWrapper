import { getUserListById, searchAnime, updateMedia } from "./querys/index"
import  jwtDecode from "jwt-decode";
import { GraphQLClient } from 'graphql-request'

export default class Anilist {
    constructor(access_token){
        this.url = 'https://graphql.anilist.co/api/v2/';
        this.access_token = access_token;
        this.decode = jwtDecode(access_token);
        this.client = new GraphQLClient(this.url, {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        });
    }
    /**
     * @returns Promise
     */
    getUserList(){
        const variables = {
            'id': this.decode.sub, 
            'listType': 'ANIME',
            'status': 'CURRENT'
        }
        return getUserListById(this.client, variables);
    }


    /**
     * 
     * @param {Object} vars 
     * {
            id: Int,
            'listType': 'ANIME', 'MANGA',
            'status': CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
        }
     */
    getUserListForUser(vars){
        const variables = Object.assign({}, vars);
        return getUserListById(this.client, variables);
    }

    /**
     * 
     * @param {String} name name of anime
     * @returns Promise
     */
    searchAnime(name){
        const variables  =Object.assign( {}, {query: name} );
        return searchAnime(this.client, variables);
    }

    /**
     * update anime for the current logged in user
     * @param {Object} vars   
     {
    id: Number,
    mediaId: Number,
    status: CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
    score: Float,
    progress: Number
    }
     @returns Promise
     */
   updateAnime(vars){
       const variables = Object.assign({}, vars);
       return updateMedia(this.client, variables);
   } 
}