$(document).ready(function(){
  var food = "";
  var cfood = "";
  var time = "";
  var contentShown = false;

  // Page scrolling effect
  $('#fullpage').fullpage({
    navigation: true,
    responsiveWidth: 320,
    scrollingSpeed: 900
  });

  //all food ingredients on the page is draggable
  var draggable = $(".draggable").draggable({
    opacity: 0.8
  });

  //when food is hover, show the information of that ingredient accrodingly
  draggable.hover(
    function() {
      if (!contentShown) {
        if($(this).attr("id") === "ginger") {
          food = "Ginger";
          
        }
        else if($(this).attr("id") === "tomatoe") {
          food = "Tomato";
         
        }
        else if($(this).attr("id") === "onion") {
          food = "Onions";
         
        }
        else if($(this).attr("id") === "lentils") {
          food = "Yellow lentils";
         
        }
        else if($(this).attr("id") === "garlic") {
          food = "Garlic";
         
        }
        else if($(this).attr("id") === "veg") {
          food = "Cabbage";
         
        }
        else if($(this).attr("id") === "cauliflower") {
          food = "Cauliflower";
          
        }
        else if($(this).attr("id") === "potato") {
          food = "Potatoes";
          
        }
        else if($(this).attr("id") === "beans") {
          food = "Green beans";
         
        }
        else if($(this).attr("id") === "chili") {
          food = "Chili peppers";
          
        }
        else if($(this).attr("id") === "tomato") {
          food = "Tomato";
         
        }
        else if($(this).attr("id") === "onions") {
          food = "Onions";
        }
        else if($(this).attr("id") === "spinach") {
          food = "Spinach";
          
        }
        else if($(this).attr("id") === "carrot") {
          food = "Carrots";
        }
        else if($(this).attr("id") === "niuganjun") {
          food = "Garlic";
        }
        else if($(this).attr("id") === "chicken") {
          food = "Chicken";
        }
        else if($(this).attr("id") === "enokitake") {
          food = "Tomatoes";
        }
        else if($(this).attr("id") === "beans2") {
          food = "Green beans";
        }
        else if($(this).attr("id") === "songrong") {
          food = "Onions";
        }
          
        var content = "<div class='card cook-overlay'>\
                          <div class='card-body'>\
                              <h5 class='card-title'>" + food + "</h5>\
                              <p class='card-text'>\
                              <p class='heavy'>COOK NOW!</p>\
                              <img class='drag' src='Assets/img/drag.png'>\
                              </p>\
                          </div>\
                        </div>";

        $('#bg-part2, #bg-part3, #bg-part4, #bg-part5').append(content);
      } 
      $(this).css("opacity", "0.8");
      $(".card", this).css({
        visibility: "visible",
        opacity: 0.8
      }); 
  
    }, function() {
      $(".card").css({
        visibility: "hidden",
      });
      $(this).css("opacity", "1");
    }
  );

  // When food is clicked, both the hot pot and chosed food shakes to indicate that the food 
  // can be dragged into hot pot
  draggable.on('mousedown', function() {
    if (!contentShown) {
      $(".hp").addClass("shake");
      $(this).addClass("shake");
    }
  });

  // When click is finished, stop the shake animation
  draggable.on('mouseup', function(){
    if (!contentShown) {
      $(".card").css("visibility", "hidden");
      $(".hp").removeClass("shake");
      $(".hp").removeClass("zoomInLeft");
      $(this).removeClass("shake"); 
    }
  });

  // Only show fade out effect when user drags the food in the hot pot area
  $(".droppable" ).droppable({
    classes: {
      "ui-droppable-active": "ui-state-active",
      "ui-droppable-hover": "ui-state-hover"
    },
    drop: function(event, ui) {
      //actions on the draggable element 
      $(ui.draggable).addClass("fadeOutDown");
      $(".fadeOutDown").off();
      $(".fadeOutDown").css("cursor", "auto");
    }
  });

  // When hot pot is clicked, shift to the left and show the information on the right
  $('.hp').click(function() {
    if (!contentShown) {
      contentShown = true;
      $('.hp').addClass("zoomOutLeft");
      $('.hp').removeClass("zoomInLeft");

      //appends an "active" class to .popup and .popup-content when the hot pot graph is clicked
      $(".popup-overlay, .popup-content").addClass("active");
      
      //all food ingredients become faded when the hot pot is clicked
      $('.fd').css("opacity", "0.3");
      $('.text, .text-l,').css("opacity", "0.9");
    }
  });
    

  //removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
  $('.close').click(function() { 
    $(".popup-overlay, .popup-content").removeClass("active");
    $('.fd, .text, .text-l, .sauce').removeClass("fade");
    $('.hp').removeClass("zoomOutLeft");
    $('.hp').addClass("zoomInLeft"); 
    $('.fd, .text, .text-l,').css("opacity", "1");
    contentShown = false;
  });

});