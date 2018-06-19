const query = `mutation ($id: Int) {
    DeleteMediaListEntry (id: $id) {
        deleted
    }
}`;
/**
 * @param {GraphQLClient} client
 * update anime for the current logged in user
 * @param {Object} variables
 {
id: Number
}
   @returns Promise
*/
export default function removeMedia(client, variables) {
  return client.request(query, variables);
}
