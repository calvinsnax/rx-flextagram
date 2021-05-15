jQuery(function ($) {
  $('.app-sidebar-close, .app-sidebar-bg').on('click', function () {
    $('.app-sidebar').removeClass('active');
    $('html').removeClass('app--overflow-hidden');
  });

  $('.app-sidebar-nav-more').on('click', function () {
    $(this).parent().next().toggleClass('active');
  });
});

function toggleSidebar(id) {
  // 초기화
  $('.app-sidebar').not('#'+id).removeClass('active');
  $('html').removeClass('app--overflow-hidden');

  const target = $("#" + id);
  $(target).toggleClass('active');
  $('html').toggleClass('app--overflow-hidden');
}