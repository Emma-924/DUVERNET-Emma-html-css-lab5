function userForm() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;

    let membership = "";
    if (document.getElementById("premium").checked) membership = "Premium";
    else if (document.getElementById("standard").checked) membership = "Standard";
    else membership = "Basic";

    if (!fname || !lname || !email || !address || !city || !province) {
        alert("Please fill all the fields before submitting!");
        return;
    }

    const outputHTML = `
        <h3>Form Summary:</h3>
        <p><strong>Full Name:</strong> ${fname} ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${province}</p>
        <p><strong>Membership:</strong> ${membership}</p>
    `;
    document.getElementById("output").innerHTML = outputHTML;
}

function myExcelFuns(){
    let number = document.getElementById("numbers").value;

    if (!number) {
        alert("Please fill all the fields before submitting!");
        return;
    }

    number = number.trim();
    let Tab = number.split(" ");
    let Final_array = []

    for (E of Tab){
        if (E == " "){
            continue;
        }
        else{
            E = parseFloat(E)
            Final_array.push(E)
        }
    }

    let result = 0;

    if (document.getElementById("sum").checked){
        for (E of Final_array){
            result += E;
        }
    }
    else if (document.getElementById("avg").checked){
        for (E of Final_array){
            result += E;
        }
        result = result/Final_array.length;
    }
    else if (document.getElementById("max").checked){
        for (E of Final_array){
            if (result < E){
                result = E;
            }  
        }
    }
    else{
        result = Final_array[0]; 
        for (E of Final_array){
            if (result > E){
                result = E;
            }
        }
    }

        
    document.getElementById("resultOutput").innerHTML = result;
}

const sendBtn = document.getElementById("sendBtn");
if (sendBtn) sendBtn.addEventListener("click", userForm);

const calcBtn = document.getElementById("calculateBtn");
if (calcBtn) calcBtn.addEventListener("click", myExcelFuns);