
function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  
  var data = new Date()
  var hora = data.getHours()
  var minutos = data.getMinutes()
  msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
  
  // Boa madrugada!
  if (hora >= 0 && hora < 6) {
    
    // Boa tarde!
  } else if (hora >= 6 && hora < 12) {
    img.src = './imagens/foto_manha.png'
    document.body.style.background = '#fdcb7c'
    
    // Boa tarde!
  } else if (hora >= 12 && hora < 18) {
    img.src = './imagens/foto_tarde.png'
    document.body.style.background = '#d35526'

    // Boa noite!
  } else {
    img.src = './imagens/foto_noite.png'
    document.body.style.background = '#3d304f'
  }
}

carregar();