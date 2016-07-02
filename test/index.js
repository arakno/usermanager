/*
var assert = require("assert");
var should = require("./vendor/chai").should;
var expect = require('./vendor/chai').expect;
*/
//var jsdom = require('./vendor/mocha-jsdom');
//global.$ = require('./vendor/jquery')(jsdom().parentWindow);
var assert = require("assert");
var should = require("chai").should;
var expect = require("chai").expect;

var Users = require('./js/Users');
var Groups = require('./js/Groups');



if ( typeof module != 'undefined' && module.exports ) {
/*
import {expect, should} from 'chai';
import assert from 'assert';

import 'babel-polyfill';
import Users from './js/Users';
import Groups from './js/Groups';
*/

/*
    require('./data.json');
    require('./js/Users.js');
    require('./js/Groups.js');
*/
} else {

    $.getJSON('data.json', function(json) {
        jsonData = json;
        console.log(json);
    });

}



var groups = new Groups();
var users = new Users();

//START TESTS
describe('App exists', function(){
    var data = {};
    data.users = [
    {
        "id": 932,
        "name": "mane",
        "group": "Designers"
    },
    {
        "id": 659,
        "name": "jarbas",
        "group": "Musicians"
    },
    {
        "id": 676,
        "name": "senhor",
        "group": "Doctors"
    },
    {
        "id": 37,
        "name": "bek",
        "group": "Teachers"
    },
    {
        "id": 795,
        "name": "Paulo",
        "group": "Programmer"
    }
    ];

    data.groups = [
    "Designers",
    "Doctors",
    "Musicians",
    "Programmers",
    "Teachers",
    "coiso"
    ];    

    before(function(){

    });


    it('Class User should exist', function(){
        expect(users).to.be.an.instanceof( new Users() );
        expect(users).to.exist;
    });

    it('groups should be an instance of Groups', function(){
        expect(groups).to.be.an.instanceof( new Groups() );
        expect(groups).to.exist;
    });

    describe('User Class', function(){
    
        it('Given a user entry, should add a user to the object', function(){
            users.add(data.users[4]);
            expect(users.get().length, 1);
        });

        it('user entry should correspond to input', function(){
            var cdata = users.get();
            expect( cdata ).to.have.property( 'name', 'Paulo' );
        });        
    });

});