;(function($){
	$.fn.silde=function(opt){
		var obj={
			way:"maxH"
		}
		var  set=$.extend({},obj,opt); 
		var w=$("#box img").width()+20;
		var imgs=$("#box img")
		var count=Math.floor($(window).width()/w)
			$(this).width(count*w)
		var arr=[];
		var	p=0;
		function imgto(start,len){
			for(var i=start;i<len;i++){
				if(i<count){
					arr.push(0)
				}
				var imgh=$("#box img").eq(i).height()+20
				var minH=Math.min.apply(Math,arr);
				var	minindex=$.inArray(minH,arr);
					arr[minindex]+=imgh
					$("#box img").eq(i).stop().animate({"top":minH,"left":w*minindex},1000)
						p++		
			}	
		}
		imgto(0,$("#box img").length);
		function incg(){
			var date={"dateimg":[
				{"src":"images/img04.jpg"},
				{"src":"images/img08.jpg"},
				



				{"src":"images/img09.jpg"},
				{"src":"images/img01.jpg"},
				{"src":"images/img02.jpg"},
				{"src":"images/img06.jpg"},
				{"src":"images/img05.jpg"}
			]};
				var maxH=Math.max.apply(Math,arr);
				var maxind=$.inArray(maxH,arr);
			if(set.way=="maxH"){
				$.each(date.dateimg,function(i,val){
				$("<img>").attr(val).css({"left":maxind*w,"top":maxH}).appendTo('#box')
				})
						
			}	
			imgto(p,$("#box img").length)
			
		};

		$(window).on("scroll",function(){
				var docH=$(document).height()-$(window).height();
				if($(window).scrollTop()>=docH){
					incg()	
				}

		})

	}
		
})(jQuery)