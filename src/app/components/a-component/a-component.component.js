/**
 * Created by littlestone on 2016/9/6.
 */
let aComponent = {
  templateUrl: 'app/components/a-component/a-component.html',
  bindings: {
    obj: '<',
    prim: '<',
  },
  controller($attrs) {
    'ngInject';
    let $ctrl = this;
    $ctrl.updateValues = function () {
      console.log("前："+$ctrl.prim);
      $ctrl.prim = 10;
      $ctrl.obj = {
        name: 'john',
        age: 35,
        location: 'Unknown'
      };
      console.log("后："+$ctrl.prim);
    };
  }
};
export default aComponent;