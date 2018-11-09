const cuiUtils = require('@collab-ui/utils');
const navJSON = require('../data/components.json');

const glob = 'scss/**/*.scss';
const path = 'data/';
const filename = '../docs/data/data.json';

cuiUtils.comments(glob, path, filename, navJSON);
