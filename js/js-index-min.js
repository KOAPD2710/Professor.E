function index(){var t=$(window).innerWidth(),o=$(window).innerHeight();gsap.defaults({ease:"none",duration:2});let n=gsap.utils.toArray(".section1 .panel"),e=n.length*o*2,c=(t-$(".section1 .panel.first").width())/2;const i=t/100*40;$(".section1").css("height"," "+e+"px "),$(".section1 .container").css("column-gap"," "+i+"px "),$(".section1 .panel.first").css("marginLeft"," "+c+"px "),$(".section1 .panel.first").css("marginRight"," "+c-i/4+"px "),$(".section1 .panel img").each((function(){$(this).css("margin-top"," "+(o-$(this).height())/2+"px ")})),gsap.to(".section1 .container",{scrollTrigger:{trigger:".section1",start:"top top",end:"bottom bottom",pin:".section1 .container",pinSpacing:!1,scrub:!0,markers:!1}});var s=$(".section1 .panel.last"),r=s.offset().left+s.width()-t;gsap.to(n,{scrollTrigger:{trigger:".section1",start:"top top",end:()=>"+="+(e-2*o),scrub:!0,markers:!1,id:"section1-move"},ease:"power1.out",x:()=>"+="+-r}),$(".section2").css("top"," "+(e-o)+"px "),$(".section3").css("top"," "+e+"px "),gsap.to(".section3 .container img",{scrollTrigger:{trigger:".section3 .container",start:"top bottom",end:"bottom top",scrub:!0,markers:!1},y:()=>"+="+.3*$(".section3 .container img").height()});let a=$(".section3").height();$(".section4").css("top"," "+(e+a)+"px "),gsap.to(".section4 .pic1",{scrollTrigger:{trigger:".section4 .pic1",start:"top bottom",endTrigger:".section4",end:"bottom top",scrub:2,markers:!1},yPercent:-100}),gsap.to(".section4 .pic2",{scrollTrigger:{trigger:".section4 .pic2",start:"top bottom",endTrigger:".section4",end:"bottom top",scrub:.8,markers:!1},yPercent:-100}),gsap.to(".section4 .pic3",{scrollTrigger:{trigger:".section4 .pic3",start:"top bottom",endTrigger:".section4",end:"bottom top",scrub:1,markers:!1},yPercent:-80}),gsap.to(".section4 .pic4",{scrollTrigger:{trigger:".section4 .pic4",start:"top bottom",endTrigger:".section4",end:"bottom top",scrub:.5,markers:!1},yPercent:-100}),gsap.to(".section4 .pic5",{scrollTrigger:{trigger:".section4 .pic5",start:"top bottom",endTrigger:".section4",end:"bottom top",scrub:.5,markers:!1},yPercent:-100});let g=$(".section4").height();$("#footer").css("height"," "+(e+a+g+.55*o)+"px "),gsap.to(".navigation",{scrollTrigger:{trigger:".section2",start:"-100px bottom",endTrigger:".section4",end:"bottom 55%",toggleClass:{targets:".navigation",className:"lg-at-small"},markers:!1}}),$(".navigation .custom-fragment").hover((function(){$(".navigation").hasClass("lg-at-small")&&$(".navigation").addClass("hover-to-big")}),(function(){$(".navigation").hasClass("lg-at-small")&&$(".navigation").removeClass("hover-to-big")}))}function polygon(){document.querySelector(":root");var t=$(window).innerWidth(),o=($(window).innerHeight(),$(window).scrollTop()),n=$(".section3").offset().top-o,e=n+$(".section3 .text").height()+100,c=$(".section4").offset().top-o,i=c+$(".section4").height(),s="0px ".concat(n,"px"),r="".concat(t,"px ").concat(n,"px"),a="".concat(t,"px ").concat(e,"px"),g="0px ".concat(e,"px"),p="0px ".concat(c,"px"),l="".concat(t,"px ").concat(c,"px"),d="".concat(t,"px ").concat(i,"px"),m="0px ".concat(i,"px"),h="".concat(s,", "),x="".concat(m,", "),b="".concat(g,", "),u="".concat(a,", "),f="".concat(l,", "),w="".concat(p,", "),v="".concat(m,", "),y="".concat(d,", "),T="".concat(r),k="".concat(h).concat(x).concat(b).concat(u).concat(f).concat(w).concat(v).concat(y).concat(T);document.documentElement.style.setProperty("--polygon","polygon(".concat(k,")"))}window.addEventListener("load",(function(){index(),polygon(),window.addEventListener("scroll",(function(){polygon()})),window.addEventListener("resize",(function(){index(),polygon()}))}));