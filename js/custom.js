$(function() {
	$('aside.article-image').css({backgroundSize: "cover"});

	setTimeout(function(){ $('#map').removeClass('inactive'); },1);

	setTimeout(function(){ $('.funding-total').removeClass('inactive'); },1);

	$('#lead #lead-inner .orange-button').click(function(){
		$(this).toggleClass('active');
		$(this).parents('#lead').next().slideToggle();
	});

	$('.collective-images img').click(function(){
		$('.collective-images img').not(this).removeClass('active');
		$(this).toggleClass('active');
		if(!$('#expanded-image-container').hasClass('active')) {
			$('#expanded-image-container').slideToggle();
			$('#expanded-image-container').toggleClass('active');
		} else {
			// Switch the content here
		}
	});
	$('#expanded-image-container span.close').click(function(){
		$('.collective-images img').removeClass('active');
		$('#expanded-image-container').slideToggle();
		$('#expanded-image-container').removeClass('active');
	});

	$('.live-pin').click(function(e){
		e.preventDefault();
		$('.map-overlay-outer').fadeIn();
	});

	$('section#map .map-overlay span.close').click(function(e){
		$(this).parents('.map-overlay-outer').fadeOut();
	});

	$('.project-buttons .orange-button').click(function(){
		$(this).toggleClass('active');
		$(this).parents('.project-details').next().slideToggle();
	});
	$('section.project-donate header p').click(function(){
		$(this).parents('.project-donate').prev().find('.orange-button').toggleClass('active');
		$(this).parents('.project-donate').slideToggle();
	});

    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };


});

jQuery(function($) {

    $('.timer0a').countTo({
        from: 0,
        to: 20,
        speed: 1000,
        refreshInterval: 50	            
    });
    $('.timer0b').countTo({
        from: 0,
        to: 45678,
        speed: 1000,
        refreshInterval: 50,
		onUpdate: function (value) {
		    var counter= $(".timer0b").text();
		    if(counter > 1000) {
		    	$(".timer0b").text(counter.substring(0, 1)+","+counter.substring(1, 6));
		    }
		    if(counter > 10000) {
		    	$(".timer0b").text(counter.substring(0, 2)+","+counter.substring(2, 6));
		    }
		    if(counter > 100000) {
		    	$(".timer0b").text(counter.substring(0, 3)+","+counter.substring(3, 6));
		    }						    
		}		            
    });

    $('.timer1a').countTo({
        from: 0,
        to: 80,
        speed: 1000,
        refreshInterval: 50	            
    });
    $('.timer1b').countTo({
        from: 1260,
        to: 1008,
        speed: 1000,
        refreshInterval: 50,
		onUpdate: function (value) {
		    var counter= $(".timer1b").text();
		    if(counter > 1000) {
		    	$(".timer1b").text(counter.substring(0, 1)+","+counter.substring(1, 6));
		    }
		    if(counter > 10000) {
		    	$(".timer1b").text(counter.substring(0, 2)+","+counter.substring(2, 6));
		    }
		    if(counter > 100000) {
		    	$(".timer1b").text(counter.substring(0, 3)+","+counter.substring(3, 6));
		    }						    
		}		            
    });

    $('.timer2a').countTo({
        from: 0,
        to: 40,
        speed: 1000,
        refreshInterval: 50	            
    });
    $('.timer2b').countTo({
        from: 114195,
        to: 45678,
        speed: 1000,
        refreshInterval: 50,
		onUpdate: function (value) {
		    var counter= $(".timer2b").text();
		    if(counter > 1000) {
		    	$(".timer2b").text(counter.substring(0, 1)+","+counter.substring(1, 6));
		    }
		    if(counter > 10000) {
		    	$(".timer2b").text(counter.substring(0, 2)+","+counter.substring(2, 6));
		    }
		    if(counter > 100000) {
		    	$(".timer2b").text(counter.substring(0, 3)+","+counter.substring(3, 6));
		    }	
		}		            
    });

    $('.timer3a').countTo({
        from: 0,
        to: 100,
        speed: 1000,
        refreshInterval: 50	            
    });
    $('.timer3b').countTo({
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 50,
		onUpdate: function (value) {
		    var counter= $(".timer3b").text();
		    if(counter > 1000) {
		    	$(".timer3b").text(counter.substring(0, 1)+","+counter.substring(1, 6));
		    }
		    if(counter > 10000) {
		    	$(".timer3b").text(counter.substring(0, 2)+","+counter.substring(2, 6));
		    }
		    if(counter > 100000) {
		    	$(".timer3b").text(counter.substring(0, 3)+","+counter.substring(3, 6));
		    }	
		}		            
    });
});
$(function(){
    $("#big-image img:eq(0)").nextAll().hide();
    $(".small-images img").click(function(e){
        var index = $(this).index();
        $("#big-image img").eq(index).show().siblings().hide();
    });
});