export class AboutController {
  constructor($scope, $state, $stateParams) {
    'ngInject';
    let vm = this;
    vm.isPolitical = true;
    vm.$state = $state;
    vm.$stateParams = $stateParams;
    vm.PoliticalNews = PoliticalNews;
    vm.EntertainmentNews = EntertainmentNews;
    vm.transition = transition;
    function PoliticalNews() {
      vm.isPolitical = true;
      console.log("Political");
    };
    function EntertainmentNews() {
      vm.isPolitical = false;
      console.log("Entertainment");
    };
    function transition(tab) {
      vm.$stateParams.tab = tab;
      $state.transitionTo($state.current.name, angular.extend($stateParams, {tab: tab}));
    };
  }

}