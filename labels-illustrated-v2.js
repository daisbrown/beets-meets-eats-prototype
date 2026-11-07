document.head.insertAdjacentHTML('beforeend', `<style>
.bottle-label { position:absolute; z-index:2; left:50%; top:51%; transform:translate(-50%,-50%); width:25%; aspect-ratio:1; pointer-events:none; mix-blend-mode:multiply; }
.bottle-label img { width:100%; height:100%; object-fit:contain; display:block; }
.modal-image .bottle-label { width:24%; }
</style>`);
const label = '<div class="bottle-label" aria-hidden="true"><img src="label-artwork.png" alt=""></div>';
document.querySelectorAll('.photo').forEach(p => p.insertAdjacentHTML('beforeend', label));
document.querySelector('.modal-image')?.insertAdjacentHTML('beforeend', label);
