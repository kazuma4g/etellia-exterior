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

  function formButtonClick(){
    //Required
    var inputName = $('.form-input-required.name').val();
    var inputFurigana = $('.form-input-required.furigana').val();
    var inputMail = $('.form-input-required.mail').val();
    var inputInquiry = $('.form-input-required-inquiry').val();
    //Not Required
    var inputNumber = $('.form-input-not-required.number').val();

    if( inputName.length === 0 || 
        inputFurigana.length === 0 || 
        inputMail.length === 0 || 
        inputInquiry.length === 0 ){

        alert('?????????????????????????????????????????????');
        var form = $('.form-parent');
        $("html, body").animate({ scrollTop: form.offset().top }, 1000);

    } else if( inputMail.length < 5){
        alert('Mail address should be longer than 5 characters.');
    } else if( inputInquiry.length < 10){
        alert('Inquiry text should be longer than 10 characters.');
    } else {
        alert(
            '??????: ' + inputName + '\n' +
            '????????????: ' + inputFurigana + '\n' +
            '????????????: ' + inputNumber + '\n' +
            '?????????????????????: ' + inputMail + '\n' +
            '????????????????????????: ' + inputInquiry
            );
    }
}