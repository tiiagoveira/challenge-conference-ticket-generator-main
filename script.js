let divImage = document.querySelector('.upload');
let inputFile = document.querySelector('#uploadImage');
let image = document.querySelector('#iup');
let but = document.querySelector('#imageContainer');
let inputRemove = document.querySelector('#rpos');
let inputChange = document.querySelector('#cpos');
let inputGenerate = document.querySelector('#btt')
let erroImg = document.querySelector('#orientacao')
let erroImgVazio = document.querySelector('#erroVazio')
let erroImgTamanho = document.querySelector('#erroTamanho')

image.addEventListener('click', () => {
    inputFile.click();
});

inputFile.addEventListener('change', (e) => {
    let tgt = e.target;
    let files = tgt.files;

    let reader = new FileReader();
    reader.onload = () => {
        image.src = reader.result;
    }

    let size = e.target.files[0].size;

    if (size > 512000) {
        erroImg.style.display = 'none'
        erroImgTamanho.style.display = 'block'
        erroImgTamanho.style.color = 'hsl(7, 84%, 63%)';
    } else {
        reader.readAsDataURL(files[0])

        erroImgTamanho.style.display = 'none'
        erroImgVazio.style.display = 'none'
        erroImg.style.display = 'block'
        image.style.width = '70px'
        image.style.height = '70px'
        image.style.position = 'absolute'
        image.style.top = '12%'
        image.style.left = '42%'

        inputRemove.style.display = 'inline'
        inputChange.style.display = 'inline'
    }
});

inputRemove.addEventListener('click', () => {
    image.src = 'assets/images/icon-upload.svg';
    inputRemove.style.display = 'none';
    inputChange.style.display = 'none';
    image.style = 'none'
});

inputChange.addEventListener('click', () => {
    inputFile.click();
});


let campoNome = document.querySelector('#txtn')
let campoEmail = document.querySelector('#txte')
let campoGit = document.querySelector('#txtg')
let erroNome = document.querySelector('.erroNome')
let erroEmail = document.querySelector('.erroEmail')
let erroGit = document.querySelector('.erroGit')


inputGenerate.addEventListener('click', () => {
    if (image.src == window.location.origin + '/assets/images/icon-upload.svg') {
        erroImg.style.display = 'none'
        erroImgVazio.style.display = 'block'
        erroImgVazio.style.color = 'hsl(7, 84%, 63%)';
    } else if (campoNome.value.length == '') {
        campoNome.style.borderColor = 'hsl(7, 84%, 63%)';
        erroNome.style.display = 'block';
    } else if (campoEmail.value.length == '') {
        campoNome.style.borderColor = 'hsla(252, 6%, 83%, 0.356)';
        erroNome.style.display = 'none';
        campoEmail.style.borderColor = 'hsl(7, 84%, 63%)';
        erroEmail.style.display = 'block';
    } else if (campoGit.value.length == '') {
        campoNome.style.borderColor = 'hsla(252, 6%, 83%, 0.356)';
        campoEmail.style.borderColor = 'hsla(252, 6%, 83%, 0.356)';
        erroNome.style.display = 'none';
        erroEmail.style.display = 'none';
        campoGit.style.borderColor = 'hsl(7, 84%, 63%)';
        erroGit.style.display = 'block';
    } else {
        campoNome.style.borderColor = 'hsla(252, 6%, 83%, 0.356)';
        campoEmail.style.borderColor = 'hsla(252, 6%, 83%, 0.356)';
        campoGit.style.borderColor = 'hsla(252, 6%, 83%, 0.356)';
        erroNome.style.display = 'none';
        erroEmail.style.display = 'none';
        erroGit.style.display = 'none';
        window.location = 'ticket.html';
    }
    console.log('fora');
});

