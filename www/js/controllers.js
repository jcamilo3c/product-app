angular.module('app.controllers', ['app.services','ngCordova','ionic'])
  
.controller('homeCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {

    $scope.loadData = function() {
        console.log('Entro a loadData');
        productService.item_list.query(function(data){
            console.log('Entro');
        	$scope.list = data;
        	console.log($scope.list); 
            $scope.$broadcast('scroll.refreshComplete');           
        })/*
        .finally(function() {
            console.log('Entro al finally');
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     })*/;
    }
    

}])
   
.controller('ingresoYRegistroCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('perfilCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {


  productService.item_profile.profile({email:localStorage.getItem('email')},function(data){

          $scope.b1 = data.email;
          $scope.b2=data.firstname;
          $scope.b3=data.lastname;

          console.log($scope.b1);
        });

$scope.doRefresh = function() {
    
 console.log('Entro a loadData');
        productService.item_profile.profile({email:localStorage.getItem('email')},function(data){
            console.log('Entro');
              $scope.b1 = data.email;
          $scope.b2=data.firstname;
          $scope.b3=data.lastname;
         
          console.log($scope.b1); 
            $scope.$broadcast('scroll.refreshComplete');           
        })
 };


}])
      
.controller('ingresarCtrl', ['$scope', '$stateParams','productService','$cordovaDialogs','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,productService,$cordovaDialogs,$state) {



	$scope.ingresarclick=function(a,b){
			var data = {
        "email": a,
        "password": b
    };


    productService.item_signin.registro(data, function(data){

        if(data.error===400){
        	console.log("error:",data.error);

        	 $cordovaDialogs.alert('Usuario o contraseña incorrecta', 'Login', 'OK')
    	.then(function() {
     		 // callback success
    		});
        }
        else 
        {
        	$state.go("menu.home")
        }
        //console.log(data.$status);

        $scope.data = data;

        console.log($scope.data);
	});
}


}])
   
   
.controller('cambiarContraseACtrl', ['$scope', '$stateParams','$state', '$cordovaDialogs', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$cordovaDialogs,productService) {

$scope.forgotPassword=function(a1,b2,b3){
			 
			 //if(b2===b3){
			 var data={
			 	"password":b3
			 } ;
			//}
    console.log(a1,b2,b3);

	productService.item_forgotpassword.login({email: a1}, data, function(data){

        $scope.item = data;

        console.log($scope.item);
        $cordovaDialogs.alert('Contraseña cambiada correctamente', 'Cambio Exitoso', 'Cerrar')
    	.then(function() {
     		 $state.go("ingresar")
    		});
        }
          //}
          );
}


}])
   
.controller('registrarmeCtrl', ['$scope', '$stateParams','$state','$cordovaDialogs','productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$cordovaDialogs,productService) {

	$scope.registrarclick=function(c1,c2,c3,c4,c5){
			var data = {
        "email": c1,
        "password":c2,
        "firstname":c3,
        "lastname":c4,
        "phone":c5
    };


    productService.item_signup.singup(data, function(_data){

        $scope.data = _data;

        console.log($scope.data);
        console.log('Result -> '+ _data.$status);
        if(_data.$status === 200 || _data.$status === 201){
        $cordovaDialogs.alert('Usuario registrado correctamente', 'Registro Exitoso', 'Cerrar')
    	.then(function() {
     		 $state.go("ingresar")
    		});
        }
        else 
        {
            $cordovaDialogs.alert('Error al registrar el usuario, por favor vuelva a intentarlo', 'Error', 'Cerrar');/*
        	.then(function() {
     		 $state.go("ingresoYRegistro")
    		});*/
        }
	});
}

}])
   
.controller('usuarioRegistradoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editarPerfilCtrl', ['$scope', '$stateParams', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {

  $scope.cambiarPerfil=function(firstname,lastname,phone){
var data = {
        "firstname":firstname,
        "lastname":lastname,
        "phone":phone
    };

 productService.item_editprofile.editprofile({email:localStorage.getItem('email')},data, function(_data){

  $scope.data = _data;

 console.log($scope.data);

 });


}


// var data = {
//         "firstname":firstname,
//         "lastname":lastname,
//         "phone":phone
//     };

//  productService.item_editprofile.editprofile({email:localStorage.getItem('email')},data, function(_data){

//   $scope.data = _data;

//  console.log($scope.data);

//  });
    // $http.get('/new-items')
    //  .success(function(newItems) {
    //    $scope.items = newItems;
    //  })
    //  .finally(function() {
    //    // Stop the ion-refresher from spinning
    //    $scope.$broadcast('scroll.refreshComplete');
    //  });


}])
   
.controller('perfilEditadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('sesiNCerradaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eliminaciNCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('productoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('detalleProductoCtrl', ['$scope', '$stateParams', '$cordovaDialogs', '$state', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs, $state, productService) {
    var idProducto = 0;
    if($stateParams.id === null || $stateParams.id === undefined) {        
        idProducto = localStorage.getItem('idProductoX');
    } else {
        idProducto = $stateParams.id;
    }    
    console.log("Var IdProducto en detalleProducto -> "+idProducto);

    $scope.data_product = {};

	  productService.item_detail.get({id: idProducto}, function(_data){
	    console.log(_data);
	    /*
	    $scope.data_product.name = _data.name;
	    $scope.data_product.type = _data.type;
	    $scope.data_product.quantity = _data.quantity;
	    $scope.data_product.price = _data.price;
	    $scope.data_product.id = _data.id;
	    */
	    $scope.data_product = _data;
	    //localStorage.setItem('product_' + _data.id, JSON.stringify(_data));
	  });

      $scope.editarProducto = function(idProducto){
          console.log('Entro a editarProducto -> '+idProducto);
          localStorage.setItem('idProduct',idProducto);
          $state.go('editarProducto');
      };

      var idProducto = $stateParams.id;
      $scope.eliminarProducto = function(idProducto){
		$cordovaDialogs.confirm('Está seguro que quiere eliminar este producto?', 'Eliminar Producto', ['Cancelar','Aceptar'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
		      console.log(btnIndex);
              if(btnIndex == 2) {
                  console.log('idProducto ->'+idProducto);
                  productService.item_delete.delete({id: idProducto}, function(_data){
                      var resultStatus = _data.$status;
	                console.log(resultStatus);
                    if(resultStatus == 204) {                        
                        console.log('Entró cuando Status = 204');
                        $cordovaDialogs.alert('Producto eliminado correctamente', 'Producto Eliminado',  'Cerrar')
                            .then(function() {
                            console.log('Click en el boton alert');
                             $state.go('menu.home');
                            });
                        
                    } else {
                        console.log('Entró cuando Status != 204');
                        $cordovaDialogs.alert('Error al eliminar el producto', 'Error',  'Cerrar');
                    }
                });
              }
    		});
	};


}])
   
.controller('productoEditadoCtrl', ['$scope', '$stateParams', '$state', '$cordovaDialogs', 'productService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $cordovaDialogs, productService) {
    
    var idProducto = localStorage.getItem('idProduct');
    console.log('IdProducto -> '+idProducto);
    if(idProducto != null) {
        $scope.data_product = {};
	    productService.item_detail.get({id: idProducto}, function(_data){
	    console.log(_data);	    
	    $scope.data_product = _data;
	    localStorage.setItem('product_' + _data.id, JSON.stringify(_data));
	  });
    }

    $scope.editarProducto = function(_data) {
       var dataProductToEdit =  {
        "name": _data.name,
        "type": _data.type,
        "quantity": _data.quantity,
        "price": _data.price
        };
        
        console.log(_data.id);
        console.log(_data.name);	
        console.log(_data.type);	
        console.log(_data.quantity);	
        console.log(_data.price);

        $cordovaDialogs.confirm('Está seguro que quiere editar el producto '+dataProductToEdit.name+'?', 'Editar Producto', ['Cancelar','Aceptar'])
		    .then(function(buttonIndex) {
		      // no button = 0, 'OK' = 1, 'Cancel' = 2
		      var btnIndex = buttonIndex;
		      console.log(btnIndex);
              if(btnIndex == 2) {
                  console.log('idProductoAEditar ->'+_data.id);
                  productService.item_edit.update({id: _data.id}, dataProductToEdit, function(dataProductEdited){
                    var resultStatus = dataProductEdited.$status;
	                console.log("Status Editar -> "+resultStatus);
                    
                    if(resultStatus == 200) {                        
                        console.log('Entró cuando Status = 200');
                        $cordovaDialogs.alert('Producto editado correctamente', 'Producto Editado',  'Cerrar').then(function() {
                            console.log('Click en el boton alert');
                            localStorage.setItem('idProductoX',dataProductEdited.id);
                               //$state.go('menu.detalleProducto');
                              $state.go('menu.detalleProducto',{id:dataProductEdited.id});
                            });                       
                        
                    } else {
                        console.log('Entró cuando Status != 204');
                        $cordovaDialogs.alert('Error al editar el producto', 'Error',  'Cerrar');
                    }
                });
              }
    		});


    }

    $scope.cancelar = function(){
          console.log('Entro a cancelar');
          $state.go('menu.home');
      };
}])
   
.controller('eliminarProductoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('productoEliminadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('crearProductoCtrl', ['$scope', '$stateParams', '$cordovaDialogs', '$state', 'productService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $cordovaDialogs, $state, productService) {

  $scope.crearProducto = function(topic){
    $cordovaDialogs.confirm('Desea crear el producto?', 'Confirmación', ['Cancelar','Aceptar'])
    .then(function(buttonIndex) {
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = buttonIndex;
      if(btnIndex==2){
        productService.item_create.save(topic, function(data){

          $scope.data_product = {
            "id": data.id,
            "name":data.name,
            "type":data.type,
            "cantidad":data.quantity,
            "price":data.price
          };    

          console.log($scope.data_product.id);
          $cordovaDialogs.alert('Producto creado correctamente', 'Producto Creado',  'Cerrar')
                            .then(function() {
                            console.log('Click en el boton alert');
                             $state.go('menu.home');
                            });
         
        }) 
      }
      else{
        console.log('No creo nada != 204');
      }
    });    
  };
}])
   
.controller('productoCreadoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 