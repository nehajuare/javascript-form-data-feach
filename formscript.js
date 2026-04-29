             function saveData()
             {
                let name = document.getElementById("name").value;
                
                let email = document.getElementById("email").value;
                let password = document.getElementById("password").value;
                let age = document.getElementById("age").value;
                let date = document.getElementById("dob").value;
                let gender = document.querySelector('input[name="gender"]:checked');
                gender=gender? gender.value:"";
                let subjects=[];
                let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
                checkboxes.forEach((checkbox)=>
                    {
                        subjects.push(checkbox.value);
                    }
                   );
                    
                let phone = document.getElementById("phone").value;


               //store the value in localstorage
                localStorage.setItem("name",name);
                localStorage.setItem("email",email);
                localStorage.setItem("password",password);
                localStorage.setItem("age",age);
                localStorage.setItem("date",date);
                localStorage.setItem("gender",gender);
                localStorage.setItem("subjects",subjects.join(","));
                localStorage.setItem("phone",phone);
            }

            function cleardata()
            {
                localStorage.clear();
            }
            setTimeout(cleardata,3000);
function validate() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");

    emailError.innerHTML = "";
    passError.innerHTML ="";

    if(email === ""){
        emailError.innerHTML = "Email required";
    }
    else if (!email.includes("@")) {
        emailError.innerHTML ="invalid email";
    }
    if(password ===""){
        passError.innerHTML ="Password required";
    }
    else if (password.length<6){
        passError.innerHTML ="Min 6 chars";
    }
    else if (password.length>8){
        passError.innerHTML ="Max 8 chars";
    }
}