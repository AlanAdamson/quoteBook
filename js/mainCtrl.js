angular.module('quoteBook').controller('mainCtrl', function($scope, dataServices) {

  $scope.worksOrNot = "It works!";

  $scope.quotes = dataServices.getQuotes();

  $scope.deleteQuote = function(delQuote) {
    dataServices.removeData(delQuote);
  };

  $scope.addQuote = function () {
    var newQuote = {
      text:$scope.newQuoteText,
      author:$scope.newQuoteAuthor
    };
    if(dataServices.addData(newQuote)) {
      $scope.newQuoteText = '';
      $scope.newQuoteAuthor = '';
    }
  };

});
