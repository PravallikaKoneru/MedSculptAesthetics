//(function($){
//  'use strict';

//  // Variables for keeping track of current body (i.e. man or woman) or a subview
//  var currentMain,
//      currentSub,
//      introContentHidden = false,
//      slideToggleFront = true,
//      darkOverlay = null,
//      numToWords = null,
//      acnElem = null;

//  // this function converts an integer like 11009 to words eg. eleven thousand nine
//  // function initNumToWords() {
//  //   // from https://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
//  //   var arr = x => Array.from(x);
//  //   var num = x => Number(x) || 0;
//  //   var str = x => String(x);
//  //   var isEmpty = xs => xs.length === 0;
//  //   var take = n => xs => xs.slice(0,n);
//  //   var drop = n => xs => xs.slice(n);
//  //   var reverse = xs => xs.slice(0).reverse();
//  //   var comp = f => g => x => f (g (x));
//  //   var not = x => !x;
//  //   var chunk = n => xs =>
//  //     isEmpty(xs) ? [] : [take(n)(xs), ...chunk (n) (drop (n) (xs))];

//  //   // numToWords :: (Number a, String a) => a -> String
//  //   numToWords = n => {

//  //     var a = [
//  //       '', 'one', 'two', 'three', 'four',
//  //       'five', 'six', 'seven', 'eight', 'nine',
//  //       'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
//  //       'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
//  //     ];

//  //     var b = [
//  //       '', '', 'twenty', 'thirty', 'forty',
//  //       'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
//  //     ];

//  //     var g = [
//  //       '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
//  //       'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
//  //     ];

//  //     // this part is really nasty still
//  //     // it might edit this again later to show how Monoids could fix this up
//  //     var makeGroup = ([ones,tens,huns]) => {
//  //       return [
//  //         num(huns) === 0 ? '' : a[huns] + ' hundred ',
//  //         num(ones) === 0 ? b[tens] : b[tens] && b[tens] + '-' || '',
//  //         a[tens+ones] || a[ones]
//  //       ].join('');
//  //     };

//  //     var thousand = (group,i) => group === '' ? group : `${group} ${g[i]}`;

//  //     if (typeof n === 'number')
//  //       return numToWords(String(n));
//  //     else if (n === '0')
//  //       return 'zero';
//  //     else
//  //       return comp (chunk(3)) (reverse) (arr(n))
//  //         .map(makeGroup)
//  //         .map(thousand)
//  //         .filter(comp(not)(isEmpty))
//  //         .reverse()
//  //         .join(' ');
//  //   };
//  // }

//  // initNumToWords();

//  function resetSlideToggleState() {
//    slideToggleFront = true;
//    $('.llvc__background.active .llvc__nav--left.slider').removeClass('back');
//    $('.llvc__nav-slider-track').removeClass('back');
//  }

//  function toggleOverlay( show ) {
//    if (!darkOverlay) {
//      darkOverlay =  $('.llvc__overlay');
//    }

//    if (show) {
//      $(darkOverlay).show();
//      // $('.llvc__content, .llvc__forms').css('filter', 'blur(5px)'); // screws up positioning
//    } else {
//      $(darkOverlay).hide();
//      // $('.llvc__content, .llvc__forms').css('filter', 'none');
//    }
//  }

//  function showHowTo() {
//    var introMessageElem = $('.llvc__content__wrapper'),
//        howToElem = $('.llvc__content__message-how-to');

//    if ( howToElem.length ) {
//      $(introMessageElem).addClass('how-to');
//      $(introMessageElem).empty();
//      $(introMessageElem).append($(howToElem).html());
//      introContentHidden = true;
//    }
//  }

//  // On page load
//  $(document).ready(function() {

//    // Set current main parent body to id of active view
//    currentMain = $( '.llvc__background.active' ).attr( 'id' );
//    // Set current sub view to the main view
//    currentSub = currentMain;

//    // Check if main is set and that
//    if ( currentMain && ! $( '.llvc__nav__item--main[data-type=' + currentMain + ']' ).hasClass( 'active' ) ) {
//      $( '.llvc__nav__item--main[data-type=' + currentMain + ']' ).addClass( 'active' );
//      $( '.llvc__form#' + currentMain ).addClass( 'active' );
//    }

//    darkOverlay = $('.llvc__overlay');
//  });

//  // On click of flip button
//  $(document).on( 'click', '.llvc__submit', function() {
//    if ( $( '.llvc__form.active input[type="checkbox"]:checked' ).length > 0 ) {
//      $( '.llvc__form.active' ).submit();
//    } else {
//      $( '.llvc__warning-popup' ).addClass( 'active' );
//    }
//  });

//  $(document).on( 'click', '.llvc__button[type="submit"]', function() {
//    if ( $( '.llvc__form.active input[type="checkbox"]:checked' ).length > 0 ) {
//      return true;
//    } else {
//      $( '.llvc__warning-popup' ).addClass( 'active' );
//      $( '.llvc__form-popup' ).removeClass( 'active' );
//      return false;
//    }
//  });

//  $( document ).on( 'click', '.llvc__warning-popup .llvc__button--close', function() {
//    $( '.llvc__warning-popup' ).removeClass( 'active' );
//  });

//  // slide toggle listener
//  $(document).on( 'click', '.llvc__nav--left.slider', function(e) {
//    var clickedTarget = this;

//    if ( !slideToggleFront ) {
//      slideToggleFront = true;
//      $(clickedTarget).removeClass('back');
//      $('.llvc__nav-slider-track').removeClass('back');
//      currentSub = $(clickedTarget).find('.llvc__nav__item').data( 'type' );
//    } else {
//      slideToggleFront = false;
//      $(clickedTarget).addClass('back');
//      $('.llvc__nav-slider-track').addClass('back');
//      currentSub = $(clickedTarget).find('.llvc__nav__item:not(.llvc__nav__item--active)').data( 'type' );
//    }

//    //   // Close all popups and views
//    $( '.llvc__background' ).removeClass( 'active' );
//    $( '.llvc__form-popup' ).removeClass( 'active' );

//    // Open view for current subview
//    $( '.llvc__background#' + currentSub ).addClass( 'active' );
//  });

//  // finish consult
//  $(document).on( 'click', '.llvc__nav--right', function() {
//    if ( $('.llvc__form-group input:checked').length ) {
//      $( '.llvc__form.active' ).submit();
//    } else {
//      $( '.llvc__warning-popup' ).addClass( 'active' );
//    }
//  });

//  // On click of return button
//  $(document).on( 'click', '.llvc__nav__item--return', function() {

//    // Close all popups and views
//    $( '.llvc__background' ).removeClass( 'active' );
//    $( '.llvc__form-popup' ).removeClass( 'active' );
//    // Open view for current main view
//    $( '.llvc__background#' + currentMain ).addClass( 'active' );
//  });

//  // On click for main plugin nav
//  $(document).on( 'click', '.llvc__nav__item--main, .llvc__button--mobile-start', function() {
//    // Check if nav item is already active
//    if( ! $( '.llvc__nav__item[data-type=' + $( this ).data( 'type' ) + ']' ).hasClass( 'active' ) ) {
//      // set new main view, set subview to new main view
//      currentMain = $( this ).data( 'type' );
//      currentSub = currentMain;

//      $('.llvc__gender-selection').fadeOut('fast');

//      showHowTo();

//      resetSlideToggleState();

//      // Close all views, popups, and active nav buttons
//      $( '.llvc__background' ).removeClass( 'active' );
//      $( '.llvc__form-popup' ).removeClass( 'active' );
//      $( '.llvc__nav__item--main' ).removeClass( 'active' );
//      $( '.llvc__form' ).removeClass( 'active' );
//      // Set new active nav item and view
//      $( '.llvc__nav__item--main[data-type=' + currentMain + ']' ).addClass( 'active' );
//      $( '.llvc__background#' + currentMain ).addClass( 'active' );
//      $( '.llvc__form#' + currentMain ).addClass( 'active' );
//    }
//  });

//  $(document).on( 'click', '.llvc__button--mobile-start', function() {
//    if ( !$('.llvc__content__wrapper.how-to ').length ) {
//      $( '.llvc__content' ).addClass('hidden');
//      $( '.llvc__forms' ).fadeIn(150);
//    }
//  });

//  $(document).on('click', '.llvc__button-mobile-continue', function() {
//    $( '.llvc__content' ).addClass('hidden');
//    $( '.llvc__forms' ).fadeIn(150);
//  });

//  $(document).on({
//    mouseenter: function() {
//      // Add hover class to all .svg-opacity elements with same data-name
//      var body_section = $(this).data('name');

//      if ( $( '#' + body_section + '_popup' ).length || $( '.llvc__background#' + body_section ).length ) {
//        $( '.svg-opacity[data-name=' + body_section + ']' ).attr( 'class', 'svg-opacity hover' );
//      }
//    },
//    mouseleave: function() {
//      var body_section = $(this).data('name');
//      // Remove hover class to all .svg-opacity elements with same data-name
//      if ( $( '#' + body_section + '_popup' ).length || $( '.llvc__background#' + body_section ).length ) {
//        $( '.svg-opacity[data-name=' + body_section + ']' ).attr( 'class', 'svg-opacity' );
//      }
//    },
//    click: function() {
//      // Remove all popups
//      $( '.llvc__form-popup' ).removeClass( 'active' );
//      // Get popup for svg part
//      var popup = $( '.llvc__form-popup#' + $(this).data('name') + '_popup' );

//      // Check if popup was found
//      if ( popup.length ) {
//        // Make active
//        popup.addClass( 'active' );
//      } else {
//        // No popup found, look for view
//        popup = $( '.llvc__background#' + $(this).data('name') );

//        // Check if view is found
//        if ( popup.length ) {
//          // View found, hide all views
//          $( '.llvc__background' ).removeClass( 'active' );
//          // show found view
//          popup.addClass( 'active' );
//        }
//      }

//      if ( $('.llvc__form-popup.active').length ) {
//        toggleOverlay(true);
//      }

//      if (!introContentHidden) {
//        showHowTo();
//      }
//    }
//  }, ".svg-opacity");

//  $(document).on({
//    mouseenter: function() {
//      // Add hover class to all .svg-opacity elements with same data-name
//      var body_section = $(this).data('name');

//      if ( $( '#' + body_section + '_popup' ).length || $( '.llvc__background#' + body_section ).length ) {
//        $( '.svg-text[data-name=' + body_section + ']' ).attr( 'class', 'svg-text hover' );
//        $( '.svg-letter' ).attr( 'fill', 'rgba( 0, 0, 0, 0.75 )' );
//      }
//    },
//    mouseleave: function() {
//      var body_section = $(this).data('name');
//      // Remove hover class to all .svg-text elements with same data-name
//      if ( $( '#' + body_section + '_popup' ).length || $( '.llvc__background#' + body_section ).length ) {
//        $( '.svg-text[data-name=' + body_section + ']' ).attr( 'class', 'svg-text' );
//        $( '.svg-letter' ).attr( 'fill', 'black' );
//      }
//    },
//    click: function() {
//      // Remove all popups
//      $( '.llvc__form-popup' ).removeClass( 'active' );
//      // Get popup for svg part
//      var popup = $( '.llvc__form-popup#' + $(this).data('name') + '_popup' );

//      // Check if popup was found
//      if ( popup.length ) {
//        // Make active
//        popup.addClass( 'active' );
//      } else {
//        // No popup found, look for view
//        popup = $( '.llvc__background#' + $(this).data('name') );

//        // Check if view is found
//        if ( popup.length ) {
//          // View found, hide all views
//          $( '.llvc__background' ).removeClass( 'active' );
//          // show found view
//          popup.addClass( 'active' );
//        }
//      }
//    }
//  }, ".svg-text");

//  $(document).on( 'click', '.llvc__form-popup__exit, .llvc__form-popup__back', function() {
//    $( '.llvc__form-popup#' + $( this ).data( 'close' ) ).removeClass( 'active' );

//    if ( !$(this).hasClass('llvc__form-popup__exit') ) {
//      if ( $(this).attr('data-close') ) {
//        var checkedInputCount = $( this ).parent().parent().find('input:checked'),
//            addedConcerns = checkedInputCount.length,
//            addedMsg = ' successfully added to your consultation!',
//            numWord = '';

//        if ( addedConcerns ) {
//          acnElem = $('.llvc__added-concerns-notification');
//          // numWord = numToWords(addedConcerns);
//          // numWord = numWord.charAt(0).toUpperCase() + numWord.slice(1);
//          numWord = addedConcerns;
//          $(acnElem).find('h2').empty();
//          $(acnElem).find('h2').text( numWord + (addedConcerns > 1 ? ' concerns were ' : ' concern was ') + addedMsg );
//          $(acnElem).css('display', 'flex');
//          return;
//        } else {
//          if (  !$(this).hasClass('llvc__form-popup__exit') ) {
//            $( '.llvc__warning-popup' ).addClass( 'active' );
//          }
//        }
//      }
//    }


//    toggleOverlay(false);
//  });

//  $(document).on('click', '.llvc__button.nvm', function() {
//    $( '.llvc__form-popup#' + $( this ).data( 'close' ) ).removeClass( 'active' );
//    toggleOverlay(false);
//  });

//  $(document).on('click', '#llvc__acn-add', function() {
//    $(acnElem).css('display', 'none');
//    toggleOverlay(false);
//  });

//  $(document).on('click', '#llvc__acn-finish', function() {
//    toggleOverlay(false);
//    $(acnElem).css('display', 'none');
//    $( '.llvc__form.active' ).submit();
//  });

//  $( document ).on( 'click', '.llvc__results__title__flex', function() {
//    var target = $( this ).data( 'target' );

//    $( this ).find( '.toggle.up' ).toggle();
//    $( this ).find( '.toggle.down' ).toggle();

//    $( '#procedure_' + target ).toggleClass( 'hidden' );
//  });

//  $( document ).on( 'click', '.llvc__results__filter .llvc__button', function() {
//    var filter = $( this ).data( 'filter' );

//    $( '.llvc__results__filter .llvc__button' ).removeClass( 'active' );
//    $( this ).addClass( 'active' );

//    if ( filter === 'all' ) {
//      $( '.llvc__results__result' ).show();
//    } else {
//      $( '.llvc__results__result' ).hide();
//      $( '.llvc__results__result[data-type="' + filter + '"]' ).show();
//    }
//  });

//  $( document ).on('click', '.llvc__print-results button', function() {
//    console.log('printing');
//     window.print();
//  });

//  // setTimeout(function() {
//  //   $('.svg-opacity').click();
//  // }, 200 );
//})(jQuery);
