$(document).ready(function(){
  $("a.installation").click(function(){
      $("ul#installation").toggle();
  });
  $("a.app-basic").click(function(){
      $("ul#app-basic").toggle();
  });
  $("a.app-advanced").click(function(){
      $("ul#app-advanced").toggle();
  });
});
