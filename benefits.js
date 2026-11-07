const nutritionNotes = [
  'Raspberries and lime provide vitamin C, which helps the immune system work normally. Beets add folate, a nutrient used in cell growth.',
  'Cucumber adds water, while apple contributes fiber when blended whole. Fiber supports digestion.',
  'Carrots contain beta-carotene, which the body can convert to vitamin A for normal vision. Oranges provide vitamin C.',
  'Berries provide plant compounds and fiber when blended whole. Spinach contributes folate, which supports cell growth.',
  'Mango and pineapple provide vitamin C, which supports normal immune function and helps the body make collagen.',
  'Banana supplies potassium, which helps muscles function. Almond butter adds some protein and unsaturated fat. Contains tree nuts.',
  'Strawberries provide vitamin C, which supports normal immune function. Watermelon contributes water for hydration.',
  'Carrots contain beta-carotene, which the body converts to vitamin A for normal vision. Lemon adds vitamin C.'
];
const originalShow = show;
show = function(i) {
  originalShow(i);
  mnote.textContent = nutritionNotes[i];
  mnote.previousElementSibling.textContent = 'Ingredient benefits';
  const button = document.querySelector('.detailadd');
  if (button) document.querySelector('.detail').append(button);
};
