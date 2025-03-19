function vaildform(form){
	let fullname = form.fullname.value.trim();
	let age = form.age.value.trim();
	let phone = form.phone.value.trim();
	let gender = form.gender.value;


	if(fullname === ""){
		alert("Nhập fullname!");
		return false;
	} 

	if(age === "" || isNaN(age) || age < 0){
		alert("Nhập age lại!")
		return false
	}

	if(!gender){
		alert("chọn gender!")
		return false
	}

	let phonePattern = /^\(\d{4}\)[ .-]\d{3}[ .-]\d{3}$/;
	if(!phonePattern.test(phone)){
		alert("Nhap laij sdt dang (0999) 999 999 hoặc (0999)-999-999")
		return false
	}
	return true
}