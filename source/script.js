// Nixy-JavaScript Document
$(function(){
	
		var timer;
			
			function startslider(){
			
				timer = setInterval(FlashForwared,3000);
				
			};
			
			startslider();
			
	
	/* Create css obj{} for saveing css Property */
	css = {
			left:[],
			top:[]		
		}
		
		var duration = 700
		
		/* Get the number of slides */
		var imgx = $('div.scroll > img').index();
		
		
		
		/* Import Element.style.left & Element.style.left To css obj */
		
		for(var i = 0; i <= imgx ; i++ ){
			
			/* Add Value style.left  To left[] */
			css.left.push($('div.scroll > img').eq(i).css('left'));
			
			/* Add Value style.top  To top[] */
			css.top.push($('div.scroll > img').eq(i).css('top'))
		}
		
		
		/* Go To Last Slide */
		function FlashBack(){
			/*cut frist Value from left[] And add it to the end left[]*/
			css.left.push(css.left.shift());
			
			/*cut frist Value from top[] And add it to the end top[]*/
			css.top.push(css.top.shift());
			
			for(var j = 0;j<=imgx;j++){
				
				/* Add animation to change on css{}  */
				$('div.scroll > img').eq(j).stop().animate({
					
				'left': css.left[j],
				'top': css.top[j]
				
				},duration,'easeInOutCirc');
			}
		}
		
		
		/* Go To Next Slide */
		function FlashForwared(){
			/*cut Last Value from left[] And add it to the First on the left[]*/
			css.left.unshift(css.left.pop());
			
			/*cut Last Value from top[] And add it to the First on the top[]*/
			css.top.unshift(css.top.pop());
			
			
			for(var j = 0;j<=imgx;j++){
				
				/* Add animation to change on css{}  */
				$('div.scroll > img').eq(j).animate({
					
				'left': css.left[j],
				'top': css.top[j]
				
				},duration,'easeInOutCirc');
			}
		}
			
			
		$('div.controlbox').hover(function(){
			
			$('div.controlbox > div').stop().animate({
				
				'margin-top':'0px'
				
			},duration-300)
			
			},function(){
				
				/*It is recommended Masoud :) --->  https://github.com/seeking */
				
			var i = 0,
			
			dur = duration;
			
		(pullDown = function () {
			
			delay = 100;
			
			$('div.controlbox > div').eq(i++).stop().animate({
				
				'margin-top': '50px'
				
			}, dur - 300, 'easeInOutCirc');
			
			(i - 1) == imgx ? clearTimeout(Int) : (Int = setTimeout(pullDown, delay));
			
		})();
		
			})
			
			$('div.controlbox > div',this).click(function(){
				var thisimx = $(this).index();
				
				
				$('div.scroll').stop().animate({
					
					'opacity':'0'
						
				},400)
				
				$('div.fade > img').animate({
					
					'opacity':'0'
						
				},1)
				
				$('div.fade > img').eq(thisimx).animate({
					
					'opacity':'1'
						
				},600)

			})
			
			$('div.slideshow').hover(function(){},function(){
				
				$('div.scroll').delay(1000).animate({opacity:1},500,'linear',function(){
					
					if(timer == 0){
						setTimeout(startslider,3000);
						timer = 1;	
					}
					
				});
				})
		
		


	$('div.b-btn').click(function(){
			
		FlashBack();
		clearInterval(timer);
		timer = 0;
	})
	
	$('div.f-btn').click(function(){
		
			FlashForwared();
			clearInterval(timer);
			timer = 0;
			
			
	})
	
})