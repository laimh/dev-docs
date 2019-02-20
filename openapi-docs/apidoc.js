$(document).ready(function(){
	var cpage = $('body').data('page');
	var cnav = $('.nav a[href="' + cpage + '"]').addClass('active');
	cnav.parent().parent().prev().addClass('active');
	cnav.parent().parent().show();
	$('.nav h4').click(function(){ $(this).next().toggle(); });
	$('.nav h4').each(function(){ $('<i class="fa fa-angle-down"></i>').appendTo(this); });	
	if ($('.nav').height() - 34 > $('.content').height()) $('.content').height($('.nav').height() - 34);
	$('.content h2 small,.content h1 small').each(function(){
		$(this).attr('title', '此接口自 ' + $(this).text() +' 版本开始提供');
	});
});