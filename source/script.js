// Nixy-JavaScript Document
$(function(){
		$('div.fade > img').css({'opacity':0})
		$('div.fade > img.img0').css({'opacity':1})
	
    /*-------------------- slide Show -----------------------*/
	function goslid(){
		
		if($('div.scroll').css('left')=='-6860px'){
			$('div.scroll').stop().animate({'left':'0px'},500)
		}else{
			$('div.scroll').stop().animate({'left':'-=980px'},500);	
		}
	}
	
	$('div.controlbox > div').hover(function(){
		$('div.controlbox > div').stop().animate({'margin-top':'0px'},400)
		},function(){
			$('div.controlbox > div').eq(0).stop().animate({'margin-top':'50px'},400,'linear',function(){
			$('div.controlbox > div').eq(1).stop().animate({'margin-top':'50px'},400,'linear',function(){
			$('div.controlbox > div').eq(2).stop().animate({'margin-top':'50px'},400,'linear',function(){
			$('div.controlbox > div').eq(3).stop().animate({'margin-top':'50px'},400,'linear',function(){
			$('div.controlbox > div').eq(4).stop().animate({'margin-top':'50px'},400,'linear',function(){
			$('div.controlbox > div').eq(5).stop().animate({'margin-top':'50px'},400,'linear',function(){
			$('div.controlbox > div').eq(6).stop().animate({'margin-top':'50px'},400,'linear',function(){
			$('div.controlbox > div').eq(7).stop().animate({'margin-top':'50px'},400,'linear',function(){
			})	
			})	
			})	
			})	
			})	
			})
			})
			})	
		})
		
	$('div.controlbox > div').click(function(){
		clearInterval(timer);
		$('div.scroll').stop().animate({'opacity':'0'},400,'linear',function(){
			$('div.scroll').css({'left':-980*inx})
			});
		var inx = $('div.controlbox > div').index(this);
		$('div.fade > img').stop().animate({'opacity':0},400)
		$('div.fade > img.img'+inx).stop().animate({'opacity':1},400)
			
	})
	
	
	var timer =self.setInterval(goslid,4000);	
	
	$('div.slideshow').hover(function(){},function(){
		$('div.scroll').css({'opacity':'1'})
			setInterval(goslid,4000);
	})
	
})