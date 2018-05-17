document.addEventListener("DOMContentLoaded", function() {

  var button = document.querySelector('.summon-cats');
  var url = 'https://bitkittens.herokuapp.com/cats.json';
  var box = document.querySelectorAll('.cat-box');

  button.addEventListener('click', function(){
    $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json'
    }).done(function(data){
      for(var i=0; i < data.cats.length; i++){
      var imgTag = document.createElement('img');
      imgTag.src = data.cats[i].photo;
      
    };

  });

  });

});
