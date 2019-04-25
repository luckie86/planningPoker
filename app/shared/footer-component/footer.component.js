(function() {
    'use strict';

    var footerComponent = {
        bindings: {
        },
        templateUrl: 'app/shared/footer-component/footer.html',
        controller: footerController
    };

    angular
        .module('SharedModule')
        .component('footerComponent', footerComponent);

    function footerController() {
        var $ctrl = this;

        $ctrl.$onInit = $onInit;

        
        //////////////////////////////
        
        function $onInit () {
            
        }

    }

})();