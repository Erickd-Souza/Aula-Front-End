function mover(){
    let imagem = document.getElementById("aparecer");
    if(imagem.style.display === 'none'){
        document.getElementById('aparecer').style.display = 'block';
        document.getElementById('sumir').style.display = 'none'; 
    }else{
        document.getElementById('aparecer').style.display = 'none';
        document.getElementById('sumir').style.display = 'block';
    }
}