var swiper;
var timerFunctionTimer;
var BarJsonData;
function timerFunction()
{	
	clearTimeout(timerFunctionTimer);
	
	$.post("/sva/api/getShDate", function(item){
		if(!item.error){
			$("#numbern-data-item1").text(item.User1);
			$("#numbern-data-item4").text(item.User2);
			$("#numbern-data-item7").text(item.User3);
			$("#numbern-data-item2").html(item.allUser1);
			$("#numbern-data-item3").text(item.allTime1);
			$("#numbern-data-item5").html(item.allUser2);
			$("#numbern-data-item6").text(item.allTime2);
			$("#numbern-data-item8").html(item.allUser3);
			$("#numbern-data-item9").text(item.allTime3);
			BarJsonData = item.item;
			var arr = new Array();
			arr[0] = "#028be9";
			arr[1] = "#01aaed";
			arr[2] = "#02c8eb";
			arr[3] = "#196ecd";
			arr[4] = "#06dfd2";
			currentArr = _.pluck(BarJsonData, 'current');
			currentMax = _.max(currentArr,function(d){return parseInt(d);});
			var intcurrentMax = parseInt(currentMax)*1.5;
			
			maxcumulativeArr = _.pluck(BarJsonData, 'cumulative');
			cumulativeMax = _.max(maxcumulativeArr,function(d){return parseInt(d);});
			var maxcumulativeMax = parseInt(cumulativeMax)*1.5;
			if(BarJsonData){
				$("#bar-slide1-list").html("");
				$.each(BarJsonData, function(i, item) {
					var _current = 0;
					if(intcurrentMax > 0){
						_current = item.current/intcurrentMax * 100;
					}
					var _cumulative = 0;
					if(maxcumulativeMax > 0){
						_cumulative = item.cumulative/maxcumulativeMax * 100;
					}
		            $("#bar-slide1-list").append(
					       '<div class="bar-slide1-listItem"><ul><li>' + item.name + '</li>' + 
						   '<li><span class="slide1-bar"style="background-color:#d38a23;width:' + _current + '%"><span>'+ item.current +'</span></span></li>'+
		                 '<li><span class="slide1-bar"style="background-color:#e9643b;width:' + _cumulative + '%"><span>'+ item.cumulative +'</span></span></li>'+
						  '<li>'+item.average +'</li></ul></div>'
						  );
		        });
			}
			
			BarJsonData = item.item1;

			var arr = new Array();
			arr[0] = "#028be9";
			arr[1] = "#01aaed";
			arr[2] = "#02c8eb";
			arr[3] = "#196ecd";
			arr[4] = "#06dfd2";
			currentArr = _.pluck(BarJsonData, 'current');
			currentMax = _.max(currentArr,function(d){return parseInt(d);});
			var intcurrentMax = parseInt(currentMax)*1.5;
			
			maxcumulativeArr = _.pluck(BarJsonData, 'cumulative');
			cumulativeMax = _.max(maxcumulativeArr,function(d){return parseInt(d);});
			var maxcumulativeMax = parseInt(cumulativeMax)*1.5;
			if(BarJsonData){
				$("#bar-slide2-list").html("");
				$.each(BarJsonData, function(i, item) {
					var _current = 0;
					if(intcurrentMax > 0){
						_current = item.current/intcurrentMax * 100;
					}
					var _cumulative = 0;
					if(maxcumulativeMax > 0){
						_cumulative = item.cumulative/maxcumulativeMax * 100;
					}
		            $("#bar-slide2-list").append(
					       '<div class="bar-slide1-listItem"><ul><li>' + item.name + '</li>' + 
						   '<li><span class="slide1-bar"style="background-color:#d38a23;width:' + _current + '%"><span>'+ item.current +'</span></span></li>'+
		                 '<li><span class="slide1-bar"style="background-color:#e9643b;width:' + _cumulative + '%"><span>'+ item.cumulative +'</span></span></li>'+
						  '<li>'+item.average +'</li></ul></div>'
						  );
		        });
			}
			
			BarJsonData = item.item2;

			var arr = new Array();
			arr[0] = "#028be9";
			arr[1] = "#01aaed";
			arr[2] = "#02c8eb";
			arr[3] = "#196ecd";
			arr[4] = "#06dfd2";
			currentArr = _.pluck(BarJsonData, 'current');
			currentMax = _.max(currentArr,function(d){return parseInt(d);});
			var intcurrentMax = parseInt(currentMax)*1.5;
			
			maxcumulativeArr = _.pluck(BarJsonData, 'cumulative');
			cumulativeMax = _.max(maxcumulativeArr,function(d){return parseInt(d);});
			var maxcumulativeMax = parseInt(cumulativeMax)*1.5;
			if(BarJsonData){
				$("#bar-slide3-list").html("");
				$.each(BarJsonData, function(i, item) {
					var _current = 0;
					if(intcurrentMax > 0){
						_current = item.current/intcurrentMax * 100;
					}
					var _cumulative = 0;
					if(maxcumulativeMax > 0){
						_cumulative = item.cumulative/maxcumulativeMax * 100;
					}
		            $("#bar-slide3-list").append(
					       '<div class="bar-slide1-listItem"><ul><li>' + item.name + '</li>' + 
						   '<li><span class="slide1-bar"style="background-color:#d38a23;width:' + _current + '%"><span>'+ item.current +'</span></span></li>'+
		                 '<li><span class="slide1-bar"style="background-color:#e9643b;width:' + _cumulative + '%"><span>'+ item.cumulative +'</span></span></li>'+
						  '<li>'+item.average +'</li></ul></div>'
						  );
		        });
			}
		}
		timerFunctionTimer = setTimeout("timerFunction();", 60000);
	});
	
}
$(function(){
	
	swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
		keyboardControl: true,
        autoHeight: true//enable auto height
    });
	timerFunction();
});