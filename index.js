function complete() {
  ["green", "red", "white", "blue", "yellow"].forEach((listItem) => {
    document.getElementById(listItem).style.width = "100%";
  });
}
