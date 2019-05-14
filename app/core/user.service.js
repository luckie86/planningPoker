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

            function isAdmin (user) {
                if (user === "Mojca" || user === "Janez") {
                    return true;
                } else {
                    return false;
                }
            }

            return {
                isAdmin: isAdmin,
                getUser: getUser,
                setUser: setUser
            }

        }
        

})();
