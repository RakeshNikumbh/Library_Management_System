var myApp = angular.module('myApp',['ngRoute']);

    // configure our routes

    myApp.config(function($routeProvider) {
        $routeProvider
        
            .when('/', {
                templateUrl : "./Home.html"
            })

            .when('/addstud', {
                templateUrl : "./admin/add_stud.html"
            })

            .when('/disstud', {
                templateUrl : "./admin/dis_stud.html"
            })

            .when('/addbook', {
                templateUrl : "./admin/add_book.html"
            })

            .when('/disbook', {
                templateUrl : "./admin/dis_book.html"
            })
    });