!function(s){s.fn.animated=function(a,t){s(this).css("opacity","0").addClass("animated").waypoint(function(i){"down"===i?s(this).removeClass(t).addClass(a).css("opacity","1"):s(this).removeClass(a).addClass(t).css("opacity","1")},{offset:"90%"}).waypoint(function(i){"down"===i?s(this).removeClass(a).addClass(t).css("opacity","1"):s(this).removeClass(t).addClass(a).css("opacity","1")},{offset:-s(window).height()})}}(jQuery);