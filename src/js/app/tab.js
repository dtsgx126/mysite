var $=require('jquery')
function Tab($ct) {
       this.$ct=$ct
       this.bind()
    }
    Tab.prototype.bind = function() {
        var _this=this
        this.$ct.find('.control-btns').on('click',function(e) {
          e.stopPropagation()
          e.stopPropagation()
          if (e.target.className=='control-btns') {return}
          var index=$(this).children().index(e.target)          
          $(e.target).siblings().removeClass()
          $(e.target).addClass('active')
          _this.$ct.find('.content section').hide().eq(index).fadeIn()
        })
    };
module.exports=Tab