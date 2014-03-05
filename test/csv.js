/**
 * User: zu
 * Date: 14-3-5
 * Time: 下午4:17
 */
var fs = require('fs');
var csv = require('csv');
csv().from('"1","2","3","4"\n"a","b","c","d"').to(console.log )