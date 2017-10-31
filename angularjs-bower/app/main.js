(function main() {

  const app = angular.module('daggerok-app', [
    window.namespace.moduleName,
  ]);

  angular.bootstrap(document, [app.name], {
    strictDi: true,
    debugInfoEnabled: true,
  });

})();
