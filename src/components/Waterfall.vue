<template>
  <div v-waterfall="wf" id="wf">
    <div v-for="item in items">
      <img v-bind:src= "item.src">
    </div>
  </div>
</template>

<script type="text/javascript">
function rdmImg(){
    var width = Math.floor(Math.random() * 100) + 300,
        height = Math.floor(Math.random() * 500) + 300;
    return "http://placekitten.com/" + height + '/' + width;
}

var items = (function(){
       var arr = new Array();
        for(var i= 0; i< 10; i++){
            var obj = {};
            obj.src = rdmImg();
            arr.push(obj);
        }
        return arr;
  })();

export default{
    data () {
      return {
        items: items
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
