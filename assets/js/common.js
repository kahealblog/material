/* 페이지 로딩이 끝나면 페이지 로딩창을 없애준다. */
window.onload = function(){
	setTimeout(function(){ // 확인하실 수 있도록 1초 후에 로딩이 사라지도록 구현 (해당 줄 삭제하면됩니다)
	$("#pageLoading").fadeOut(500,function(){
		$("#pageLoading").remove();	
	});		 
	},1000); // 확인하실 수 있도록 1초 후에 로딩이 사라지도록 구현 (해당 줄 삭제하면됩니다)
}