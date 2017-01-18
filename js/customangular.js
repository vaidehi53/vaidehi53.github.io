(function(){
	var app = angular.module('myapp', []);

app.controller('mycontrol', function($scope){
	var chairs =[
	{ label: "Office chairs", show: ".ul1"},
	{ label: "Kids chairs", show: ".ul2"},
	{ label: "Woods chairs", show: ".ul3"}
	 ];
 	$scope.chairs=chairs;
});

app.controller('productsController', function(){
	this.proChair = productChair;
	this.kids = productChairkids;
	this.wood = productChairwood;
});

var productChair = [
 	{images: "images/office2.jpg"},
 	{images: "images/office1.jpg"},
 	{images: "images/office1.jpg"},
 	{images: "images/office2.jpg"},	
 ];
 var productChairkids = [
 	{images: "images/kids1.jpg"},
 	{images: "images/kids2.jpg"},
 	{images: "images/kids1.jpg"},
 	{images: "images/kids2.jpg"},	
 ];

 var productChairwood = [
 	{images: "images/wood1.jpg"},
 	{images: "images/wood2.jpg"},
 	{images: "images/wood1.jpg"},
 	{images: "images/wood2.jpg"},	
 ];

})();