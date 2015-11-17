#此仓库用于存放面试时，参考的对象

##对象一 基础的电商demo
### 知识点
    1.基础的页面搭建 html构架
    2.基础的样式增势 css 使用
    3.jQuery的日常使用。

>如何获取屏幕高度
    (function($){
        $(document).ready(function(){
            $(window).scrollTop(function(){
                var screenHeight = $(document).scrollTop();
            })
        })
    }(jQuery);

>如何获取元素偏移量


     (function($){
        $(document).ready(function(){
            $(window).scrollTop(function(){
                var ElementOffSet = $('div').offset().top;
            })
        })
    }(jQuery);


>使用jQuery基础的dom操作。

    增:addClass 删:removeClass 改:attr('element','value') 查:attr('element')。


#项目二 基础的电商首页

 ## 构建方式
	yeoman+bower+gulp

##知识点:
    1.photoshop切图技术
    2.复杂的页面构建
    3.复杂的css样式构建
    4.像素极还原psd样板图
##psd原图
![psd原图](psd.png)

## 效果图
![效果图](pictwo.png)
![效果图](picone.png)
