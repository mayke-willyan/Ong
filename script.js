function copiarPix(btn){
  const chave = "22.150.744/0001-25";
  navigator.clipboard.writeText(chave).then(() => {
    const original = btn.textContent;
    btn.textContent = "Copiado!";
    setTimeout(() => btn.textContent = original, 1800);
  });
}