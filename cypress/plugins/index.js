/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra')
const fss = require('fs')
const path = require('path')
const CDP = require('chrome-remote-interface');
const { removeDirectory } = require('cypress-delete-downloads-folder');
const allureWriter = require('@shelex/cypress-allure-plugin/writer')


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('./', 'cypress/config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  const file = config.env.target || 'feat'
  
  on('file:preprocessor', cucumber());
  on('task', {
    nativeClick: async({ client, x, y, port }) => {
      client = client || await CDP({ port })
      await client.Input.dispatchMouseEvent( { type: "mousePressed", x, y, button: 'left', clickCount: 1 });
      await client.Input.dispatchMouseEvent( { type: "mouseReleased", x, y, button: 'left', clickCount: 1, buttons: 1 });
      return null;
    }
  });

  on('task', { removeDirectory })

  on('task', {
    async listFiles(directoryPath) {
      try {
        const fileNames = await fss.promises.readdir(directoryPath);
        const filePaths = fileNames.map((fileName) => `${directoryPath}/${fileName}`);
        return filePaths;
      } catch (error) {
        throw new Error(`Error reading directory: ${directoryPath}`);
      }
    },
  });
  
  allureWriter(on, config)
  return getConfigurationByFile(file)
};

