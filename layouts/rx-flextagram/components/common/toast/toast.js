function appToast(message, type) {
  const element = document.createElement('div')
  element.className = 'app-toast'
  
  if(type) {
    element.className = element.className + ' ' + type
  }
  const text = document.createTextNode(message) 
  element.appendChild(text)

  $(document.body).append($(element).fadeIn())

  setTimeout(function() {
    $(element).fadeOut('normal', function() {
      $(this).remove()
    })
  }, 1000)
}