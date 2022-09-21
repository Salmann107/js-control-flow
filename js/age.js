console.log("Hello world!")
let age = 13 (0<age<20)
if (age<=1) {
  console.log("infant")
} else if (age>=1 && age<=5) {
  console.log("toddler")
}
  else if (age>=5 && age<=9) {
    console.log("child")
  }
else if (age>= && age<=12) {
    console.log()
}





let age = prompt ("How old are you?")

switch(true) {
  case (age<=1):
    console.log("infant")
    break
  case (age>1 && age<=5):
    console.log("toddler")
    break
  case (age>5 && age<=9):
    console.log("child")
    break
  case (age>9 && age<=12):
    console.log("preteen")
    break
   case (age>12 && age<=17):
      console.log("teen")
      break
    case (age>17 && age<=20):
        console.log("young adult")
        break
    default:
        ("invaild input, please enter an integer between 0 and 20")
}

   
