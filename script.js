function textChanger() {
  const changeText = document.querySelector("#change h3");
  const texts = [
    "Company Startup",
    "Tax Registration",
    "FSSAI License",
    "Intellectual Property",
    "MSME Registration",
  ];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % texts.length;
    changeText.textContent = texts[index];
  }, 2000);
}
textChanger();
