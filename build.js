const styleDictionary = require('style-dictionary').extend('./config.json');
const fs = require('fs');
const Handlebars = require('handlebars');

const template = Handlebars.compile(
  fs.readFileSync('./templates/myTemplate.hbs', {encoding: 'UTF8'})
);

styleDictionary.registerFormat({
  name: 'myFormat',
  formatter: function(dictionary, platform) {
    return template({
      properties: dictionary.properties,
      allProperties: dictionary.allProperties,
      options: platform
    });
  }
});

styleDictionary.buildAllPlatforms();