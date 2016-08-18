var app=angular.module('appendDiv', [])
app.controller("AppendCtrl", function($scope) {

    $scope.appendFunction = function(star) {
    //alert("I like the book!, and gave " + star + " star.")
	 var myEl = angular.element( document.querySelector( '#divID' ) );
     if(star!==''){
		 if(star!=undefined) myEl.append('<div class="elementA">'+star+'</div>');
	}
	else myEl.html('<span id="message">Enter text in input field , please</span>');
	 
}

})

.directive("appendInfo", function() {
    return {
        restrict: 'E',
        scope: {
            add: '&'
        },
        template: '<input type="text" ng-model="starCount" placeholder="Add text"/><br/><br/>' +
        '<input type="button" ng-click="add({star: starCount})" value="Add"/>'
    }
})