// Function to click heart icon
handleClickHeartIcon = () => {
  const lifeElement = document.getElementById("lifeValue");
  let totalLife = parseInt(lifeElement.innerText);
  totalLife += 1;
  lifeElement.innerText = totalLife;
};


