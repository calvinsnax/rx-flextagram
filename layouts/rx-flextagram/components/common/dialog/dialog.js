function toggleDialog(id) {
  const target = $("#" + id);
  const dialogBg = target.find(".app-dialog-bg");
  const dialogClose = target.find(".app-dialog-close");

  // $('body').append(target);

  if (dialogBg.length === 0) target.append('<div class="app-dialog-bg"></div>');

  if (dialogClose.length === 0) {
    target
      .find(".app-dialog-header")
      .append(
        '<button class="app-dialog-close">dd<ion-icon name="close-outline"></ion-icon></button>'
      );
  }

  // 배경 클릭시 닫힘
  $(".app-dialog-bg").on("click", function () {
    target.removeClass("active");
  });

  // 닫기 버튼 클릭시 닫힘
  $(".app-dialog-close").on("click", function () {
    target.removeClass("active");
  });

  target.toggleClass("active");
}
