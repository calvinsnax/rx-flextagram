jQuery(function($) {
  function handdleBoardHeaderFixed() {
    const scrollTop = $(window).scrollTop();
    const boardHeader = $('.app-board-header') || null;

    if(!boardHeader) return

    if(scrollTop > 92) {
      boardHeader.addClass('fixed');
    } else {
      boardHeader.removeClass('fixed');
    }
  }
  
  handdleBoardHeaderFixed();

  $(window).scroll(handdleBoardHeaderFixed);
})