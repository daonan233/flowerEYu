<script setup>

</script>

<template>
    <header class="site-header no-select is-homepage gizle sabit" :class="{ yya: true }" role="banner">
        <div class="site-top">
            <div class="site-branding">
                <span class="site-title"><span class="logolink moe-mashiro"><a href="https://demo.stackoverflow.wiki/"
                            alt="菠萝Sir" style="width: 330px;"><ruby>
                                <span class="no">#</span>&nbsp;<span class="shironeko">bupterBlog</span>
                                <rp></rp>
                                <rt class="chinese-font">个人博客</rt>
                                <rp></rp>
                            </ruby></a></span></span>
            </div>
            <div class="lower-cantiner">
                <div class="lower">
                    <div id="show-nav" class="showNav mobile-fit">
                        <div class="line line1">
                        </div>
                        <div class="line line2">
                        </div>
                        <div class="line line3">
                        </div>
                    </div>
                    <nav class="mobile-fit-control hide">
                        <ul id="menu-new" class="menu">
                            <li><a href="https://demo.stackoverflow.wiki/"><span class="faa-parent animated-hover"><i
                                            class="fa fa-home faa-horizontal" aria-hidden="true"></i> 首页</span></a></li>
                            <li><a href="https://demo.stackoverflow.wiki/links.html"><span
                                        class="faa-parent animated-hover"><i class="fa fa-link faa-horizontal"
                                            aria-hidden="true"></i> 友链</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="header-user-avatar">
                <a href="https://demo.stackoverflow.wiki/start"><img class="faa-shake animated-hover"
                        src="https://ftp.stackoverflow.wiki/bolo/moezx/cdn/img/Sakura/images/none.png" width="30"
                        height="30"></a>
                <div class="header-user-menu">
                    <div class="herder-user-name no-logged">
                        管理登录
                    </div>
                </div>

            </div>
        </div>
    </header>
</template>

<style>

</style>