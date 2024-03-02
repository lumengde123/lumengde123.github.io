var posts=["posts/dfa2.html","posts/8830.html","posts/ffab.html","posts/361a.html","posts/4cbb.html","posts/c7fa.html","posts/d226.html","posts/478d.html","posts/1ec0.html","posts/e449.html","posts/41d2.html","posts/60a8.html","posts/ee37.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };