(function main() {

  angular.module('ml-app', [])
    .controller('firstCtrl', ['shareFactory', function firstCtrl(shareFactory) {
      this.shareFactory = shareFactory;
      this.first = shareFactory.data;
    }])
    .controller('secondCtrl', ['shareFactory', function secondCtrl(shareFactory) {
      this.shareFactory = shareFactory;
      this.second = shareFactory.data;
    }])
    .factory('shareFactory', function shareFactory() {
      return { 
        data: 'data from factory',
      };
    })
  ;

})();
