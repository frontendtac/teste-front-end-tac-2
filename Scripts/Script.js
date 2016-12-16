(function () {
    'use strict';

    var numeros = angular.module("myModule", [])
    .controller("myController", function ($scope, $http, $log) {

        var sucessoCalBack = function (response) {
            $scope.detalhes = response.data;
        };

        var erroCalBack = function (response) {
            $scope.error = response.data;
        };

		
        $scope.getAll = function (codigoProduto) {
            var config = {
                method: 'GET',
                url: 'https://webapi.toqueacampainha.com.br/api/estoque/produtoprontaentrega?refid=' 
            };
            $http(config).then(sucessoCalBack, erroCalBack);
        };

		
        
        $http({
            method: 'GET',
            params: { codigoProduto: 5 },
            url: 'https://webapi.toqueacampainha.com.br/api/estoque/produtoprontaentrega?refid='})
            .then(sucessoCalBack,erroCalBack);
        });



})();