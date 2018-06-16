
import { request } from "graphql-request";
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
  progress
  media {
    id
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
 * @param {String} endpoint 
 * @param {Object} variables {
 * "id": 1,
  "listType": "ANIME",
  "status": "CURRENT"
 * }
 */
export default function getUserListById(endpoint, variables) {
  return request(endpoint, query, variables);
}
