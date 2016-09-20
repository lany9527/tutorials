/**
 * Created by littlestone on 2016/9/6.
 */
let bComponent = {
  templateUrl: 'app/components/b-component/b-component.html',
  bindings: {
    filter: '<',     //筛选是否显示
    pagination: '<',    //翻页控制
    operation: '<'    //显示操作
  },
  controller: ['$attrs', '$http', function ($attrs, $http) {
    let $ctrl = this;
    $ctrl.filter = $attrs.filter;
    $ctrl.pagination = $attrs.pagination;
    $ctrl.operation = $attrs.operation;

    let api = 'app/data/people.json';
    $ctrl.peopleData = [];
    $ctrl.getPeopleList = ()=> {
      $http.get(api).then((resp) => {
        $ctrl.peopleData = resp.data;
        /*console.log(resp);
        console.log(resp.data);
        console.log($ctrl.peopleData);*/
      }, (error) => {
        console.log(error);
      });
    };

    /*$ctrl.getChinaInfo = () => {
      $http.get('app/data/china.json').then((resp) => {
          // console.log(resp.data);
        })
    }*/
    $ctrl.$onInit = function () {
      $ctrl.getPeopleList();
      // $ctrl.getChinaInfo();
    }
  }]
};
export default bComponent;