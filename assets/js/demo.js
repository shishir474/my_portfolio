console.log('script loaded');
// METHOD 2  
// var navMenuLinks = document.querySelectorAll('.center-things li a');
// for (let i=0;i<navMenuLinks.length;i++){
// 	navMenuLinks[i].addEventListener('click',function(event){
// 	event.preventDefault();
//    	//var targetSectionId = this.getAttribute('href') 
//    	var targetSectionId = this.textContent.trim().toLowerCase();
//     var targetSection = document.getElementById(targetSectionId);
//     /* we can fetch the target section either using its textContent or using its href attribute*/
//     var interval = setInterval(function(){
//        var dist = targetSection.getBoundingClientRect().y;
//        /* the more we scroll the dist approaches 0*/
//        if (dist<=0){
//        	clearInterval(interval);
//        	return;
//        }
//        window.scrollBy(0,50);

//     },20);



// 	});
// }

// METHOD 3
/*var interval;

var navMenuLinks = document.querySelectorAll('.center-things li a');
for (let i=0;i<navMenuLinks.length;i++){
	navMenuLinks[i].addEventListener('click',function(event){
	event.preventDefault();
   	//var targetSectionId = this.getAttribute('href') 
   	var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);
    /* we can fetch the target section either using its textContent or using its href attribute*/
 /* interval = setInterval(scrollVertically,50,targetSection);
}*/

/*function scrollVertically(targetSection){
	  var dist = targetSection.getBoundingClientRect().y;
	  // here we need targetSection variable but as it has a local scope therefore we need to pass that variable
       /* the more we scroll the dist approaches 0*/
 /*    if (dist<=0){
       	clearInterval(interval); // interval is also a local variable. We can make it global to solve our problem
       	return;
       }
       window.scrollBy(0,50);
}
//There is one more way of passing the function  like this.
for (let i=0;i<navMenuLinks.length;i++){
	navMenuLinks[i].addEventListener('click',function(event){
	event.preventDefault();
   	//var targetSectionId = this.getAttribute('href') 
   	var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection = document.getElementById(targetSectionId);
    /* we can fetch the target section either using its textContent or using its href attribute*/
/*  var interval = setInterval(function(){
     scrollVertically(targetSection)
     },50);



	});
}*/

var skillscontainer = document.getElementById('skills-acquired');
var progressBars = document.querySelectorAll('.skill-progress > div')
window.addEventListener('scroll', checkScroll);
var animation=false;


function initialiseBars(){
  for (let bar of progressBars){
      bar.style.width = 0 + '%';
  }
}
initialiseBars();


function fillBars(){

    for (let bar of progressBars){
        let targetWidth = bar.getAttribute('data-bar-width');
        
        let currWidth = 0;

        var id=setInterval(function(){

            if (currWidth > targetWidth){
                clearInterval(id); 
                return;
            }

            currWidth++;
            bar.style.width= currWidth+'%';

        },5);
    }

}

function checkScroll(){
    var coordinates = skillscontainer.getBoundingClientRect()
    if (!animation && coordinates.top < window.innerHeight){
        // fire animation
        animation=true;
        fillBars();
    }else if(coordinates.top > window.innerHeight){
        animation=false;
        initialiseBars();
    }
}


