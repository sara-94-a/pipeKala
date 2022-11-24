
    // Using jQuery slideToggle() method as a dropdown
    // approach to show and hide sub-navigations.
// $(document).ready(function() {
//         $('.dropdown-toggle').click(function() {
//             $('#item-expanded-1').slideToggle();
//         });
//         $('.dropdown-toggle-2').click(function() {
//             $('#item-expanded-2').slideToggle();
//         });
//     });


    $(document).ready(function() {
       var $item= $('.category > .dropdown-toggle');

            $item.click(function() {
                $item.next().slideToggle();
                $(this).parent().toggleClass('isOpen')

            });
            var $subitem= $('.sub-category > .dropdown-toggle');
            $subitem.click(function() {
               $nextElement= $(this).next();
               if ($nextElement.hasClass('sub-category')){
                $nextElement.slideToggle();}
                $(this).toggleClass('selected')
            });
    });
