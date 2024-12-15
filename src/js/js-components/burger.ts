const burger = document.querySelector('.burger');
const burgerLine = document.querySelector('.burger__line');
const nav = document.querySelector('nav');

export const burgerOpen = (): void => {
	burger.addEventListener('click', () => {
		burgerLine.classList.toggle('line--hide');
		burger.classList.toggle('burger--transform');
		nav.classList.toggle('show-nav');
	});
};

export default burgerOpen;
