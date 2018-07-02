const query = `query ($query: String) {
  AnimeSearch: Page {
    media(search: $query, type: ANIME) {
      id
      episodes
      title {
        userPreferred
        romaji
        english
      }
      coverImage {
        medium
      }
    }
  }

}`;

/**
 *
 * @param {GraphQLClient} client
 * @param {Object} variables {
{
    "query": "nar"
}
@returns Promise
 */
export default function searchAnime(client, variables) {
  return client.request(query, variables);
}
