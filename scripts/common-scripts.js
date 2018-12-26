;
(function ($) {
    $(function () {
        if ($(window).width() > 767) {
            var $header = $("header"),
                $clone = $header.before($header.clone().addClass("fixedTop isSticky")),
                $fixedHeader = $('.fixedTop'),
                $headerHeight = $fixedHeader.outerHeight() + 5,
                lastPos = 0;
            $(window).resize(function () {
                $headerHeight = $fixedHeader.outerHeight() + 5;
            });


            $(window).on("scroll", function () {
                $fixedHeader.removeClass('onSizing');
                var fromTop = $(window).scrollTop();
                if (fromTop > $headerHeight * 4) {
                    $fixedHeader.css({
                        top: 0
                    });

                    if (fromTop > lastPos) {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                    }
                    lastPos = fromTop;


                } else {
                    $fixedHeader.css('top', '-' + $headerHeight + 'px');
                }
            });

        }
        
        $(".center-line").parent().addClass('hasLine');


        // Begin input common focus and blur for value.
        $('.main-wrap input:text, .main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        });
        $('.main-wrap input:text,.main-wrap input:password,.main-wrap input[type="email"],.main-wrap input[type="tel"],.main-wrap input[type="number"],.main-wrap input[type="search"], .main-wrap textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        });
        // Ends input common focus and blur for value.
        
        $('nav.main-nav ul > li').find('> ul').parent().addClass("show-nav").append('<i><img src="svg/dropdown-arrow.svg" alt=""></i>');
        $('nav.main-nav ul > li').find('> ul').addClass('sub-menu');
        if ($(window).width() < 992) {
            $(".main-nav ul > li.show-nav > a").click(function (e) {
                e.preventDefault();
                $(this).parent().find('ul.sub-menu').slideToggle();

            })
        }

        // Phone nav click function 
        $('.menu-icon-wrap').click(function () {
            $("body").toggleClass('navOpen');
            if ($(window).width() < 768) {
                $('ul.sub-menu:visible').slideUp();
            }
        });
       
        if($('select.select-stylled').length){
            $("select.select-stylled").selectric();
        }
        
        if($('#datepicker').length) {
            $("#datepicker").datepicker( {  
                defaultDate: '28/06/2019' 

            });
        }   

        function setParentHeight(elements, elementParent) {
            var t = 0,
                t_elem;
            $(elements).each(function () {
                $this = $(this);
                if ($this.outerHeight() > t) {
                    t_elem = this;
                    t = $this.outerHeight();
                }
            });

            $(elements).parent(elementParent).outerHeight(t);
        }

        setParentHeight('.destination-item', '.destination-item-wrap');

        $(window).on("resize", function () {
            setParentHeight('.destination-item', '.destination-item-wrap');
        });


        //FAQs Accordion Function
        if ($(window).width() < 768) {
            $(".mobi-accordion").each(function () {
                var $this = $(this);
                $this.find(" > span").on("click touch", function () {
                    $(".mobi-accordion").removeClass("active")
                    $(".mobi-accordion ul").slideUp();
                    if ($this.find("ul:visible").length) {
                        $(".mobi-accordion").removeClass("active")
                        $(".mobi-accordion ul").slideUp();
                    } else {
                        $this.addClass("active")
                        $(".mobi-accordion ul").slideUp();
                        $this.find(" > ul").slideDown();
                    }
                })
            })
        }


        //Experience tab function 
        $("#tab-nav li").eq(0).addClass('active');
        $("#select-tab").html($("#tab-nav li.active").text());
        $("#tab-nav li").each(function(i){
            var $this = $(this);
            
            $this.click(function(){
                if($this.hasClass('active')) return false
                else{
                    $("#tab-nav li").removeClass('active');
                    $this.addClass('active');
                    $("#select-tab").html($this.text())
                    $(".experience-tab-wrap").removeClass('shown');
                }
            })
            
        });

        
        $('#discover-tabed-nav > li').eq(0).addClass("active")
        $("#discover-select-tab").html($("#discover-tabed-nav li.active").text())
        $('#meet-the-guide div.experience-tab-content').hide()
        $('#meet-the-guide div.experience-tab-content').eq(0).show()

        $('#discover-tabed-nav > li').each(function(i){
            var $this = $(this);
            
            $this.click(function(){
                if($this.hasClass('active')) return false
                else{
                    $("#discover-tabed-nav > li").removeClass('active');
                    $this.addClass('active');
                    $("#discover-select-tab").html($this.text())
                    $(".experience-tab-wrap").removeClass('shown');
                     $('#meet-the-guide div.experience-tab-content').hide()
                    $('#meet-the-guide div.experience-tab-content').eq(i).show()
                }
            })
        });

        $("#select-tab").click(function () {
            $(this).parent().toggleClass('shown');
        });
        
        $("#discover-select-tab").click(function () {
            $(this).parent().toggleClass('shown');
        });


        $(".actiontriger").click(function () {
            $(this).parent().toggleClass('shown');
        });


        if ($(window).width() < 768) {
            if ($("#meet-slider-wrap").length) {
                $('#meet-slider-wrap').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                });
            }
        }

        if ($('#experience-tab-content-wrap').length) {
            $('#experience-tab-content-wrap').slick({
                dots: false,
                infinite: true,
                speed: 600,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                fade: true,
                draggable: false,
                arrows: false,
                swipe: false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 99999,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: false,
                            fade: false,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            fade: true,
                            infinite: false,
                        }
                    }
                  ]
            });

            $('.experience-tab-wrap ul li').each(function (i) {
                $('.experience-tab-wrap ul li').eq(0).addClass('active');
                $(this).on('click', function () {
                    $('.experience-tab-wrap ul li').removeClass('active');
                    $(this).addClass('active');
                    $('#experience-tab-content-wrap').slick('slickGoTo', (i + 1) - 1);
                })

            });
        }

        if($(window).width() < 1025){

            if ($('#inspiration-deals').length) {
                    $('#inspiration-deals').slick({
                        responsive: [
                            {
                                breakpoint:767,
                                settings:{
                                dots: true,
                                infinite: true,
                                speed: 600,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                autoplay: false,
                                    //fade: false,
                                }
                            },
                            {
                                breakpoint: 991,
                                settings: {
                                    dots: true,
                                    infinite: true,
                                    speed: 600,
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                }
                            },
                            {
                                breakpoint: 1025,
                                settings: {
                                    dots: true,
                                    infinite: true,
                                    speed: 600,
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    autoplay: false,
                                }
                            }
                        ]
                    });
            } 
        }

        $(window).on('resize', function () {
            if ($(window).width() < 992) {
                $('body').addClass('resizing');
                setTimeout(function () {
                    $('body').removeClass('resizing');
                }, 200)
            }

        });

        if($("#carousel").length){
            
            $('#carousel').on('init', function (event, slick, currentSlide, nextSlide) {
                $(this).find(".slick-current.slick-active").next().addClass('zoome');
            });
            
            $('#carousel').slick({
                dots: false,
                infinite: false,
                speed: 600,
                slidesToShow: 3,
                autoplay: false,
                arrows: true,
                centerPadding:'116px',
                //centerMode:true,
                adaptiveHeight:true,
                responsive:[
                    {
                        breakpoint: 767,
                        settings:{
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots:true,
                            arrows:true,
                            centerPadding:'0',
                        }
                    }
                ]
            }).on('afterChange', function (event, slick, currentSlide, nextSlide){
                $(this).find(".slick-slide").removeClass('zoome');
                $(this).find(".slick-current.slick-active").next().addClass('zoome');
            });
        }
    
        if($(window).width() < 1025 ){
            $('.wrapper-click').bind('click', 'touchend', function(){

                $(this).parent().find('.selectric-item-wrap:visible').slideUp()
                $(this).removeClass("active")
                    if($(this).parent().find(".selectric-item-wrap:visible").length){
                        $(this).removeClass("active")
                        $(this).parent().find('.selectric-item-wrap').slideUp()
                    }
                    else{
                        $(this).addClass("active")
                        $(this).parent().find('.selectric-item-wrap').slideDown()
                    }
            })

            $('.listed-info > h6').bind('click', 'touchend', function(){

                $(this).parent().find('> ul:visible').slideUp()
                $(this).removeClass("active")
                    if($(this).parent().find("ul:visible").length){
                        $(this).removeClass("active")
                        $(this).parent().find('>ul').slideUp()
                    }
                    else{
                        $(this).addClass("active")
                        $(this).parent().find('ul').slideDown()
                    }
            })
        }
        
        if($(window).width() < 768){
        
            if ($("#carousel-mobi").length) {
                $('#carousel-mobi').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    autoplay: true
                });
            }
            
            if ($("#multiple").length) {
                $('#multiple').slick({
                    dots: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                   //slideshow:6,
                    autoplay: false
                });
            }
        }
        
        if( $('#m_map22x').length){
            $('img[usemap]').rwdImageMaps();
        }
        
        if( $(window).width() > 991 ){
            $('#m_map22x > area').eq(0).addClass("active")
            $('#map-text-info-wrap > div.map-text-info').hide()
            $('#map-text-info-wrap > div.map-text-info').eq(0).show()
            $('#m_map22x > area').each(function(i){

                $(this).mouseenter(function(e){
                    e.preventDefault();

                    if( $(this).hasClass("active") ) return false

                    else{
                        $("#m_map22x > area.active").removeClass("active")
                        $(this).addClass('active')
                        $('#map-text-info-wrap > div.map-text-info').hide()
                        $('#map-text-info-wrap > div.map-text-info').eq(i).fadeIn()
                    }
                });
            })
        }

    
    });
    // End ready function.

    // Set total element height on parent
    function totalHeight() {
        var elementHeight = $(".experience-tab-content").outerHeight();
        $(".experience-tab-content-wrap").css('height', elementHeight);
    }

    // Fix Elements height 
    function fixElementHeights(element) {
        var heights = new Array();

        // Loop to get all element heights
        $(element).each(function () {
            // Need to let sizes be whatever they want so no overflow on resize
            $(this).css('min-height', '0');
            $(this).css('max-height', 'none');
            $(this).css('height', 'auto');

            // Then add size (no units) to array
            heights.push($(this).outerHeight());
        });

        // Find max height of all elements
        var max = Math.max.apply(Math, heights);

        // Set all heights to max height
        $(element).each(function () {
            $(this).css('height', max + 'px');
            // Note: IF box-sizing is border-box, would need to manually add border and padding to height (or tallest element will overflow by amount of vertical border + vertical padding)
        });
    }

    $(window).on("load", function () {
        // Fix heights on page load
        fixElementHeights('.slide-content');
        if ($(window).width() > 991) {
            fixElementHeights('.focus-gellary-item');
        }
        totalHeight();
        // Fix heights on window resize
        $(window).on("resize", function () {
            // Needs to be a timeout function so it doesn't fire every ms of resize
            setTimeout(function () {
                fixElementHeights('.slide-content');
                if ($(window).width() > 991) {
                    fixElementHeights('.focus-gellary-item');
                }
                totalHeight();
            }, 120);
        });
    });
    // End Fix Elements height 

    $(window).on("load", function () {

        // Begin common slider
        if ($('#hero-slide-wrap').length == 0) return false

        $('#hero-slide-wrap').flexslider({
            animation: "false",
            slideshow: false,
            directionNav: false,
            controlNav: true,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        });

        //$('div.slider-wrap video').trigger('play');
    });


})(jQuery);