
import assert from 'assert';
import {expect, should} from 'chai';

import Users from './lib/Users';
import Groups from './lib/Groups';

import data from '../../test/data.json';


var groups = new Groups();
var users = new Users();


console.log(JSON.stringify(data, null, 2));


//START TESTS
describe('App exists', function(){

    data.groups = [
        "Designers",
        "Doctors",
        "Musicians",
        "Programmers",
        "Teachers",
        "coiso"
    ];    

    before(function(){

        var index = Math.floor(data.length-1 * Math.random());
        var rand = data[index];

    });


    it('Class User should exist', function(){
        expect(users).to.exist;        
        expect(users).to.be.an.instanceof( Users );
    });

    it('and groups should be an instance of Groups', function(){
        expect(groups).to.exist;        
        expect(groups).to.be.an.instanceof( Groups );
    });

    describe('User Class: ', function(){
    
        it('Given a user entry, should add a user to the object', function(){
            users.add(data[4]);
            expect(users.get().length, 1);
        }); 

        it('user entry should have id, name, and group property set', function(){
            var cdata = users.get();
            expect( cdata[0] ).to.have.keys( [ 'name', 'id', 'group' ] );
        });  

        it('user entry should correspond to input', function(){
            var cdata = users.get();
            expect( cdata[0].name ).to.have.property( 'name', 'Paulo' );
        });  

        it('given an id, should remove that user from the list', function(){
            var cdata = users.get();
            users.remove(cdata[0].id);
            expect(users.get().length, 0);
        });            
    });
    

    describe('Group Class: ', function(){
    
        it('Given a group entry, should add a group to the list', function(){
            groups.add(data.groups[2]);
            expect(users.get().length, 1);
        }); 

        it('group entry should correspond to input', function(){
            var gdata = groups.get();
            assert( gdata[0], 'Musicians');
        });  

        it('given a name, should remove that group from the list', function(){
            var gdata = users.get();
            users.remove(gdata[0]);
            expect(users.get().length, 0);
        });            
    });    

});