import getUserListById  from './querys/getUserListById'
import  jwtDecode from "jwt-decode";
export default class Anilist {
    constructor(access_token){
        this.url = 'https://graphql.anilist.co/api/v2/';
        this.access_token = access_token;
        this.decode = jwtDecode(access_token);
    }
    getUserListById(){
        const variables = {
            'id': this.decode.sub, 
            'listType': 'ANIME',
            'status': 'CURRENT'
        }
        return getUserListById(this.url, variables);
    }

}

