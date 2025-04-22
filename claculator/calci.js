   let button=document.querySelectorAll("button");
   let heading=document.querySelector("h4");
   let heading2=document.querySelector("h5");
   let string="";
   let i=-1;
   button.forEach((btn)=>{
       btn.onclick=()=>{
        val=btn.innerText;
        if(val!="=" && val!="AC" && val!="DEL"){
            string+=val;
            heading.innerText=string;
            heading2.innerText="";
        }
        
        if(val=="="){
            string=eval(string.replace("%","/100"));
            heading2.innerText=string
        }
        
        if(val=="DEL"){
            heading.innerText=heading.innerText.slice(0,-1);
            string=heading.innerText;
            
        }
        if(val=="AC"){
            string="";
            heading.innerText=string;
            heading2.innerText=string;
        }
        
    };
})

/*
background-color: rgba(255, 255, 255, 0.747);;
*/