// "use strict"



let btn_num = document.querySelectorAll(".numbers")
// console.log(btn_num);

let sym_btn = document.querySelectorAll(".symbtn")
// console.log(sym_btn);

let inp_value = document.getElementById("cal-method")
// console.log(inp_value);

let equal_btn = document.querySelector(".cal-equal")
// console.log(equal_btn);


var string_dis = ""
var temp_store = ""
var arr = []


btn_num.forEach((numbers) => {
    numbers.addEventListener("click", () => {
        string_dis += numbers.innerHTML
        temp_store += numbers.innerHTML
        inp_value.value += numbers.innerHTML
    })

})

sym_btn.forEach((symbols) => {
    symbols.addEventListener("click", () => {

        if (temp_store.length == 0) {
            arr.push(symbols.innerHTML)
        }
        else {
            arr.push(temp_store, symbols.innerHTML);
        }
        string_dis += symbols.innerHTML
        inp_value.value += symbols.innerHTML
        temp_store = ""
    })
})
temp_store = ""




var result_str = ""
function numbers() {
    arr.push(temp_store);
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == '*' || arr[i] == '/' || arr[i] == '%')
            result_str = 0;
        if (arr[i] == '*') {
            result_str += (arr[i - 1]) * (arr[i + 1])
            arr.splice(i - 1, 3, result_str)
            i--;

        }
        else if (arr[i] == '/') {
            result_str += (arr[i - 1]) / (arr[i + 1])
            arr.splice(i - 1, 3, result_str)
            i--

        }
        else if (arr[i] == '%') {
            result_str += (arr[i - 1]) % (arr[i + 1])
            arr.splice(i - 1, 3, result_str)
            i--

        }
        console.log(result_str);
    }


    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '+' || arr[i] == '-')
            result_str = 0

        if (arr[i] == '+') {
            result_str += Number(arr[i - 1]) + Number(arr[i + 1]);
            arr.splice(i - 1, 3, result_str);
            i--;
        }

        else if (arr[i] == '-') {
            result_str += (arr[i - 1]) - (arr[i + 1])
            arr.splice(i - 1, 3, result_str);
            i--;
        }
    }
    console.log(result_str);
    inp_value.value = result_str
    temp_store = "";
}



//---------------------------------Equal_Btn-----------------


equal_btn.addEventListener("click", function () {
    numbers()
})


///-----------------------------Clear_Btn------------------------


let clear = document.getElementById("clear")
console.log(clear);

clear.addEventListener("click", () => {
    if (confirm("You want to clear"))
        inp_value.value = ""
})



///-------------------------------Delete_Btn-----------------------


var del_te = document.getElementById("del")
console.log(del_te);

del_te.addEventListener("click", () => {
    inp_value.value = inp_value.value.slice(0, -1)
})















































// let answer = document.getElementById('textbox');

// var equal = document.getElementById('calculate');

// var numberbtn = document.querySelectorAll('.numbers');
// // console.log(numberbtn);
// var symbolbtn = document.querySelectorAll('.symbols');
// // console.log(symbolbtn);

// var calculation = document.querySelectorAll('.key')






// let input_display = "";
// let temp_str = "";
// let arr = [];





// numberbtn.forEach((num) => {
//     num.addEventListener("click", () => {
//         input_display += num.innerHTML
//         temp_str += num.innerHTML
//         answer.value += num.innerHTML
//     })
    

// })


// symbolbtn.forEach((sysm) =>{
//     sysm.addEventListener('click',() =>{
//         input_display += sysm.innerText;
//         if (temp_str.length > 0) {
//             arr.push(temp_str,sysm.innerText);
//             answer.value += sysm.innerText;
//             temp_str='';
//         }

        
       
//         console.log("temp-str="+temp_str);
//         console.log(arr);
//         // temp_str = "";
//     })
    

// })



// // -----one function ----------------

// // var key = document.querySelectorAll(".key")
// // console.log("fun");
// // key.forEach((x,index) => {
    
// //     x.addEventListener('click',()=>{
// //         console.log("iner");
// //       if(){
// //         console.log("ttttt");
// //         input_display += numberbtn.innerHTML
// //         temp_str += numberbtn.innerHTML
// //         answer.value += numberbtn.innerHTML
// //       }  
// //       else{
// //         input_display += symbolbtn.innerText;
// //         if (temp_str.length > 0) {
// //             arr.push(temp_str,symbolbtn.innerText);
// //             answer.value += symbolbtn.innerText;
// //             temp_str='';
// //         }

// //       }
// //     })
// // })





// var result="";

// function numbe(){

// arr.push(temp_str)

//     for (let i = 0;i < arr.length; i++){
//       if (arr[i] == '*' || arr[i] == '/' || arr[i] == '%'){
        
//         if (arr[i] == '*'){
              
//             result =(arr[i-1] * arr[i+1]);
//             console.log("multiplay");
//             arr.splice(i-1,3,result);
//             i--;
//             console.log("arrow="+result);
//         }else if (arr[i] == '/'){
//             result = (arr[i-1] / arr[i+1]);
//             arr.splice(i-1,3,result);
//             i--;
//         }else if(arr[i] == '%'){
//             result =(arr[i-1] % arr[i+1]);
//             arr.splice(i-1,3,result);
//             i--;
//         }
       
//     } 
// } 
//     for( let i=0;i<arr.length;i++){
//         if (arr[i] == '+' || arr[i] == '-'){
//             if (arr[i] == '+'){
//                 result = Number(arr[i-1]) + Number(arr[i+1]);
//                 arr.splice(i-1,3,result);
//                 i--;
//                 console.log("plus");
//             }else if(arr[i] == '-'){
//                 result =(arr[i-1] - arr[i+1]);
//                 arr.splice(i-1,3,result);
//                 i--;  
//             }
//         }
//     }
// console.log("result="+result);

// }

// equal.addEventListener('click',function(){
//     numbe();
//    console.log("jhgdiywdgiwdg");
//     answer.value = result;  
// });
// function Del(){
//     answer.value=answer.value.slice(0,-1);
// }
// function Clear(){
//     answer.value="";
//     arr.slice().remove()
// }


















































































// var string_dis = ""
// var temp_store = ""
// var arr = []


// numberbtn.forEach((num) => {
//     num.addEventListener("click", () => {
//         string_dis += num.innerHTML
//         temp_store += num.innerHTML
//         answer.value += num.innerHTML
//     })

// })

// symbolbtn.forEach((sym) => {
//     sym.addEventListener("click", () => {

//         if (temp_store.length == 0) {
//             arr.push(sym.innerHTML)
//         }
//         else {
//             arr.push(temp_store, sym.innerHTML);
//         }
//         string_dis += sym.innerHTML
//         answer.value += sym.innerHTML
//         temp_store = ""
//     })
// })
// // temp_store = "";




// var result_str = "";
// function numbers() {
//     arr.push(temp_store);
//     for (var i = 0; i < arr.length; i++) {

//         if (arr[i] == '*' || arr[i] == '/' || arr[i] == '%')
//             result_str = 0;
//         if (arr[i] == '*') {
//             result_str += Number(arr[i - 1]) * Number(arr[i + 1])
//             arr.splice(i - 1, 3, result_str)
//             i--;

//         }
//         else if (arr[i] == '/') {
//             result_str += Number(arr[i - 1]) / Number(arr[i + 1])
//             arr.splice(i - 1, 3, result_str)
//             i--

//         }
//         else if (arr[i] == '%') {
//             result_str += Number(arr[i - 1]) % Number(arr[i + 1])
//             arr.splice(i - 1, 3, result_str)
//             i--

//         }
//         console.log(result_str);
//     }

// console.log("result_str="+result_str);
//     console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == '+' || arr[i] == '-')
//             result_str = 0

//         if (arr[i] == '+') {
//             result_str += Number(arr[i - 1]) + Number(arr[i + 1]);
//             arr.splice(i - 1, 3, result_str);
//             i--;
//         }

//         else if (arr[i] == '-') {
//             result_str += Number(arr[i - 1]) - Number(arr[i + 1])
//             arr.splice(i - 1, 3, result_str);
//             i--;
//         }
//     }
//     console.log(result_str);
//     answer.value = result_str
//     // temp_store = "";
// }












































 

