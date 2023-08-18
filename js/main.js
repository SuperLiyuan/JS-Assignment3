const url = 'https://superliyuan.github.io/JS-Assignment3-API/fruits.json';

let getJson = () => fetch(url).then((response) => response.json())

let tbody = document.getElementById("list")

getJson().then(res => {
    for(let index in res){
        let element = res[index]
        let li = document.createElement("tr");
        Object.keys(element).forEach(key=>{
            let subLi = document.createElement("td");
            if(key == "img"){
                let img = document.createElement("img");
                img.setAttribute("src", element[key]);
                subLi.appendChild(img);

            }else{
                subLi.innerText = element[key];

            }
            li.appendChild(subLi);

        })
        tbody.appendChild(li)
    }
})