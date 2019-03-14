define([], function(){
	var Scene = function(){
		PIXI.Container.call(this)
	};
	Scene.prototype = new PIXI.Container();
	Scene.prototype.init = function(){
		console.log("Initializing Scene !");
	};
	Scene.prototype.loadAndRun = function(){
		console.log("Running Scene !");
		PIXI.loader
		.add("../../img/test.jpg")
		.load(this.run);
	};
	Scene.prototype.run = function(){
		var sprite = new PIXI.Sprite(PIXI.loader.resources["../../img/test.jpg"].texture);
		this.addChild(sprite);
		G_Renderer.render(G_Stage);
	};
	return Scene;
});