// 处理页面逻辑
$(function(){
	$(".didLogin").hide();
	$(".toTop").on("click",function(){
		$('body,html').animate({scrollTop:0},280);
        return false;
	});
});

// 加载游戏
require(["GameManager"], function(GameManager){
	GameManager.initGame(); // 初始化游戏
	GameManager.loadGame(); // 加载游戏
	console.log(G_ResManager.getFiles("../"))
})
