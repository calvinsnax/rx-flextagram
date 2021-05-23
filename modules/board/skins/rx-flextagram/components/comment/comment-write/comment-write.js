// XE jQuery 호환성
var $ = jQuery;
  
jQuery(function($) {
  autosize($('textarea'));
});

// Textarea replace


/**
 * @description textarea 내 줄바꿈을 html 태그로
 * 교체하여 정상적으로 적용되도록 합니다.
 */
function setTextareaReplaceComment() {
  String.prototype.replaceAll = function(searchStr, replaceStr) {
    var temp = this;
    while (temp.indexOf(searchStr) != -1) {
      temp = temp.replace(searchStr, replaceStr);
    }
    return temp;
  }
  
  var str = document.getElementById("comment-input-fake").value;
  str = "<p>" + str.replace(/(?:\r\n|\r|\n)/g, "</p>\r\n<p>") + "</p>";
  str = str.replaceAll("<p></p>", "<p>&nbsp;</p>");
  document.getElementById("comment-input-origin").value = str;
};

jQuery(function($) {
  const formInput = $('#comment-input-fake');
  
  formInput.on('input', function() {
    resetCommentButton()
  })
  
  // 밖을 클릭하면 닫히도록
  $(document).mouseup((e) => {
    const commentWrite = $(".app-comment-write");
    const selectedConfirm = $('#app-confirm');

    if (
      $(".app-comment-write__wrap").hasClass('active') && 
      !commentWrite.is(e.target) &&
      commentWrite.has(e.target).length === 0 &&
      !selectedConfirm.is(e.target) &&
      selectedConfirm.has(e.target).length === 0
    ) {
      onClickCloseComment()
    }
  });

  // $('#comment-input-fake').keydown(function(e) {
  //   if (e.ctrlKey && e.keyCode == 13) {
  //     console.log('ctrl+enter')
  //   }
  // })
})

/**
 * @description 댓글 내용의 존재여부를 검증하여
 * 존재하지 않을 경우 submit 버튼을 disable합니다.
 */
 function resetCommentButton() {
  const commentSubmitButton = $('#app-comment-submit');
  const inputValue = $('#comment-input-fake').val()
  
  if(!inputValue) {
    commentSubmitButton.attr('type', 'button')
    commentSubmitButton.attr('disabled', '')
  } else {
    commentSubmitButton.attr('type', 'submit')
    commentSubmitButton.removeAttr('disabled')
  }
}

/**
 * @description 댓글 작성창을 표시합니다.
 * @param {string} commentSrl 
 * @param {string} editorUrl 
 * @param {string} targetName 
 */
function onClickOpenComment(commentSrl, editorUrl, targetName) {
  const form = $('#app-comment-form');
  const parentSrlInput = form.find('input[name=parent_srl]');
  const editorLink = form.find('#use-editor');
  const commentTarget = form.find('.app-comment-write__target');

  if(targetName) {
    commentTarget.show();
    commentTarget.children().html('<strong>@' + targetName + '</strong>' + '님에게');
  } else {
    commentTarget.hide()
    commentTarget.children().text('');
  }

  parentSrlInput.val(commentSrl);
  editorLink.attr('href', editorUrl);

  $('.app-comment-write__wrap').addClass('active');
  document.getElementById("comment-input-fake").focus();
}

/**
 * @description 작성 중인 댓글이 있는지 체크하고 Confirm을 표시합니다.
 */
function onClickCloseComment() {
  const formInput = $('#comment-input-fake');
  const formInputValue = formInput.val();

  if(formInputValue) {
    appConfirm('아직 작성 중인 댓글이 있습니다. 취소하시겠습니까?', clearComment)
    return
  }

  clearComment()
}

/**
 * @description 댓글창을 초기화하고 닫습니다.
 */
function clearComment() {
  resetCommentButton();
  $('#comment-input-fake').val('');
  $('.app-comment-write__wrap').removeClass('active');
}