// Define the URL of the JSON data file
const url = 'https://superliyuan.github.io/JS-Assignment3-API/fruits.json';

// Define a function that fetches JSON data from the provided URL
let getJson = () => fetch(url).then((response) => response.json());

// Get a reference to the HTML element with the ID "list"
let tbody = document.getElementById("list");

// Fetch JSON data using the getJson function and process it
getJson().then(res => {
    // Iterate through each element in the JSON response
    for (let index in res) {
        let element = res[index];
        
        // Create a new table row (tr) element for each JSON element
        let li = document.createElement("tr");
        
        // Iterate through each key in the current JSON element
        Object.keys(element).forEach(key => {
            let subLi = document.createElement("td"); // Create a new table data (td) element
            
            if (key == "img") { // If the key is "img"
                let img = document.createElement("img"); // Create an image element
                img.setAttribute("src", element[key]); // Set the "src" attribute of the image
                subLi.appendChild(img); // Append the image to the td element

            } else { // If the key is not "img"
                subLi.innerText = element[key]; // Set the text content of the td element

            }
            li.appendChild(subLi); // Append the td element to the tr element
        });
        
        tbody.appendChild(li); // Append the tr element to the HTML tbody element
    }
});
