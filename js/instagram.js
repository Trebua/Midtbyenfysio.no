function responsivegram() {
  var screenWidth = getWidth();
  var instagramFeed;
  if (screenWidth > 540) {
    instagramFeed =
      '<iframe src="//lightwidget.com/widgets/f3559303e7615a5eb2aaed27349d898f.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>';
  } else {
    instagramFeed =
      '<iframe src="//lightwidget.com/widgets/7cd9469d99dd50de84ffa62eb69c2077.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style="width: 100%; border: 0; overflow: hidden;"></iframe>';
  }
  document.getElementById("instagram-feed").innerHTML = instagramFeed;
}

/*Get the width of the window.*/
function getWidth() {
  return (
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  );
}

window.addEventListener("load", responsivegram);
window.addEventListener("resize", responsivegram);
