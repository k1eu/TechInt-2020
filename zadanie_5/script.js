$('a.skip-link').click(function(event)
                {
  event.preventDefault();
})

$('a').hover(function(){
  $(this).css({"color":"pink"}) //Po najechaniu jest różowy
},
             function(){
  $(this).css({"color":"green"}) //Po puszczeniu hover zostaje zielony
});