document.getElementById("myForm").addEventListener("submit" , function(even){
    even.preventDefault()

    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let email = document.getElementById("email").value

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