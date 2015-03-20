/**
*  Module
*
* Description
*/
angular.module('eventModule', []).
config([function() {
	console.log("Thing");
}]).
run([function(){
	console.log("Thing");
}]).
controller('EventCtrl', ['$scope', 'MainTitle', function($scope, mainTitle){
	$scope.title = mainTitle.title;
	$scope.menu = [
		{
			name:"Events",
			href:"index.html"
		},
		{
			name:"Contact",
			href:"contact.html"
		}
	]

	$scope.index = 0;

	$scope.addMenu=function(val){
		$scope.menu[$scope.menu.length] = {name: val};
	}

	$scope.setIndex=function(val){
		$scope.index = val;
	}

	$scope.getIndex=function(){
		return($scope.index);
	}

}]).
controller('EventItemCtrl', ['$scope', 'MainTitle', function($scope, mainTitle){
	$scope.items = [
		{
			title:"First Item",
			content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia rerum et sint ipsam adipisci recusandae qui minus velit itaque, voluptatibus mollitia dolor aut hic perspiciatis unde ducimus ut. Ex, ad."
		},
		{
			title:"Second Item",
			content:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, magni illum illo laudantium, error nihil eum aut impedit vitae officia, nam molestias, optio culpa fugit excepturi minus non provident! Fugit.ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, obcaecati libero ab, in impedit hic nam tenetur id maiores, deserunt nisi aliquid! Id nihil laudantium, vitae sunt maiores mollitia voluptatum!"
		}
	]

	$scope.title = mainTitle.title;
	$scope.content = $scope.items[0]["content"];

	$scope.setContent=function(index){
		$scope.content = $scope.items[index]["content"];
	}


}])