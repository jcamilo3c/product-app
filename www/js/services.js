angular.module('app.services', ['ngResource'])

.service('productService', ['$resource', function($resource){
  /* Servicios de Usuarios */
  this.item_signin=$resource('http://138.68.0.83:7070/api/v1/user/sign-in',null,{
   'registro':{
    method:'POST',
    interceptor: {
      response: function(response) {
        var result = response.resource;
        result.$status = response.status;
        return result;
      }
    }
  }
});
  this.item_forgotpassword=$resource('http://138.68.0.83:7070/api/v1/user/forgot-password/:email', {email: '@email'}, {
   'login':{
    method: 'POST'
  }
});
  this.item_signup=$resource('http://138.68.0.83:7070/api/v1/user/sign-up',null,
  {
    signup: {
      method: 'POST',
      interceptor: {
        response: function(response) {
          var result = response.resource;
          result.$status = response.status;
          return result;
        }
      }
    }
  });


  /* Servicios de Productos */
  /* Lista de Productos */
  this.item_list = $resource('http://138.68.0.83:7070/api/v1/product/list');
  /* Detalle de Producto */
  this.item_detail = $resource('http://138.68.0.83:7070/api/v1/product/detail/:id');
  /* Crear Producto */
  this.item_create = $resource('http://138.68.0.83:7070/api/v1/product/create',
  {
    create: {
      method: 'POST',
      interceptor: {
        response: function(response) {
          var result = response.resource;
          result.$status = response.status;
          return result;
        }
      }
    }
  });
  /* Editar Producto */
  this.item_edit = $resource('http://138.68.0.83:7070/api/v1/product/update/:id', {id: '@id'},
  {
    update: {
      method: 'PUT',
      interceptor: {
        response: function(response) {
          var result = response.resource;
          result.$status = response.status;
          return result;
        }
      }
    }
  });
  /* Borrar Producto */
  this.item_delete = $resource('http://138.68.0.83:7070/api/v1/product/delete/:id', {id: '@id'},
  {
    delete: {
      method: 'DELETE',
      interceptor: {
        response: function(response) {
          var result = response.resource;
          result.$status = response.status;
          return result;
        }
      }
    }
  });

  this.item_profile=$resource('http://138.68.0.83:7070/api/v1/user/profile/:email',{email:'@email'},{
    'profile':{
      method:'GET'
    }
  });

  this.item_editprofile=$resource('http://138.68.0.83:7070/api/v1/user/update/:email',{email:'@email'},{
    'editprofile':{
      method:'PUT'
    }
  })

}]);