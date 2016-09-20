/**
 * Created by littlestone on 2016/9/6.
 */
let bComponent = {
  templateUrl: 'app/components/b-component/b-component.html',
  bindings: {
  	filter: '<', //筛选是否显示
  	pagination: '<'
  },
  controller: ['$attrs', '$http', function ($attrs, $http) {
  	let $ctrl = this;
  	$ctrl.filter = $attrs.filter;
  	$ctrl.pagination = $attrs.pagination;

  	let api = 'app/data/people.json';
  	$ctrl.peopleData = [];
  	$ctrl.getPeopleList = function (){
  		$http.get(api).then( (resp) => {
  			$ctrl.peopleData = resp.data;
  			console.log(resp);
  			console.log(resp.data);
  			console.log($ctrl.peopleData);
  		}, (error) => {});
  	};
  	$ctrl.$onInit = function () {
  		$ctrl.getPeopleList();
  	}
  }]
};
export default bComponent;