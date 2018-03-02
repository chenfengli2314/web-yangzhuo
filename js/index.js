$(function(){
	var leftX,newWidth,num;
	$(".menu ul").append('<div class="block"></div>');
	$("section.jing div.pic ul").eq(0).css("display","block");
	var $block=$(".block");
	$(".menu ul li a").click(function(){
		num=$(this).parent().index();
		leftX=$(this).position().left;
		newWidth=$(this).parent().width();
		$block.stop().animate({"left":leftX,"width":newWidth},400);
		$("section.jing div.pic ul").css("display","none");
		$("section.jing div.pic ul").eq(num).fadeIn(400);
	})
	var num=0;
	var timer=null;
	clearInterval(timer);
	$("#xiang ul").css("width","1524px");
	timer=setInterval(function(){		
		$("#xiang ul").stop().animate({"left":-508*num},1200);
		num++;
		if(num==3){
			num=0;
		}
	},2500);
});