document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("#page header"),l=document.getElementById("ast-scroll-top");l&&(astScrollToTop=function(){var e=getComputedStyle(l).content,o=l.dataset.onDevices,e=e.replace(/[^0-9]/g,"");"both"==o||"desktop"==o&&"769"==e||"mobile"==o&&""==e?(e=window.pageYOffset||document.body.scrollTop,t&&t.length?e>t.offsetHeight+100?l.style.display="block":l.style.display="none":300<window.pageYOffset?l.style.display="block":l.style.display="none"):l.style.display="none"},astScrollToTop(),window.addEventListener("scroll",function(){astScrollToTop()}),l.onclick=function(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})})});