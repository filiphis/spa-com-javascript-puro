const alerta = (classe, mensagem) => {
  const linha = document.createElement('section');

  const conteudoLinha = `
  <div class="${classe}">${mensagem}</div>

`
  linha.innerHTML = conteudoLinha;
  return linha;
}

export default alerta;
