define(["core/Director", "core/ResManager", "scene/GameScene"], function(Director, ResManager, GameScene){
	// 初始化游戏
	var initGame = function(){
		console.log("Initing Game !");
		// 初始化渲染区域
		var $GameContent = $("#gameContent");
		G_Stage = new PIXI.Stage();
		G_Renderer = PIXI.autoDetectRenderer($GameContent.width(),document.documentElement.clientHeight);
//		G_Renderer.autoResize = true;
//		renderer.resize(window.innerWidth, window.innerHeight);
		$GameContent.append(G_Renderer.view);
		// 加载全局变量
		G_Director = new Director();
		G_ResManager = new ResManager();
	};
	// 加载游戏
	var loadGame = function(){
		console.log("Loading Game !");
	};
	// 开始游戏
	var startGame = function(){
		console.log("Starting Game !");
		var gameScene = G_Director.createScene(GameScene);
		G_Stage.addChild(scene);
		G_Director.runScene(gameScene);
	};
	// 暂停游戏
	var pauseGame = function(){
		console.log("Pausing Game !");
	};
	// 停止游戏
	var stopGame = function(){
		console.log("Stopping Game !");
	};
	return {
		initGame : initGame,
		loadGame : loadGame,
	};
})