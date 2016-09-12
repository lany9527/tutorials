/**
 * Created by littlestone on 2016/9/12.
 */
let PersonListComponent = {
  templateUrl: 'app/components/person-list/person-list.html',
  bindings: {
    person: '<'
  },
  controller (people){
    'ngInject';
    let $ctrl = this;
    $ctrl.peopleList = [];
    $ctrl.getPeopleList = () => {
      return people.getAllPeople().then(function (resp) {
        console.log(resp);
        $ctrl.peopleList = resp.data;
      });
    }
    $ctrl.$onInit = function () {
      $ctrl.getPeopleList();
    }
  }
};
export default PersonListComponent;