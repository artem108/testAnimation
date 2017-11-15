const main = document.getElementById('main')
 setInterval(() => {

    const addSpan = () => {
      const spanTop = document.createElement('span')
            spanTop.className += " wave top"
            spanTop.innerText = "."
      const spanBottom = document.createElement('span')
            spanBottom.className += " wave bottom"
              spanBottom.innerText = "."
      main.appendChild(spanTop, spanBottom);
    }

      addSpan()
  }, 50);
