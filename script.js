// گرفتن المنت ها از html 
// انتخاب نوع تبدیل
const convertType = document.getElementById("convertType") ;
// مقدار ورودی
const inputValue = document.getElementById("inputValue") ;
// نوع تبدیل
const convertBtn = document.getElementById("convertBtn") ;
// نمایش نتیجه
const result = document.getElementById("result") ;

// به دکمه ایونت اضافه کردن
convertBtn.addEventListener("click" , function() {
  //نوع تبدیل را میگیریم (طول ، وزن ، زمان)
  const type = convertType.value ;
  // مقدار وارد شده را به عدد اعشاری تبدیل میکنیم
  const value = parseFloat(inputValue.value) ;
  
  // بررسی اینکه عدد وارد شده معتبر هست یا نه
  if(isNaN(value)) {
    result.textContent = "لطفا یک عدد معتبر وارد کن!" ;
    result.classList.remove("d-none") ;
    result.classList.replace("alert-info" , "alert-danger") ;
    return ;
  }
  
  let convertedValue = 0 ;
  let unit = "" ;
  
  // بر اساس نوع تبدیل محاسبه انجام میدیم
  // سانتیمتر به متر
  if(type === "length") {
    convertedValue = value / 100 ;
    unit = "متر" ;
    // کیلوگرم به گرم
  }else if(type === "weight") {
    convertedValue = value * 1000 ;
    unit = "گرم" ;
    // دقیقه به ثانیه
  }else if(type === "time") {
    convertedValue = value * 60 ;
    unit = "ثانیه" ;
  }
  
  // نمایش نتیجه
  result.textContent = `نتیجه : ${convertedValue} ${unit}` ;
  result.classList.remove("d-none" , "alert-danger") ;
  result.classList.add("alert-info") ;
}) ;