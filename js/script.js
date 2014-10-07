window.onload = function(){
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