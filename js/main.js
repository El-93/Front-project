const fetchProducts = async() => {
    fetch("http://localhost:3004/products")
      .then((data)=>{
        return data.json();
      })
      .then((res)=>{
        const allData = res.map((d) => {
          return `
          <div class="shoping-card">
                         <img class="img" src="${d.img}">
                         <div class="title">${d.title}</div>
                         <div class="select">
                         <div class="code">${d.code}</div>
                         <div class="free">${d.free}</div>
                         </div>
                         <div class="price">${d.price}</div>
                         <button class="btn">خرید</button>
                     </div>`;
       });
       document.querySelector(".product-sec-new").innerHTML = allData.json("")
      }).catch((error)=>{
        console.log("There was a problem with the fetch operation:",error);
  });
  };
  fetchProducts();












let slideIndex = 1 ;
let remainTime = 70000;


function setTime(){
    if(remainTime ==0) return;
    let h = Math.floor(remainTime/3600);
    let m = Math.floor((remainTime%3600)/60);
    let s = (remainTime%3600)%60;
    document.querySelector('#hours').innerHTML = h
    document.querySelector('#minutes').innerHTML = m
    document.querySelector('#seconds').innerHTML = s
}

setInterval(()=>{
    remainTime -=1;
    setTime()
} , 1000)


function setSlide(input,index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children] ;
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    item.classList.add('active');
}

setInterval(()=>{
    slideIndex +=1;
    if(slideIndex==4){
        slideIndex=1;
    }
    setSlide(`slide${slideIndex}` , slideIndex)
} , 4000)

