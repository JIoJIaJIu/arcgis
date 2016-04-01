// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by arcgis.js.
import { name as packageName } from "meteor/arcgis";

// Write your tests here!
// Here is an example.
Tinytest.add('arcgis - example', function (test) {
  test.equal(packageName, "arcgis");
});
