//
//  pop! for jQuery
//  v0.3 requires jQuery v1.2 or later
//  WATCH OUT, THIS IS IN DEVELOPMENT AND DOES NOT WORK!
//  
//  Licensed under the MIT:
//  http://www.opensource.org/licenses/mit-license.php
//  
//  Copyright 2007,2008 SEAOFCLOUDS [http://seaofclouds.com]
//

(function($) {
  
  $.fn.pop = function(options) {

    var settings = $.extend({}, $.fn.pop.defaults, options);

    var pops = [];
    
    var zIndex   = 1000;

    $(this).each(function() {
    
      var content = $(this).find(settings.content);
      pops.push(content);
      var trigger = $(this).find(settings.trigger);

      content.hide();
      
      $(content).css({ zIndex: zIndex-- });

      $(trigger).click(function(e){
        $(content).show();
        $(content).addClass('active');
      });

      activePop = null;
      $(document.body).click(function(){ 
        $(pops).each(function(i) {
          if ($(this)!=activePop) {
            $(this).removeClass('active');
            $(this).hide();
          }
        });
        return false;
      });

      $([content, trigger]).mouseover(function() { 
        activePop = $(content);
      });
      $([content, trigger]).mouseout(function() { 
        activePop = null; 
      });

    });

  }

  $.fn.pop.defaults = {
   content : '.pop_content',
   trigger : '.pop_trigger'
  }
    

})(jQuery);
