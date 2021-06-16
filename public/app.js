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