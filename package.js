Package.describe({
  name: 'arcgis',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor Esri ArgGis API',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JIoJIaJIu/arcgis.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.mainModule('arcgis.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('arcgis');
  api.mainModule('arcgis-tests.js');
});
