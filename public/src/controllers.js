angular.module("ContactsApp")
	.controller("ListController", function ($scope, Contact, $location, Dictionary){
		$scope.contacts = Contact.query();
		$scope.fields = ["firstName","lastName","homePhone","email"];
		$scope.tbltitle = Dictionary;
		$scope.sort = function (field){
			$scope.sort.field = field;
			$scope.sort.order = !$scope.sort.order;
		}

		$scope.sort.field = "firstName";
		$scope.sort.order = false;

		$scope.show = function(id) {
			$location.url('/contact/' + id);
		}

	})
	.controller('NewController', function ($scope, Contact, $location, Dictionary, ContactStr) {
        $scope.contact = new Contact(ContactStr);

        $scope.tbltitle = Dictionary;

        $scope.save = function () {
            if ($scope.newContact.$invalid) {
                $scope.$broadcast('record:invalid');
            } else {
                $scope.contact.$save();
                $location.url('/contacts');
            }
        };
    })
    .controller('SingleController', function ($scope, $rootScope, $location, Contact, $routeParams, Dictionary, ContactStr) {
        $scope.tbltitle = Dictionary;
        $scope.allfields = new Contact(ContactStr);
        $scope.contact = Contact.get({ id: parseInt($routeParams.id, 10) });

        $scope.delete = function () {
            $scope.contact.$delete();
            $location.url('/contacts');
        };

        $scope.update = function () {
            if ($scope.editContact.$invalid) {
                $scope.$broadcast('record:invalid');
            } else {
                $scope.contact.$update();
                $location.url('/contacts');
            }
        };
    })

    /*.controller("StartUpController", ['$scope', function ($scope) {
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
	})*/


	.filter('formatTplVal', function() {
		return function(input) {
			return  (input || '<em class="nana">n/a</em>');
		}
	}).filter('keyFilter', function () {
        return function (obj, query) {
            var result = {};
            angular.forEach(obj, function (val, key) {
                if (key !== query) {
                    result[key] = val;
                }
            });
            return result;
        };
    });

