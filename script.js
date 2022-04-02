const leftButton = document.querySelector('.arrow.left');
const rightButton = document.querySelector('.arrow.right');

leftButton.addEventListener('click', () => {
	turnSlider('left');
});

rightButton.addEventListener('click', () => {
	turnSlider('right');
});

function turnSlider(direction) {
	const slides = document.querySelectorAll(`.slide`);
	slides.forEach(slide => {
		let currentSlide = +(slide.classList + '').split('-')[1];
		let slideToBe;
		switch(direction) {
			case 'left': {
				slideToBe = currentSlide - 1;
				if(slideToBe < 1) {
					slideToBe = slides.length;
					slide.style.left = '-500px';
				}
				break;
			}
			case 'right': {
				slideToBe = currentSlide + 1;
				if(slideToBe > slides.length) {
					slideToBe = 1;
					slide.style.left = '2000px';
				}
				break;
			}
		}
		slide.classList.remove(`slide-${currentSlide}`);
		slide.classList.add(`slide-${slideToBe}`);
	});
}