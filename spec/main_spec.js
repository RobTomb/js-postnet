"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("input '95713' get '||:|:::|:|:|:::|:::||::||::|:|:|'", function(){

        var result = main('95713');
        var expect_string = '||:|:::|:|:|:::|:::||::||::|:|:|';
        
        expect(result).to.equal(expect_string);
    });

   it("input '12345-6789' get '|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|'", function(){

        var result = main('12345-6789');
        var expect_string = '|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|';

        expect(result).to.equal(expect_string);
    });

    it("input '||:|:::|:|:|:::|:::||::||::|:|:|' get '95713'", function(){

        var result = main('||:|:::|:|:|:::|:::||::||::|:|:|');
        var expect_string = '95713';
        
        expect(result).to.equal(expect_string);
    });

   it("input '|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|' get '12345-6789'", function(){

        var result = main('|:::||::|:|::||::|::|:|:|::||::|:::||::|:|:|:::|:|:|');
        var expect_string = '12345-6789';

        expect(result).to.equal(expect_string);
    });



});