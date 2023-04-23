let WordCount = document.getElementById("WordCount")
let text = prompt('xoxlagan jumlani kiriting : ')
let arr = []
arr = text.split(" ")
let summWord = 0  
for(let item in arr){
    if(arr[item] !== ""){
        summWord++
    }
}  
let KirtilganJumla = document.getElementById("KirtilganJumla")
KirtilganJumla.innerHTML = text
WordCount.innerHTML = summWord



