var posts=["posts/624ef525.html","posts/590f2ba.html","posts/f0ef015e.html","posts/f1068b53.html","posts/4a17b156.html","posts/99a5c448.html","posts/2e9081ea.html","posts/62a96202.html","posts/undefined.html","posts/ab29e5b.html","posts/516ae0b5.html","posts/7968a355.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}