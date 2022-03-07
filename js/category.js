
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
			'display': 'block',
			'width': '50%'
		});
        
    });

	$(window).on('resize', function(){
		if($(this).width()>767){
			$("#navbar").show();
		}
		else{
			$("#navbar").hide();
		}
	})

	let $read = $("#read")
	let $txt = $("#txt");
	$read.on('click', function(){
		$txt.toggle(500, ()=>{

			if($txt.css('display')== 'none'){
				$read.text("Read More...")
				return false
			}
			else if($txt.css('display')== 'block'){
				$read.text("Less...")
				return false
			}
			else{
				$read.text("Read More...")
				return true
			}
		});
	})


});