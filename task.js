function verify() {
    console.log("v_cube, v_cylinder, m")
    let v_cube = parseInt(elementV_cube.innerText)
    let v_cylinder = parseInt(elementV_cylinder.innerText);
    let m = parseInt(elementM.innerText);
    console.log(v_cube, v_cylinder, m)
 
M=m
V_cube=v_cube
V_cylinder=v_cylinder
     if (M <= V_cube) {
        result= "Жидкость помещается в кубическую ёмкость.";
        document.getElementById("result").innerText =  result;
    } else {
        result= "Жидкость не помещается в кубическую ёмкость.";
        document.getElementById("result").innerText =  result;
    }

    if (M <= V_cylinder) {
        result= "Жидкость помещается в цилиндрическую ёмкость.";
        document.getElementById("result").innerText =  result;
    } else {
        result= "Жидкость не помещается в цилиндрическую ёмкость.";
        document.getElementById("result").innerText =  result;
    }
    if (M <= V_cube && M <= V_cylinder) {
        result= "Жидкость помещается в обе ёмкости.";
        document.getElementById("result").innerText =  result;
    } else {
        result= "Жидкость не помещается в обе ёмкости.";
        document.getElementById("result").innerText =  result;
    }
}

const elementV_cube = document.getElementById("v_cube");
const elementV_cylinder = document.getElementById("v_cylinder");
const elementM = document.getElementById("m");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);