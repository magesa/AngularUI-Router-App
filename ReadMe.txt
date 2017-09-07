Refe: https://scotch.io/tutorials/angular-routing-using-ui-router

Overview

What is AngularUI Router?

The UI-Router is a routing framework for AngularJS built by the AngularUI team. It provides a different approach than ngRoute in that it changes your application views based on state of the application and not just the route URL.

States vs URL Route

With this approach, your views and routes aren't tied down to the site URL. This way, you can change the parts of your site using your routing even if the URL does not change.

When using ngRoute, you'd have to use ngInclude or other methods and this could get confusing. Now that all of your states, routing, and views are handled in your one .config(), this would help when using a top-down view of your application.

Sample Application

Let's do something similar to the other routing tutorial we made. Let's create a Home and About page.

Setup

Let's get our application started. We will need a few files:


- index.html                    // will hold the main template for our app
- app.js                        // our angular code
- partial-about.html            // about page code
- partial-home.html             // home page code
- partial-home-list.html        // injected into the home page
- table-data.html               // re-usable table that we can place anywhere


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
ErroR: //TO-DO - FIX

C:\Users\magesa\routerApp> node app.js
C:\Users\magesa\routerApp\app.js:2
var routerApp = angular.module("routerApp", ["ui.router"]);
                        ^

ReferenceError: angular is not defined
    at Object.<anonymous> (C:\Users\magesa\routerApp\app.js:2:25)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
    at Function.Module.runMain (module.js:609:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:598:3

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>