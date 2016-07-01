var Positionmap = function() {

	/**
	 * 将对应信息填充到对应的select @ param renderId [string] 标签id @ param data [array]
	 *                   列表数据
	 */
	var updateList = function(renderId, data, selectTxt, callback) {
		var sortData = data.sort(function(a, b) {
			return a.name - b.name;
		});
		var len = sortData.length;
		var options = '';
		for ( var i = 0; i < len; i++) {
			if(sortData[i].id == selectTxt){
				options += '<option class="addoption" selected value="'
					+ sortData[i].id + '">' + HtmlDecode3(sortData[i].name)
					+ '</option>';
			}else{
				options += '<option class="addoption" value="'
					+ sortData[i].id + '">' +HtmlDecode3(sortData[i].name)
					+ '</option>';
			}
		}
		removeOption(renderId);
		$('#' + renderId).append(options);
		if (callback) {
			callback();
		}
		return;
	};

	/**
	 * 将对应信息填充到对应的select @ param renderId [string] 标签id @ param data [array]
	 *                   列表数据
	 */
	var updateFloorList = function(renderId, data, selectTxt, callback) {
		var sortData = data.sort(function(a, b) {
			return a.floor - b.floor;
		});
		var len = sortData.length;
		var options = '';
		for ( var i = 0; i < len; i++) {
			if(sortData[i].floorNo == selectTxt){
				options += '<option class="addoption" selected value="'
					+ sortData[i].floorNo + '">' + sortData[i].floor
					+ '</option>';
			}else{
				options += '<option class="addoption" value="'
					+ sortData[i].floorNo + '">' + sortData[i].floor
					+ '</option>';
			}
		}
		removeOption(renderId);
		$('#' + renderId).append(options);
		if (callback) {
			callback();
		}
		return;
	};


	var removeOption = function(renderId) {
		$('#' + renderId + ' .addoption').remove().trigger("liszt:updated");
	};

	
	var changeFloor = function(placeId, floorNo, callback){
		$.post("/sva/heatmap/api/getFloorsByMarket", {
			placeId : placeId
		}, function(data) {
			if (!data.error) {
				var floors = data.data;
				updateFloorList("floorSel", floors, floorNo, function() {
					$('#floorSel').trigger("liszt:updated");
					callback();
				});
			}
		});
	};
	
	// 图形初始化
	var initMap = function(floorNo,time){
		// 获取数据
		$.get("/sva/position/getProvinceData",{floorNo:floorNo,time:time},function(data){
			if(!data.error){
				var provinceData = data.data;
				// 初始化柱状图
				initBarmap(provinceData);
				// 初始化中国地图
				initChinamap(provinceData);
			}
		});
	};
	
	// 柱状图初始化
	var initBarmap = function(data){
		//-------数据预处理------start
		// 单独获取新疆和西藏的数据
		var xj = data["新疆"],
			xz = data["西藏"];
		// json转数组
		var arrayData = _.pairs(data);
		// 数组降序排列
		arrayData = _.sortBy(arrayData,function(d){
				return -d[1];
			}
		)
		// 如果数组长度大于十，则取数组前十
		if(arrayData.length>10){
			arrayData = arrayData.slice(0,10);
		}
		// 将新疆和西藏的数据添加至数组末尾
		arrayData.push(["新疆",xj]);
		arrayData.push(["西藏",xz]);
		// 柱状图横坐标标题
		var xTitle = [];
		// 柱状图纵坐标数据
		var yVal = [];
		for(var i in arrayData){
			var obj = arrayData[i];
			xTitle.push(obj[0]);
			yVal.push(obj[1]);
		}
		//-------数据预处理------end
		
		//-------图形渲染------start
		var myChart = echarts.init(document.getElementById("barchart"));
		
		var option = {
		    title : {
		    	x: 'center',
		        text: i18n_title
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    toolbox: {
		        show : true,
		        right: '10%',
		        feature : {
		            saveAsImage : {
		            	show: true,
		            	title : i18n_saveimg
		            }
		        }
		    },
		    calculable : false,
		    xAxis : [
		        {
		            type : 'category',
		            data : xTitle
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            boundaryGap : [0, 0.01]
		        }
		    ],
		    series : [
		        {
		            name:i18n_tag,
		            type:'bar',
		            data:yVal,
		            markPoint : {
		                data : [
		                    {type : 'max', name: i18n_max},
		                    {type : 'min', name: i18n_min}
		                ]
		            },
		            markLine : {
		                data : [
		                    {type : 'average', name: i18n_avg}
		                ]
		            }
		        }
		    ]
		};			                    
		
		myChart.setOption(option);	
		//-------图形渲染------end
		
	};
	
	// 中国地图初始化
	var initChinamap = function(data){
		
		//-------数据预处理------start
		var datas = [];
		var keys = _.keys(data);
		for(var i in keys){
			var k = keys[i];
			var item = [{name:'四川'}];
			var obj = {name:k, value:data[k]};
			item.push(obj);
			datas.push(item);
		}
		//-------数据预处理------end
		
		//-------图形渲染------start
		var myChart = echarts.init(document.getElementById("mapchart"));
		// 地图坐标点
		var geoCoordMap = {
				'北京': [116.4551,40.2539],
			    '上海': [121.4648,31.2891],
			    '天津': [117.4219,39.4189],
			    '重庆': [107.7539,30.1904],
			    '河南': [113.4668,34.6234],
			    '四川': [103.9526,30.7617],
			    '黑龙江': [127.9688,45.368],
			    '吉林': [125.8154,44.2584],
			    '沈阳': [123.1238,42.1216],
			    '内蒙古': [111.4124,40.4901],
			    '河北': [114.4995,38.1006],
			    '山西': [112.3352,37.9413],
			    '陕西': [109.1162,34.2004],
			    '宁夏': [106.3586,38.1775],
			    '甘肃': [103.5901,36.3043],
			    '青海': [101.4038,36.8207],
			    '新疆': [87.9236,43.5883],
			    '西藏': [91.1865,30.1465],
			    '云南': [102.9199,25.4663],
			    '贵州': [106.6992,26.7682],
			    '广西': [108.479,23.1152],
			    '广东': [113.5107,23.2196],
			    '湖南': [113.0823,28.2568],
			    '湖北': [114.3896,30.6628],
			    '山东': [117.1582,36.8701],
			    '江苏': [118.8062,31.9208],
			    '安徽': [117.29,32.0581],
			    '浙江': [119.5313,29.8773],
			    '江西': [116.0046,28.6633],
			    '福建': [119.4543,25.9222]
		};

		// 飞机图标path
		var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

		// 生成坐标数据
		var convertData = function (data) {
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var dataItem = data[i];
		        var fromCoord = geoCoordMap[dataItem[0].name];
		        var toCoord = geoCoordMap[dataItem[1].name];
		        if (fromCoord && toCoord) {
		            res.push({
		                fromName: dataItem[0].name,
		                toName: dataItem[1].name,
		                coords: [fromCoord, toCoord]
		            });
		        }
		    }
		    return res;
		};
		
		// 渲染数据
		var series = [];
	    series.push({
	        name: '省份',
	        type: 'lines',
	        zlevel: 3,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0.7,
	            color: '#fff',
	            symbolSize: 3
	        },
	        lineStyle: {
	            normal: {
	                color: '#a6c84c',
	                width: 0,
	                curveness: 0.2
	            }
	        },
	        data: convertData(datas)
	    },
	    {
	        name: '省份',
	        type: 'lines',
	        zlevel: 4,
	        effect: {
	            show: true,
	            period: 6,
	            trailLength: 0,
	            symbol: planePath,
	            symbolSize: 15
	        },
	        lineStyle: {
	            normal: {
	                color: '#a6c84c',
	                width: 1,
	                opacity: 0.4,
	                curveness: 0.2
	            }
	        },
	        data: convertData(datas)
	    },
	    {
	        name: '省份',
	        type: 'effectScatter',
	        coordinateSystem: 'geo',
	        zlevel: 2,
	        rippleEffect: {
	            brushType: 'stroke'
	        },
	        label: {
	            normal: {
	                show: true,
	                position: 'top',
	                formatter: function(param){
	                	return param.data.value[2];
	                },
	                textStyle:{
                    	color: '#a6c84c',
                    	fontSize:10
                	}
	            }
	        },
	        symbolSize: function (val) {
	        	// todo：控制涟漪大小
	            return val[2] * 8;
	        },
	        itemStyle: {
	            normal: {
	                color: '#a6c84c'
	            }
	        },
	        data: datas.map(function (dataItem) {
	            return {
	                name: dataItem[1].name,
	                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	            };
	        })
	    },
	    {
            name: '省份',
            type: 'map',
            mapType: 'china',
            zlevel: 2,
            roam: true,
            itemStyle:{
	            normal: {
	                areaColor: '#323c48',
	                borderColor: '#404a59'
	            },
	            emphasis: {
	                areaColor: '#2a333d'
	            }
            },
            label: {
                normal: {
                	show: true,
                	textStyle:{
                    	color: '#5fafd6'                		
                	}
                },
                emphasis: {
                	show: true,
                	textStyle:{
                    	color: '#5fafd6'                		
                	}
                }
            },
            data:datas.map(function (dataItem) {
	            return {
	                name: dataItem[1].name,
	                value: [dataItem[1].value]
	            };
            })
        });

	    // 选项
		option = {
		    backgroundColor: '#404a59',
		    title : {
		        text: '归属地分布图',
		        left: 'center',
		        textStyle : {
		            color: '#fff'
		        }
		    },
		    tooltip : {
		        trigger: 'item'
		    },
		    toolbox:{
		    	show:true,
		    	orient:"vertical",
		    	feature: {
		    		saveAsImage:{
		    			show:true
		    		}
		    	}
		    },
		    /*
		    legend: {
		        orient: 'vertical',
		        top: 'bottom',
		        left: 'right',
		        data:[' Top10'],
		        textStyle: {
		            color: '#fff'
		        },
		        selectedMode: 'single'
		    },
		    */
		    geo: {
		        map: 'china',
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        roam: true
		    },
		    series: series
		};
		
		myChart.setOption(option);	
		//-------图形渲染------end
	};
	
	return {
		// 初始化下拉列表
		initDropdown : function() {
			$("#marketSel").chosen();
			$("#floorSel").chosen();
		
			var placeId = $.cookie("place");
			var floorNo = $.cookie("floor");
			var t = $.cookie("times");
			
			// 日期控件默认当天
			var d = new Date();
		    function addzero(v) {if (v < 10) return '0' + v;return v.toString();}
		    var s = d.getFullYear().toString() + addzero(d.getMonth() + 1) + addzero(d.getDate());
			$("#select_time_begin_tab").val(s);
			
			//var place = $("#marketSel").val();
			var array=new Array();
			var arrayfloor=new Array();
			$.get("/sva/store/api/getData?t="+Math.random(), function(data) {
				if (!data.error) {
					var storeList = data.data;
					updateList("marketSel", storeList,placeId, function() {
						$('#marketSel').trigger("liszt:updated");
							$("#marketSel option").each(function(){ //遍历全部option 
								//	var txt = $(this).text(); //获取单个text
								var val = $(this).val(); //获取单个value
								var node =val;
								array.push(node);
								
							}); 
							
							
							for(var i= 0;i<array.length;i++){
								if(array[i] == placeId){
									changeFloor(placeId,floorNo,function(){
										$("#floorSel option").each(function(){ //遍历全部option 
											//	var txt = $(this).text(); //获取单个text
											var val = $(this).val(); //获取单个value
											var node =val;
											arrayfloor.push(node);
											
										}); 
										for(var i= 0;i<arrayfloor.length;i++){
											if(arrayfloor[i] == floorNo){
												 $("#time").val(t);
												$('#confirm').click();
											}
											
										}
									});							
								}
							}
					});
				}
			});
		},
		
		showDate: function(id){
			WdatePicker({
				el : document.getElementById(id),
				lang : i18n_language,
				isShowClear : false,
				isShowToday:false,
				readOnly : true,
				dateFmt : 'yyyyMMdd',
				maxDate : '%y-%M-%d',
				skin : "twoer"
			});
		},

		bindClickEvent : function() {
			// 地点下拉列表修改 触发楼层下拉列表变化
			$("#marketSel").chosen().change(function() {
				var placeId = $("#marketSel").val();
				changeFloor(placeId);
			});
			
			// 确认按钮点击 触发热力图刷新
			$('#confirm').click(function(e) {
				var placeId = $("#marketSel").val();
				var floorNo = $("select[name='floorSelName']").find("option:selected").val();
			    var floor = $("select[name='floorSelName']").find("option:selected").text();
			    var time = $("#select_time_begin_tab").val();
			   				
				initMap(floorNo, time);

				$.cookie("place", placeId, { expires: 30});
				$.cookie("floor", floorNo, { expires: 30});

			});
			
		}

	};

}();