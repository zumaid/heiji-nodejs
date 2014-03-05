/**
 *
 * User: zu
 * Date: 14-3-5
 * Time: 下午1:09
 *
 */
var db = require('mongoskin').db('mongodb://192.168.3.140:27017/test');

db.collection('zu1').insert( {name: "Guns N' Roses", members: ['Axl Rose', 'Slash', 'Izzy Stradlin', 'Matt Sorum', 'Duff McKagan'], year: 1986}
    ,function(err, result){
        if (err) throw err;
        if (result) console.log('Added!');
    }
)






