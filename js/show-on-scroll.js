window.addEventListener('scroll', function() {
    // console.log("123");
    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function(callback){ window.setTimeout(callback, 1000/60)};
    var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

    function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
    element.classList.add('is-visible');
    // element.classList.add('animated');
    } else {
    element.classList.remove('is-visible');
    // element.classList.remove('animated');
    }
    });

    scroll(loop);
    }

    // Call the loop for the first 3 time
    let i=1;
    if(i<=3){loop(); i =+ 1;}


    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0
            && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }

    // function isElementInViewport (el) {

    //     // Special bonus for those using jQuery
    //     if (typeof jQuery === "function" && el instanceof jQuery) {
    //         el = el[0];
    //     }
    
    //     var rect = el.getBoundingClientRect();
    
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
    //         rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    //     );
    // }


    // function onVisibilityChange(el, callback) {
    //     var old_visible;
    //     return function () {
    //         var visible = isElementInViewport(el);
    //         if (visible != old_visible) {
    //             old_visible = visible;
    //             if (typeof callback == 'function') {
    //                 callback();
    //             }
    //         }
    //     }
    // }

    // var handler = onVisibilityChange(el, function() {
    //     /* Your code go here */
    // });


    // // jQuery
    // $(window).on('DOMContentLoaded load resize scroll', handler);

    // /* // Non-jQuery
    // if (window.addEventListener) {
    //     addEventListener('DOMContentLoaded', handler, false);
    //     addEventListener('load', handler, false);
    //     addEventListener('scroll', handler, false);
    //     addEventListener('resize', handler, false);
    // } else if (window.attachEvent)  {
    //     attachEvent('onDOMContentLoaded', handler); // Internet Explorer 9+ :(
    //     attachEvent('onload', handler);
    //     attachEvent('onscroll', handler);
    //     attachEvent('onresize', handler);
    // }
    // */

    
});
