PWDangular.module('TestModule',[])
    .directive('myCustomer', directiveTest1)
    .controller('controller1',function($scope)
    {
        $scope.name = 'wwww';
    })

function directiveTest1() {
    return {
        restrict: 'AE',
        template: 'ccc: {{name}};'
    };
}


