angular.module("ContactsApp")
	.controller("ListController", function ($scope, Contact, $location){
		$scope.contacts = Contact.query();
		$scope.fields = ["firstName","lastName","homePhone","email"];

		$scope.sort = function (field){
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		}

		$scope.sort.field = "firstName";
		$scope.sort.order = false;

		$scope.show = function(id) {
			$location.url('/contact/' + id);
		}

	}).controller("StartUpController", ['$scope', function ($scope) {
		$scope.funding = { startingEstimate: 0, endingEstimate: 0, needed: 'MILLION' };

		computeNeeded = function() {
			$scope.funding.needed = +$scope.funding.startingEstimate + +$scope.funding.endingEstimate ;

			$scope.funding.needed = $scope.funding.needed ? $scope.funding.needed : "MILLION";
		};
		$scope.reset = function() {
			$scope.funding.startingEstimate = 0;
			$scope.funding.endingEstimate = 0;
		}
		$scope.$watchGroup(['funding.startingEstimate','funding.endingEstimate'], computeNeeded);
	}]).controller("testmy", ['$scope', function ($scope) {
		
		$scope.$watch('comeon', function() {
			$scope.comeonvalue = $scope.comeon;
		});
	}]).controller("students", function($scope){
		var students = [{name:'Mary Contrary', id:'1'},
		{name:'Jack Sprat', id:'2'},
		{name:'Jill Hill', id:'3'}];
		$scope.students = students;
	}).filter('formatTplVal', function() {
		return function(input) {
			return  (input || '<em class="nana">n/a</em>');
		}
	});

