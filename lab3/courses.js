document.getElementById("myForm").addEventListener("submit" , function(even){
    even.preventDefault()

    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if(!passwordPattern.test(password)){
        alert("Mật khẩu phải có ít nhất 8 ký tự, gồm ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt.");
        return;
    }
    let email = document.getElementById("email").value
    let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,}$/i
    if(!emailPattern.test(email)){
        alert("email có dạng abc@gmail.com")
        return;
    }

    let gender = document.querySelector('input[name="gender"]:checked')
    gender = gender ? gender.value : "Not value"

    let hobbies = [] 
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        hobbies.push(checkbox.value)
    })

    let country = document.getElementById("country").value
    let dob = document.getElementById("dob").value

    let message = ` Full Name : ${name}\n Gender : ${gender}\n Dob : ${dob || "None"}\n Country : ${country || "None"}\n Email : ${email}\n Password : ${password}\n Hobbies : ${hobbies.join(", ") || "None"}`
    alert(message)
})