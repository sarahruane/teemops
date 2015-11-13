"use strict";angular.module("teemOpsApp",["ngAnimate","ngCookies","ngResource","ui.router","ngSanitize","ngTouch","ui.bootstrap","LocalStorageModule"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("/",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("addapp",{url:"/addapp",templateUrl:"views/addapp.html",controller:"AddAppCtrl"}).state("apps",{url:"/apps",templateUrl:"views/apps.html",controller:"ViewAppsCtrl"}).state("apps.detail",{url:"/detail/:id",templateUrl:"views/app-detail.html",controller:"AppDetailCtrl"})}]),angular.module("teemOpsApp").service("appManagerService",["localStorageService",function(a){var b=[],c=function(){b=[];var c=a.keys();angular.forEach(c,function(c){var d=a.get(c);d.status="stopped",d.cloudprovider="AWS",b.push(d)})};this.addApp=function(b){b.appId="teemOpsApp-"+b.appName.replace("","-"),a.set(b.appId,b)},this.removeApp=function(b){a.remove(b)},this.stopApp=function(a){console.log("Stop app: "+a)},this.allApps=function(){return c(),b}}]),angular.module("teemOpsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("teemOpsApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("teemOpsApp").controller("AddAppCtrl",["$scope","appManagerService",function(a,b){var c=this;a.debug=!1,a.app={appName:null,environment:null,environmentType:null,database:null,caching:null,sourceCode:{source:null,authenticated:null,path:null}},a.storedApps=[],c.init=function(){a.storedApps=b.allApps()},a.submit=function(c){c&&(console.log(a.app),b.addApp(a.app),a.storedApps=b.allApps())},c.init()}]),angular.module("teemOpsApp").controller("ViewAppsCtrl",["$scope","appManagerService",function(a,b){var c=this;a.debug=!0,a.storedApps=[],c.init=function(){a.storedApps=b.allApps()},c.init()}]),angular.module("teemOpsApp").controller("AppDetailCtrl",["$scope","$stateParams","$filter",function(a,b,c){var d=this;a.selectedApp=null,d.init=function(){var d=c("filter")(a.storedApps,{appId:b.id});d&&d.length>0&&(a.selectedApp=d[0])},d.init()}]);