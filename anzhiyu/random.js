var posts=["posts/ffab.html","posts/4cbb.html","posts/c7fa.html","posts/ee37.html","posts/361a.html","posts/e449.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };