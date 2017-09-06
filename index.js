angular.module('TestModule',[])
    .directive('myCustomer', directiveTest1);

function directiveTest1() {

    var directive = {
        restrict: 'AE',
        link: link1,
        controller: controller1,
        templateUrl: './my-customer.html'
    };

    return directive;
}

function link1(scope) {
    scope.name = 'aaron';
}

function controller1($scope) {
    $scope.address = 'address1';
}


