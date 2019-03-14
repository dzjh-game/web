define([], function(){
	var Director = function(){
		this.sceneList = [];
	};
	Director.prototype.createScene = function(sceneClass){
		scene = new sceneClass();
		scene.init();
		this.sceneList.push(scene);
		return scene;
	};
	Director.prototype.runScene = function(scene){
		scene.loadAndRun();
	};
	return Director
})