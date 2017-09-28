//три этапа корзины
 $("#changeform").on('click', function() {
     if ($("#inputName").val() != 0 && $("#inputPhone").val() != 0 ) {
		$('#firstStep').css({'display': 'none'}); 
		$('.cart__title').css({'display': 'none'}); 
		$('#purchases').css({'display': 'none'}); 
		$('.cart__total').css({'display': 'none'}); 
		$('.sposob-polucheniya').css({'display': 'block'}); 
		$('.header__middle').css({'background-image': 'none'}); 
		$('.header__info, .search__input, .header__enter, .enter, .header__basket, .header__navigation, .header__search, .search, .footer').css({'display' : 'none'});
		var inputNameVal = $("#inputName").val();
		$("#prosloikaName").text(inputNameVal);
		$("#inputNameForm2").val(inputNameVal);
		$("#inputNameForm3").val(inputNameVal);
		var inputPhoneVal = $("#inputPhone").val();
		$("#inputPhoneForm2").val(inputPhoneVal);
		$("#inputPhoneForm3").val(inputPhoneVal);
     } else {
         if ($("#inputName").val() == 0) {
	       $('#inputName').css({'border' : '1px solid red'});
	       $('#inputPhone').css({'border' : '1px solid #ECECEC'});
        } else if ($("#inputPhone").val() == 0 ) {
            $('#inputPhone').css({'border' : '1px solid red'});
            $('#inputName').css({'border' : '1px solid #ECECEC'});
        }
        
     }
   
});


$("#nextOrderForm2").on('click', function() {
 
     if ($("#inputNameForm2").val() == 0 || $("#inputMailForm2").val() == 0 || $("#inputPhoneForm2").val() == 0 || $("#inputAdressForm2").val() == 0 ) {
         if ($("#inputNameForm2").val() == 0) {
	       $('#inputNameForm2').css({'border' : '1px solid red'});
	       $('#inputMailForm2').css({'border' : '1px solid #ECECEC'});
	       $('#inputPhoneForm2').css({'border' : '1px solid #ECECEC'});
	       $('#inputAdressForm2').css({'border' : '1px solid #ECECEC'});
        } else if ($("#inputMailForm2").val() == 0) {
	       $('#inputMailForm2').css({'border' : '1px solid red'});
	       $('#inputNameForm2').css({'border' : '1px solid #ECECEC'});
	       $('#inputPhoneForm2').css({'border' : '1px solid #ECECEC'});
	       $('#inputAdressForm2').css({'border' : '1px solid #ECECEC'});
        } else if ($("#inputPhoneForm2").val() == 0) {
	       $('#inputPhoneForm2').css({'border' : '1px solid red'});
	       $('#inputNameForm2').css({'border' : '1px solid #ECECEC'});
	       $('#inputMailForm2').css({'border' : '1px solid #ECECEC'});
	       $('#inputAdressForm2').css({'border' : '1px solid #ECECEC'});
        } else if ($("#inputAdressForm2").val() == 0) {
	       $('#inputAdressForm2').css({'border' : '1px solid red'});
	       $('#inputNameForm2').css({'border' : '1px solid #ECECEC'});
	       $('#inputMailForm2').css({'border' : '1px solid #ECECEC'});
	       $('#inputPhoneForm2').css({'border' : '1px solid #ECECEC'});
        }
     } else {
        $("#nextOrderForm2").prop({type:"submit"});
        $(".forma-dostavka").css({'display' : 'none'});
        $(".prosloika").css({'display' : 'block'});
       	var inputMailVal = $("#inputMailForm2").val();
		$("#prosloikaMail").text(inputMailVal);
     } 

});


$("#nextOrderForm3").on('click', function() {

     if ($("#inputNameForm3").val() == 0 || $("#inputMailForm3").val() == 0 || $("#inputPhoneForm3").val() == 0 ) {
       if ($("#inputNameForm3").val() == 0) {
	       $('#inputNameForm3').css({'border' : '1px solid red'});
	       $('#inputMailForm3').css({'border' : '1px solid #ECECEC'});
	       $('#inputPhoneForm3').css({'border' : '1px solid #ECECEC'});
        } else if ($("#inputMailForm3").val() == 0) {
	       $('#inputMailForm3').css({'border' : '1px solid red'});
	       $('#inputNameForm3').css({'border' : '1px solid #ECECEC'});
	       $('#inputPhoneForm3').css({'border' : '1px solid #ECECEC'});
        } else if ($("#inputPhoneForm3").val() == 0) {
	       $('#inputPhoneForm3').css({'border' : '1px solid red'});
	       $('#inputNameForm3').css({'border' : '1px solid #ECECEC'});
	       $('#inputMailForm3').css({'border' : '1px solid #ECECEC'});
        } 
     } else {
        $("#nextOrderForm3").prop({type:"submit"});
        $(".forma-samovyvoz").css({'display' : 'none'});
        $(".prosloika").css({'display' : 'block'});
        var inputMailVal = $("#inputMailForm3").val();
		$("#prosloikaMail").text(inputMailVal);
     } 
});
    var inputMailVal2 = $('#inputMailForm3').val();
$('#prosloikaMail').text(inputMailVal2);

 $("#change-sposob").on('click', function() {
		$('.hidden-order3').css({'display': 'none'}); 
		$('.hidden-order4').css({'display': 'block'});  
});

 $("#change-form").on('click', function() {
		$('.hidden-order4').css({'display': 'none'}); 
		$('.hidden-order1').css({'display': 'block'});  
});


$( "#deliveries_2" ).on('click', function() {
      	$('.changeShop').css({'display': 'block'});
      	$('#dostavka-button').css({'display': 'none'});
      	$('#samovyvoz-button').css({'display': 'block'});
      	
      	
});

$( "#deliveries_1, #deliveries_3" ).on('click', function() {
      	$('.changeShop').css({'display': 'none'});
      	$('#samovyvoz-button').css({'display': 'none'});
      	$('#dostavka-button').css({'display': 'block'});
});

$( "#dostavka-button" ).on('click', function() {
      	$('.changeShop').css({'display': 'none'});
      	$('.forma-samovyvoz').css({'display': 'none'});
      	$('.forma-dostavka').css({'display': 'block'});
      	$('.sposob-polucheniya').css({'display': 'none'});  
      	$('#dostavka-button').css({'display': 'none'});
      	

});

$( "#samovyvoz-button" ).on('click', function() {
        $('.changeShop').css({'display': 'none'});
        $('.forma-dostavka').css({'display': 'none'});
        $('#samovyvoz-button').css({'display': 'none'});
      	$('.forma-samovyvoz').css({'display': 'block'});
      	$('.sposob-polucheniya').css({'display': 'none'});  

});