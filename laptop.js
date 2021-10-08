let slidderImg = document.querySelector('.slidderImg');
let image = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];


let i = 0;

function prev(){
    if(i <= 0) i = image.length;
    i--;
    return imgMovement();
}

function next(){
    if(i >= image.length - 1) i = -1;
    i++;
    return imgMovement();

}

function imgMovement(){
    return slidderImg.setAttribute('src', 'image/' + image[i]);
}



function getDetails(){
    
    let laptop1 = document.querySelector('.laptop1'); 
   let laptop2 = document.querySelector('.laptop2');
    let laptop3 = document.querySelector('.laptop3');
    let laptop4 = document.querySelector('.laptop4');
    let laptop5 = document.querySelector('.laptop5');
    let buyNow = document.querySelector('.buyNow');
    let laptopA = document.querySelector('.laptopA');
    let laptopB = document.querySelector('.laptopB');
    let buyNow1 = document.querySelector('.buyNow1');
    let laptopC = document.querySelector('.laptopC');
    let buyNow3 = document.querySelector('.buyNow3');
    let laptopD = document.querySelector('.laptopD');
    let buyNow4 = document.querySelector('.buyNow4');
    let laptopE = document.querySelector('.laptopE');
    let buyNow5 = document.querySelector('.buyNow5');  
    let paymentPoint = document.querySelector('.paymentPoint');
   if( image[i] == 'a.jpg' && laptop1.style.display == 'none'){
   
             laptop1.style.display = 'block';
             buyNow.addEventListener('click', () =>{
            
                if(laptopA.style.display == 'none' && paymentPoint.style.display == 'none'){
                    laptopA.style.display = 'block';
                    paymentPoint.style.display = 'block';
                }
                else{
                    laptopA.style.display = 'none';
                    paymentPoint.style.display = 'none';
                }
             })
             
        }
        else{
            laptop1.style.display = 'none';
            laptopA.style.display = 'none';
            paymentPoint.style.display = 'none';
        }

  





        if( image[i] == 'b.jpg' && laptop2.style.display == 'none'){
            laptop2.style.display = 'block';
            buyNow1.addEventListener('click', () =>{
                if(laptopB.style.display == 'none' && paymentPoint.style.display == 'none'){
                    laptopB.style.display = 'block';
                    paymentPoint.style.display = 'block';
                }
                else{
                    laptopB.style.display = 'none';
                    paymentPoint.style.display = 'none';
                }
             })
       }
       else{
           laptop2.style.display = 'none';
           laptopB.style.display = 'none';
           paymentPoint.style.display = 'none';
       }
    





       

       if( image[i] == 'c.jpg' && laptop3.style.display == 'none'){
        laptop3.style.display = 'block';
        buyNow3.addEventListener('click', () =>{
            if(laptopC.style.display == 'none' && paymentPoint.style.display == 'none'){
                laptopC.style.display = 'block';
                paymentPoint.style.display = 'block';
            }
            else{
                laptopC.style.display = 'none';
                paymentPoint.style.display = 'none';
            }
         })
     }
         else{
       laptop3.style.display = 'none';
       laptopC.style.display = 'none';
       paymentPoint.style.display = 'none';
     }



     if( image[i] == 'd.jpg' && laptop4.style.display == 'none'){
        laptop4.style.display = 'block';
        buyNow4.addEventListener('click', () =>{
            if(laptopD.style.display == 'none' && paymentPoint.style.display == 'none'){
                laptopD.style.display = 'block';
                paymentPoint.style.display = 'block';
            }
            else{
                laptopD.style.display = 'none';
                paymentPoint.style.display = 'none';
            }
         })
   }
   else{
       laptop4.style.display = 'none';
       laptopD.style.display = 'none';
       paymentPoint.style.display = 'none';
   }




   if( image[i] == 'e.jpg' && laptop5.style.display == 'none'){
    laptop5.style.display = 'block';
    buyNow5.addEventListener('click', () =>{
        if(laptopE.style.display == 'none' && paymentPoint.style.display == 'none'){
            laptopE.style.display = 'block';
            paymentPoint.style.display = 'block';
        }
        else{
            laptopE.style.display = 'none';
            paymentPoint.style.display = 'none';
        }
     })
    
}
else{
   laptop5.style.display = 'none';
   laptopE.style.display = 'none';
   paymentPoint.style.display = 'none';
}

    }



     /*
    




 

    
    */

  
  /// Corfirm things
function showHideDiv(){
    let PayPal1 = document.querySelector('#PayPal1');
  let payDetails = document.querySelector('.payDetails');
  if(PayPal1.value == "PayPal" && payDetails.style.display == "block"){ 
        
payDetails.style.display = "none";
    }
    else{
        payDetails.style.display = "block"; 
    }
};
  

 



// pay now coding


function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if(charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

    return true;
}

function payNow(){

   
    let required = document.querySelector(".required");
    let cardName = document.querySelector(".cardName").value;
    let ccn = document.querySelector(".ccn").value;
    let errorMsg = document.querySelector('.errorMsg');
    let errorMsg1 = document.querySelector(".errorMsg1");

    if(cardName !== "" && ccn !== "" && required !== ""){
        alert("Wait a minute...We are confirming the authencity of your Card");
        return true;
    }
   
   
    if(cardName == "" && ccn == "" && required == ""){
      
        required.innerHTML = "Invalid Input!";
        errorMsg.innerHTML = "Invalid Input!";
        errorMsg1.innerHTML = "Invalid Input!";
        alert("Invalid Input");
        return false;
    
}

if(cardName == "" || ccn == "" || required == ""){
    alert("Invalid Input");
    return false;
}



}




























