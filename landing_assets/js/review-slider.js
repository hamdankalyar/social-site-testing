document.addEventListener('DOMContentLoaded', function() {
    const reviews = $(".review");
    const visibleReviews = 3;

    reviews.slice(0, visibleReviews).addClass("active");
  
    $(".next-arrow").click(function () {

      reviews.filter(".active").removeClass("active");
  
      reviews
        .slice(visibleReviews)
        .addClass("active");
  
      $('html, body').animate({
        scrollLeft: $(".review.active").first().offset().left
      });
    });
  
    $(".prev-arrow").click(function () {

      reviews.filter(".active").removeClass("active");
  
      const startIndex = reviews.filter(".active").first().index() - visibleReviews;
      reviews
        .slice(startIndex, startIndex + visibleReviews)
        .addClass("active");
        
      $('html, body').animate({
        scrollLeft: $(".review.active").first().offset().left
      });
    });
  });
  