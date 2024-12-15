import { burgerOpen, burgerClose } from './js-components/burger';
// import { changeLanguage } from './js-components/lang';

// changeLanguage();

burgerOpen();
burgerClose();

const select = document.querySelector('.change-lang');
const allLang = ['en', 'ru', 'ua'];

const changeLanguage = () => {
	select.addEventListener('change', () => {
		console.log(1);
	});
};

changeLanguage();
