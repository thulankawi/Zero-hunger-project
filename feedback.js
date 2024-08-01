// function for form validation
function validateForm(){
    let name = document.forms["feedbackForm"]["name"].value;
    let email = document.forms["feedbackForm"]["email"].value;
    let q1 = document.forms["feedbackForm"]["q1"].value;
    let q2 = document.forms["feedbackForm"]["q2"].value;
    let q4 = document.forms["feedbackForm"]["q4"].value;
    let q5 = document.forms["feedbackForm"]["q5"].value;
    let q6 = document.forms["feedbackForm"]["q6"].value;
    

    if(name === "" || q1 === "" || q2 === "" || q4 === ""|| q5 === "" || q6 === "" ){
        alert("please fill out all required fields.");
        return false;
    }

    if (email != "" && !validEmail(email)){
        return false;
    }
    // show succes message
    document.getElementById("message").classList.remove("hidden"); 
    document.forms["feedbackform"].reset();
    return true;
}

//function for email validation
function validEmail(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(String(email).toLowerCase());
}

