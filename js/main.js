$(function(){
	function change(){
	var width=$(window).width();
	var isSmall=width<768; 
		$("#main_ad .carousel-inner").children().each(function(i,item){
			var $item=$(item);
			var imgSrc=isSmall ?  $item.data('img-sm') :  $item.data('img-lg') ;
			 $item.css("backgroundImage","url('"+imgSrc+"')");
			 if(isSmall){
			 	$item.html('<img src="'+imgSrc+'" />')
			 }else{
			 	$item.empty();
			 }
		});

	}
change();
$(window).on('resize',change);
	var startX , endX;
	$(".carousel").on('touchstart',function(e){
		
		// var touch=e.originalEvent,
		startX =  e.originalEvent.touches[0].clientX;
	});
	$(".carousel").on('touchmove',function(e){
		endX= e.originalEvent.touches[0].clientX;
	});
	$(".carousel").on('touchend',function(e){
		var distance=Math.abs(startX-endX);
		console.log(distance);
		if(distance>50){
			$(this).carousel(startX > endX ? 'next' : 'prev')
		}
	});

	

	
});