/* Slider */
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlNav: "thumbnails"
    });
});

/* Pretty Photo */
jQuery(document).ready(function() {
    $("a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});
});

function calculateTax(price){
  var total = 0;
  if (isNaN(price)){
    console.log('valid number is required');
  } else {
    total = (parseInt(price) * .08)+price;
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

/* POPULATE INVENTORY TEMPLATES */
$(function(){

let roboexample = [];
let clone = [];
//
for(i=1; i<=6; i++){
   var prdTemplate = document.querySelector(`#producttemplate${i}`);
   //var prdTemplate = $(`#producttemplate${i}`);
   roboexample[i] = document.querySelector(`#robo${i}`);
   //roboexample[i] = $(`#robo${i}`);
   //console.log(roboexample[i]);
   clone[i] = document.importNode(prdTemplate.content, true);
   //clone[i] = $(prdTemplate).append(prdTemplate.content);
   //console.log(clone[i]);
 }

 // clone[1].$('#pimage').src ='assets/img/slider/6.jpg';
 // clone[1].$('#lblName').textContent = 'Corvette';
 // clone[1].$('#pdesc').textContent = 'This Corvette will keep you on your toes!';
clone[1].querySelector('#pimage').src ='assets/img/slider/6.jpg';
clone[1].querySelector('#lblName').textContent = `Corvette - $${calculateTax(400000)}`;
clone[1].querySelector('#pdesc').textContent = 'This Corvette will keep you on your toes!';
clone[2].querySelector('#pimage').src ='assets/img/slider/1.jpg';
clone[2].querySelector('#lblName').textContent = `Bugati - $${calculateTax(450000)}`;
clone[2].querySelector('#pdesc').textContent = 'This car will keep you on your toes!';
clone[3].querySelector('#pimage').src ='assets/img/slider/2.jpg';
clone[3].querySelector('#lblName').textContent = `Lamborghini - $${calculateTax(420000)}`;
clone[3].querySelector('#pdesc').textContent = 'This car will keep you on your toes!';
clone[4].querySelector('#pimage').src ='assets/img/slider/1.jpg';
clone[4].querySelector('#lblName').textContent = `Porche - $${calculateTax(442000)}`;
clone[4].querySelector('#pdesc').textContent = 'This car will keep you on your toes!';
clone[5].querySelector('#pimage').src ='assets/img/slider/6.jpg';
clone[5].querySelector('#lblName').textContent = `Mercedes - $${calculateTax(256000)}`;
clone[5].querySelector('#pdesc').textContent = 'This car will keep you on your toes!';
clone[6].querySelector('#pimage').src ='assets/img/slider/5.jpg';
clone[6].querySelector('#lblName').textContent = `BMW - $${calculateTax(199000)}`;
clone[6].querySelector('#pdesc').textContent = 'This car will keep you on your toes!';

// let robo = [];
// for(i=1;i<6;i++){
//     robo1.appendChild(`clone[${i}]`);
// }
robo1.appendChild(clone[1]);
robo2.appendChild(clone[2]);
robo3.appendChild(clone[3]);
robo4.appendChild(clone[4]);
robo5.appendChild(clone[5]);
robo6.appendChild(clone[6]);

}); /*END READY */
