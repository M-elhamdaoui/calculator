//screen
let screen =document.querySelector("#screen");

//buttons
let b0=document.querySelector("#b0") ;
let b1 =document.querySelector("#b1");
let b2 =document.querySelector("#b2");
let b3 =document.querySelector("#b3") ;
let b4  =document.querySelector("#b4");
let b5 =document.querySelector("#b5");
let b6 =document.querySelector("#b6");
let b7 =document.querySelector("#b7");
let b8=document.querySelector("#b8") ;
let b9 =document.querySelector("#b9");
let dot =document.querySelector("#bdot");
let dell =document.querySelector("#bdell");
console.log(b0);
//operations
let plus =document.querySelector("#bp");
let mod =document.querySelector("#bmod");
let minus =document.querySelector("#bm");
let eq=document.querySelector("#beq");
let C =document.querySelector("#bC");
let div=document.querySelector("#bd");
let mult =document.querySelector("#bmult");
var sing=0 ;

//add events 
plus.addEventListener("click",function(){
    if(sing!=0){
        screen.innerText=""
    }
    sing=1;
    screen.innerText+="+";
    
});

mod.addEventListener("click",function(){
    if(sing!=0){
        screen.innerText=""
    }
    sing=2;
    screen.innerText+="%";
   
});

minus.addEventListener("click",function(){
    if(sing!=0){
        screen.innerText=""
    }
    sing=3;
    screen.innerText+="-";
   
});

div.addEventListener("click",function(){
    if(sing!=0){
        screen.innerText=""
    }
    sing=4;
    screen.innerText+="/";
  
});

mult.addEventListener("click",function(){
    if(sing!=0){
        screen.innerText=""
    }
    sing=5;
    screen.innerText+="X";
    
});

eq.addEventListener("click",function(){
   
    let r = screen.innerText;
    let arr =r.split("");
    let val1;
    let val2 ;
    for(let i =0;i<arr.length;i++){
        if(arr[i]=="/" ||arr[i]=="+" ||arr[i]=="-" ||arr[i]=="%" ||arr[i]=="X" ){
            val1=arr.splice(0,i);
            val2=arr.splice(1);
        }
    }
    console.log(val1.join("") , val2.join(""));
    let v1 =parseFloat(val1.join(""));
    let v2=parseFloat(val2.join(""));
    console.log(v1+v2);
    let res ;
    switch(sing){
        case 1:
            screen.innerText=v1+v2;
            
            break;
        case 2:
            screen.innerText=v1%v2;
            
            break;
        case 3:
            screen.innerText=v1-v2;
            break;
        case 4:
            screen.innerText=v1/v2;
            break;
        case 5:
            screen.innerText=v1*v2;
            break;
        case 0:
            screen.innerText=""
            break;

    }
    sing=0;
});


C.addEventListener("click",function(){
    if(sing!=0){
        screen.innerText="";
    }
    screen.innerText="";
    
});
dell.addEventListener("click",function(){
    let r =screen.innerText;
    let arr = r.split("");
    arr.pop();
    
    r=arr.join("");
    screen.innerText=r;
})
b0.addEventListener("click",function(){
screen.innerText+="0";
})

b1.addEventListener("click",function(){
    screen.innerText+="1";
    })

b2.addEventListener("click",function(){
        screen.innerText+="2";
    })

    b3.addEventListener("click",function(){
        screen.innerText+="3";
        })
        
        b4.addEventListener("click",function(){
            screen.innerText+="4";
            })
        
     b5.addEventListener("click",function(){
          screen.innerText+="5";
     })

     b6.addEventListener("click",function(){
        screen.innerText+="6";
      })
                
    b7.addEventListener("click",function(){
       screen.innerText+="7";
     })
                
  b8.addEventListener("click",function(){
          screen.innerText+="8";
      })
    b9.addEventListener("click",function(){
        screen.innerText+="9";
    })
    bdot.addEventListener("click",function(){
       
        let r=screen.innerText;
        let arr = r.split("");
        
        let acc=0;
        for(let i =0; i<arr.length;i++){
          if(arr[i]=="."){
              acc=acc+1;
          }

        }
        if(acc==0 && r!=""){
            screen.innerText+=".";
        }
       
        
    })