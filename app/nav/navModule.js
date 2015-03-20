/**
* navModule Module
*
* Module to control the navigation
*/
angular.module('navModule', []).
config([function() {
	console.log("Nav Module:: Configuration");
}]).
run([function(){
	console.log("Nav Module:: Run");
}]).
controller('HeaderCtrl', [function(){
	this.title = "New Website Title";
	this.logo  = "http://lorempixel.com/25/25/";
	this.tagline = "The Coolest Site Ever";
	this.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam inventore labore deserunt totam, tempore enim illum dignissimos tempora id! Cupiditate vitae, vero modi nemo quo nesciunt eveniet voluptatibus corrupti reiciendis."
}]).
controller('NavigationCtrl', [function(){

	// Control Navigation Indices
	this.index = 0;

	this.setIndex = function(newIndex){
		this.index = newIndex;
		return false;
	}

	this.navItems = [
		{
			title: "Home",
			href: "index.html"
		},
		{
			title: "Profile",
			href: "profile.html"
		},
		{
			title: "Contact",
			href: "contact.html"
		}
	];

}])