function onClickShare() {
  console.log('hello')

  if(navigator.share) {
    console.log('share exist')

    navigator.share({
      title: document.title,
      url: location.href
    }).then(() => {
      console.log('share success');
    })
    .catch(console.error);
  } else {
    // Share API 미지원 시
  }
}