var posts=["posts/ffab.html","posts/c7fa.html","posts/926.html","posts/64ae.html","posts/361a.html","posts/f4ed.html","posts/8fc.html","posts/478d.html","posts/ee37.html","posts/e449.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };