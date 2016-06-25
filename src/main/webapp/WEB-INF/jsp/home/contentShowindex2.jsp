<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<%@ include file="../shared/taglib.jsp"%>

<html>

<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if IE 11]> <html lang="en" class="ie11 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<head>
<meta charset="utf-8">
<title>Small Cell City</title>
<meta name="viewport"
	content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
<%@ include file="../shared/importCss.jsp"%>
<link href="<c:url value='../plugins/html/css/minnew2.css'/>"
	rel="stylesheet" type="text/css" />
<link href="<c:url value='../plugins/html/css/swiper-3.3.1.min.css'/>"
	rel="stylesheet" type="text/css" />
<link href="<c:url value='/css/pages/heatmap.css'/>" rel="stylesheet"
	type="text/css" />
<style type="text/css">
	.nomargin{
		margin: 0 !important;
	}
</style>

</head>
<body>
	<!-- Swiper -->
	<div class="">
		<div class="row-fluid" id="huawei">
			<div class="span5">
				<div class="row-fluid">
					<div class="span12" style="padding: 3% 7%;">
						<div class="row-fluid" style="margin-bottom:3%;">
							<div class="span12">
								<img alt="" src="../images/7.png">
							</div>
						</div>
						<div class="row-fluid">
							<div class="span12" >
								<div class="row-fluid">
									<div class="span12" style="border: 5px solid #864319;">
										
										<div id="myCarousel" class="carousel slide" style="margin-bottom:0 !important;">
											<ol class="carousel-indicators">
											    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
											    <li data-target="#myCarousel" data-slide-to="1"></li>
											    <li data-target="#myCarousel" data-slide-to="2"></li>
										  	</ol>
											<!-- Carousel items -->
											<div class="carousel-inner">
											    <div class="active item nomargin">
											    	<img alt="" src="../images/ppt1.png">
												</div>
											    <div class="item nomargin">
											    	<img alt="" src="../images/ppt2.png">
											    </div>
											    <div class="item nomargin">
											    	<img alt="" src="../images/ppt3.png">
											    </div>
											</div>
											<!-- Carousel nav -->
											<a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
											<a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
										</div>
									</div>
								</div>
								<div class="row-fluid">
									<div class="span12">
										<object type="application/x-shockwave-flash" data="../images/flvplayer.swf" width="100%" height="445px">
										    <param name="movie" value="../images/flvplayer.swf" />
										    <param name="allowFullScreen" value="true" />
										    <param name="FlashVars" value="flv=../images/videoShow.flv&showtime=1&showstop=1&showfullscreen=1&bgcolor1=864319&bgcolor2=864319&playercolor=A55E22" />
										</object>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="sp7" class="span7">
				<div class="row-fluid">
					<div class="span12" style="padding: 7% 5% 0 0;">
						<div class="swiper-container">
							<div id="wrapper" class="swiper-wrapper">
							<!-- 
								<div class="swiper-slide">
									<div id="sb1" class="slide-box">
										<div class="heatmap-slide1">
											<div class="heatmapTitle">
												<spring:message code="shanghai_title" />
											</div>
											<div id="heatmap-slide1-graphic">
												<div id="heatmap" class="heatmap"></div>
											</div>
										</div>
										
										<div class="row-fluid" style="margin:3% 0;">
											<div class="span4" style="text-align: center;line-height: 2.5em;">
												<div class="row-fluid">
													<span class="number-value" id="numbern-data-item1"></span>
												</div>
												<div class="row-fluid">
													<span
													class="numbern-data-item">Current Visitor Number</span>
												</div>
											</div>
											<div class="span4" style="text-align: center;line-height: 2.5em;">
												<div class="row-fluid">
													<span class="number-value" id="numbern-data-item2"></span>
												</div>
												<div class="row-fluid">
													<span
													class="numbern-data-item">Cumulative Visitor Number</span>
												</div>
											</div>
											<div class="span4" style="text-align: center;line-height: 2.5em;">
												<div class="row-fluid">
													<span class="number-value" id="numbern-data-item3"></span>
												</div>
												<div class="row-fluid">
													<span
													class="numbern-data-item">Average Visit Time(Min)</span>
												</div>
											</div>
										</div>		
		
										<div class="bar-slide1">
											<div class="bar-slide1-title">
												<ul>
													<li>
															<spring:message code="hangzhou_booth" />
														</li>
													<li>
															<spring:message code="hangzhou_visiter1" />
														</li>
													<li>
															<spring:message code="hangzhou_visiterall" />
														</li>
													<li>
															<spring:message code="hangzhou_visitertime" />
														</li>
												</ul>
											</div>
											<div class="bar-slide1-list" id="bar-slide1-list"></div>
										</div>
									</div>
								</div>
								 -->
								<div class="swiper-slide">
									<div id="sb2" class="slide-box">
										<div class="row-fluid">
											<div class="span12">
												<div class="heatmap-slide2">
													<div class="heatmapTitle">
														<spring:message code="dayuecheng_titile" />
													</div>
												</div>
											</div>
										</div>
										<div class="row-fluid">
											<div class="span12" style="background-color: rgba(0,0,0,0.7);">	
												<div class="row-fluid" >
													<div class="span12">
														<div id="heatmap-slide2-graphic">
															<div id="heatmap2" class="heatmap2"></div>
														</div>
													</div>
												</div>
				
												<div class="row-fluid" style="margin:3.5% 0;">
													<div class="span4" style="text-align: center;line-height: 2.5em;">
														<div class="row-fluid">
															<span class="number-value" id="numbern-data-item4"></span>
														</div>
														<div class="row-fluid">
															<span
															class="numbern-data-item">Current Visitor Number</span>
														</div>
													</div>
													<div class="span4" style="text-align: center;line-height: 2.5em;">
														<div class="row-fluid">
															<span class="number-value" id="numbern-data-item5"></span>
														</div>
														<div class="row-fluid">
															<span
															class="numbern-data-item">Cumulative Visitor Number</span>
														</div>
													</div>
													<div class="span4" style="text-align: center;line-height: 2.5em;">
														<div class="row-fluid">
															<span class="number-value" id="numbern-data-item6"></span>
														</div>
														<div class="row-fluid">
															<span
															class="numbern-data-item">Average Visit Time(Min)</span>
														</div>
													</div>
												</div>	
											</div>
										</div>	
		
										<div class="bar-slide1">
											<div class="bar-slide1-title">
												<ul>
													<li>
															<spring:message code="hangzhou_booth" />
														</li>
													<li>
															<spring:message code="hangzhou_visiter1" />
														</li>
													<li>
															<spring:message code="hangzhou_visiterall" />
														</li>
													<li>
															<spring:message code="hangzhou_visitertime" />
														</li>
												</ul>
											</div>
											<div class="bar-slide1-list" id="bar-slide2-list"></div>
										</div>
									</div>
								</div>
								<div class="swiper-slide">
		
									<div id="sb3" class="slide-box">
										<div class="row-fluid">
											<div class="span12">
												<div class="heatmapTitle">
													<spring:message code="dayuecheng_titile" />
												</div>
											</div>
										</div>
										<div class="row-fluid" style="background-color: rgba(0,0,0,0.7);">
											<div class="span7" id="imge3">	
												<div id="heatmap-slide3-graphic">
													<div id="heatmap3" class="heatmap3"></div>
												</div>
											</div>
											
											<div class="span5">			
												<div class="row-fluid" style="margin-top:25%;">
													<div class="span12" style="text-align: center;line-height: 2.5em;">
														<div class="row-fluid">
															<span class="number-value" id="numbern-data-item7"></span>
														</div>
														<div class="row-fluid">
															<span
															class="numbern-data-item">Current Visitor Number</span>
														</div>
													</div>
												</div>
												<div class="row-fluid" style="margin-top:25%;">
													<div class="span12" style="text-align: center;line-height: 2.5em;">
														<div class="row-fluid">
															<span class="number-value" id="numbern-data-item8"></span>
														</div>
														<div class="row-fluid">
															<span
															class="numbern-data-item">Cumulative Visitor Number</span>
														</div>
													</div>
												</div>
												<div class="row-fluid" style="margin-top:25%;">
													<div class="span12" style="text-align: center;line-height: 2.5em;">
														<div class="row-fluid">
															<span class="number-value" id="numbern-data-item9"></span>
														</div>
														<div class="row-fluid">
															<span
															class="numbern-data-item">Average Visit Time(Min)</span>
														</div>
													</div>
												</div>	
	
											</div>
										</div>
		
										<div class="bar-slide1">
											<div class="bar-slide1-title">
												<ul>
													<li>
															<spring:message code="hangzhou_booth" />
														</li>
													<li>
															<spring:message code="hangzhou_visiter1" />
														</li>
													<li>
															<spring:message code="hangzhou_visiterall" />
														</li>
													<li>
															<spring:message code="hangzhou_visitertime" />
														</li>
												</ul>
											</div>
											<div class="bar-slide1-list" id="bar-slide3-list"></div>
										</div>
									</div>
								</div>
							</div>
							<div class="swiper-pagination"></div>
							<div class="swiper-button-prev"></div>
							<div class="swiper-button-next"></div>
						</div>
					</div>
				</div>

			</div>

		</div>

	</div>
	<script src="<c:url value='../plugins/html/js/jquery-2.1.3.min.js'/>"></script>
	<script src="<c:url value='../plugins/html/js/swiper.min.js'/>"></script>
	<script src="<c:url value='/js/appcontent2.js'/>"></script>
	<script src="<c:url value='/js/contentshowindex2.js'/>"
		type="text/javascript"></script>
	<script src="<c:url value='../plugins/heatmap.min.js'/>"
		type="text/javascript"></script>
	<script src="<c:url value='../plugins/underscore/underscore-min.js'/>"
		type="text/javascript"></script>
	<%@ include file="../shared/importJs.jsp"%>
	<script type="text/javascript">
		var configObj = {
			container : document.getElementById("heatmap"),
			maxOpacity : .6,
			radius : 20,
			blur : .90,
			backgroundColor : 'rgba(0, 0, 58, 0.1)'
		};
		var configObj2 = {
			container : document.getElementById("heatmap2"),
			maxOpacity : .6,
			radius : 20,
			blur : .90,
			backgroundColor : 'rgba(0, 0, 58, 0.1)'
		};
		var configObj3 = {
			container : document.getElementById("heatmap3"),
			maxOpacity : .6,
			radius : 20,
			blur : .90,
			backgroundColor : 'rgba(0, 0, 58, 0.1)'
		};
		var legendCanvas = document.createElement('canvas');
		legendCanvas.width = 100;
		legendCanvas.height = 10;
		var gradientImg = document.querySelector('#gradient');

		var legendCtx = legendCanvas.getContext('2d');
		var gradientCfg = {};

		//var demoWrapper = document.querySelector('.demo-wrapper');
		//var tooltip = document.querySelector('.tip');
		jQuery(document).ready(function() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay : 2000,
				direction : 'horizontal',
				//loop : true,
				pagination : '.swiper-pagination',
				paginationClickable : true,

				// 如果需要前进后退按钮
				nextButton : '.swiper-button-next',
				prevButton : '.swiper-button-prev',
				spaceBetween: 20

			// 如果需要滚动条
			//   scrollbar: '.swiper-scrollbar'
			});
			$("#wrapper").on("mouseover",function(e){
				mySwiper.stopAutoplay();
			});
			$("#wrapper").on("mouseout",function(e){
				mySwiper.startAutoplay();
			});
			
			Heatmap.initDropdown();
			setTimeout(function(){
				/*
				var height1 = $("#sb1").css("height"),
					height2 = $("#sb2").css("height"),
					height3 = $("#sb3").css("height");
					maxHeight = _.max([height1,height2,height3],function(el){
						return parseInt(el.slice(0, -2));
					});
					*/
				var height = $("#huawei").css("height");
				$("#wrapper").css("height",height);
			},1000);
			
			$('.carousel').carousel({
				  interval: 2000,
				  pause:"hover"
			});
		});
	</script>
</body>
</html>