const images = ["./img/img_Cortes/0.jpg","./img/img_Cortes/1.jpg","./img/img_Cortes/2.jpg","./img/img_Cortes/3.jpg","./img/img_Cortes/4.jpg","./img/img_Cortes/5.jpg","./img/img_Cortes/6.jpg","./img/img_Cortes/7.jpg","./img/img_Cortes/8.jpg","./img/img_Cortes/9.jpg","./img/img_Cortes/10.jpg","./img/img_Cortes/11.jpg","./img/img_Cortes/12.jpeg","./img/img_Cortes/13.jpg"];  
index = 0;
const changeImagen = () =>  {
    document.getElementById("img1").src = images[index];
    if (index == images.length-1) {
        index = 0;
    }else{
        index++;
    }
    setTimeout(changeImagen, 2150);
}
window.onload = changeImagen();