const randomValues = document.getElementById("yourName");

const randomColor = () => {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  randomValues.style.color = color;
};

randomValues.addEventListener("click", randomColor);
