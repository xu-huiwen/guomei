$(document).ready(function(){
	// 顶部
	$("#gome-user").each(function(index){
		$(this).hover(
			function(){
				$("#loginDiv-name").eq(index).css("background","#fff")
				$(".public-dropdown").eq(index).css("display","block");
			},function(){
				$(".public-dropdown").eq(index).css("display","none");
				$("#loginDiv-name").eq(index).css("background","")
			})
	})
	// 国美
	var flag1='duiw'
	var n3=0;
	var next3=0;
	var width1=$(".gmhylb").width()
	function move3(){
        if(!flag1){
        return;
        }
        flag1=false;
    	$(".gmhylb ul").eq(n3).css("left",0).eq(next3).animate({left:-240},1000,function(){
		    var fir=$(".gmhylb ul li")
			var fe=$("fir:first")
		   fir.append(fe)
		   fir.eq(next3).css("left",0)
		   flag1='duiw';
		})
		
    }
    $(".user-icon-next").click(function(){
		move3()
	})
	$(".user-icon-prev").click(function(){
		if(!flag1){
	    return
	    }
	    flag1=false
	     var firv=$(".gmhylb ul li")
	     var fev=$("fivr:first")
	     var fevr=$("firv:last")
        $("firv:first").before(fevr)
		$(".gmhylb ul").eq(n3).css("left","-240px").eq(next3).animate({left:0},1000,function(){
		   flag1='duiw';
		})
	})





	$("#gome-mygome").each(function(index){
		$(this).hover(
			function(){
				$("#gome-mygome").eq(index).css("background","#fff")
				$(".public-dropdown").eq(1).css("display","block");
			},function(){
				$(".public-dropdown").eq(1).css("display","none");
				$("#gome-mygome").eq(index).css("background","")
			})
	})
	$("#gome-service").each(function(index){
		$(this).hover(
			function(){
				$("#gome-service").eq(index).css("background","#fff")
				$(".public-dropdown").eq(2).css("display","block");
			},function(){
				$(".public-dropdown").eq(2).css("display","none");
				$("#gome-service").eq(index).css("background","")
			})
	})
	$("#gome-sitemap").each(function(index){
		$(this).hover(
			function(){
				$("#gome-sitemap").eq(index).css("background","#fff")
				$(".public-dropdown").eq(3).css("display","block");
			},function(){
				$(".public-dropdown").eq(3).css("display","none");
				$("#gome-sitemap").eq(index).css("background","")
			})
	})
	$("#gome-phone").each(function(index){
		$(this).hover(
			function(){
				$("#gome-phone").eq(index).css("background","#fff")
				$(".public-dropdown").eq(4).css("display","block");
			},function(){
				$(".public-dropdown").eq(4).css("display","none");
				$("#gome-phone").eq(index).css("background","")
			})
	})








	// logo下
	var n4=0;
	var next4=0;
	var flag="true";
	var t1=setInterval(move4,2000);
	function move4(){
		if(flag==false){
			return;
		}
		flag=false;
		next4=n4+1;
		if(next4>=$(".hd-clickscroll li").length){
			next4=0;
		}
		$(".hd-clickscroll").eq(next4).css("top","40px").end().eq(n4).animate({top:-40},600).end().eq(next4).animate({top:0},600,function(){
			flag="true";
		})
		n4=next4;
	}
	

//var t1=setInterval(dLun,2000);
//  function dLun(){
//      $(".nav_Rlubu").eq(0).animate({top:-40},600,function(){
//                  var fe=$(".nav_lun:first");
//                 $(".nav_Rlubu").append(fe)
//                 $(".nav_Rlubu").eq(0).css("top",0);
//      })
//  }
//  $(".lunbo").hover(function(){
//      clearInterval(t1);
//  },function(){
//      t1=setInterval(dLun,2000);
//  })
//  $(".an_top").click(function(){
//      dLun();
//  })
//  $(".an_bot").click(function(){
//      $(".nav_lun:first").insertBefore($(".nav_lun:last"));
//      $(".nav_Rlubu").eq(0).css("top","40").end().eq(0).animate({top:0},600)
//  })





	// banner左侧
	$(".bgw").each(function(index){
		$(this).hover(
			function(){
				$(".subnav").eq(index).css("display","block");
			},function(){
				$(".subnav").eq(index).css("display","none");
			})
	})




    // banner轮播
	var nw=0;
	var nextw=0;
	var flag="duil";
	var t4=setInterval(move4,4000);
	function move4(){
		nextw=nw+1;
		if(flag==false){
			return;
		}
		flag=false;
		if(nextw>=$(".edit-mode .ziti").length){
			nextw=0;
		}
		$("#slide-list .slide-ul .a1 a img").eq(nw).animate({opacity:0},600).end().eq(nextw).animate({opacity:1},600,function(){
			flag="duil";
		})
		$("#slide-list .slide-ul .a1").eq(nw).animate({opacity:0},600).end().eq(nextw).animate({opacity:1},600,function(){
			flag="duil";
		})

		
		$(".edit-mode .item i:nth-of-type(1)").eq(nw).addClass("cur").siblings().removeClass("cur");
		$(".edit-mode .ziti").eq(nw).css("display","block").end().eq(nextw).css("display","none");
		$(".edit-mode .item ").eq(nw).css("display","none").end().eq(nextw).css("display","block");
		
		nw=nextw;
	}
	$("#slide-tab li").mouseover(function(){
		var index=$(this).index();
        if(flag==false){
				return;
			}
		flag=false;
        $("#slide-list .slide-ul .a1 a img").eq(nw).animate({opacity:0},600).end().eq(nextw).animate({opacity:1},600,function(){
			flag="duil";
		})
		$("#slide-list .slide-ul .a1").eq(nw).animate({opacity:0},600).end().eq(nextw).animate({opacity:1},600,function(){
			flag="duil";
		})
		$(".edit-mode .item i:nth-of-type(1)").eq(nw).addClass("cur").siblings().removeClass("cur");
		$(".edit-mode .ziti").eq(nw).css("display","block").end().eq(nextw).css("display","none");
		$(".edit-mode .item ").eq(nw).css("display","none").end().eq(nextw).css("display","block");
	    nw=index;
		nextw=index;
	})
//	var n6=0;
//	$(".edit-mode p b").mouseover(function(){
//		var index=$(this).index();
//      if(flag==false){
//				return;
//			}
//		flag=false;
//     $("#slide-list .slide-ul li a img").eq(nw).animate({opacity:0},600).end().eq(nextw).animate({opacity:1},600,function(){
//			flag="duil";
//		})
//		$("#slide-list .slide-ul li").eq(n6).animate({opacity:0},600).end().eq(index).animate({opacity:1},600,function(){
//			flag="duil";
//		})
//	    n6=index;
//		next6=index;
//	})








	// 猜你喜欢
    var n1=0;
	var next1=0;
	$(".change").eq(0).click(function(){
		next1=n1+1;
		if(next1>=$("#j-imgload-recomm ul").length){
			next1=0;
		}
          $("#j-imgload-recomm ul").eq(n1).css("display","none").end().eq(next1).css("display","block");
          n1=next1;
		})








	// 1楼轮播图
	function luobo(obj3,obj4,obj5,obj6){
	// var $len=$(".slider-body>ul>li").length;
	var $box=obj3
	var $div_li=obj4
	var n2=0;
	var next2=0;
	var flag=true;
	var t=setInterval(move,1800);
	function move(){
		next2=n2+1;
		if(flag==false){
			return;
		}
		flag=false;
		if(next2>=$box.length){
			next2=0;
		}
		$div_li.eq(n2).addClass("slider-selected").siblings().removeClass("slider-selected");
		$box.eq(n2).animate({opacity:0},600).end().eq(next2).animate({opacity:1},600,function(){
			flag=true;
		})
		n2=next2;
	obj5.eq(0).click(function(){
			next2=n2-1;
			if(flag==false){
				return;
			}
			flag=false;
			if(next2<0){
				next2=$box.length-1;
			}
		    $div_li.eq(n2).addClass("slider-selected").siblings().removeClass("slider-selected");
			$box.eq(n2).animate({opacity:0},600).end().eq(next2).animate({opacity:1},600,function(){
				flag=true;
			})
			n2=next2;
		})
	    }
        obj6.eq(0).click(function(){
        	move();
        })
       $div_li.mouseover(function(){
			var index=jQuery(this).index();
			if(flag==false){
				return;
			}
			flag=false;
	        $div_li.eq(n2).addClass("slider-selected").siblings().removeClass("slider-selected");
	        $box.eq(n2).animate({opacity:0},600).end().eq(index).animate({opacity:1},600,function(){
				flag=true;
			})
	        n2=index;
		    next2=index;
	    })

}
    luobo($('.floor1 .slider-body>ul>li'),$('.floor1 .slider-nav>ul>li'),$('.floor1 .slider-prev'),$('.floor1 .slider-next'))
	luobo($('.floor2 .slider-body>ul>li'),$('.floor2 .slider-nav>ul>li'),$('.floor2 .slider-prev'),$('.floor2 .slider-next'))
	luobo($('.floor3 .slider-body>ul>li'),$('.floor3 .slider-nav>ul>li'),$('.floor3 .slider-prev'),$('.floor3 .slider-next'))
	luobo($('.floor4 .slider-body>ul>li'),$('.floor4 .slider-nav>ul>li'),$('.floor4 .slider-prev'),$('.floor4 .slider-next'))
	luobo($('.floor5 .slider-body>ul>li'),$('.floor5 .slider-nav>ul>li'),$('.floor5 .slider-prev'),$('.floor5 .slider-next'))





	// 1楼选项卡
	function xuanxiang(obj1,obj2){
		obj1.each(function(index){
			$(this).mouseover(function(){
				obj2.each(function(){
					$(this).css('display','none')
					obj1.css({'background':'transparent','color':'#535353'})

				})
				obj2.eq(index).css('display','block');
				obj1.eq(index).css({'background':'#535353','color':'#fff'})


			})
		})

	}
	xuanxiang($('.floor1 .tab-item a'),$('.floor1 .main'))
	xuanxiang($('.floor2 .tab-item a'),$('.floor2 .main'))
	xuanxiang($('.floor3 .tab-item a'),$('.floor3 .main'))
	xuanxiang($('.floor4 .tab-item a'),$('.floor4 .main'))
	xuanxiang($('.floor5 .tab-item a'),$('.floor5 .main'))

	// 跳楼
	






	// 楼层跳转

	var cheight=document.documentElement.clientHeight;
	var nheight;
	var now;
	for (var i = 0; i < $(".floor").length; i++) {
		var juli=$(".floor").eq(i).position();
		$(".floor").eq(i).prop("h",juli.top);
	}
	$(window).on("scroll",function(){
		var top=$(window).scrollTop()
		if(top>=$(".floor").first().prop("h")-300){
			$("#elevator").css("display","block")
			
		}
		if(top<$(".floor").first().prop("h")-300){
			$("#elevator").css("display","none")
		}
		for (var i = 0; i < $(".floor").length; i++) {
			if(top>=$(".floor").eq(i).prop("h")-200){
				$(".handler").eq(i).find("a").css("color","#c00").end().siblings().find("a").css("color","")
				$(".handler").eq(i).find("span").css("color","#c00").end().siblings().find("span").css("color","#666")
				$(".handler").eq(i).find("b").css("display","block").end().siblings().find("b").css("display","none")
				now=i
			}
		}
	})





		$(".handler").on("click",function(){
			var index=$(this).index();
			var hh=$(".floor").eq(index).prop("h")
			var top=$(window).scrollTop()
			var src={aa:top}
			$(src).animate({aa:hh},{
				duration:300,
				step:function(){
					$(window).scrollTop(src.aa)
				}
			})
			$(this).find("a").css("color","#c00").end().siblings().find("a").css("color","")
			$(this).find("span").css("color","#c00").end().siblings().find("span").css("color","#666")
			$(this).find("b").css("display","block").end().siblings().find("b").css("display","none")
			now=index;
		})


		$(".handler").hover(function(){
			$(this).find("a").css("color","#c00")
			$(this).find("span").css("color","#c00")
			$(this).find("b").css("display","block")
		},function(){
			if($(this).index()==now){
				return;
			}
			$(this).find("a").css("color","")
			$(this).find("span").css("color","#666")
			$(this).find("b").css("display","none")
		})
	       // $.backTop($(".back-top"),1000)












	      // 右侧
	    
        $("#gome-aside-app").hover(function(){
          $("#te").stop(true);
         $("#te").delay(200).animate({right:35},200)
        },function(){
        	$("#te").stop(true);
            $("#te").delay(200).animate({right:-145},200)
        })
         $("#gome-aside-survey").hover(function(){
         	$("#te1").stop(true);
         $("#te1").delay(200).animate({right:35},200)
        },function(){
        	$("#te1").stop(true);
            $("#te1").delay(200).animate({right:-45},200)
        })
          $("#gome-aside-service").hover(function(){
          	$("#te2").stop(true);
         $("#te2").delay(200).animate({right:35},200)
        },function(){
        	$("#te2").stop(true);
            $("#te2").delay(200).animate({right:-45},200)
        })
           $("#gome-aside-backtop").hover(function(){
          	$("#te3").stop(true);
         $("#te3").delay(200).animate({right:35},200)
        },function(){
        	$("#te3").stop(true);
            $("#te3").delay(200).animate({right:-45},200)
        })

       $("#gome-bar-btn-cart").click(function(){
              $("#gome-bar-favorites").css("display","block")
       })





























	
})
