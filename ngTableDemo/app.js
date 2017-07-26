var app = angular.module('app', ['ngTable']);
app.controller('MainCtrl', ['$scope', '$http','ngTableParams' ,
    function ($scope, $http, ngTableParams) {
    tableData = [];

    this.cols = [{
      field: "name",
      title: "Name",
      sortable: "name",
      
      show: true
    }, {
      field: "age",
      title: "Age",
      sortable: "age",

      show: true
    }, {
      field: "money",
      title: "Money",
      sortable: "money",

      show: true
    }, {
      field: "country",
      title: "Country",
      sortable: "country",

      filterData: [],
      show: true
    }];

    //Table configuration
    this.tableParams = new ngTableParams({
        page: 1,
        count: 6
    },{
        total:tableData.length,
        //Returns the data for rendering
        getData : function($defer,params){
        $http.get('data.json').then(function(response) {
                tableData =[{
        name :"xacviran",
        age :27,
        country:"India",
        money : 9083000
      },
      {
        name :"bbiran",
        age :27,
        country:"India",
        money : 48000
      },
      {
        name :"uiiran",
        age :27,
        country:"India",
        money : 2302300
      },
      {
        name :"Kuewqran",
        age :27,
        country:"India",
        money : 2090284000
      }];
                $defer.resolve(tableData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                params.total(tableData.length);
            });
        }
    });
}]);
