jQuery(document).ready(function () {
  jQuery("a.open-bio").click(function () {
    jQuery(this).nextAll(".bio-more").first().toggle();
    jQuery(this).toggleClass("active");
    return false;
  });

  var klaviyo_bis_interval = setInterval(function () {
    var klaviyo_bis_btn = jQuery("a.btn.klaviyo-bis-trigger").length;

    if (klaviyo_bis_btn) {
      jQuery("a.btn.klaviyo-bis-trigger").appendTo("#klaviyo-btn-wrapper");
      clearInterval(klaviyo_bis_interval);
    }
  }, 100);
});

//quick-btn-add-to-cart
$(document).ready(function () {
  $(".product-item__quick-shop-button").on("click", function () {
    $("#empty-cart-wrapper").hide();
    $(".c-empty-cart-wrapper").hide();
    $(".c-empty-cart-wrapper").hide();
    $(".c-recommended-product-section").hide();
    $(".c-cart-compliment").hide();
    $(".js-tab-link-cart").hide();
  });
});

// checkout
document.addEventListener("DOMContentLoaded", function () {
  var checkoutButton = document.getElementById("checkout-button");

  if (checkoutButton) {
    checkoutButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = "/checkout";
    });
  }
});