
$(document).ready(function(){
	// Image Tab Onclick Events for category
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



	// Menu Button Onlick Collapse menu
	$('#menuBtn').click(function(event){
        $('#navbar').toggle(500).css({
			'display': 'flex',
			'width': '50%'
		});
        console.log("Clicked")
    });

	$(window).resize(function(){
		if($(this)>767){
			$("#navbar").show()
			
		}
	})





});