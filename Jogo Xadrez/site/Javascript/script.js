function mover(){
    let imagem = document.getElementById("aparecer");
    if(imagem.style.display === 'none'){
        imagem.style.display = 'block';
        imagem.style.display = 'none';
    }else{
        imagem.style.display = 'none';
        imagem.style.display = 'block';
    }
}