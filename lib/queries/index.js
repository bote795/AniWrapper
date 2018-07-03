/* eslint-disable no-param-reassign, global-require, import/no-dynamic-require */
import path from 'path';
import fs from 'fs';

const DIRECTORY = path.resolve('.', 'lib', 'queries');
const ops = {};

fs.readdirSync(DIRECTORY)
  .filter(filename => path.extname(filename) === '.gql')
  .forEach(filename => {
    const key = filename.replace(/\.[^/.]+$/, '');
    const filepath = path.resolve(DIRECTORY, filename);
    const query = fs.readFileSync(filepath, 'utf8');
    ops[key] = (client, variables) => client.request(query, variables);
  });

export default ops;
