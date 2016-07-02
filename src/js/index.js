/**
 * @description : vanilla user management 
 * @author pbasto
 * @link www.arakno.net
 * @version 1.0
 */
import Users from './lib/Users';
import Groups from './lib/Groups';
import Mustache from 'mustache';
//inn case our project grew in complexity we would want to load external templates 
//import promise from 'es6-promise';
//import fetch from 'isomorphic-fetch';

//This instructs webpack to pass the stylesheets through the module loaders
require('../css/main.less');

//HELPER FUNCTIONS FOR EASIER DOM MANIPULATION
/** @{function} - helper global $elector alias */
window.$ = function (selector) {
    var selectorType = 'querySelectorAll';

    if (selector.indexOf('#') === 0) {
        selectorType = 'getElementById';
        selector = selector.substr(1, selector.length);
    }
    return document[selectorType](selector);
};

/** @{function} - hleper method to attach events */
Node.prototype.on = window.on = Node.prototype.addEventListener;
NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
    Array.prototype.slice.call(this).forEach(function (elem) {
        elem.addEventListener(name, fn, false);
    });
};

let users = new Users();
let groups = new Groups();

var App = {};

App.Run = function (data) {
    App.Render.view('#usrlist_tmpl', {entry: users.get()}, '#userlist' );
    App.Render.visible('l-list');
    App.Events();
};


App.Render = {
    view: function (tmpl, data, node) {
        let tpl = $(tmpl).innerHTML;
        let rendered = Mustache.render(tpl, data);
        $(node).innerHTML = rendered;  
    },
    visible: function (el) {
        var els = [".l-user",".l-group",".l-list", ".l-gmanager"];
        els.forEach(function(v, i){
            if(!document.querySelector(v).classList.contains("hide") && v !== "." + el ) {
                document.querySelector(v).classList.add("hide");
            }
        });
        if(document.querySelector("." + el).classList.contains("hide")) {
            document.querySelector("." + el).classList.toggle("hide");
        }
    }    
};

App.Events = function () {
    $("#navbar-userlist").on("click", function(e){
        App.Render.view('#usrlist_tmpl', {entry: users.get()}, '#userlist' );
        App.Render.visible("l-list");
        $("#usercount").textContent = users.get().length;
    });
    $("#navbar-grouplist").on("click", function(e){
        App.Render.view('#grplist_tmpl', {entry: groups.get()}, '#grouplist');
        App.Render.visible("l-gmanager");
    });

    $("#userlist").on("click", function(e){
        let el = e.target;
        if (el.classList.contains("delete") && el.tagName === "BUTTON") {
            users.remove(el.dataset.id);
            App.Render.view('#usrlist_tmpl', {entry: users.get()}, '#userlist' );
            App.Render.visible("l-list");
            $("#usercount").textContent = users.get().length;
        } 
    });
    $("#adduser-bt").on("click", function (e) {       
        App.Render.view('#addusr_tmpl',{entry: groups.get()}, '#user');
        App.Render.visible("l-user");
        $("#usercount").textContent = users.get().length;
    });
    $("#user").on("click", function (e) {
        let el = e.target;
        if (el.id === "submituser-bt") {
            let form = document.forms[0],
                name = form[0].value,
                group = form[1].value;        
            if(name !== "" && group !== "") {
                users.add(name, group);
                App.Render.view('#usrlist_tmpl', {entry: users.get()}, '#userlist' );
                App.Render.visible("l-list");
                $("#usercount").textContent = users.get().length;
            } else {
                alert("please fill all the fields!");
            }
            return false;
        } 
    });   

    $("#addgroup-bt").on("click", function (e) {
        App.Render.view('#addgrp_tmpl', {entry: groups.get()}, '#group');
        App.Render.visible("l-group");
    });    
    $("#group").on("click", function (e) {
        let el = e.target;
        if (el.id === "submitgroup-bt") {
            let name = $("#groupname").value;
            if(name !== "") {
                groups.add(name);
                App.Render.view('#grplist_tmpl', {entry: groups.get()}, '#grouplist');
                App.Render.visible("l-gmanager");
            } else {
                alert("please fill all the fields!");
            }
            return false;
        } 
    });
    $("#grouplist").on("click", function(e){
        let el = e.target;
        if (el.classList.contains("delete") && el.tagName === "BUTTON") {
            groups.remove(el.dataset.name);
            App.Render.view('#grplist_tmpl', {entry: groups.get()}, '#grouplist');
            App.Render.visible("l-gmanager");
        }
    });       

};

App.Run();
