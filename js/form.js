$(function() {
    $(".form-submit-btn").prop("disabled", true);
    
    $('.form-input-required.name').change(function(){
        //Required
        var inputName = $('.form-input-required.name').val();
        var inputFurigana = $('.form-input-required.furigana').val();
        var inputMail = $('.form-input-required.mail').val();
        var inputInquiry = $('.form-input-required-inquiry').val();
        
        if( inputName.length != 0 && 
            inputFurigana.length != 0 && 
            inputMail.length != 0 && 
            inputInquiry.length != 0 ){
                $(".form-submit-btn").prop("disabled", null);
        } else {
            $(".form-submit-btn").prop("disabled", true);
        }
    });

    $('.form-input-required.furigana').change(function(){
        //Required
        var inputName = $('.form-input-required.name').val();
        var inputFurigana = $('.form-input-required.furigana').val();
        var inputMail = $('.form-input-required.mail').val();
        var inputInquiry = $('.form-input-required-inquiry').val();
        
        if( inputName.length != 0 && 
            inputFurigana.length != 0 && 
            inputMail.length != 0 && 
            inputInquiry.length != 0 ){
                $(".form-submit-btn").prop("disabled", null);
        }else {
            $(".form-submit-btn").prop("disabled", true);
        }
    });

    $('.form-input-required.mail').change(function(){
        //Required
        var inputName = $('.form-input-required.name').val();
        var inputFurigana = $('.form-input-required.furigana').val();
        var inputMail = $('.form-input-required.mail').val();
        var inputInquiry = $('.form-input-required-inquiry').val();
        
        if( inputName.length != 0 && 
            inputFurigana.length != 0 && 
            inputMail.length != 0 && 
            inputInquiry.length != 0 ){
                $(".form-submit-btn").prop("disabled", null);
        }else {
            $(".form-submit-btn").prop("disabled", true);
        }
    });

    $('.form-input-required-inquiry').change(function(){
        //Required
        var inputName = $('.form-input-required.name').val();
        var inputFurigana = $('.form-input-required.furigana').val();
        var inputMail = $('.form-input-required.mail').val();
        var inputInquiry = $('.form-input-required-inquiry').val();
        
        if( inputName.length != 0 && 
            inputFurigana.length != 0 && 
            inputMail.length != 0 && 
            inputInquiry.length != 0 ){
                $(".form-submit-btn").prop("disabled", null);
        }else {
            $(".form-submit-btn").prop("disabled", true);
        }
    });

  });