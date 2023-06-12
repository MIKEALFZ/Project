function clearForm(){
    document.getElementById("myform").reset();

}

function validateForm(){
    var alert_messages= ["Συμπληρώστε όλα τα πεδία!", "Συμπληρώστε το όνομα μόνο με ελληνικούς χαρακτήρες!", "Συμπληρώστε την διεύθυνση μόνο με ελληνικούς χαρακτήρες!", "Συμπληρώστε έγκυρο email!", "Συμπληρώστε έγκυρο ταχυδρομικό κώδικα!", "Συμπληρώστε έγκυρο τηλέφωνο (+30210xxxxxxx)!", "Συμπληρώστε έγκυρο αριθμό κάρτας!"]
    var validate_form = [true, true, true, true, true, true, true]
    var form = document.getElementById("myform");
    if(form.name.value==="" || form.street.value ==="" || form.email.value==="" || form.tk.value ==="" || form.phone.value===""|| form.card.value===""){
        validate_form[0] = false;
    }
    if(!/^[\u0370-\u03ff\u1f00-\u1fff\s]+$/.test(form.name.value)){
        validate_form[1] = false;
    }
    if(!/^[\u0370-\u03ff\u1f00-\u1fff\s\d]+$/.test(form.street.value)){
        validate_form[2] = false;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){
        validate_form[3] = false;
    }
    if(!/^\b\d{5}\b/.test(form.tk.value)){
        validate_form[4] = false;
    }
    if(!/^[+]{1}[3]{1}[0]{1}[2]{1}[1]{1}[0]{1}\d{7}$/.test(form.phone.value)){
        validate_form[5] = false;
    }
    if(!/^\b\d{16}\b/.test(form.card.value)){
        validate_form[6] = false;
    }
    if (validate_form.includes(false)){
        var alert_message = "";
        for (var i=0; i<validate_form.length; i++){
            if(validate_form[i]===false){
                alert_message += alert_messages[i] + "\n";
            }
        }
        alert(alert_message);
        return false;
    }
    else{
        // var form1 = document.getElementById("myform-print");
        var form_print = document.getElementById("myform-print");
        // Save placeholder
        // var name_placeholder = form1.name.placeholder;
        // var street_placeholder = form1.street.placeholder;
        // var email_placeholder = form1.email.placeholder;
        // var tk_placeholder = form1.tk.placeholder;
        // var phone_placeholder = form1.phone.placeholder;
        // var card_placeholder = form1.card.placeholder;
        // Change placeholder to value
        form_print.name.placeholder = form.name.value;
        form_print.street.placeholder = form.street.value;
        form_print.email.placeholder = form.email.value;
        form_print.tk.placeholder = form.tk.value;
        form_print.phone.placeholder = form.phone.value;
        // var name_div = document.getElementById("name-div");
        // var address_div = document.getElementById("address-div");
        // var email_div = document.getElementById("email-div");
        // var tk_div = document.getElementById("tk-div");
        // var phone_div = document.getElementById("phone-div");
        newwin = window.open()
        newwin.document.write(form_print.outerHTML);
        newwin.print();
        newwin.close();
        // Change to default placeholder
        // form1.name.placeholder = name_placeholder;
        // form1.street.placeholder = street_placeholder;
        // form1.email.placeholder = email_placeholder;
        // form1.tk.placeholder = tk_placeholder;
        // form1.phone.placeholder = phone_placeholder;
        // form1.card.placeholder = card_placeholder;
        return true;
    }
}
