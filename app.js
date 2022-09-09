window.addEventListener("keydown", (e) => {
  const insert = document.querySelector(".insert");
  insert.innerHTML = `
        <div class="keyName">
        
      ${e.key == " " ? "Space" : e.key}
        
        </div>

        <div class="keyCode">${e.keyCode}</div>

        <div class="keyInfo">${e.code}</div>
`;
});
