function alDocumentAjaxCall(targetSrl, action, callback) {
  const params = {
    target_srl: targetSrl,
    cur_mid: window.current_mid,
    mid: window.current_mid,
    module: 'document',
    act: action,
    _rx_ajax_compat: 'JSON',
    _rx_csrf_token: getCSRFToken()
  }

  $.ajax({
    type: "POST",
    dataType: "json",
    url: request_uri,
    data: params,
    processData: (action !== 'raw'),
    success: callback,
    error: function(err) {
      console.log(err)
    }
  })
}

function alArticleVote(el) {
  console.log(el)
  const targetSrl = $(el).parent().attr('data-target-srl')
  const type = $(el).attr('data-type')
  const isActive = $(el).hasClass('active')
  
  
  if(type === 'down') {
    var transformedType = 'Down'
  } else {
    var transformedType = 'Up'
  }

  console.log(targetSrl, type, isActive)

  // 이미 액티브 상태인 경우 취소
  if(isActive) {
    var action = 'procDocumentVote' + transformedType + 'Cancel'
  } else {
    var action = 'procDocumentVote' + transformedType
  }

  // 콜백
  function callback(res) {
    if(res.error) {
      // console.log(el)
      appToast(res.message, 'danger')
      return
    }

    var appliedCount = res.voted_count || res.blamed_count

    var getVoteCount = Number($(el).find('.app-article-vote__count').text())

    if(appliedCount) {
      var count = appliedCount

    } else if(getVoteCount > -1) {
      var count = getVoteCount -1
    
    } else {
      var count = getVoteCount + 1
    }

    $(el).find('.app-article-vote__count').text(count)
    $(el).toggleClass('active')

    appToast(res.message)
  }

  alDocumentAjaxCall(targetSrl, action, callback)
}