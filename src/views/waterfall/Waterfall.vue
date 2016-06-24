<template>
  <div id="wf">
    <div v-for="item in items">
      <img v-bind:src="item.src">
    </div>
  </div>
</template>

<script type="text/javascript">
/**
 * init
 */
var $items, itemWidth, time;
window.addEventListener('resize', function(){
    clearTimeout(time);
    time = setTimeout(function(){
     wf.arrange();
    }, 500);
});

/**
 * 时间大小的设置决定是先加载img还是arrange布局
 */
setTimeout(function(){
  $items = document.querySelectorAll('#wf div');
  itemWidth = $items[0].offsetWidth;
  wf.arrange();
}, 0);

/**
 * 随机高度，随机图片，布局函数
 */
var wf = {
  rdmImg: function(){
    var width = Math.floor(Math.random() * 100) + 300,
        height = Math.floor(Math.random() * 500) + 300;
    return "http://placekitten.com/" + height + '/' + width;
  },
  rdmHeight: function(){
    return Math.round(Math.random() * 200) + itemWidth;
  },
  arrange: function(){
    var viewWidth = document.documentElement.clientWidth || document.body.clientWidth,
        cols = Math.floor( viewWidth / itemWidth );

    //存放每列当前长度的数组并初始化
    var colsHeight = [];
    for(var i = 0; i< cols; i++){
        colsHeight.push(0);
     }
    //安置每一项item
    $items.forEach( function(ele, idx) {
    var curHeight = colsHeight[0], col = 0;
    for(var i = 0; i< colsHeight.length; i++){
    if(colsHeight[i] < curHeight){
        curHeight = colsHeight[i];
        col = i;
      }
    }
    ele.style.left = col * itemWidth + 'px';
    ele.style.top = curHeight + 'px';
    ele.style.height = wf.rdmHeight() + 'px';
    //console.log(ele.querySelector('img').src); // http://localhost:8080/

    colsHeight[col] += ele.offsetHeight;
    });
  },
}

/**
 * export数据层
 */
var items = (function(){
       var arr = new Array();
        for(var i= 0; i< 10; i++){
            var img = {};
            img.src = wf.rdmImg();
            arr.push(img);
        }
        return arr;
  })();
export default{
    data () {
      return {
        items: items,
      }
    }
}

</script>


<style lang="less">
@width: 200px;
@padding: 20px;

#wf{
  position: relative;
  margin: 0 auto;
  div{
    width: @width;
    position: absolute;
    top: 0;
    left: 0;
    padding: @padding;
    border: solid 1px grey;
    border-radius: 4px;
    .transition(left 1s);
    img{
      width: 100%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.transition(@transition){
  -webkit-transition: @transition;
  -moz-transition: @transition;
  -o-transition: @transition;
  transition: @transition;
}
</style>
