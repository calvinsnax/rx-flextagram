// XE jQuery 호환성
var $ = jQuery;

// 게시글 삭제
function onClickDocumentDelete(documentSrl, message) {
	function confirmHandler() {
		var params = {
			mid: current_mid,
			page: '',
			document_srl: documentSrl
		}

		exec_json('board.procBoardDeleteDocument', params, function(res) {
			if(res.message) appToast(res.message)
			if(res.redirect_url) window.location.href = res.redirect_url
			// console.log(res)
		})
	}

	appConfirm(message, confirmHandler)
}