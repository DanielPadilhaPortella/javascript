function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  console.warn("inicial:", ini.value)
  console.warn("final:", fim.value)
  console.warn("passo:", passo.value)

  if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1f449}`
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1f449}`
      }
    }

  }
}