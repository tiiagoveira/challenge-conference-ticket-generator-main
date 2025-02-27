const inputFile = document.querySelector('#uploadImage')
const pictureImage = document.querySelector('.upload')

inputFile.addEventListener('change', function (e)){
    const inputTarget = e.target;
    const file = inputTarget.file[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function (e)){
            const readerTarget = e.target;

            const img = document.createElement('img')
            img.src = readerTarget.result;
            img.classList.add('upload')
            
            pictureImage.innerHTML = ''

            pictureImage.appendChild(img)
        }
    } else {
        pictureImage.innerHTML = 'Drag and drop or click to upload'
    }
}