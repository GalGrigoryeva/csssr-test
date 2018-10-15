import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

const initSlider = slider => {
	const inputRange = slider.querySelector('.range-slider__input');
	slider.querySelectorAll('.range-slider__list li').forEach(element => {
		element.addEventListener('click', () => {
			inputRange.value = element.getAttribute('data-range');
		});
	});
};

initSlider(document.getElementById('jsSkillsSlider'));
