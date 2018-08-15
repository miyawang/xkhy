<template>
  <div id="app">

    <!--header-->
    <header>
      <span class="icon-style iconfont">&#xe64b;</span>
      <div class="header_title">客户详情</div>
    </header>

    <router-view></router-view>

    <!--footer-->


    <div id="menu" class="menu">
          <router-link to="/" class="current">
            <div id="one" class="subMenu text-center" data-src="">
              <span class="menu_img iconfont icon-style">&#xe660;</span>
              <div class="menu_name">私海</div>
            </div>
          </router-link>

          <router-link to="/opensea">
            <div id="two" class="subMenu text-center"  data-src="">
              <span class="menu_img iconfont" style="font-size: 20px !important;">&#xe602;</span>
              <div class="menu_name">公海</div>
            </div>
          </router-link>

          <router-link to="/skill">
            <div id="three" class="subMenu text-center" data-src="">
              <span class="menu_img iconfont">&#xe68c;</span>
              <div class="menu_name">话术</div>
            </div>
          </router-link>

          <router-link to="/member">
            <div id="four" class="subMenu text-center" data-src="">
              <span class="menu_img iconfont">&#xe61a;</span>
              <div class="menu_name">我的</div>
            </div>
          </router-link>

    </div>
  </div>


</template>

<script>

  import './assets/iconfont/iconfont.css'
  import './assets/css/style.css'
  import './assets/css/footer.css'

  //自适应
  document.addEventListener('plusready', function() {
    //console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"
  });
  //通过window.screen.width获取屏幕的宽度
  var offWidth = window.screen.width / 20; //这里用宽度/20表示1rem取得的px
  document.getElementsByTagName("html")[0].style.fontSize = offWidth + 'px'; //把rem的值复制给顶级标签html的font-size


  export default {
    name: 'app'
  }
</script>


