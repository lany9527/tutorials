/**
 * Created by littlestone on 2016/10/8.
 */
let CheckboxComponent = {
  templateUrl: 'app/components/checkbox/checkbox.html',
  bindings: {},
  controller: ['$attrs', '$http', '_', function ($attrs, $http, _) {
    let $ctrl = this;
    $ctrl.permissions = [
      {
        label: '联创者管理',
        options: [
          {
            selection: '联创者发起',
            label: 'register'
          },
          {
            selection: '会员列表',
            options: [
              {
                selection: '只读',
                label: 'usrLis'
              },
              {
                selection: '读写',
                label: 'usrLisEdit'
              }
            ]
          },
          {
            selection: '待发起的联创',
            options: [
              {
                selection: '只读',
                label: 'newerList'
              },
              {
                selection: '读写',
                label: 'newerListDel'
              }
            ]
          },
          {
            selection: '分享图谱',
            label: 'netSunList'
          },
          {
            selection: '算力图谱',
            label: 'netArmsList'
          }
        ]
      },
      {
        label: '奖金管理',
        options: [
          {
            selection: '奖金明细（奖金明细）',
            label: 'bonusLis'
          },
          {
            selection: '分享统计（业绩统计）',
            label: 'resultLis'
          },
          {
            selection: '流水明细（流水明细）',
            label: 'wflowLis'
          }
        ]
      },
      {
        label: '联创者资讯',
        options: [
          {
            selection: '公告（读写公告）',
            label: 'cmsMgr'
          },
          {
            selection: '消息（读写消息）',
            label: 'msgMgr'
          }
        ]
      },
      {
        label: '系统管理',
        options: [
          {
            selection: '参数设置（参数设置）',
            label: 'settingMgr'
          },
          {
            selection: '系统维护操作（系统维护）',
            label: 'onlineMgr'
          }
        ]
      }
    ];

    /*//全选按钮
    $ctrl.selectAllPermission = (d)=> {
      let checked = !!$ctrl.permissions.$$check;
      _.each($ctrl.permissions, (label) => {
        label.$$check = checked;
        _.each(label.options, opt=>{
          opt.$$check = checked;
          if (opt.options&&opt.$$check){
            opt.options[0].$$check = true
          }
          else if(opt.options&&!opt.$$check){
            /!*opt.options[0].$$check = false
            opt.options[1].$$check = false*!/
            _.each(opt.options, v=>v.$$check = false)
          }
        });
      });
    };

    //点击子选项前面父选项自动选择全部子选项
    $ctrl.selectAll = function (d) {
      _.each(d.options, opt=>{
        opt.$$check = d.$$check
        if (opt.options&&opt.$$check){
          opt.options[0].$$check = true
        }
        else if(opt.options&&!opt.$$check){
          /!*opt.options[0].$$check = false
          opt.options[1].$$check = false*!/
          _.each(opt.options, v=>v.$$check = false)
        }
      });
      $ctrl.permissions.$$check = $ctrl.permissions.every(v=>v.$$check);
    };

    //点击每一个单独的子选项
    $ctrl.select = function (d,d2) {
      console.log(d2)
      d.$$check = _.every(d.options, v=> v.$$check);
      if (d2.options&&d2.$$check){
        d2.options[0].$$check = true;
      }
      if (d2.options&&!d2.$$check){
        /!*d2.options[0].$$check = false;
        d2.options[1].$$check = false;*!/
        _.each(d2.options, v=>v.$$check = false)
      }
      $ctrl.permissions.$$check = _.every($ctrl.permissions, v=>v.$$check);
    };

    //点击单选按钮
    $ctrl.selectRadio = function (d2, d3) {
      d2.$$check = true;
      if ((d3.label == 'usrLis') || (d3.label == 'newerList')){
        d2.options[0].$$check = true;
        d2.options[1].$$check = false;
      } else if ((d3.label == 'usrLisEdit') || (d3.label == 'newerListDel')){
        d2.options[0].$$check = false;
        d2.options[1].$$check = true;
      }
    }*/

    //全选按钮
    $ctrl.selectAllPermission = ()=> {
      let checked = !!$ctrl.permissions.$$check;
      angular.forEach($ctrl.permissions, function(label) {
        label.$$check = checked;
        angular.forEach(label.options, function(opt) {
          opt.$$check = checked;
          if (opt.options&&opt.$$check){
            opt.options[0].$$check = true
          }
          else if(opt.options&&!opt.$$check){
            angular.forEach(opt.options, function(v){v.$$check = false})
          }
        });
      });
    };

    //点击子选项前面父选项自动选择全部子选项
    $ctrl.selectAll = function (d) {
      angular.forEach(d.options, function(opt){
        opt.$$check = d.$$check
        if (opt.options&&opt.$$check){
          opt.options[0].$$check = true
        }
        else if(opt.options&&!opt.$$check){
          angular.forEach(opt.options, function(v) {v.$$check = false})
        }
      });
      $ctrl.permissions.$$check = angular.forEach($ctrl.permissions,function(v){
        return v.$$check;
      });
    };

    //点击每一个单独的子选项
    $ctrl.select = function (d,d2) {
      console.log(d.options)
      d.$$check = _.every(d.options, v=> v.$$check);

      if (d2.options&&d2.$$check){
        d2.options[0].$$check = true;
      }
      if (d2.options&&!d2.$$check){
        /*d2.options[0].$$check = false;
         d2.options[1].$$check = false;*/
        _.each(d2.options, v=>v.$$check = false)
      }
      $ctrl.permissions.$$check = _.every($ctrl.permissions, v=>v.$$check);
    };

    //点击单选按钮
    $ctrl.selectRadio = function (d2, d3) {
      d2.$$check = true;
      if ((d3.label == 'usrLis') || (d3.label == 'newerList')){
        d2.options[0].$$check = true;
        d2.options[1].$$check = false;
      } else if ((d3.label == 'usrLisEdit') || (d3.label == 'newerListDel')){
        d2.options[0].$$check = false;
        d2.options[1].$$check = true;
      }
    }
  }]
};
export default CheckboxComponent;