(function () {
    var myapps = angular.module('myapps', [])
        .controller('indexController', function ($http) {
            var self=this;
            self.onClickMEYFAH = function () {
                $http.post('http://localhost:4400/war/sonal', { "fname": "mantra" }).then(function (res) {
                    alert('done');
                });
            }
        });
})();