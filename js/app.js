const animItems = document.querySelectorAll('.animation__item');

if (animItems.length > 0) {

	window.addEventListener('scroll', animScroll)
	function animScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index]
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const startAnim = 4;

			let itemPoint = window.innerHeight - animItemHeight / startAnim


			if (animItemHeight > window.innerHeight) {
				itemPoint = window.innerHeight - window.innerHeight / startAnim
			}

			if ((pageYOffset > animItemOffset - itemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('typing')
			} else {
				animItem.classList.remove('typing')
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft
			}
		}
	}
}


//Get the button:
const scrollBtn = document.querySelector('.scroll-top');
scrollBtn.addEventListener('click', topFunction)
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}