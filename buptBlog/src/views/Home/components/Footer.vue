<script setup>

</script>

<template>
    <!-- footer部分！ -->
    <footer id="colophon" class="site-footer" role="contentinfo">
        <div class="site-info">
            <div class="footertext">
                <div class="img-preload">
                    <img src="https://ftp.stackoverflow.wiki/bolo/moezx/cdn/img/Sakura/images/wordpress-rotating-ball-o.svg"><img src="https://ftp.stackoverflow.wiki/bolo/moezx/cdn/img/Sakura/images/disqus-preloader.svg">
                </div>
                <p class="foo-logo" style="background-image: url(src/assets/footerIcon.jpeg);">
                </p>
                <p style="font-family: 'Ubuntu', sans-serif;">
                    <span style="color: #666666;">Crafted with <i class="fa fa-heart animated" style="color: #e74c3c;"></i> by <a rel="me" href="https://github.com/daonan233/flowerEYu" target="_blank" style="color: #000000;text-decoration:none;">网络摸鱼小队</a></span>
                </p>
                © 2023 <a href="https://github.com/daonan233/flowerEYu">bupterBlog</a><br>
                <br>
            </div>
            <div class="footer-device">
            </div>
        </div>
    </footer>
</template>

<style>
.site-footer {
    padding: 2%;
    background: rgba(255,255,255,.8);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto
}

.site-info {
    text-align: center;
    font-size: 13px;
    color: #b9b9b9
}

.site-info a {
    color: #b9b9b9
}

.site-info a:hover {
    color: rgba(73, 123, 215, 0.735)
}

.footertext p {
    margin-bottom: 10px
}

.footertext .foo-logo {
    width: 30px;
    height: 40px;
    opacity: .8;
    margin: 0 auto;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

}

.img-preload {
	visibility: hidden;
	width: 0;
	height: 0
}
</style>
    
    