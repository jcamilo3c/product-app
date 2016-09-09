angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
        cache: false,
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('ingresoYRegistro', {
    url: '/page2',
    templateUrl: 'templates/ingresoYRegistro.html',
    controller: 'ingresoYRegistroCtrl'
  })

  .state('menu.perfil', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('ingresar', {
    url: '/page4',
    templateUrl: 'templates/ingresar.html',
    controller: 'ingresarCtrl'
  })

  .state('cambiarContraseA', {
    url: '/page5',
    templateUrl: 'templates/cambiarContraseA.html',
    controller: 'cambiarContraseACtrl'
  })

  .state('contraseACambiada', {
    url: '/page6',
    templateUrl: 'templates/contraseACambiada.html',
    controller: 'contraseACambiadaCtrl'
  })

  .state('registrarme', {
    url: '/page8',
    templateUrl: 'templates/registrarme.html',
    controller: 'registrarmeCtrl'
  })

  .state('usuarioRegistrado', {
    url: '/page9',
    templateUrl: 'templates/usuarioRegistrado.html',
    controller: 'usuarioRegistradoCtrl'
  })

  .state('menu.editarPerfil', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/editarPerfil.html',
        controller: 'editarPerfilCtrl'
      }
    }
  })

  .state('menu.perfilEditado', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilEditado.html',
        controller: 'perfilEditadoCtrl'
      }
    }
  })

  .state('menu.sesiNCerrada', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sesiNCerrada.html',
        controller: 'sesiNCerradaCtrl'
      }
    }
  })

  .state('menu.eliminaciN', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eliminaciN.html',
        controller: 'eliminaciNCtrl'
      }
    }
  })

  .state('producto', {
    url: '/page14',
    templateUrl: 'templates/producto.html',
    controller: 'productoCtrl'
  })

  .state('menu.detalleProducto', {
    cache: false,
    url: '/page15/:id',
    views: {
      'side-menu21': {
    templateUrl: 'templates/detalleProducto.html',
    controller: 'detalleProductoCtrl'
      }
    }
  })

  .state('editarProducto', {
    cache: false,
    url: '/editProduct/:id',
    templateUrl: 'templates/editarProducto.html',
    controller: 'productoEditadoCtrl'
  })

  .state('eliminarProducto', {
    url: '/page17',
    templateUrl: 'templates/eliminarProducto.html',
    controller: 'eliminarProductoCtrl'
  })

  .state('productoEliminado', {
    url: '/page18',
    templateUrl: 'templates/productoEliminado.html',
    controller: 'productoEliminadoCtrl'
  })

  .state('menu.crearProducto', {
    cache: false,
    url: '/addProd',
    views: {
      'side-menu21': {
    templateUrl: 'templates/crearProducto.html',
    controller: 'crearProductoCtrl'
      }
    }
  })

  .state('productoCreado', {
    url: '/page20',
    templateUrl: 'templates/productoCreado.html',
    controller: 'productoCreadoCtrl'
  })

$urlRouterProvider.otherwise('/page2')

  

});