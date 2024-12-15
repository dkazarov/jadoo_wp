const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line');
const nav = document.querySelector('nav');
const navItem = document.querySelectorAll('.nav__item');
const body = document.querySelector('body');

export const burgerOpen = (): void => {
	burger.addEventListener('click', () => {
		burgerLine.classList.toggle('line--hide');
		burger.classList.toggle('burger--transform');
		nav.classList.toggle('show-nav');
		// body.classList.toggle('no-scroll');
	});
};

export const burgerClose = (): void => {
	navItem.forEach(el => {
		el.addEventListener('click', () => {
			burgerLine.classList.remove('line--hide');
			burger.classList.remove('burger--transform');
			nav.classList.remove('show-nav');
			// body.classList.remove('no-scroll');
		});
	});
};
