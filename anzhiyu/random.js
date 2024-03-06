var posts=["posts/ffab.html","posts/dfa2.html","posts/8fc.html","posts/8830.html","posts/c7fa.html","posts/478d.html","posts/361a.html","posts/4cbb.html","posts/d226.html","posts/ee37.html","posts/e449.html","posts/1ec0.html","posts/41d2.html","posts/60a8.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };