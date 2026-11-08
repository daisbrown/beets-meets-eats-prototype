// Demo bag is stored locally in this browser only; no orders leave the page.
const storageKey = 'beets-demo-bag-v1';
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (Array.isArray(saved)) saved.filter(x => Number.isInteger(x.i) && x.i >= 0 && x.i < I.length && Number.isInteger(x.q) && x.q > 0 && x.q <= 99).forEach(x => C.push({i:x.i,q:x.q}));
} catch (_) { /* Storage is optional. */ }
const oldRender = render;
const oldAdd = add;
add = function(index) { if (modal.classList.contains('open')) closeModal(); oldAdd(index); };
render = function() {
  oldRender();
  try { localStorage.setItem(storageKey, JSON.stringify(C)); } catch (_) { /* Continue without persistence. */ }
  const checkoutButton = document.getElementById('checkout');
  checkoutButton.disabled = C.length === 0;
  document.querySelectorAll('.qty').forEach((row, n) => {
    const buttons = row.querySelectorAll('button');
    const item = I[C[n].i][0];
    buttons[0].setAttribute('aria-label', `Remove one ${item}`);
    buttons[1].setAttribute('aria-label', `Add one ${item}`);
  });
};
checkout = function() {
  if (!C.length) return;
  const checkoutButton = document.getElementById('checkout');
  const totalValue = C.reduce((sum, row) => sum + I[row.i][5] * row.q, 0);
  cartitems.innerHTML = `<div class="review"><h3>Choose a sample option</h3><p>This is a preview—no information is sent and no payment is collected.</p><label><input type="radio" name="fulfillment" value="Pickup" checked> Pickup</label><label><input type="radio" name="fulfillment" value="Delivery"> Delivery</label><p>Sample total: <strong>$${totalValue}</strong></p><button type="button" class="back-bag">Back to bag</button></div>`;
  checkoutButton.textContent = 'Complete demo order';
  checkoutButton.onclick = () => {
    const choice = document.querySelector('input[name="fulfillment"]:checked').value;
    C.splice(0); render();
    cartitems.innerHTML = `<p class="success"><b>Demo order complete!</b><br>Your sample ${choice.toLowerCase()} order is complete. No real order or payment was processed.</p>`;
    checkoutButton.textContent = 'Demo checkout'; checkoutButton.onclick = checkout; checkoutButton.disabled = true;
  };
  document.querySelector('.back-bag').onclick = () => { checkoutButton.textContent = 'Demo checkout'; checkoutButton.onclick = checkout; render(); };
};
document.querySelector('.drawer .close').setAttribute('aria-label', 'Close shopping bag');
document.getElementById('checkout').onclick = checkout;
render();

// Filter the existing product cards by the flavor of each sample recipe.
const filters = document.createElement('div');
filters.className = 'flavor-filters'; filters.setAttribute('aria-label', 'Filter sample drinks by flavor');
filters.innerHTML = '<span>Find your sip</span><button type="button" data-filter="all" aria-pressed="true">All</button><button type="button" data-filter="fruity" aria-pressed="false">Fruity</button><button type="button" data-filter="fresh" aria-pressed="false">Fresh & green</button><button type="button" data-filter="bold" aria-pressed="false">Bold & earthy</button><button type="button" data-filter="creamy" aria-pressed="false">Creamy</button>';
G.before(filters);
const categories = ['bold','fresh','fruity','fruity','fruity','creamy','fruity','bold'];
filters.addEventListener('click', e => {
  const button = e.target.closest('button[data-filter]'); if (!button) return;
  filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  [...G.children].forEach((card, i) => { card.hidden = button.dataset.filter !== 'all' && categories[i] !== button.dataset.filter; });
});
