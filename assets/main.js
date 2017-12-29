$(function() {

  // your code will go here

  var badges = document.getElementById('badges');
  console.log(badges);

  $.ajax({
    url: 'https://www.codeschool.com/users/2166554.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      console.log('Downloaded user profile!');
      response.courses.completed.forEach(function(data){
        console.log(data);
        var courseDiv = document.createElement('div');
        courseDiv.className = 'course';

        var courseTitleElement = document.createElement('h3');
        var courseTitle = document.createTextNode(data.title);
        courseTitleElement.appendChild(courseTitle);
        courseDiv.appendChild(courseTitleElement);

        var badgeElement = document.createElement('img');
        badgeElement.setAttribute('src', data.badge);
        courseDiv.appendChild(badgeElement);

        var buttonElement = document.createElement('a');
        buttonElement.setAttribute('href', data.url);
        buttonElement.setAttribute('target', '_blank');
        buttonElement.className = 'btn btn-primary';
        var buttonElementText = document.createTextNode('See Course');
        buttonElement.appendChild(buttonElementText);
        courseDiv.appendChild(buttonElement);

        badges.appendChild(courseDiv);
      });
    }
  });

});
