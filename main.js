let root = document.getElementById('root');
let img = document.createElement('img');
img.setAttribute('src','img/team-01.png');
img.style.cssText = 'width: 400px; height: 400px; ';
let div = document.createElement('div');
div.innerHTML = '<h1>this is a slider</h1>';
div.style.cssText = 'border: 2px solid blue;width: 400px;background-color: cyan;'
root.appendChild(img);
root.appendChild(div);
let arr = ['img/team-01.png','img/team-02.png','img/team-03.png','img/team-04.png','img/team-05.png'];

let i = 0;
changPic=()=>{
    i++;
    console.log(i)
    img.src = arr[i];
    if( i === arr.length - 1){
        i = 0
    }
};
setInterval(changPic,1000);


