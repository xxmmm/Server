package com.sva.common.conf;

public class Params
{
    public static final String LOCATION = "location";

    public static final String YYYYMMDD = "yyyyMMdd";

    public static final String YYYYMMDD2 = "yyyy-MM-dd";

    public static final String YYYYMMDDHHMM = "yyyyMMddHHmm";

    public static final String YYYYMMDDHH = "yyyyMMddHH";

    public static final int ZERO = 0;

    public static final int ONE = 1;

    /**
     * 停止状态
     */
    public static final int STATUS_STOP = 0;

    /**
     * 运行状态
     */
    public static final int STATUS_RUNNING = 1;

    /**
     * 待删除状态
     */
    public static final int STATUS_DELETE = 2;

    /**
     * 定位延时 列名
     */
    public static final String locationInfo = "没有定位延时信息，请添加...";;

    public static final String locationName = "定位延时信息";

    public static final String dataDelay = "数据延时";

    public static final String positionDelay = "定位延时";

    public static final String delayTime = "上传时间";

    /**
     * 定位延时 列名
     */
    public static final String messageInfo = "没有消息推送准确率信息，请添加...";;

    public static final String messageName = "消息推送准确率信息";

    public static final String messageRight = "消息推送准确率";

    public static final String pushRight = "正确推送次数";

    public static final String notPush = "未推送消息次数";

    public static final String pushWrong = "推送错误次数";

    public static final String centerReality = "实际点与消息中心距离";

    public static final String centerRadius = "消息中心位置与半径距离";

    public static final String isRigth = "是否在消息推送范围";

    public static final String messageIs = "是";

    public static final String messageNot = "否";

    /**
     * excel 列名
     */
    public static final String logInfo = "没有汇总信息，请添加";;

    public static final String sheetName = "精度汇总信息";

    public static final String excelPlace = "地点";

    public static final String excelfloor = "楼层";

    public static final String excelX = "起点(米)";

    public static final String excelY = "终点(米)";

    public static final String excelStartDate = "开始时间";

    public static final String excelEndDate = "结束时间";

    public static final String excelTriggerIp = "触发者";

    public static final String excelType = "类型";

    public static final String excelOffset = "偏差";

    public static final String excelaverDevi = "平均误差";

    public static final String excelDeviation = "预估偏差";

    public static final String excel3m = "3m以内";
    
    public static final String excel3or5m = "3m-5m";
    
    public static final String excel5or10m = "5m-10m";

    public static final String excel10m = "10m以外";

    public static final String AccuracySummary = "精度汇总";
    
    public static final String staticAccuracy = "静态精度";
    
    public static final String dynamicAccuracy = "动态精度";

    public static final String staticType = "静态";

    public static final String dynamicType = "动态";
    
    public static final String avgeOffset = "平均误差";

    public static final String maxOffset = "最大误差";

    public static final String staicAccuracy = "静态精度";

    public static final String  offsetCenter = "偏移重心";
    
    public static final String  offset = "误差";

    public static final String offsetNumber = "偏移量";

    public static final String stability = "稳定度";
    
    public static final String triggerIp = "触发者";
    
    public static final String Detail = "详情";

}
