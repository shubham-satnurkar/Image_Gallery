
$(document).ready(function(){
	$('.list-item').click(function(){
		const value = $(this).attr('data-filter');
		if(value == 'all'){
			$('.img').show('1000');
		}
		else{
			$('.img').not('.'+value).hide('1000');
			$('.img').filter('.'+value).show('1000');
		}
	})

	$('.list-item').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
});