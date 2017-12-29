$(function() {

  // your code will go here
  https://www.codeschool.com/users/2166554
  $.ajax({
    url: 'https://www.codeschool.com/users/2166554.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log(response);
    }
  });

});
