const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
	nav.classList.toggle('slide');
});

const gambar = document.querySelectorAll('.gambar');
const article = document.querySelectorAll('article');
const artikel = document.querySelectorAll('article .text');
var x = window.matchMedia("(max-width: 768px)");
myFunction(x);
x.addListener(myFunction);

function myFunction(x){
	if (x.matches) {
		for (var i = 0; i < gambar.length; i++) {
			article[i].insertBefore(gambar[i], artikel[i])
		}
	}
}




