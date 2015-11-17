$(function(){
	$('#bookstore').fullpage({
		//navigation
		menu: false,
		localAnchors: true,
		navigation: true,
		navigationPosition: 'left',
		navigationTooltips: ['one', 'two', 'three', 'four'],
		slidesNavigation: false,
		slidesNavPosition: 'top',
		controlArrowColor: '#254875',
		loopBottom: true,//滑动到底部是否，翻滚到顶部
		loopTop: true,
		loopHorizontal: true,
		autoScrolling: true,
		css3: true,//是否支持css transforms滚动
		paddingTop: '10px',
		keyboardScrolling:true,
		verticalCentered: true,
		touchSensitivity:'5',
		sectionsColor: ['#254875', '#00FF00', '#254587', '#695684'],
		anchors:['page1','page2','page3','page4']
	});
});