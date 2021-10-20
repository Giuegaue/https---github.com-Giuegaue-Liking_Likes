function like(id){
    var element = document.querySelector(id)
    console.log(element)
    var count = parseInt(element.innerHTML);
    element.innerHTML = count + 1;
}