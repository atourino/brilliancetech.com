$(function(){
   
    $(".scroll_to_top").click(function() {$.scrollTo($("#top").position().top, 300);});
	$(".scroll_to_servicios").click(function() {$.scrollTo($("#servicios").position().top, 300);});
	$(".scroll_to_clientes").click(function() {$.scrollTo($("#clientes").position().top, 300);});
	$(".scroll_to_equipo").click(function() {$.scrollTo($("#equipo").position().top, 300);});
	$(".scroll_to_contacto").click(function() {$.scrollTo($("#contacto").position().top, 300);});
	
	
	// Contact form, click to remove text feature
	$('#cf_name,#cf_email,#cf_message').each(function() {
		var original_txt = this.value;
		
		$(this).focus(function() 
		{
			if(this.value == original_txt) { this.value = ''; }
		});
		$(this).blur(function() 
		{
			if(this.value === '') { this.value = original_txt; }
		});
	});
	
	
	// Slider navigation expand and contract
	var extraPadding = '15px';
	$('.slider a.prev').hover(function() {
		$(this).animate({ paddingLeft : "+="+extraPadding }, 100);        
	}, function() {
		$(this).animate({ paddingLeft : "-="+extraPadding }, 100);
	});
	$('.slider a.next').hover(function() {
		$(this).animate({ paddingRight : "+="+extraPadding }, 100);       
	}, function() {
		$(this).animate({ paddingRight : "-="+extraPadding }, 100);  
	});
	
	
	// contact form validation
	var hasChecked = false;
	$("#cf_submit").click(function () { 
		hasChecked = true;
		return checkForm();
	});
	$("#cf_name,#cf_email,#cf_message").live('change click', function(){
		if(hasChecked === true)
		{
			return checkForm();
		}
	});
	function checkForm()
	{
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w\-]+\.)+[\w\-]{2,4})?$/;
		if($("#cf_name").val() === '') {
			hasError = true;
		}
		if($("#cf_email").val() === '') {
			hasError = true;
		}else if(!emailReg.test( $("#cf_email").val() )) {
			hasError = true;
		}
		if($("#cf_message").val() === '') {
			hasError = true;
		}
		if(hasError === true)
		{
			$("#contact-form-errror").fadeIn();
			return false;
		}else{
			return true;
		}
	}
	// end contact form validation
	
	

	//	********************************
	//	Add additional functions here...
	//	********************************
	
	

    var sliderID = "#slider_1";
    $(sliderID).jCarouselLite({
      btnNext: sliderID + " .next",
      btnPrev: sliderID + " .prev",
      //auto: 7000,
      visible: 1,
      afterEnd: function(e) {
          var active_text = e[0].id;
          $('.swap_this').fadeOut('fast', function() {
              $('#text_' + active_text).toggle().siblings().hide();
              $('.swap_this').fadeIn('fast');
          });
      }
    });
	
	
}); // end document.ready


	
