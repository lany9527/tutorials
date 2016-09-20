export class ContactController {
  constructor() {
    'ngInject';
    let vm = this;
    vm.parentPrimitive = 99;
    vm.someObject = {
      name: 'todd',
      age: 25,
      location: 'England, UK'
    };
    vm.updateValues = () => {
      console.log("前："+vm.parentPrimitive);
      vm.parentPrimitive = 33;
      vm.someObject = {
        name: 'jilles',
        age: 20,
        location: 'Netherlands'
      };
      console.log("后："+vm.parentPrimitive);
    };
  }

}