/**
 * Created by littlestone on 2016/10/8.
 */
let CheckboxComponent = {
  templateUrl: 'app/components/checkbox/checkbox.html',
  bindings: {

  },
  controller: ['$attrs', '$http', function ($attrs, $http) {
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
    console.log($ctrl.permissions)
    //全选按钮
    $ctrl.selectAllPermission = function () {
      console.log("全选按钮");
      var checked = !!$ctrl.permissions.$$check;
      angular.forEach($ctrl.permissions, function (label) {
        label.$$check = checked;
        angular.forEach(label.options, function (opt) {
          opt.$$check = checked;
        });
      });
    };
    //点击子选项前面父选项自动选择全部子选项
    $ctrl.selectAll = function (d) {
      var value = !!d.$$check;
      var result = true;
      angular.forEach($ctrl.permissions, function (v) {
        if (!v.$$check) result = false;
      });
      $ctrl.permissions.$$check = result;
      angular.forEach(d.options, function (opt) {
        opt.$$check = value;
      });
    };

    //点击每一个单独的子选项
    $ctrl.select = function (d) {
      var parent = true;
      // 父级
      angular.forEach(d.options, function (v) {
        if(!v.$$check) parent = false;
      });
      d.$$check = parent;
      var total = true;
      // 总的
      angular.forEach($ctrl.permissions, function (v) {
        if(!v.$$check) total = false;
      });
      $ctrl.permissions.$$check = total;
    };


  }]
};
export default CheckboxComponent;