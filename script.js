let divImage = document.querySelector('.upload');
let inputFile = document.querySelector('#uploadImage');
let image = document.querySelector('#iup');
let but = document.querySelector('#imageContainer');
let inputRemove = document.querySelector('#rpos');
let inputChange = document.querySelector('#cpos');
let inputGenerate = document.querySelector('#btt')

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
        console.log('dentro');
        erroImg.innerHTML = 'File too large. Please upload a photo under 500KB';
        erroImg.style.color = 'hsl(7, 84%, 63%)';
    } else {
        reader.readAsDataURL(files[0])

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
let erroImg = document.querySelector('#orientacao')

inputGenerate.addEventListener('click', () => {
    let size = image.FileReader();
    console.log(image.files.size);
    if (image.src == window.location.origin + '/assets/images/icon-upload.svg') {
        erroImg.innerHTML = 'select an image to continue';
        erroImg.style.color = 'hsl(7, 84%, 63%)';
    } else if (campoNome.value.length == '') {
        campoNome.style.borderColor = 'hsl(7, 84%, 63%)';
        erroNome.style.display = 'block'
    } else if (campoEmail.value.length == '') {
        campoEmail.style.borderColor = 'hsl(7, 84%, 63%)';
        erroEmail.style.display = 'block'

    } else if (campoGit.value.length == '') {
        campoGit.style.borderColor = 'hsl(7, 84%, 63%)';
        erroGit.style.display = 'block'
    }
    console.log('fora');
});

