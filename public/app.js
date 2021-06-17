(function (angular) {
    'use strict';
    angular.module('ngRouteExample', ['ngRoute'])

        .controller('MainController', function ($scope, $route, $routeParams, $location) {
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;
        })

        .controller('ContactController', function ($scope, $route, $routeParams, $location) {
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;
            $scope.message = 'Contact Form From Contact Controller'
        })

        .controller('HomeController', function ($scope, $routeParams) {
            $scope.name = 'HomeController';
            $scope.params = $routeParams;
            $scope.homeMessage = 'Hi from Home message';
        })

        .controller('ChapterController', function ($scope, $routeParams, $http) {
            $scope.name = 'ChapterController';
            $scope.params = $routeParams;
            $scope.message = 'This is directory page';
            
            $scope.removeNinja = (ninja) => {
                console.log(ninja);
                if ($scope.ninjas.includes(ninja)) {
                    $scope.ninjas = $scope.ninjas.filter(c => c != ninja);
                }
            }

            $scope.addNinja = () => {
                $scope.ninjas.push({
                    name: $scope.newNinja.name,
                    belt: $scope.newNinja.belt,
                    score: $scope.newNinja.score
                });
                $scope.newNinja.name = '';
                $scope.newNinja.belt = '';
                $scope.newNinja.score = '';
            }

            $http.get('data/ninjas.json').then((data)=>{
                $scope.ninjas = data.data;
            })
        })
        .directive('randomNinja',function(){
            return {
                restrict: 'E',
                scope: {
                    title: '='
                },
                templateUrl: 'views/randomNinja.html',
                transclude: true,
                replace: true,
                controller: function($scope){
                    $scope.random =100;
                }
            }
        })

        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                })
                .when('/contact',{
                    templateUrl: 'views/contactform.html',
                    controller: 'ContactController'
                })
                .when('/directory', {
                    templateUrl: 'views/directory.html',
                    controller: 'ChapterController'
                }).otherwise({
                    redirectTo: '/'
                });

            $locationProvider.html5Mode(true);
        });
})(window.angular);

/*
Copyright 2021 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/