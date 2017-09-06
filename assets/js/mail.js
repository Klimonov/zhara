			jQuery(document).ready(function() {
				
			

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

});