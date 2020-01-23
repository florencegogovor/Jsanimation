
/*********************  counter

(function(){
    let counterValue = 0;

    const buttons = document.querySelectorAll('.counterBtn');
    const counter = document.getElementById('counter');
    buttons.forEach(function(btn){

        btn.addEventListener('click', function(event){

            //element that we click
            const value = event.target;
            // console.log(value);
            if(value.classList.contains('lower-count')){
                counterValue--;
            }
            else if(value.classList.contains('add-count')){
                counterValue++;
            }
            counter.textContent = counterValue;

            //change color

if(counterValue ===0){
    counter.style.color="#333333";
}
else if (counterValue <0){

    counter.style.color="#F6511d";

}else if(counterValue >0){

    counter.style.color="#7fb800";
}


        });
    });

})();

                /  End Counter ******************************/

                // /********************* Slider js
                //immediate invoked function expresssion

//  (function(){

// const pictures =["blue-car","grey-car","sport-car","travel-car","yellow-car"];
//  //set the counter
//  let counter = 0;
//  const btn = document.querySelectorAll(".btn");

//  btn.forEach(function(button){
//      button.addEventListener("click", function(event){
//          //get event target
//          let value = event.target;
//          if(value.classList.contains("btn-left")){
//              counter--;
//              if(counter < 0){
//                  counter= pictures.length -1;
//              }
//              document.querySelector(".img-container").style.backgroundImage=`url('images/${pictures[counter]}.jpg')`;

//             }
//              if (value.classList.contains("btn-right")){
//             counter++;
//             if(counter > pictures.length -1){
//                 counter= 0;
//             }
//             console.log(counter);
//             document.querySelector(".img-container").style.backgroundImage=`url('images/${pictures[counter]}.jpg')`;
//          }
         
//      });
//  });

//     })();
                          /*    End slider js*************************************/    

// (function(){
    //customers
    // let customers=[];
    // let index = 0;

    //object constructor function
    // function Customer (name,img,text){
    //     this.name = name;
    //     this.img = img;
    //     this.text = text;
    // }
    // create customer
    // function createCustomer(name,img,text){
        // full img
        // let fullImg = `img/customer-${img}.jpg`;
        // create a new customer instance
        // const customer = new Customer(name,fullImg,text);
        //add to all customers
//         customers.push(customer);
//     }
//     createCustomer('john',1,`Lorem Ipsum is simply dummy text of the printing 
//     and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
//    `);
//    createCustomer('bob',2,`Lorem Ipsum is simply dummy text of the printing 
//    and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
//   `);
//   createCustomer('peter',3,`Lorem Ipsum is simply dummy text of the printing 
//   and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
//  `);
//  createCustomer('alice',4,`Lorem Ipsum is simply dummy text of the printing 
//  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
// `);
// document.querySelectorAll('.btn').forEach(function(item){
//     item.addEventListener('click',function(event){
//         event.preventDefault();

//         if (event.target.parentElement.classList.contains('prevBtn')){
//             if(index===0){
//                 index = customers.length;
//             }
//             index--;
//             document.getElementById('customer-img').src = customers[index].img;
//             document.getElementById('customer-name').textContent = customers[index].name;
//             document.getElementById('customer-text').textContent = customers[index].text;
//         }
//         if (event.target.parentElement.classList.contains('nexBtn')){
//             if(index === customers.length-1){
//                 index = -1;
//             }
//             index++;
//             document.getElementById('customer-img').src = customers[index].img;
//             document.getElementById('customer-name').textContent = customers[index].name;
//             document.getElementById('customer-text').textContent = customers[index].text;
//         }
//     })
// })

// })();


                            /***  Testimonial section*************************************/  

// /***  Calculator section*************************************/  
// (function(){
//     const btns = document.querySelectorAll(".btn");
//     const screen = document.querySelector(".screen");
//     const equalBtn = document.querySelector(".btn-equal");
//     const clearBtn = document.querySelector(".btn-clear");
 
//  btns.forEach(function(btn){
//      btn.addEventListener("click",function(){
//          let number = btn.getAttribute("data-num");
//          screen.value += number;
//      });

//     equalBtn.addEventListener("click",function(){
//         if(screen.value === ""){
//             screen.value = `Please enter a value`;
//         }else{ 
//             let value = eval(screen.value);
//             screen.value = value;
//         }
       
//     });
//     clearBtn.addEventListener("click",function(){
//         screen.value = "";
//             });
        
//  });
// })();
 /***  End calculator section*************************************/  
  /*******  Digital section*************************************/  

  function showTime(){
      
      let date = new Date();
      let hours = date.getHours(); //0 -23
      let minutes = date.getMinutes() //0 -59
      let seconds = date.getSeconds() //0 -59

      let formatHours = converstFormat(hours);

      hours = checkTime(hours)

      hours = addZero(hours);
      minutes = addZero(minutes)
      seconds = addZero(seconds)
    //   document.getElementById('clock').innerHtml = `${hours} : ${minutes} : ${seconds} ${formatHours}`
      document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`
    }

    function converstFormat(time){
    let format = 'AM'
    if(time>= 12){
     format = "PM"
    }
    return format;
      }

function checkTime(time){
    if(time > 12){
        time = time - 12
    } if (time === 0){
        time = 12;
    }
    return time
}
function addZero(time){
    if(time< 10){
        time = "0" + time ;
    }
    return time
};

  
  showTime();
  setInterval(showTime,1000)

// function showTime() {

//     let date = new Date();
//     let hours = date.getHours();//0-23
//     let minutes = date.getMinutes()//0-59
//     let seconds = date.getSeconds()//0-59
   
//     let formatHours = convertFormat(hours)
   
//     hours = checkTime(hours)
   
//     hours = addZero(hours)
//     minutes = addZero(minutes)
//     seconds = addZero(seconds)
//     document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`
   
   
   
//    }
   
//    function convertFormat(time) {
//     let format = 'AM'
//     if (time >= 12) {
//      format = 'PM'
//     }
//     return format;
//    }
   
//    function checkTime(time) {
//     if (time > 12) {
//      time = time - 12;
//     }
//     if (time === 0) {
//      time = 12;
//     }
//     return time
//    }
   
//    function addZero(time) {
//     if (time < 10) {
//      time = "0" + time;
//     }
//     return time
//    }
   
//    showTime()
//    setInterval(showTime, 1000)
    /******* End Digital section*************************************/