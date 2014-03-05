/**
 * Created with IntelliJ IDEA.
 * User: zu
 * Date: 14-3-5
 * Time: 下午12:59
 * To change this template use File | Settings | File Templates.
 */

var request = require('request');
var cheerio = require('cheerio');

var url ="http://baike.baidu.com/search/word?word=%E4%B8%BD%E5%A5%88&pic=1&sug=1&enc=utf8"
request(url, function (error, response, html) {
    if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('#content a ').each(function(i, element){
            console.log($(this).attr('href'));
        });
    }
});