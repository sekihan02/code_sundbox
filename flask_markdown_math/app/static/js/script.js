// MathJax の設定（これはページのロード時に一度だけ設定します）
window.MathJax = {
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
  },
  svg: {
    fontCache: "global",
  },
};
function escapeScriptTags(html) {
    // 特定の文字列（例えば、<script>）を安全に表示できる形（例：&lt;script&gt;）に置換します。
    return html.replace(/<script>/g, "&lt;script&gt;").replace(/<\/script>/g, "&lt;/script&gt;");
}
function convertMarkdownToHTML(markdownText) {
    // MathJax で解釈する前に、Markdown を HTML に変換
    const html = marked.parse(markdownText);

    // DOMPurify でサニタイズする際に特定のタグ（例えば、`<script>`）を許可する
    let cleanHTML = DOMPurify.sanitize(html, {
      ADD_TAGS: ['script'] // セキュリティ上のリスクがあるため、注意して使用してください
    });

    // `<script>` タグをエスケープして安全に表示
    cleanHTML = escapeScriptTags(cleanHTML);
    return cleanHTML;
}

// MathJax のスクリプトを動的に読み込み、数式のレンダリングを行う
function loadMathJax() {
  const script = document.createElement("script");
  script.src = "https://polyfill.io/v3/polyfill.min.js?features=es6";
  document.head.appendChild(script);

  const mathJaxScript = document.createElement("script");
  mathJaxScript.id = "MathJax-script";
  mathJaxScript.async = true;
  mathJaxScript.src =
    "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  document.head.appendChild(mathJaxScript);
}

// ページの初期化時に MathJax を読み込む
loadMathJax();

document
  .getElementById("theme-switcher")
  .addEventListener("click", function () {
    var body = document.body;
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      this.classList.remove("light-theme");
      var passwordToggleIcons = document.querySelectorAll(".toggle-password");
      passwordToggleIcons.forEach(function (icon) {
        icon.style.filter = "invert(0%)";
      });
    } else {
      body.classList.add("light-theme");
      this.classList.add("light-theme");
      var passwordToggleIcons = document.querySelectorAll(".toggle-password");
      passwordToggleIcons.forEach(function (icon) {
        icon.style.filter = "invert(100%)";
      });
    }
  });

document
  .getElementById("chatform")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const messageBox = document.getElementById("message");
    const chatBox = document.getElementById("chatbox");
    const message = messageBox.value; // ユーザーからのメッセージを取得

    // ユーザーのメッセージを Markdown から HTML に変換してチャットボックスに表示
    const convertedHTML = convertMarkdownToHTML(message);
    chatBox.innerHTML += `<div class="user-message">${convertedHTML}</div>`;

    messageBox.value = ""; // メッセージボックスをクリア

    // メッセージをサーバーに送信し、レスポンスを取得
    const response = await fetch("/get_response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    });
    const data = await response.json();

    // サーバーからのレスポンスを Markdown から HTML に変換してチャットボックスに表示
    chatBox.innerHTML += `<div class="bot-message">${convertMarkdownToHTML(
      data.response
    )}</div>`;

    // DOM の更新後に MathJax.typesetPromise() を呼び出して、数式をレンダリング
    MathJax.typesetPromise();

    chatBox.scrollTop = chatBox.scrollHeight; // チャットボックスを最新のメッセージにスクロール
  });

// Add an event listener to the textarea
document
  .getElementById("message")
  .addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter") {
      event.preventDefault();
      document.getElementById("chatform").dispatchEvent(new Event("submit"));
    }
  });

document
  .getElementById("settingsform")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    var modelInput = document.getElementById("model");
    var temperatureInput = document.getElementById("temperature");
    var apiKeyInput = document.getElementById("api_key");
    var model = modelInput.value;
    var temperature = temperatureInput.value;
    var apiKey = apiKeyInput.value;

    // Send the new settings to the server
    var response = await fetch("/update_settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: model,
        temperature: temperature,
        api_key: apiKey,
      }),
    });
    var data = await response.json();

    // If the update was successful, update the placeholders with the new values
    if (data.status === "success") {
      modelInput.value = model;
      temperatureInput.value = temperature;
      apiKeyInput.value = apiKey;
    }
  });

document
  .getElementById("recommend-checkbox")
  .addEventListener("change", async function (event) {
    var shouldRecommend = event.target.checked;

    // shouldRecommendの結果をデバッグ
    // console.log(shouldRecommend);
    // Send the new settings to the server
    var response = await fetch("/update_recommendation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ should_recommend: shouldRecommend }),
    });
    var data = await response.json();

    // If the update was successful, log it to the console
    if (data.status === "success") {
      console.log("Recommendation status updated successfully");
    }
  });

document
  .getElementById("settings-button")
  .addEventListener("click", function () {
    document.getElementById("settings-button").classList.add("active");
    document
      .getElementById("recommendations-button")
      .classList.remove("active");
    document.getElementById("settings-content").style.display = "block";
    document.getElementById("recommend-content").style.display = "none";
  });

document
  .getElementById("recommendations-button")
  .addEventListener("click", function () {
    document.getElementById("recommendations-button").classList.add("active");
    document.getElementById("settings-button").classList.remove("active");
    document.getElementById("settings-content").style.display = "none";
    document.getElementById("recommend-content").style.display = "block";
  });

document
  .querySelector(".toggle-password")
  .addEventListener("click", function (e) {
    var passwordInput = document.getElementById("api_key");
    var passwordIcon = e.target;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordIcon.classList.remove("fa-eye");
      passwordIcon.classList.add("fa-eye-slash"); // change to eye-slash when password is visible
    } else {
      passwordInput.type = "password";
      passwordIcon.classList.remove("fa-eye-slash");
      passwordIcon.classList.add("fa-eye"); // change to eye when password is hidden
    }
  });
