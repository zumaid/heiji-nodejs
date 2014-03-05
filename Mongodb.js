/**
 * Created with IntelliJ IDEA.
 * User: zu
 * Date: 14-3-5
 * Time: 下午1:09
 * To change this template use File | Settings | File Templates.
 */
var db = require('mongoskin').db('mongodb://192.168.3.140:27017/qegoo');

db.collection('catalog99').find().toArray(
    function(err, result) {
        if (err) throw err;
        console.log(result);
    }
)






