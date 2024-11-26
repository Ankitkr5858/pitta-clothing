document.addEventListener("DOMContentLoaded", function() {
  // init size chart
  function showmodal() {
    var crossmodal = document.querySelector('.modal-close');
    var overlay = document.querySelector('.modal-overlay');
  
    // open modal
    var popup = document.querySelectorAll('a.bm-size-chart');
    Array.from(popup).forEach(function(showContent) {
      showContent.addEventListener("click", function(e) {
        e.preventDefault();
        document.body && document.body.classList.add('bm-show-modal')
      });
    });

    // close modal
    if (crossmodal) {
      crossmodal.addEventListener("click", function() {
        document.body && document.body.classList.remove('bm-show-modal')
      })
    }

    if (overlay) {
      overlay.addEventListener("click", function() {
        document.body && document.body.classList.remove('bm-show-modal')
      })
    }
  }
  showmodal();


  // product form
  function initProductForm() {
    var variants = document.querySelectorAll('.product-form-mt-product--static .product-form__controls-group .product-form__chip');
    var addToCartButton = document.querySelector('.product-form-mt-product--static .add_to_cart');
    var errorPossition = document.querySelector('.product-form-mt-product--static .product-form__chip-wrapper');

    // Function to create and insert the error message element
    function createErrorMessage() {
      var errorContainer = document.createElement('div');
      errorContainer.id = 'error-message'; // Set the ID for the error container
      errorContainer.textContent = 'PLEASE CHOOSE SIZE';
      var parent = errorPossition.parentNode;
      parent.insertBefore(errorContainer, errorPossition.nextSibling);
    }

    // Initialize a flag to track whether any variant is clicked
    var isVariantClicked = false;

    variants.forEach(function(v) {
      v.classList.remove('variant_selected');
      v.querySelector('input').checked = false;
    });


    // Add a click event listener to each variant
    variants.forEach(function(variant) {
      variant.addEventListener('click', function() {
        isVariantClicked = true;
        showSelectedSize(variant.innerText);
        enableAddToCart();

        // Remove the "variant_selected" class from all variants
        variants.forEach(function(v) {
          v.classList.remove('variant_selected');
        });

        // Add the "variant_selected" class to the clicked variant
        variant.classList.add('variant_selected');
      });
    });

    // Function to enable the "Add to Cart" button and clear the error message
    function enableAddToCart() {
      addToCartButton.disabled = false;
      var errorContainer = document.getElementById('error-message');
      if (errorContainer) {
        errorPossition.classList.remove('size_error_message');
        errorContainer.remove(); // Remove the error message if it exists
      }
    }

    // Function to disable the "Add to Cart" button and display an error message
    function disableAddToCart() {
      addToCartButton.disabled = true;
      if (!document.getElementById('error-message')) {
        errorPossition.classList.add('size_error_message');
        createErrorMessage(); // Create and insert the error message if it doesn't exist
      }
    }

    // Function to add a class to the variant based on the URL parameter
    function addClassToVariantFromURL() {
      var urlParams = new URLSearchParams(window.location.search);
      var variantParam = urlParams.get('variant');

      if (variantParam) {
        var variantElement = document.getElementById(variantParam);
        if (variantElement) {
          variantElement.classList.add('variant_selected');
        }
      }
    }

    // Call the function to add the class based on the URL parameter
    addClassToVariantFromURL();

    // Add a click event listener to the "Add to Cart" button
    addToCartButton.addEventListener('click', function() {
      if (!isVariantClicked) {
        disableAddToCart();
      } else {
        // Add code to handle adding the product to the cart
        // You can add this logic here
      }
    });
  }
  initProductForm();

  function initDescAccordion() {
    var blocks = document.querySelectorAll('.description-block');
    if (blocks) {
      blocks.forEach(function (block) {
        block.addEventListener('click', function () {
          if (!block.classList.contains('open')) {
            blocks.forEach(function (block) {
              block.classList.remove('open');
            });
          }
          block.classList.toggle('open');
        });
      });
    }
  }
  initDescAccordion();

  function showSelectedSize(button) {
    var size = document.querySelectorAll('.bm-product-size .size');
    size.forEach(function (size) {
      size.innerHTML = button;
    });
  }
});