const toggle_btn=document.querySelector(".toggle_btn");
const tbtn=document.querySelector(".tbtn");
console.log(tbtn);
console.log(toggle_btn);
toggle_btn.addEventListener("click",function(){
    console.log(this.parentElement.parentElement.querySelector(".text"));
    const btnbody=this.parentNode;
    const btns=this;
    const text=this.parentElement.parentElement.querySelector(".text");
    btns.classList.toggle("btns");
    btnbody.classList.toggle("active");
    // Text.innerHTML.toggle("ON")
    if(btns.classList.contains("btns")){
        text.textContent="ON";
        

    }
    else{
        text.textContent="OFF"
    }

})
