import Vue from 'vue'
import waterfall from './components/Waterfall'


Vue.directive('waterfall', {
    bind: function(){
      var time = null;
      window.addEventListener('resize', function(){
      clearTimeout(time);
      time = setTimeout(function(){
        arrange();
      }, 500);
    });
    window.onload = function(){
      //arrange()
    }
  }
});


new Vue({
  el: 'section',
  components: { waterfall }
})


/**
 * 如果在window.onload中调用arrange
 * 在本函数中，先执行bind，然后new Vue10个，然后alert(1)可以看items.length
 * 之后img加载完才触发arrange移动位置。这不是我想要的，我要的是先加arrange移动再加载图片，用promise吧
 */

//待HTML渲染完后开始绘制瀑布
//列数,个块宽度
var items = document.querySelectorAll('#wf div');
      var itemWidth = items[0].offsetWidth;
    arrange();
   // alert(items.length)

//初始化渲染函数
function arrange(){
        var viewWidth = document.documentElement.clientWidth || document.body.clientWidth,
          cols = Math.floor( viewWidth / itemWidth );

        //存放每列当前长度的数组并初始化
        var colsHeight = [];
        for(var i = 0; i< cols; i++){
        colsHeight.push(0);
     }
    //安置每一项item

        items.forEach( function(ele, idx) {
          var curHeight = colsHeight[0], col = 0;
          for(var i = 0; i< colsHeight.length; i++){
              if(colsHeight[i] < curHeight){
              curHeight = colsHeight[i];
              col = i;
          }
        }
        ele.style.left = col * itemWidth + 'px';
        ele.style.top = curHeight + 'px';
        ele.style.height = rdmHeight() + 'px';
        colsHeight[col] += ele.offsetHeight;
    });

    }

function rdmHeight(){
    return Math.round(Math.random() * 200) + itemWidth;
}

