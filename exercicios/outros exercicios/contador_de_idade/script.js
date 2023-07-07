function verificar() {
  var data = new Date();
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
  window.alert('[ERRO] Verifique os dados e tente novamente!')
  }  else {
    var fsex = document.getElementsByName('radsex') 
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
      gênero = `Homem`

      if (idade >= 0 && idade < 5){
        //bebê
        img.setAttribute('src', './imagens/bebe_homem.png')
      } else if (idade >=5 && idade < 15){
        // criança
        img.setAttribute('src', './imagens/crianca_homem.png')
      } else if (idade < 21){
        //jovem
        img.setAttribute('src', './imagens/jovem_homem.png')
      } else if (idade >=21 && idade < 35){
        //adulto 1 
        img.setAttribute('src', './imagens/adulto2_homem.png')
      } else if (idade < 60){
        // adulto
        img.setAttribute('src', './imagens/adulto_homem.png')
      } else {
        //idoso
        img.setAttribute('src', './imagens/idoso_homem.png')
      }

    } else if (fsex[1].checked) {
      gênero = `Mulher`

      if (idade >= 0 && idade < 5){
        //bebê
        img.setAttribute('src', './imagens/bebe_mulher.png')
      } else if (idade >=5 && idade < 15){
        // criança
        img.setAttribute('src', './imagens/crianca_mulher.png')
      } else if (idade < 21){
        //jovem
        img.setAttribute('src', './imagens/jovem_mulher.png')
      } else if (idade >=21 && idade < 35){
        //adulto 1 
        img.setAttribute('src', './imagens/adulta2_mulher.png')
      } else if (idade < 60){
        // adulto
        img.setAttribute('src', './imagens/adulta_mulher.png')
      } else {
        //idoso
        img.setAttribute('src', './imagens/idosa_mulher.png')
      }
      
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Você é ${gênero}, com ${idade} anos.`
    res.appendChild(img)
  }
}