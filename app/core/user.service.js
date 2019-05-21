(function() {
    'use strict';

    angular
        .module('CoreModule')
        .factory("userService", userService);
    
        function userService () {
            
            var currentUser = "";

            function setUser (user) {
                currentUser = user;
            }

            function getUser () {
                return currentUser;
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
                setUser: setUser,
                getUser: getUser
            }

        }
        

})();
