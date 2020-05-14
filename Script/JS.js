let cont4=document.getElementById("container4");
let backdrop=document.getElementById("backdrop");
let cont7=document.getElementById("container7");

function Toggle_Backdrop()
{
  backdrop.classList.toggle("visible");
};

function Toggle_Form()
{
  cont4.classList.toggle("visible");
  Toggle_Backdrop();
};


function GenCaptcha(){
    let val = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("Captcha").innerHTML = val;
    let e1=document.getElementById('e1');        
}

function Toggle_Backdrop()
{
  backdrop.classList.toggle("visible");
};

function Toggle_LoginForm()
{
  cont7.classList.toggle("visible");
  Toggle_Backdrop();
};
