const video =
  document.querySelctor("video")
  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    video.removeAttribute("autoplay");
    video.pause();
  }

 