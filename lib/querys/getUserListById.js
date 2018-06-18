
const query = `query ($id: Int!, $listType: MediaType, $status: MediaListStatus) {
  MediaListCollection (userId: $id, type: $listType, status_in: [$status]) {
    lists {
      entries {
        ... mediaListEntry
      }
    }
  }
}

fragment mediaListEntry on MediaList {
  id
  mediaId
  progress
  media {
    id
    episodes
    coverImage {
      medium
    }
    title {
      userPreferred
      romaji
      english
    }
  }
}`;

/**
 * 
 * @param {GraphQLClient} client
 * @param {Object} variables {
 * "id": 1,
  "listType": "ANIME",
  "status": "CURRENT"
 * }
 * @returns Promise
 */
export default function getUserListById(client, variables) {
  return client.request(query, variables);
}
