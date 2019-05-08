(function() {
    'use strict';

    angular
        .module('CoreModule')
        .factory("userService", userService);
    
        function userService () {
            
            var currentUser = "";

            function getUser () {
                return currentUser;
            }

            function setUser (user) {
                currentUser = user;
            }


            return {
                getUser: getUser,
                setUser: setUser
            }

        }
        

})();
