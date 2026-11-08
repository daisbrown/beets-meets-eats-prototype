// Ingredient stories describe the sample recipes, not verified nutrition per bottle.
const ingredientStories = {
  'beet': ['Earthy sweetness and a naturally vivid color.', 'Beets contain folate, a nutrient your body uses to make DNA and support cell division.'],
  'raspberry': ['A bright, tart berry note.', 'Raspberries contain vitamin C; whole berries also provide fiber.'],
  'lime': ['A crisp citrus lift.', 'Lime contains vitamin C, which helps the immune system function normally.'],
  'apple': ['A touch of sweetness to balance the blend.', 'Whole apples provide fiber, which supports digestion.'],
  'cucumber': ['Cool, mild, and refreshing.', 'Cucumbers are mostly water and can contribute to hydration.'],
  'green apple': ['A crisp, gently tart fruit flavor.', 'Whole apples provide fiber, which supports digestion.'],
  'mint': ['A cool, aromatic finish.', 'Mint adds flavor and aroma to the blend.'],
  'carrot': ['A naturally sweet, earthy note.', 'Carrots contain beta-carotene, which the body can convert to vitamin A for normal vision.'],
  'orange': ['A sunny citrus sweetness.', 'Oranges contain vitamin C, which helps the body make collagen.'],
  'ginger': ['A warm, gently spicy kick.', 'Ginger adds distinctive flavor; the amount in a drink determines its contribution.'],
  'lemon': ['A tangy, refreshing finish.', 'Lemons contain vitamin C, which supports normal immune function.'],
  'blueberry': ['A mellow, juicy berry flavor.', 'Blueberries contain naturally occurring plant compounds and fiber when eaten whole.'],
  'blackberry': ['A rich, tart berry flavor.', 'Whole blackberries provide fiber, which supports digestion.'],
  'spinach': ['A mild leafy green note.', 'Spinach contains folate, which the body uses for cell division.'],
  'banana': ['A creamy texture and mellow sweetness.', 'Bananas contain potassium, a mineral needed for normal muscle function.'],
  'mango': ['A soft, tropical sweetness.', 'Mango contains vitamin C, which supports normal immune function.'],
  'pineapple': ['A sweet, tangy tropical flavor.', 'Pineapple contains vitamin C, which helps the body make collagen.'],
  'cacao': ['A deep chocolate flavor.', 'Cacao contributes naturally occurring plant compounds and a rich flavor.'],
  'almond butter': ['A creamy, nutty flavor.', 'Almond butter contributes unsaturated fat and protein. Contains tree nuts.'],
  'oat milk': ['A smooth, creamy base.', 'Nutrition varies by brand and whether the oat milk is fortified.'],
  'strawberry': ['A juicy, sweet-tart berry flavor.', 'Strawberries contain vitamin C, which supports normal immune function.'],
  'watermelon': ['A light, juicy sweetness.', 'Watermelon contains water and can contribute to hydration.'],
  'basil': ['A fresh herbal note.', 'Basil adds aroma and flavor to the blend.'],
  'turmeric': ['A warm, earthy flavor and golden color.', 'Turmeric is a spice; amounts and effects depend on the finished recipe.'],
  'black pepper': ['A small hint of warmth.', 'Black pepper adds a gentle spicy flavor.']
};
const priorShow = show;
let previousFocus;
show = function(index) {
  previousFocus = document.activeElement;
  priorShow(index);
  const names = I[index][3].split(',').map(s => s.trim().replace(/^and /, ''));
  const section = document.querySelector('.blend');
  section.innerHTML = '<div class="story-head"><div><b>INSIDE THE BOTTLE</b><p>Tap an ingredient to explore its flavor and nutrition.</p></div><button type="button" class="replay">Replay</button></div><div class="ingredient-buttons"></div><div class="ingredient-info" aria-live="polite"></div><small>Ingredient facts are general; actual nutrition depends on the recipe and preparation. Learn more from <a href="https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx" target="_blank" rel="noopener noreferrer">NIH nutrition resources</a>.</small>';
  const list = section.querySelector('.ingredient-buttons');
  const info = section.querySelector('.ingredient-info');
  names.forEach((name, n) => {
    const button = document.createElement('button');
    button.type = 'button'; button.textContent = name; button.style.setProperty('--order', n);
    button.onclick = () => {
      list.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
      const story = ingredientStories[name.toLowerCase()] || ['Adds flavor to this blend.', 'Final ingredients and nutrition will be confirmed by Jasmine.'];
      info.innerHTML = '';
      const title = document.createElement('strong'); title.textContent = name;
      const flavor = document.createElement('p'); flavor.textContent = story[0];
      const fact = document.createElement('p'); fact.textContent = story[1];
      info.append(title, flavor, fact);
    };
    list.append(button);
  });
  list.querySelector('button')?.click();
  section.querySelector('.replay').onclick = () => { list.classList.remove('animate'); void list.offsetWidth; list.classList.add('animate'); };
  list.classList.add('animate');
  modal.setAttribute('role', 'dialog'); modal.setAttribute('aria-modal', 'true'); modal.setAttribute('aria-labelledby', 'mname');
  const close = modal.querySelector('.x'); close.setAttribute('aria-label', 'Close product details'); close.focus();
};
const priorClose = closeModal;
closeModal = function() { priorClose(); previousFocus?.focus(); };
document.querySelectorAll('.card').forEach((card, index) => {
  const trigger = card.querySelector('.learn');
  trigger.tabIndex = 0; trigger.setAttribute('role', 'button'); trigger.setAttribute('aria-label', `View ${I[index][0]} details`);
  trigger.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); show(index); } });
});
modal.addEventListener('keydown', e => {
  if (e.key !== 'Tab' || !modal.classList.contains('open')) return;
  const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href]')];
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
