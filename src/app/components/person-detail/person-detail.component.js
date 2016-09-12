/**
 * Created by littlestone on 2016/9/12.
 */
let PersonDetailComponent = {
  templateUrl: 'app/components/person-detail/person-detail.html',
  bindings: {
    person: '<'
  },
  controller (people){
    'ngInject';
    let $ctrl = this;
    $ctrl.personData = [];
    $ctrl.getPersonDetail = () => {
      return people.getAllPeople().then(function (resp) {
        $ctrl.personData = resp.data;
      });
    };

    $ctrl.$onInit = function () {
      $ctrl.getPersonDetail();
    }
  }
};
export default PersonDetailComponent;