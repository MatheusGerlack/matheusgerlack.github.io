(function(){
  var thumbnails = [

	  { src: "img/hostel1.jpg", dist:"Hostel 1" },
	  { src: "img/nature1.jpg", dist:"Hostel 2" },
	  { src: "img/hostel2.jpg", dist:"Nature 1" }

  ];
  
  var app = angular.module('myResumeApp', []);

	  app.controller('myResumeController', function(){
	  this.fotos = thumbnails;
	  });

	  app.controller('PanelController', function(){
		  this.tab = 1;

		  this.selectTab = function(setTab){
		  	this.tab = setTab;
		  };

		  this.isSelected = function(checkTab){
		  	return this.tab === checkTab;
		  };

	  });

})();