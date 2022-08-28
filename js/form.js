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

        alert('Missing text in required fields.');

    } else if( inputMail.length < 5){
        alert('Mail address should be longer than 5 characters.');
    } else if( inputInquiry.length < 10){
        alert('Inquiry text should be longer than 10 characters.');
    } else {
        alert(
            '名前: ' + inputName + '\n' +
            'フリガナ: ' + inputFurigana + '\n' +
            '電話番号: ' + inputNumber + '\n' +
            'メールアドレス: ' + inputMail + '\n' +
            'お問い合わせ内容: ' + inputInquiry
            );
    }
}