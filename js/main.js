
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

                /********************* Slider js
                //immediate invoked function expresssion

 (function(){

const pictures =["blue-car","grey-car","sport-car","travel-car","yellow-car"];
 //set the counter
 let counter = 0;
 const btn = document.querySelectorAll(".btn");

 btn.forEach(function(button){
     button.addEventListener("click", function(event){
         //get event target
         let value = event.target;
         if(value.classList.contains("btn-left")){
             counter--;
             if(counter < 0){
                 counter= pictures.length -1;
             }
             document.querySelector(".img-container").style.backgroundImage=`url('images/${pictures[counter]}.jpg')`;

            }
             if (value.classList.contains("btn-right")){
            counter++;
            if(counter > pictures.length -1){
                counter= 0;
            }
            console.log(counter);
            document.querySelector(".img-container").style.backgroundImage=`url('images/${pictures[counter]}.jpg')`;
         }
         
     });
 });

    })();
                              End slider js*************************************/    




                            /***  Testimonial section*************************************/  