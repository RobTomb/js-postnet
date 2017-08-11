"use strict";
const _data = require('./data.js');
const data = _data.getData();
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("input 2 get the last Lyrics", function(){

        var result = main(2);
        var expect_string = `2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.`;
        
        expect(expect_string).to.equal(result);
    });


    it("input 1 get the bottommost Lyrics", function(){

        var result = main(1);
        var expect_string = `1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        
        expect(expect_string).to.equal(result);
    });

    it("get all lyrics", function(){

        var result = main(99);
        var expect_string = data;
        
        expect(expect_string).to.equal(result);
    });
/*

    it("测试用例2", function(){

        main();
        var result = _.flatten(console.log.args).join("\n");
        var expect_string = '';

        expect(expect_string).to.equal(result);
    });
 */
});