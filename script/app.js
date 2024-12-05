// Birinchi rasm (ice cream)
const iceCreamImage = document.querySelector('.interactive-image');
const iceCreamContainer = document.querySelector('.image-container');
iceCreamContainer.addEventListener('mousemove', (e) => {
  const rect = iceCreamContainer.getBoundingClientRect();
  const xAxis = (e.clientX - rect.left - rect.width / 2) / 10;
  const yAxis = (e.clientY - rect.top - rect.height / 2) / 10;

  iceCreamImage.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});

iceCreamContainer.addEventListener('mouseleave', () => {
  iceCreamImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Ikkinchi rasm (chocolate)
const chocolateImage = document.querySelector('.chocolate');
const chocolateContainer = document.querySelector('.section-chocolate-image');
chocolateContainer.addEventListener('mousemove', (e) => {
  const rect = chocolateContainer.getBoundingClientRect();
  const xAxis = (e.clientX - rect.left - rect.width / 2) / 10;
  const yAxis = (e.clientY - rect.top - rect.height / 2) / 10;

  chocolateImage.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});

chocolateContainer.addEventListener('mouseleave', () => {
  chocolateImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// Uchinchi rasm (drink)
const drinkImage = document.querySelector('.drink');
const drinkContainer = document.querySelector('.section-drink-image');
drinkContainer.addEventListener('mousemove', (e) => {
  const rect = drinkContainer.getBoundingClientRect();
  const xAxis = (e.clientX - rect.left - rect.width / 2) / 10;
  const yAxis = (e.clientY - rect.top - rect.height / 2) / 10;

  drinkImage.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});

drinkContainer.addEventListener('mouseleave', () => {
  drinkImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

