
(function(){
	function FormController($element){
		var vm = this;
		vm.itemList = [ ];
		vm.addItem = function(adding){
			vm.itemList.push(adding);
			vm.add = "";
			}
		vm.removeItem = function(item){
			console.log(item);
			vm.itemList.splice(item, 1);
		}
	};
	angular
		.module("app")
		.controller("FormController",FormController);
})();