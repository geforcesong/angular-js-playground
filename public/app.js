(function (angular) {
    'use strict';
    angular.module('ngRouteExample', ['ngRoute'])

        .controller('MainController', function ($scope, $route, $routeParams, $location) {
            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;
        })

        .controller('BookController', function ($scope, $routeParams) {
            $scope.name = 'BookController';
            $scope.params = $routeParams;
        })

        .controller('ChapterController', function ($scope, $routeParams) {
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

            $scope.ninjas = [{
                name: 'George',
                belt: 'Black',
                score: 12
            }, {
                name: 'Mario',
                belt: 'White',
                score: 34
            }, {
                name: 'Yoshi',
                belt: 'Yellow',
                score: 66
            },
            {
                name: 'Andy',
                belt: 'Pink',
                score: 56
            }];
        })

        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/home', {
                    templateUrl: 'views/home.html',
                    controller: 'BookController'
                })
                .when('/directory', {
                    templateUrl: 'views/directory.html',
                    controller: 'ChapterController'
                });

            $locationProvider.html5Mode(true);
        });
})(window.angular);

/*
Copyright 2021 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/