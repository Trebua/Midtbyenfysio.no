function responsivegram() {
  var screenWidth = getWidth();
  var instagramFeed;
  if (screenWidth > 540) {
    instagramFeed =
      '<iframe src="https://snapwidget.com/embed/637752" title="instagram feed" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; "></iframe>';
  } else {
    instagramFeed =
      '<iframe src="https://snapwidget.com/embed/637769" title="instagram feed" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style="border:none; overflow:hidden; width:100%; "></iframe>';
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
