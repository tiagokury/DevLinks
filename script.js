function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // PEGAR A IMAGEM ATRAVÉS DO QUERY SELECTOR (SELETOR) //
  // QUERYSELECTOR: PEGA O SELETOR REFERENTE AO HTML //
  const img = html.querySelector("#profile img")

  // SUBSTITUIR A IMAGEM //
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "imagem do mayk com óculos")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "imagem do mayk sem óculos")
  }
}
