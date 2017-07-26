(function() {
  "use strict";

  var app = angular.module("myApp", ["ngTable", "ngTableDemos"]);

  app.controller("demoController", demoController);

  demoController.$inject = ["NgTableParams", "ngTableSimpleMediumList", "ngTableDemoCountries"];

  function demoController(NgTableParams, simpleList, countries) {
    this.countries = countries;
    this.tableParams = new NgTableParams({
      sorting: {
        name: "asc"
      },
      filter: {
        name: "T"
      }
    }, {
      dataset: simpleList
    });
  }

  app.controller("dynamicDemoController", dynamicDemoController);

  dynamicDemoController.$inject = ["NgTableParams", "ngTableSimpleMediumList", "ngTableDemoCountries"];

  function dynamicDemoController(NgTableParams, simpleList, countries) {
    this.cols = [{
      field: "name",
      title: "Name",
      sortable: "name",
      filter: {
        name: "text"
      },
      show: true
    }, {
      field: "age",
      title: "Age",
      sortable: "age",
      filter: {
        age: "number"
      },
      show: true
    }, {
      field: "money",
      title: "Money",
      sortable: "money",
      filter: {
        money: "number"
      },
      show: true
    }, {
      field: "country",
      title: "Country",
      sortable: "country",
      filter: {
        country: "select"
      },
      filterData: countries,
      show: true
    }];

    this.tableParams = new NgTableParams({
      // initial filter
      filter: {
        country: ""
      },
      sorting: {
        age: "desc"
      }
    }, {
      dataset: simpleList
    });
  }
})();

(function() {
  "use strict";

  angular.module("myApp").run(setRunPhaseDefaults);
  setRunPhaseDefaults.$inject = ["ngTableDefaults"];

  function setRunPhaseDefaults(ngTableDefaults) {
    ngTableDefaults.params.count = 5;
    ngTableDefaults.settings.counts = [];
  }
})();
