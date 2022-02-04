function none_menu(id) {
   if($('#'+id).css('display') =='none') {
      $ ('#'+id).css('display',""); }
 
   else {
      $('#'+id).css('display','none');} 
      return false;
   }

   
  
   function rewers(id) {
       console.log($ ('#'+id).css('display'))
      if ($ ('#'+id).css('display') == 'none') {
         $ ('#'+id).css('transform', 'rotate(0deg)'); 
         }
   
      else {
         $ ('#'+id).css('transform', 'rotate(180deg)');}
         return false;
      }

     
 /*
      function hideshow() {
         document.getElementById("slider").style="display:none";
         document.getElementById("other").style="display:block";
      }

     */