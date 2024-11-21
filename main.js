document.title = 'fachri judul'
const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('#btn2')

const defaultText = 'Klik gw 1'
btn1.textContent = defaultText


btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'blue'

btn2.style.border = 'rounded'
btn2.style.padding = '8px'
btn2.style.fontSize = '24px'
btn2.style.background = 'gray'

function overText() {
    const newText = document.createElement('p')
    newText.textContent = "pacri"
    body.append(newText)
}

function outText() {
    const allTexts = document.querySelectorAll('p'); // Pilih semua elemen <p>
    allTexts.forEach(text => {
        text.style.color = 'red'; // Ubah warna semua elemen <p>
    });
}

function clickButton() {
    btn1.style.background = 'red'
    const newText = document.createElement('p')
    newText.textContent = "HELLOOOO"
    body.append(newText)
}

function ubahText() {
    btn1.textContent = 'kan jadi keubah'
}

function oriText() {
    btn1.textContent = defaultText
}