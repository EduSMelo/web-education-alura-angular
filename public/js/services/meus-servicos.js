// public/js/servicos/meus-servivos.js

angular.module('meusServicos', ['ngResource'])
  .factory('recursoFoto', function($resource) {
    return $resource('/v1/fotos/:fotoId', null, {
      'update' : {
        method: 'PUT'
      }
    });
  });
