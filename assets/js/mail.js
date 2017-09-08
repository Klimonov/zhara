			jQuery(document).ready(function() {
				
			$(".popup-form, .popup-form1").submit(function() {
		$('.send-message').delay(300).css({'visibility': 'visible'}).animate({'opacity':'1'}, 1200);
		$('.send-message').delay(1200).animate({'opacity':'0'}, 1200, function () {
			$(this).css({'visibility': 'hidden'})  });
		$('#contact-section1').animate({'opacity':'0'}, 600).css({'visibility': 'hidden'});

		$.ajax({
			type: "POST",
			url: "assets/php/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$(this).find("select").val("");
			$(this).find("textarea").val("");
			$(".form").trigger("reset");
		});
		return false;
		});

	

$("#header-book-bow").on("click", function() {
$('#contact-section1').animate({'opacity':'1'}, 600).css({'visibility': 'visible'})
});



 
$(".popup-close").on("click", function() { 
$('#contact-section1').animate({'opacity': '0'}, 600, function () { 
$(this).css('visibility', 'hidden') }); });

});