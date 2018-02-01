(function (){
	var taskList = {
		bindings: {itemList: "<",
					findItem: "<"
					},
		template: `<ol>
					<li ng-repeat="item in $ctrl.itemList | filter: $ctrl.findItem track by $index" task-directive>
					{{ item }}
						<i ng-click="$ctrl.removeItem(this.$index)" class="material-icons">&#xE5CD;</i>
					</li>
				</ol>`,
		controller: "FormController"
	}

	angular
		.module("app")
		.component("taskList", taskList);
})();