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
}