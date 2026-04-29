
export function displayContent(arr, ul){
    ul.innerHTML = "";
    arr.map((item)=>{
        let li = document.createElement("li");
        li.innerText = item.name;
        ul.append(li)
    })
}