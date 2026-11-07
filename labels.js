document.head.insertAdjacentHTML('beforeend', `<style>
.photo,.modal-image { container-type: inline-size; }
.bottle-label { position:absolute; z-index:2; left:50%; top:51%; transform:translate(-50%,-50%); width:25%; text-align:center; color:#242019; pointer-events:none; }
.bottle-label strong { display:block; font:800 5cqw/.9 Fraunces,serif; letter-spacing:-.055em; }
.bottle-label strong span { display:block; color:#a61543; }
.bottle-label .leaf { display:block; color:#285b3a; font-size:3cqw; line-height:1; margin-bottom:.7cqw; }
.modal-image .bottle-label { width:24%; }
.modal-image .bottle-label strong { font-size:4.5cqw; }
.modal-image .bottle-label .leaf { font-size:2.5cqw; }
</style>`);
const label = '<div class="bottle-label" aria-hidden="true"><span class="leaf">✿</span><strong>Beets<span>Meets</span>Eats</strong></div>';
document.querySelectorAll('.photo').forEach(p => p.insertAdjacentHTML('beforeend', label));
document.querySelector('.modal-image')?.insertAdjacentHTML('beforeend', label);
