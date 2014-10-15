window.onload = function(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth();
	var day = now.getDate();
	var week = now.getDay();
	var date = document.getElementById('date');

	switch (week)
	{
	case 0:
	  var zhou="日";
	  break;
	case 1:
	  var zhou="一";
	  break;
	case 2:
	  var zhou="二";
	  break;
	case 3:
	  var zhou="三";
	  break;
	case 4:
	  var zhou="四";
	  break;
	case 5:
	  var zhou="五";
	  break;
	case 6:
	  var zhou="六";
	  break;
	}

	date.innerHTML =  year + ' 年 ' + (month+1) + ' 月 ' + day + ' 日 ' + '  星期' + zhou;

	var navbar = document.getElementById('navbar');
	var navbarlink = navbar.getElementsByTagName('a');

	for (var i = 0; i < navbarlink.length; i++) {
		navbarlink[i].flag = false;
		navbarlink[i].onmouseover = function() {
			this.style.background = "#fff"; 
			this.style.color = "#f16913";
		}
		navbarlink[i].onmouseout = function() {

			this.style.background = "";
			this.style.color = "#fff";
		}
	};

	var kuaijinavs = document.getElementById('tab-nav').getElementsByTagName('li');
	var kuaijicons = document.getElementById('tab-main').getElementsByTagName('div');

	for (var i = 0; i < kuaijinavs.length; i++) {
		kuaijinavs[i].index = i;
		kuaijinavs[i].onmouseover = function() {
			for (var i = 0; i < kuaijinavs.length; i++) {
				kuaijinavs[i].style.background = "";
				kuaijinavs[i].style.color = "";
			};
			this.style.background = "#fff";
			this.style.color = "#f16913";

			for (var i = 0; i < kuaijicons.length; i++) {
				kuaijicons[i].style.display = "none";
			};
			kuaijicons[this.index].style.display = "block";
		}
	};

}