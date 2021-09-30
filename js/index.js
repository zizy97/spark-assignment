//The function to get the value of the button
function getSelectedValue(buttonName){

    let a=document.querySelector("input[name="+buttonName+"]:checked");
    if(a==null){
        return null;
    }else{
        return a.value;
    }

}


//On Form Submit
const onSubmit = (e,form,validationForm) =>{
    console.log("Form Validation Triggered")
    e.preventDefault();

    //Field Names Pass as a data object
    const fieldNames={fName:"First Name",lName:"Last Name",contact:"Contact Number",address:"Address",mail:"Email",userType:"User Type"};
    
    let fName=form['fName'].value;
    let lName=form['lName'].value;
    let contact=form['contact'].value;
    let address=form['address'].value;
    let mail=form['mail'].value;
    let paymentMethod=form['paymentMethod'].value;
    let userType=getSelectedValue("userType");

    //Form validation 
    if(formValidate(fName,lName,contact,address,mail,userType,fieldNames)){
        console.log("Form VAlidation func start to Trigger")
        let userData = UserData(fName,lName,contact,address,mail,userType,paymentMethod);
        console.log(userData);
        form.reset();
        window.setTimeout('alert("User Added Successfully");', 2000);//alert triggered after 2 sec
        
    }
}

const UserData = (fName,lName,contact,address,mail,userType,paymentMethod)=>{

    let userData = new Object();
    userData.first_name = fName;
    userData.last_name = lName;
    userData.contact_number = contact;
    userData.address = address;
    userData.email = mail;
    userData.user_type = userType;
    userData.payment_method = paymentMethod;

    return userData;
}
