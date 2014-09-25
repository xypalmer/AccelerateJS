// AccelerateJS by xypalmer 
//https://github.com/xypalmer/AccelerateJS
var acceleratejs = angular.module('acceleratejs', [])

.controller('accelCtrlr', function($scope) {

	window.onscroll = function () {
		$scope.$digest();
		$scope.scroll = window.pageYOffset;
	}
})

// Accelerate attribute
.directive('accelerate', function() {
	return {
		restrict: 'A',
		controller: "accelCtrlr",
		link: function (scope, element, attr) {
			var topmargin = element[0].offsetTop;

			element.css({
				position: "absolute"
			});
			if (scope.$eval(attr.accelerate) != null) {
				scope.$watch("scroll", function () {
					element[0].style.marginTop = (topmargin - window.pageYOffset * scope.$eval(attr.accelerate)) + "px";
				})
			}
			else {
				scope.$watch("scroll", function () {
					element[0].style.marginTop = (topmargin - window.pageYOffset) + "px";
				})
			}
		}
	}
})


// Content area for acceleratable divs
.directive('parallax', function () {
	return {
		restrict: 'E',
		link: function (scope, element) {
			element.css({
				width: 0,
				height: 0,
				position: "absolute",
				marginLeft: "auto",
				marginRight: "auto",
				right: 0,
				left: 0,
				overflow: "visible"
			})
		}
	}
})

// Z-indexes
.directive('z', function () {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			if (scope.$eval(attr.z) != null) {
				element.css({
					zIndex: scope.$eval(attr.z)
				})
			}
		}
	}
});

