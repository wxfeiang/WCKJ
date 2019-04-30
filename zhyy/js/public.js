// tab
function tab(btn, boxlist) {
	for (var i = 0; i < btn.length; i++) {
		btn[i].index = i;
		btn[i].onclick = function() {
			//alert(this.index );
			for (var j = 0; j < btn.length; j++) {
				btn[j].classList.remove('active');
				// boxlist[j].style.display = 'none';
				boxlist[j].style.display = 'none';
				btn[this.index].classList.add('active');
				boxlist[this.index].style.display = 'block';
			}
		};
	}
}
