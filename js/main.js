var bar = document.querySelector('.container-bottom-graph-bar');
var arr = [].slice.call(bar.children);
var elem = document.querySelectorAll('.container-bottom-graph-bar-item p');
 function getData(){
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        elem.forEach((i,j)=>{
            i.innerHTML = `$${data[j].amount}`;
            // i.addEventListener('mouseover',function(e){
            //     console.log(this.style.height)
            //     e.target.innerHTML = "sdada";
            //     e.target.style.display = "flex"; 
            // });
        })

        var max = getMax(data)
        data.forEach((i, j)=>{
            let fh = ((i.amount * 100) / parseInt(max)).toFixed(1);
            arr[j].style.height = `${fh.toString()}%`;
        })
        arr[2].style.backgroundColor = " hsl(186, 34%, 60%)";

    })
    .catch(error => {
        // alert("Error al obtener los datos para la gráfica");
    });

}

function getMax(arreg){
    var high = arreg[0].amount
    arreg.forEach(i=>{
        if(i.amount >= high){
            high = i.amount
        }
    })
    return high
}


function addEvent(){
    var elem = document.querySelectorAll('.container-bottom-graph-bar-item')
    // var x = [].slice.call(elem.children);
    // console.log(elem)
    elem.forEach(i=>{
        // console.log(i)
            i.addEventListener('mouseover',function(e){
                this.children[0].style.display = "flex";
                this.children[0].style.opacity = "1";
                // e.target.children = "sdada";
                // e.target.style.display = "flex"; 
                // console.log(this.style.height)
            });
            i.addEventListener('mouseout',function(e){
                this.children[0].style.display = "none";
                // e.target.children = "sdada";
                // e.target.style.display = "flex"; 
                // console.log(this.style.height)
            });
        
    })
}

// const example = ()=>{
//     console.log(this)
// }
addEvent();

getData()