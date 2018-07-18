import Anilist from '../lib/Anilist';
import addSuite from './anilist.spec';

const dotenv = require('dotenv');

dotenv.config();

const qaToken = process.env.QA_TOKEN;
addSuite(Anilist, qaToken);
