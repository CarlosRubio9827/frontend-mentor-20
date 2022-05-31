 function getData(){
    var bar = document.querySelector('.container-bottom-graph-bar');
    
    
    var arr = [].slice.call(bar.children);
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {

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


getData()