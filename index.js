const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const locationEl = document.querySelector('.location');
const temperatureEl = document.querySelector('.temperature');
const conditionEl = document.querySelector('.condition');
const iconEl = document.querySelector('.icon');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const city = mumbai;
	const apiKey = 'aec641757f0a9ddb2de76ffd7ec8f826';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			locationEl.textContent = data.name + ', ' + data.sys.country;
			temperatureEl.textContent = Math.round(data.main.temp) + '°C';
			conditionEl.textContent = data.weather[0].description;
			iconEl.style.backgroundImage = `url('https://openweathermap.org/img/wn/${data.weather[0].icon}.png')`;
		})
		.catch(error => {
			locationEl.textContent = 'Error: City not found!';
			temperatureEl.textContent = '';
			conditionEl.textContent = '';
			iconEl.style.backgroundImage = '';
		});

	input.value = '';
});

window.addEventListener('scroll', () => {
	const container = document.querySelector('.container');
	container.style.opacity = 1 - window.scrollY / container.offsetHeight;
});
