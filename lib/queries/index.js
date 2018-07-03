import getUserListById from './getUserListById.gql';
import removeMedia from './removeMedia.gql';
import searchAnime from './searchAnime.gql';
import updateMedia from './updateMedia.gql';

const ops = { getUserListById, removeMedia, searchAnime, updateMedia };

// transform each ops as a function that requests query
Object.keys(ops).forEach(key => {
  const query = ops[key];
  ops[key] = (client, variables) => client.request(query, variables);
});

export default ops;
