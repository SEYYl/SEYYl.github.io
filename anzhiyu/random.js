var posts=["2023/01/25/Alist挂载百度网盘等/","2023/01/25/Linux系统软件安装/","2023/01/25/Linux课程笔记/","2023/01/25/Typora的使用说明/","2023/01/25/butterfly主题第三方文章/","2022/11/25/hello-world/","2022/12/17/免费申请域名/","2023/01/25/刷入第三方Rrecovery教程/","2022/12/16/博客指令/","2023/01/25/双系统安装教程/","2023/01/26/微标细用使用教程/","2023/02/08/文章转载/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}