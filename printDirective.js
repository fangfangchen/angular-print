const $ = require('jquery');
require('./jquery-migrate');
require('./local/jquery-jqprint');

app.directive('printDirective', print);

function print () {
  return {
    restrict: 'E',
    replace: true,
    template: '<button class="btn btn-default">打印</button>',
    link: function (scope, element, attrs, ctrl) {
      let printScope = attrs.printscope; // 需要打印的范围id
      element.bind('click', function () {
        angular.element(document.getElementById(printScope)).jqprint();
        // var oldHtml = document.body.innerHTML;
        // document.body.innerHTML = document.getElementById(printScope).innerHTML;
        // window.print();
        // document.body.innerHTML = oldHtml;
        // window.location.reload();
      });
    }
  };
}
