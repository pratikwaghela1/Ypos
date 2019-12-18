$(".container-fluid").niceScroll();
// $('select').selectpicker();
// $(".main_cat").niceScroll(
//     {
//         rtlmode: "auto",
//         railpadding: { left:0, top: 0,  bottom: 0 },
//     }
// );


  
// $(".conference-timeline-content").niceScroll({
//     cursorcolor: "#333",
//     cursoropacitymin: 0.3,
//     background: "#bbb",
//     cursorborder: "0",
//     autohidemode: false,
//     cursorminheight: 30,
   
// });

// new PerfectScrollbar('.conference-timeline-content', {   
//     handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch']
// });

// $(document).ready(function() {
//     $('.conference-timeline-content').perfectScrollbar();
//   });

$(document).on('click','.value-control',function(){
    var action = $(this).attr('data-action')
    var target = $(this).attr('data-target')
    var value  = parseFloat($('[id="'+target+'"]').val());
    if ( action == "plus" ) {
      value++;
    }
    if ( action == "minus" ) {
      value--;
    }
    $('[id="'+target+'"]').val(value)
})


$(document).ready(function(){
    $('.count').prop('disabled', true);
       $(document).on('click','.plus',function(){
        $('.count').val(parseInt($('.count').val()) + 1 );
    });
    $(document).on('click','.minus',function(){
        $('.count').val(parseInt($('.count').val()) - 1 );
            if ($('.count').val() == 0) {
                $('.count').val(1);
            }
        });
 });

// $('.example-table tbody').niceScroll({
//     cursorborder: "",
//     cursorcolor: "#b1babe",
//     boxzoom: false,
//     autohidemode: false,
//     cursorfixedheight: 140,
//     horizrailenabled: true,
//     railhoffset: {top:0, left: 0}
//   });

// $('tbody').slimscroll({
//     height: '160px',
//     alwaysVisible: true,
//     color: '#333'
// })