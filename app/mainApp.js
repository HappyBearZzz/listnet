(function($angular) {

    // Off we go!
    $angular.module('rangeApp', ['ngRangeSlider']).controller('IndexController', function IndexController($scope) {

        /**
         * @property range
         * @type {{from: number, to: number}}
         */
        $scope.range = { from: 0, to: 100 };

        /**
         * @property max
         * @type {Number}
         */
        $scope.max = 100;

        $scope.alterControls = function(){
        	if($(".controls").css("height") === "50px"){
        		$(".controls").animate({height: $(".controls").get(0).scrollHeight}, 500 );
        		$("i.top-left").delay(750).addClass("glyphicon-collapse-up").removeClass("glyphicon-collapse-down");
        	}else{
        		$(".controls").animate({height: "50px"}, 500);
        		$("i.top-left").delay(750).removeClass("glyphicon-collapse-up").addClass("glyphicon-collapse-down");
        	}
        }

    });

})(window.angular);