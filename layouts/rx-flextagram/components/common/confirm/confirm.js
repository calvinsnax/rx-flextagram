const defaultAppConfirmOptions = {
  iconName: 'information-circle-outline',
  confirmButtonText: '확인',
  cancelButtonText: '취소',
  type: 'default',
  cancelHandler: null
};

function appConfirm(
  title,
  confirmHandler,
  description,
  options = defaultAppConfirmOptions) {
  var dialog = $('#app-confirm');
  var icon = dialog.find('.app-confirm__icon');
  var titleSlot = dialog.find('.app-confirm__title');
  var descriptionSlot = dialog.find('.app-confirm__description');
  var confirmButton = dialog.find('.app-confirm__footer > button[type="submit"]');
  var cancelButton = dialog.find('.app-confirm__footer > button[type="button"]');

  // 초기화
  function appConfirmClear() {
    titleSlot.empty(); // 제목 비우기
    descriptionSlot.empty(); // 설명 비우기

    icon.attr('name', defaultAppConfirmOptions.iconName); // 아이콘 기본값
    cancelButton.text(defaultAppConfirmOptions.cancelButtonText); // 취소 버튼 기본값
    confirmButton.text(defaultAppConfirmOptions.confirmButtonText); // 확인 버튼 기본값
    dialog.attr('class', 'app-confirm'); // 다이얼로그 타입 초기화
  }
  
  // INIT
  function appConfirmInit() {
    titleSlot.html(title); // 메시지 삽입
    descriptionSlot.html(description); // 설명 삽입
    
    if(options.iconName) icon.attr('name', options.iconName);
    else icon.attr('name', defaultAppConfirmOptions.iconName);
    
    if(options.confirmButtonText) confirmButton.text(options.confirmButtonText);
    else confirmButton.text(defaultAppConfirmOptions.confirmButtonText);

    if(options.cancelButtonText) cancelButton.text(options.cancelButtonText);
    else cancelButton.text(defaultAppConfirmOptions.cancelButtonText);

    if(options.type) dialog.addClass('app-confirm--'+options.type);
  }
  
  // init 함수 실행
  appConfirmInit();
  
  // 확인 버튼 이벤트
  confirmButton.on('click', function() {
    dialog.removeClass('active');
    appConfirmClear();
    
    if(confirmHandler) confirmHandler();
  });

  // 확인 버튼 이벤트
  cancelButton.on('click', function() {
    dialog.removeClass('active');
    appConfirmClear();

    if(options.cancelHandler) options.cancelHandler();
  });
  
  // 화면에 표시
  dialog.addClass('active');
}