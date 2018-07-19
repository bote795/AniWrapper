import Anilist from '../../index';
import addSuite from '../anilist.spec';

const qaToken = Cypress.env('QA_TOKEN');
addSuite(Anilist, qaToken);
