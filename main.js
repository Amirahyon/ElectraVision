const electra = document.querySelector("p");
console.log(electra.innerHTML);

setInterval(() => {
    let randomColor = '#';
    for (let i = 0; i < 6; i++){
        let colorList = 'abcdef012345678';
        let randColor = Math.floor(Math.random() * colorList.length);
        randomColor += colorList[randColor];
    }
    console.log(randomColor);
    electra.style.color = randomColor;
  }, 3000);

