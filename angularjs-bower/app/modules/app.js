(function app() {

  const template = `
    <p>Hi, {{ $ctrl.name }}!</p>
  `;

  const controller = class AppController {
    constructor() {
      this.$ctrl = this;
      this.$ctrl.name = 'oOo.0';
    }
  };

  const appComponent = {
    template,
    controller,
  };

  angular.module(window.namespace.moduleName, ['ui.router'])
         .component('appComponent', appComponent);

})();
