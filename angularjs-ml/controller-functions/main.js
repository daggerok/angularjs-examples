(function main() {

  angular.module('ml-app', [])
    .controller('funCtrl', [function funCtrl() {
      this.name = 'big';
      this.doBang = function doBang() {
        this.name = 'bang!';
      };
    }])
  ;

})();
