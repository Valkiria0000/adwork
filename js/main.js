function none_menu(id) {
   if($('#'+id).css('display') =='none') {
      $ ('#'+id).css('display',""); }
 
   else {
      $('#'+id).css('display','none');} 
      return false;
   }

   
  
   function rewers(id) {
      if ($ ('#'+id).css('display') == "none") {
         $ ('#'+id).css('display', '');
         }
    
      else {
         $ ('#'+id).css('transform', 'rotate(180deg)');}
         return false;
      }
   