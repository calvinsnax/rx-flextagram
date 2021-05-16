jQuery(function ($) {
  $('.app-bottom-sheet').appendTo('body');

  $('.app-bottom-sheet__bg').on('click', function() {
    $(this).parent().removeClass('active');
    $('html').removeClass('app--overflow-hidden');
  });
});

function toggleBottomSheet(id) {
  const bottomSheet = jQuery(id + '.app-bottom-sheet');
  bottomSheet.toggleClass('active');
  $('html').toggleClass('app--overflow-hidden');
}