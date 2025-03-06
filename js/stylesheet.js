

function upDate(previewPic){
     console.log("success!");

     console.log("src:", previewPic.src);
     console.log("alt:", previewPic.alt);
 
     const imageDiv = document.getElementById('image');
     imageDiv.innerText = previewPic.alt;
 

     imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
 
    
     console.log("updated to:", previewPic.src);

       }
   
       function unDo(){

    console.log("success!");

    
    const imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";

    
    imageDiv.innerText = "Hover over an image below to display kojima.";

    
           
       }
       window.onload = function() {
         console.log("loaded!");
         addTabFocusAttributes();  
     };
     
     function addTabFocusAttributes() {
         let images = document.querySelectorAll('img');
     
         for (let i = 0; i < images.length; i++) {
             let image = images[i];
             image.setAttribute('tabindex', '0'); 
     
            
             image.addEventListener('mouseover', function() {
                 console.log('Mouse over image ' + (i + 1));
                 image.style.border = '5px solid blue';  
             });
     
             image.addEventListener('mouseleave', function() {
                 console.log('Mouse left image ' + (i + 1));
                 image.style.border = '';  
             });
     
            
             image.addEventListener('focus', function() {
                 console.log('Image ' + (i + 1) + ' focused');
                 image.style.border = '1px solid green';  
             });
     
             image.addEventListener('blur', function() {
                 console.log('Image ' + (i + 1) + ' lost focus');
                 image.style.border = ''; 
             });
         }
     }