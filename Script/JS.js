let cont=document.getElementById("container4");
let backdrop=document.getElementById("backdrop");


function Toggle_Backdrop()
{
  backdrop.classList.toggle("visible");
};

function Toggle_Form()
{
  cont.classList.toggle("visible");
  Toggle_Backdrop();
};
backdrop.addEventListener("click",Toggle_Form);

function GenCaptcha(){
    let val = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("Captcha").innerHTML = val;
    let e1=document.getElementById('e1');        
}

