function clearForm(){
    document.getElementById("myform").reset();

}

function validateForm(form){
    // if(form.name.value==="" || form.street.value ==="" || form.email.value==="" || form.tk.value ==="" || form.phone.value===""|| form.card.value===""){
    //     alert("Συμπληρώστε όλα τα πεδία!");
    //     return false;
    // }
    // else if(!/[Α-Ωα-ωίϊΐόάέύϋΰήώ]+/.test(form.name.value)){
    //     alert("Συμπληρώστε μόνο με ελληνικούς χαρακτήρες");
    //     // form.name.focus();
    //     return false;
    // }
    // else if(!/[Α-Ωα-ωίϊΐόάέύϋΰήώ]+/.test(form.street.value)){
    //     alert("Συμπληρώστε μόνο με ελληνικούς χαρακτήρες");
    //     // form.street.focus();
    //     return false;
    // }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)){
        alert("Συμπληρώστε έγκυρο email!");
        // form.email.focus();
        return false;
    }
    // else if(!/^\b\d{5}\b/.test(form.tk.value)){
    //     alert("Συμπληρώστε έγκυρο ταχυδρομικό κώδικα!");
    //     return false;
    // }
    // else if(!/^[\+]?[0-9]{12}$/.test(form.phone.value)){
    //     alert("Συμπληρώστε έγκυρο τηλέφωνο!");
    //     return false;
    // }
    // else if(!/^\b\d{16}\b/.test(form.card.value)){
    //     alert("Συμπληρώστε έγκυρο αριθμό κάρτας!");
    //     return false;
    // }
    else{
        let myform = document.getElementById("myform");
        myform.name.value = form.name.value;
        newwin = window.open()
        newwin.document.write(myform.outerHTML);
        newwin.print();
        newwin.close();
    }
}

// function myPrint() {
//              var printdata1 = document.getElementById("name-div");
//              var printdata2 = document.getElementById("address-div");
//              var printdata3 = document.getElementById("email-div");
//              var printdata4 = document.getElementById("country-div");
//              var printdata5 = document.getElementById("tk-div");
//              var printdata6 = document.getElementById("phone-div");
//              newwin = window.open("")
//              newwin.document.write(printdata1.outerHTML,printdata2.outerHTML,printdata3.outerHTML,
//                  printdata4.outerHTML,printdata5.outerHTML,printdata6.outerHTML);
//              newwin.print();
//              newwin.close();
// }