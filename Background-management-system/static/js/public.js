$(function(){
/////////////////////////////////////////////////////////////数据库管理中心
	//数据库信息
	function dataInformation(){
		var obj=$('.tiao-box');
		var mw=parseInt(obj.find('.top').text())*obj.find('.bg').width()/100;
		obj.find('.mask').css('width',mw+'px');
		var num=0;
		var max=parseInt(obj.find('.mask').text());
		obj.find('.mask').text(num+'M');
		var maxnum=parseInt(obj.find('.top').text())*parseInt(obj.find('.right').text())/100;
		maxnum=Math.ceil(maxnum);
		var time=250/maxnum;
		function move(){
			if(num>=max){
				clearInterval(t);
				obj.find('.mask').text(maxnum+'M');
				return;
			}
			
			obj.find('.mask').text(num+'M');
			num+=1;
		}
		var t=setInterval(move,time);
	}
	if($('#database-dataInformation').length>0){
		dataInformation();
	}
	function backupAreduction(){
		$('.form1').on('click','.row3 span',function(){
			$(this).closest('ul').find('.row2').text('已备份');
			$(this).closest('ul').find('.row4').find('span').addClass('shue');
		})
		$('.form2').on('click','.last .xyd',function(){
			$('<span>').text('ftp://fujianhui-5741:490859545@202.75223.11').css('paddingLeft','10px').appendTo($(this).closest('li'));
			$('<p>').text('操作提醒： 成功设置FTP目录权限 , FTP虚拟目录操作成功').css({
				fontSize:'14px',
				paddingTop:'10px'

			}).appendTo($(this).closest('.form2'));
			$(this)
		})
	}
	if($('#database-backupAreduction')){
		backupAreduction()
	}

//////////////////////////////////////////////////////////////虚拟主机管理中心
	//高级管理中心-自定义出错页
	function errorpage(){
		$('input[type="radio"]').closest('li').find('label').on('click',function(){
			$(this).closest('ul').find('input').each(function(){
				this.checked=false;
			})
			$(this).closest('li').find('input').get(0).checked=true;
		})
	}
	if($('#virtual-errorpage').length>0){
		errorpage();
	}
	//高级管理中心-解压压缩
	function packAunpack(){
		$('.packbox .unpack').on('click',function(){
			$('.packbox').css('display','none');
			$('.unpack-box').css('display','block');
		})
		$('.unpack-box .pack').on('click',function(){
			$('.packbox').css('display','block');
			$('.unpack-box').css('display','none');
		})
		$('input[type="checkbox"]').closest('span').on('click','label',function(){
			var flag=$(this).closest('span').find('input').get(0).checked;
			$(this).closest('span').find('input').get(0).checked=!flag;
		})
	}
	if($('#virtual-unpackApack').length>0){
		packAunpack();
	}
	//高级管理中心-网络搬家
	function netmove(){
		$('input[type="checkbox"]').closest('li').on('click','label',function(){
			var flag=$('input[type="checkbox"]').get(0).checked;
			$('input[type="checkbox"]').get(0).checked=!flag;
		})
	}
	if($('#virtual-networkmove').length>0){
		netmove()
	}
	 //基础功能-主机状态
	 function homestate(){
	 	var s=1;//0暂停，1运行
	 	function rander(s){
	 		if(s===1){
	 			$('.content-body h3:first span.stop').removeClass('stop').addClass('move').text('运行中');
	 			$('.content-body .img .icon.stop').removeClass('stop').addClass('move');
	 			$('.content-body .button a.move').text('重启');
	 			$('.content-body .button a.pause').text('停止');
	 		}else if(s===0){
	 			$('.content-body h3:first span.move').removeClass('move').addClass('stop').text('暂停中');
	 			$('.content-body .img .icon.move').removeClass('move').addClass('stop');
	 			$('.content-body .button a.move').text('启动');
	 			$('.content-body .button a.pause').text('停止');
	 		}
	 	}
	 	$('.button').on('click','a.move',function(){
	 		console.log(1)
	 		rander(1);
	 	})
	 	$('.button').on('click','a.pause',function(){
	 		console.log(0)
	 		rander(0);
	 	})
	 }
	 if($('#hoststate').length>0){
	 	homestate();
	 }
	 //设置首页
	 function sethome(){
	 	var data=['defarducr.htm','defarducr1.htm'];
	 	function rander(arr){
	 		$('.ym').empty();
	 		$.each(arr,function(i,v){
	 			var ul=$('<ul>').addClass('no-float');
	 			var row1=$('<li>').addClass('row1').text(i+1).appendTo(ul);
	 			var row2=$('<li>').addClass('row2').text(v).appendTo(ul);
	 			if(i==0){
	 				var row3=$('<li>').addClass('row3').html('<i class="bw icon"></i><i class="icon down"></i><i class="icon delete"></i><b></b>');
	 			}else{
	 				var row3=$('<li>').addClass('row3').html('<i class="icon up"></i><i class="icon down"></i><i class="icon delete"></i><b></b>');
	 			}
	 			row3.appendTo(ul);
	 			ul.appendTo($('.ym'));
	 		})
	 		$('.form .add').find('.row1').text(arr.length+1);
	 	}
	 	rander(data);
	 	//添加
	 	$('.form .add').on('click','a',function(){
	 		var str=$(this).closest('ul').find('input').val();
	 		console.log(str)
	 		if(str){
	 			data.push(str);
		 		rander(data);
	 		}
	 		
	 	})
	 	//删除
	 	$('.form .ym').on('click','.row3 i.delete',function(){
	 		var index=$(this).closest('ul').index();
	 		data.splice(index,1);
	 		rander(data);
	 	})
	 	//上移
	 	$('.form .ym').on('click','.row3 i.up',function(){
	 		var index=$(this).closest('ul').index();
	 		var s=data.splice(index,1);
	 		data.splice(index-1,0,s)
	 		rander(data);
	 	})
	 	//下移
	 	$('.form .ym').on('click','.row3 i.down',function(){
	 		var index=$(this).closest('ul').index();
	 		var s=data.splice(index,1);
	 		data.splice(index+1,0,s)
	 		rander(data);
	 	})
	 }
	 if($("#sethome").size()>0){
	 	sethome();
	 }
	//CPU网站流量
	function cpustate(){
		$('#myTable5').gvChart({
			chartType: 'PieChart',
			gvSettings: {
				vAxis: {title: 'No of players'},
				hAxis: {title: 'Month'},
				width: 400,
				height: 300
			}
		});
	}
	if($('#baseCPU').length>0){
		cpustate();
	}
	//虚拟主机信息
	function virtual_information(){
		var obj=$('.tiao-box');
		var mw=parseInt(obj.find('.top').text())*obj.find('.bg').width()/100;
		obj.find('.mask').css('width',mw+'px');
		var num=0;
		var max=parseInt(obj.find('.mask').text());
		obj.find('.mask').text(num+'M');
		var maxnum=parseInt(obj.find('.top').text())*parseInt(obj.find('.right').text())/100;
		maxnum=Math.ceil(maxnum);
		var time=250/maxnum;
		function move(){
			if(num>=max){
				clearInterval(t);
				obj.find('.mask').text(maxnum+'M');
				return;
			}
			
			obj.find('.mask').text(num+'M');
			num+=1;
		}
		var t=setInterval(move,time);
	}
	if($('#virtual-information').length>0){
		virtual_information();
	}
})