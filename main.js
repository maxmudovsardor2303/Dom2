function create(e){
    e.preventDefault();
    let input = document.getElementById("word").value.split(" ");
    let text = document.getElementById("text").value.split(" ");
    for(let i = 0; i < input.length; i++){
        if(text.includes(input[i])){
            alert("bor")
        }
        else{
            alert("yoq")
        }
    }
}