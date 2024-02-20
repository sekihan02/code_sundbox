let activeButton = 0; // アクティブなボタンがない状態を0とする

function toggleButton(buttonId) {
  if (activeButton !== buttonId) {
    // 新しく選択されたボタンをアクティブにし、以前のボタンを非アクティブにする
    setActiveButton(buttonId);
  } else {
    // 既にアクティブなボタンを再度クリックした場合は非アクティブにする
    setInactiveButton(buttonId);
  }
}

function setActiveButton(buttonId) {
  // 以前のアクティブなボタンを非アクティブにする
  if (activeButton !== 0) {
    setInactiveButton(activeButton);
  }
  // 新しいボタンをアクティブにする
  document.getElementById(`btn${buttonId}`).classList.add("active");
//   document.getElementById(`btn${buttonId}`).textContent = `Button ${buttonId}: ON `;
  document.getElementById(`btn${buttonId}`).textContent = `Button ${buttonId}: ON`;
  activeButton = buttonId;
}

function setInactiveButton(buttonId) {
  document.getElementById(`btn${buttonId}`).classList.remove("active");
//   document.getElementById(`btn${buttonId}`).textContent = `Button ${buttonId}: OFF`;
  document.getElementById(`btn${buttonId}`).textContent = `Button ${buttonId}: OFF`;
  if (activeButton === buttonId) {
    activeButton = 0; // アクティブなボタンがない状態に戻す
  }
}
