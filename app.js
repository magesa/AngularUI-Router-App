var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.prophets = ['Moses', 'Samuel', 'Elijah' , 'Elisha', 'Isaiah', 'Ezekiel', 'Daniel'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'For God So Loved The World, That He Gave His Only Son, And That Whosoever Believes In Him Shall Not Perish, But Shall Have Eternal Life..'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'I am just a regular column!' },
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'BibliaController'
                }
            }

        });

});

routerApp.controller('BibliaController', function($scope) {

    $scope.message = 'test';

    $scope.biblias = [
        {
            name: 'Biblia Ya Kiswahili',
            price: 2975
        },
        {
            name: 'King James Version ',
            price: 1850
        },
        {
            name: 'New International Version ',
            price: 2350
        },
        {
            name: 'The Amplified Version ',
            price: 1350
        },
        {
            name: 'The Good News Bible ',
            price: 20000
        }
    ];

});
