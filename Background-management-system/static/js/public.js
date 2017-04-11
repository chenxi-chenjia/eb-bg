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
})