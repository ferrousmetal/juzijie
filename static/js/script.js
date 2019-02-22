$(document).ready(function(){
	
	//顶部导航菜单
	$('.user-menu-button').on('click',function(e){
		if($('.user-menu-list').is(':hidden')){
			$('.user-menu-list').show();	
		}else{
			$('.user-menu-list').hide();
		};
		e.stopPropagation();
	});
	$('.user-menu-list').on('click',function(e){
		$('.user-menu-list').show();
		e.stopPropagation();
	});
	$(document).on('click',function(e){
		if($('.user-menu-list').is(':visible')){
			$('.user-menu-list').hide();	
		};
		e.stopPropagation();	
	});
	
		//关闭下载浮动条
	$('.m-download .close').on('click',function(){
		$.post('/trust/index/index',{status:1},function(data){
			$('.m-download').hide();
			$('.m-download-container').hide();			
		});
	});

	//理财专区导航
	$('.m-filter-nav .item').each(function(){
		var value = $(this).find('.value');
		var val = value.find('.val em');
		var list = $(this).find('.list');
		var listLi = list.find('li');
		value.on('click',function(e){
			if(list.is(':hidden')){
				$('.m-filter-nav .item').find('.list').hide();
				$('.m-filter-nav .item').find('.value').removeClass('z-active');
				value.addClass('z-active');
				list.show();
			}else{
				value.removeClass('z-active');
				list.hide();
			};	
			e.stopPropagation();
		});
		listLi.on('click',function(){
			val.text($(this).text());
			value.removeClass('z-active');
			list.hide();
		});
		$(document).on('click',function(e){
			if($('.m-filter-nav .item').find('.list').is(':hidden')){
				$('.m-filter-nav .item').find('.list').hide();
				$('.m-filter-nav .item').find('.value').removeClass('z-active');
			};
			e.stopPropagation();
		});
	});

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
	
	//选择券
	$('.quan-select').each(function(){
		var title = $(this).find('.title');
		var list = $(this).find('.list');
		var listLi = list.find('li');
		var pay_money = $('#wap_buy_bid_number').val();
		title.click(function(){
			if($(this).hasClass('z-active')){
				$('#realPay').text(pay_money);
				 $("input[name='coupon_no']").val('');
				$(this).removeClass('z-active');
				list.hide();
				listLi.removeClass('z-active');
			}else{
				$(this).addClass('z-active');
				list.show();
			};
		});
	});
	
	//select下拉
	$('.u-select').each(function(){
		var value = $(this).find('.value');
		var val = value.find('.val');
		var list = $(this).find('.list');
		var listLi = list.find('li');
		listLi.each(function(){
			if($(this).text()==val.text()){
				$(this).addClass('z-active').siblings().removeClass('z-active');
			};
		});
		value.on('click',function(e){
			if(list.is(':hidden')){
				$('.u-select').find('.list').hide();
				list.show();
			}else{
				list.hide();
			};	
			e.stopPropagation();
		});
		listLi.on('click',function(){
			$(this).addClass('z-active').siblings().removeClass('z-active');
			val.text($(this).text());
			list.hide();
		});
		$(document).on('click',function(e){
			if($('.u-select').find('.list').is(':hidden')){
				$('.u-select').find('.list').hide();
			};
			e.stopPropagation();
		});
	});
	
	//银行卡绑定-银行卡列表
	$('.card-select').each(function(){
		var listLi = $(this).find('.list li');
		listLi.on('click',function(){
			if($(this).hasClass('z-active')){
				return;	
			}else{
				listLi.removeClass('z-active');	
				$(this).addClass('z-active');
			};
		});
	});
	
	//兑换券
	$('.list-exchange').each(function(){
		var listLi = $(this).find('li');
		listLi.click(function(){
			listLi.removeClass('z-active');
			$(this).addClass('z-active');	
		});	
	});
	
	//回款计划切换
	$('.return-toggle').each(function(){
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
	
	//我的红包
	$('.list-quan').each(function(){
		var content = $(this).find('.content');
		var detail = $(this).find('.detail');
		content.click(function(e){
			if($(this).next('.detail').is(':hidden')){
				content.removeClass('z-active');
				detail.hide();
				$(this).addClass('z-active');
				$(this).next('.detail').show();
			}else{
				$(this).removeClass('z-active');
				$(this).next('.detail').hide();
			};
			e.stopPropagation();
		});
		$(this).find('.button').click(function(e){
			e.stopPropagation();	
		});
	});
	
	//弹出层
	/*$('.layer-loading').each(function(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var layerOuterWidth = $(this).outerWidth(true);
		var layerOuterHeight = $(this).outerHeight(true);
		var layerLeft = (windowWidth - layerOuterWidth) / 2;
		var layerTop = (windowHeight - layerOuterHeight) / 2;
		$(this).css({
			'left' : layerLeft,
			'top' : layerTop
		});
	});*/
	
	//环保公益用款详情
	$('.use-detail').each(function(){
		var morea = $(this).find('.more a');
		var content = $(this).find('.content');
		morea.click(function(){
			if($(this).parents().siblings('.content').height() == 72){
				content.removeClass('z-active');
				$(this).parents().siblings('.content').addClass('z-active');
			}else{
				$(this).parents().siblings('.content').removeClass('z-active');
			}
		});
	});
	
	//贡献值兑换
	$(".contribution-detail .button").click(function(){
		if($(this).hasClass('z-active')){
			$(this).removeClass('z-active').html('兑换');
			$('.contribution-toggle-record').show();
			$('.contribution-toggle-exchange').hide();
		}else{
			$(this).addClass('z-active').html('取消');
			$('.contribution-toggle-record').hide();
			$('.contribution-toggle-exchange').show();
		};	
	});
	
	//帮助中心添加锚点
    /*var targetId = window.location.hash;
    if(targetId != ""&& targetId != undefined){
        if($(targetId)){
        	$(targetId).click();
        	$(document).scrollTop($(targetId).offset().top - 48);
			$("body,html").animate({
		          scrollTop: $(targetId).offset().top - 48
		    }, 0);
        }
    }*/
	
});