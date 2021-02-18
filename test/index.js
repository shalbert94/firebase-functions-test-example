'use strict';

const projectConfig = {
    projectId: 'my-project',
    databaseURL: 'https://my-project.firebaseio.com'
};
const test = require('firebase-functions-test')(
    projectConfig,
    './service-account-key.json'
);

require('../src');