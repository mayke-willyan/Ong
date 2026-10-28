// === FUNÇÃO ORIGINAL (SECÇÃO "COMO AJUDAR") ===
function copiarPix(btn){
  const chave = "22.150.744/0001-25";
  navigator.clipboard.writeText(chave).then(() => {
    const original = btn.textContent;
    btn.textContent = "Copiado!";
    setTimeout(() => btn.textContent = original, 1800);
  });
}

const modal = document.getElementById('modalPix');
const msgSucesso = document.getElementById('mensagemSucesso');

function abrirModalPix() {
    modal.classList.add('ativo');
}

function fecharModalPix() {
    modal.classList.remove('ativo');
    msgSucesso.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        fecharModalPix();
    }
}

function copiarChaveModal() {
    const inputChave = document.getElementById('chavePixModal');
    
    inputChave.select();
    inputChave.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(inputChave.value).then(() => {
        msgSucesso.style.display = 'block';
        
        const btnCopiar = document.getElementById('btnCopiarModal');
        const textoOriginal = btnCopiar.textContent;
        btnCopiar.textContent = 'Copiado!';
        
        setTimeout(() => {
            btnCopiar.textContent = textoOriginal;
        }, 2500);
    });
}

const btnTopo = document.getElementById('btnVoltarTopo');

window.addEventListener('scroll', () => {
    
    if (window.scrollY > 300) {
        btnTopo.classList.add('mostrar');
    } else {
        btnTopo.classList.remove('mostrar');
    }
});

// === MENU MOBILE (ADICIONADO) ===
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('ativo');
}

// Fecha o menu mobile ao clicar em um link ou no botão de doar
document.querySelectorAll('#navLinks a, #navLinks button').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('ativo');
    });
});
