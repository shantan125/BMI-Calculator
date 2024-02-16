const calcbmi=()=>{
    let height = parseFloat(document.querySelector("#height").value);
    let weight = parseFloat(document.querySelector("#weight").value);
    let bmi = weight/(height*height);
    document.querySelector(".result").innerText='The BMI of Your Body IS: '+bmi.toFixed(2);
    
    if (bmi < 18.5) {
      document.querySelector(".interpretation").innerText = "Under Weight";
    } else if (bmi > 18.5 && bmi < 25) {
      document.querySelector(".interpretation").innerText = "Normal Weight";
    } else {
      document.querySelector(".interpretation").innerText = "Over Weight";
    }
}
