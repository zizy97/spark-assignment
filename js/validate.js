let namePattern= /^([A-Za-z]{2,255})$/;
let contactNumPattern= /^([0][0-9][0-9]{1}[0-9]{7})$/;
let addressPattern= /^([A-Za-z0-9/\\ #&""()--\n]{1,255})$/;
let mailPattern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//Validator function- use to validate each and every input field 
// value:field value,error_field:the error displaying element,fieldName:the relevant field,pattern:the pattern to be validated
function validator(value,error_field,fieldName,pattern){
    console.log(fieldName + " Validation Triggered")
    console.log("value "+value)

    let state=true;

    //Some element doesn't have any pattern so validate if pattern exit or not
    if(pattern){
        if(value == "" || value == null ){
            document.getElementById(error_field).innerHTML="Required";
            state=false;
        }else if(!pattern.test(value)){
                document.getElementById(error_field).innerHTML="Please Enter Valid "+fieldName+"...";
                state=false;
        }else{
            document.getElementById(error_field).innerHTML=null;
        }
    }else{
        if(value == "" || value == null ){
            document.getElementById(error_field).innerHTML="Please Select a "+fieldName;
            state=false;
        }else{
            document.getElementById(error_field).innerHTML=null;
        }
    }
    
    return state;
}

//Validate all the input fields
function formValidate(fName,lName,contact,address,mail,userType,fieldNames){
    console.log(" ValidationForm Func Triggered")
    let val_fname=validator(fName,"fName_error",fieldNames.fName,namePattern);
    let val_lname=validator(lName,"lName_error",fieldNames.lName,namePattern);
    let val_contact=validator(contact,"contact_error",fieldNames.contact,contactNumPattern);
    let val_address=validator(address,"address_error",fieldNames.address,addressPattern);
    let val_email=validator(mail,"mail_error",fieldNames.mail,mailPattern);
    let val_userType=validator(userType,"userType_error",fieldNames.userType,null);

    if(val_address && val_contact && val_email && val_fname && val_lname && val_userType){
        console.log("Form Validation Success!!!!")
        return true;
    }
    return false;
}