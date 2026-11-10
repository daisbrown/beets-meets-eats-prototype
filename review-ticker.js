const exampleReviews = [
  'Jasmine made choosing a blend feel easy. I loved picking the flavors that sounded good to me.',
  'The colors caught my eye, and Jasmine’s warm welcome made me want to try a blend.',
  'Jasmine’s build-your-own idea makes it fun to explore different flavors.',
  'I like being able to choose a combination that feels right for my day.',
  'Jasmine makes the menu feel friendly and easy to explore.',
  'The beet lemonade sounds like a bright choice for a sunny afternoon.',
  'I’d enjoy trying a different fruit combination each time.',
  'Jasmine’s colorful blends make trying something new feel fun.',
  'The tea sounds like a cozy option when I want something warm.',
  'I like seeing what goes into a blend before choosing my favorites.'
];
const reviewsSection=document.querySelector('#reviews');
reviewsSection.querySelector('.fiction').innerHTML='<strong>Demo only:</strong> These ten reviews are fictional examples, and the portraits are AI-generated placeholders. They are not real customers or endorsements.';
const oldGrid=reviewsSection.querySelector('.review-grid');
const ticker=document.createElement('div');ticker.className='ticker-shell';
const controls=document.createElement('div');controls.className='ticker-controls';controls.innerHTML='<button type="button" class="ticker-toggle" aria-pressed="false">Pause reviews</button><span>Scroll to explore · Sample reviews</span>';
const viewport=document.createElement('div');viewport.className='ticker-viewport';viewport.tabIndex=0;viewport.setAttribute('aria-label','Example reviews. Scroll horizontally to explore.');
const track=document.createElement('div');track.className='ticker-track';
function card(text,i){const article=document.createElement('article');article.className='review-card';const stars=document.createElement('span');stars.setAttribute('aria-label','Five sample stars');stars.textContent='★★★★★';const quote=document.createElement('blockquote');quote.textContent='“'+text+'”';const person=document.createElement('div');person.className='review-person';const img=document.createElement('img');img.className='review-portrait';img.src=`review-portrait-${i%3+1}.png`;img.alt='';const label=document.createElement('span');label.textContent='Fictional example · AI portrait';person.append(img,label);article.append(stars,quote,person);return article}
exampleReviews.forEach((text,i)=>track.append(card(text,i)));
exampleReviews.forEach((text,i)=>{const duplicate=card(text,i);duplicate.setAttribute('aria-hidden','true');track.append(duplicate)});
viewport.append(track);ticker.append(controls,viewport);oldGrid.replaceWith(ticker);
const toggle=controls.querySelector('.ticker-toggle');toggle.onclick=()=>{const paused=ticker.classList.toggle('paused');toggle.setAttribute('aria-pressed',String(paused));toggle.textContent=paused?'Play reviews':'Pause reviews'};
