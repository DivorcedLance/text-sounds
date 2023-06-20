const audioElement = document.getElementById('audio');
const textInput = document.getElementById('input-text-box');
const sayItBtn = document.getElementById('say-it-button');
const langBtn = document.querySelector('.dropbtn');
const langDropdown = document.getElementById('language-dropdown');
const testBtn = document.getElementById('test-button');

let currentLanguage = {
  languageName: 'Spanish (Mexico)',
  languageCode: 'es-mx',
  voiceName: 'Jose',
};

async function tellMe(text) {
  let url = "/text_to_speech";

  try {
    let response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        text: text,
        hl: currentLanguage['languageCode'],
        v: currentLanguage['voiceName'],
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    
    let data = await response.json();
    audioElement.src = data['audio'];
    audioElement.play();

    // console.log(data)

  } catch (error) {
    console.error('Error:', error);
  }
}


// Get text from text-input and call it
function getText() {
  focusInputBox();
  let message = textInput.textContent;
  if (message) {
    try {
      tellMe(message);
    } catch (error) {
      console.log(error);
    }
  }
}

// Get focus on input box
function focusInputBox() {
  textInput.focus();
}

// Update Language Btn Text
function updatelanguageBtn() {
  let displayText = `${currentLanguage['languageName']} / ${currentLanguage['voiceName']}`;
  langBtn.textContent = displayText;
}

// Set current language
function setCurrentLanguage(language, voice) {
  currentLanguage['languageName'] = language;
  currentLanguage['languageCode'] = languagesCodes[language];
  currentLanguage['voiceName'] = voice;

  console.log(currentLanguage['languageCode'], currentLanguage['voiceName']);
  updatelanguageBtn();
}

// Dropdown menu
function setupLaguageDropdown() {
  updatelanguageBtn();
  Object.keys(languagesCodes).forEach((language) => {
    voicesNames[language].forEach((voice) => {
      let displayText = `${language} / ${Object.keys(voice)[0]}`;
      let button = document.createElement('button');
      button.textContent = displayText;
      button.addEventListener('click', () => {
        setCurrentLanguage(language, Object.keys(voice)[0]);
      });
      langDropdown.appendChild(button);
    });
  });
}

function scrollTo(i, itemHeight) {
  langDropdown.scrollTop = i * itemHeight;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropdown() {
  focusInputBox();
  langBtn.classList.toggle('pressed');
  langDropdown.classList.toggle('show');
  Array.from(langDropdown.children).forEach((child, i) => {
    if (child.textContent.split('/ ')[1] === currentLanguage['voiceName']) {
      scrollTo(i + 1, 30);
    }
  });
}

// ----------------Event Listeners-----------------

// Paste only text
textInput.addEventListener('paste', function (e) {
  e.preventDefault();
  let text = '';
  if (e.clipboardData || e.originalEvent.clipboardData) {
    text = (e.originalEvent || e).clipboardData.getData('text/plain');
  } else if (window.clipboardData) {
    text = window.clipboardData.getData('Text');
  }
  if (document.queryCommandSupported('insertText')) {
    document.execCommand('insertText', false, text);
  } else {
    document.execCommand('paste', false, text);
  }

  textInput.scrollTop = textInput.scrollHeight;
});

// Button Function
sayItBtn.addEventListener('click', getText);

// Keyboard
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'Enter') {
    getText();
  }
});

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        langBtn.classList.toggle('pressed');
        focusInputBox();
      }
    }
  }
};

langBtn.addEventListener('click', showDropdown);

// On Load
setupLaguageDropdown();
