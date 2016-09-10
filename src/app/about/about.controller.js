export class AboutController {
	constructor ($state, $stateParams) {
    'ngInject';
    let vm = this;
    vm.isPolitical = true;
    vm.$stateParams = $stateParams;
    vm.PoliticalNews = function () {
      vm.isPolitical = true;
      console.log("Political");
    };
    vm.EntertainmentNews = function () {
      vm.isPolitical = false;
      console.log("Entertainment");
    };

    vm.transition = function (tab) {
      vm.$stateParams.tab = tab;
      $state.transitionTo($state.current.name, angular.extend($stateParams, {tab: tab}));
    };
  } 

}