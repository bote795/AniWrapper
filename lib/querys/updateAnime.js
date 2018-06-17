import { request } from "graphql-request";
const query = `mutation(
    $id: Int,
    $mediaId: Int,
    $status: MediaListStatus,
    $score: Float,
    $progress: Int) 
    {
        SaveMediaListEntry (
            id: $id,
            mediaId: $mediaId,
            score: $score,
            progress: $progress
            status: $status
        )
        {
            id
            mediaId
            status
            progress
        }
}`;

/**
 * 
 * @param {GraphQLClient} client
 * @param {Object} variables 
 * {
    id: Number,
    mediaId: Number,
    status: CURRENT, PLANNING, COMPLETED, DROPPED, PAUSED, REPEATING,
    score: Float,
    progress: Number
    }
    @returns Promise
 */
export default function updateMedia(client, variables) {
    return client.request(query, variables);
}
