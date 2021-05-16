jQuery(function ($) {
  $(".app-dropdown-toggle").on("click", function () {
    $(this).closest(".app-dropdown").toggleClass("active");
  });

  const $dropdown = $(".app-dropdown");

  $(document).mouseup((e) => {
    if (!$dropdown.is(e.target) && $dropdown.has(e.target).length === 0) {
      $dropdown.removeClass("active");
    }
  });
});


function toggleDropdown(id) {
  jQuery(id).toggleClass("active");
}