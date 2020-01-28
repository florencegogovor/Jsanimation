// filter btns
(function(){
    //select all buttons

    const filterBtn = document.querySelectorAll(".filter-btn");
    //console.log(filterBtn);
    
    filterBtn.forEach(function(btn){
 btn.addEventListener("click",function(event){
     //prevemt default action
     event.preventDefault();
     const value = event.target.dataset.filter;
     //console.log(value);
     const items = document.querySelectorAll(".store-item");
     //console.log(items);
     items.forEach(function(item){
         if(value === 'all'){
             item.style.display = "block";
         }
         else{
          if (item.classList.contains(value))
         {
            item.style.display = "block";
         }else{
            item.style.display = "none";
         }
        }
     });

 });
    });

})();


// search input
(function(){
    //target search box
    const search = document.getElementById("search-item");
    search.addEventListener('keyup',function(){
        let value = search.value.toLowerCase().trim();
        //console.log(value);
        const items = document.querySelectorAll(".store-item");
        //cnsole.log(value);
        items.forEach(function(item){
            let type = item.dataset.item;
            //console.log(type);

            //search with includes
            // if(type.includes(value))
            // {
            //     item.style.display = "block";
            // } else{
            //     item.style.display = "none";
            // }
   let length = value.length;
     let match = type.slice(0,length);
    if(value == match){
    item.style.display = "block";

   }else{
    item.style.display = "none";
    }

        });

    });

})();
//  end search section

// modal section

(function() {
    // all images
  let imageList = [];
  let counter = 0;
  const images = document.querySelectorAll(".store-img");
  const container = document.querySelector(".lightbox-container");
  const item = document.querySelector(".lightbox-item");
  const closeIcon = document.querySelector(".lightbox-close");
  const btnLeft = document.querySelector(".btnLeft");
  const btnRight = document.querySelector(".btnRight");


  // add all images to the modal array
  images.forEach(function(img) {
    imageList.push(img.src);
  });

  //add event listener to open modal and show image
  images.forEach(function(img) {
    img.addEventListener("click", function(event) {
      // show modal
      container.classList.add("show");
      // get source
      let src = event.target.src;
      // change counter
      counter = imageList.indexOf(src);

      // show modal with image
      item.style.backgroundImage = `url(${src})`;
    });
  });
  // hide modal
  closeIcon.addEventListener("click", function() {
    container.classList.remove("show");
  });
  // loop back
  btnLeft.addEventListener("click", function() {
    counter--;
    if (counter < 0) {
      counter = imageList.length - 1;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
  btnRight.addEventListener("click", function() {
    counter++;
    if (counter > imageList.length - 1) {
      counter = 0;
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;
  });
})();
