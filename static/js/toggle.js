$(document).ready(function(){
	




	//项目详情介绍切换
	$('.detail-toggle').each(function(){
		var title = $(this).find('.title');
		var content = $(this).find('.content');
		title.click(function(){
			if($(this).next('.content').is(':hidden')){
				title.removeClass('z-active');
				content.hide();
				$(this).addClass('z-active').next('.content').show();
			}else{
				$(this).removeClass('z-active').next('.content').hide();	
			};	
		});
	});
	
	
});