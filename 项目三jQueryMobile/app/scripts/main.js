(function ($) {

   var urlPre ="http://cors.itxti.net/?"; //跨域中转
    var url1 ="www.webxml.com.cn/WebServices/TrainTimeWebService.asmx/getStationAndTimeByStationName?UserID=";
    var url2 ="www.webxml.com.cn/WebServices/TrainTimeWebService.asmx/getStationAndTimeDataSetByLikeTrainCode?UserID=";
    var url3 ="www.webxml.com.cn/WebServices/TrainTimeWebService.asmx/getDetailInfoByTrainCode?UserID=";
    
    var getTrainList = function () {
        if ($('#search-no').val() || ($('#search-begin').val() && $('#search-end').val())) {
            //            获取搜索按钮
            var searchButton = $(this);
            //            正在搜索时禁用按钮，防止多于操作
            searchButton.button('option', 'disabled', true);
            //            显示等待图票
            $.mobile.loading('show');
            //            新建变量
            var _data = {};
            var _url = url1;
//            要获取必要的数据，就必须填写它想要的参数
            if(!$('#search-no').val()){
                _data.StartStation = $("#search-begin").val();
                _data.ArriveStation = $('#search-end').val();
            }else{
                _data.TrainCode = $('#search-no').val();
                _url = url2;
            }

//            开始请求,输入服务器地址,给他想要的数据,get回我们想要的数据，执行回调函数
            $.get(urlPre+_url, _data, function (data) {
                $('#list').html("");
                //                首先获取界面中的list，之后我们要动态的添加内容
                var list = $('#list');
                //                查看xml文档,得知返回的数据中,都包含在TimeTable中,所以我们要获取所有的TimeTable
                var TimeTables = $(data).find('TimeTable');
                //                新建一个存放车次的数组
                var _arr = [];
                //                因为TimeTables变量的到的，是一个数组,所以我们要遍历这个数组，来的到里面的值 ,index为索引,obj为内容
                TimeTables.each(function (index, obj) {
                    //                    新建一个临时变量，来保存索引
                    var i = index;
                    //                    超过了十条，我们就不加载了
                    if (i > 10) return false;
                    //                     判断没有找到
                    //                    获取每一个对象
                    var that = $(this);
                    if (that.find('FirstStation').text() == '数据没有发现') {
                        alert("sorry 数据没发现");
                        return false;
                    }

                    //                    好,通过对get回来的xml进行分析，设置我们要动态增加的元素
                 _arr.push('<li><a href="#" data-no="' + that.find("TrainCode").text() + '">' +
                                    '<h2>' + that.find("TrainCode").text() + '次</h2>' +
                                    '<p>' + that.find("FirstStation").text() + ' - ' + that.find("LastStation").text() + '</p>' +
                                    '<p>用时：' + that.find("UseDate").text() + '</p>' +
                                    '<p class="ui-li-aside">' + that.find("StartTime").text() + ' 开</p>' +
                                    '</a></li>');
                });

                //                遍历完成,判断数组结果的大小,再添加进列表里
                if (_arr.length > 0) {
                    list.html(_arr.join(""));
                    list.listview('refresh');
                }
                $.mobile.loading('hide');
                searchButton.button('option', 'disabled', false);
            });







        } else {
            alert('hello');
        }
    };

    var binEvent = function () {
        //        alert('hello');
        $('#search-submit').on('click', getTrainList);
    };

    $(document).on('pageinit', '#index', function () {
        binEvent();
    })
})(jQuery);