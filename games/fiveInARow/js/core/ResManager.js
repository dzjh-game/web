define([], function(){
	var ResManager = function(){
	};
	ResManager.prototype.getFiles = function(path){
		var fso = new ActiveXObject("Scripting.FileSystemObject");
		var fldr = fso.GetFolder(path);
		return fldr.files;
	};
	return ResManager
})