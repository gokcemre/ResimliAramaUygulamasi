

let url = "https://api.unsplash.com/search/photos?page=";
let apiKey = "an2GkhEcczLJSWcGbH9aO-qzMaEeZbzvCBIG8hy5oWY";



const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

// ! Arama Butonuna bastığımız zaman kodların çalışması için...

searchBtn.addEventListener("click", function(){
    let searchtext = searchInput.value;
    const query = `${url}&query=${searchtext}&client_id=${apiKey}`
    sendRequest(query)
    searchInput.value = "";
})

// ! Enter Tuşuna Basıldığında kodların çalışması için

searchInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let searchtext = searchInput.value;
        const query = `${url}&query=${searchtext}&client_id=${apiKey}`
    sendRequest(query)
    searchInput.value = "";

    }
})

function sendRequest(url){
    fetch(url)
    .then(function(response){
        return response .json()
    })

    .then(function(data){
        // console.log(data)
        const image = data.results;
        // console.log(image)
        image.forEach(function(resim){
            console.log(resim)
            ekranaYazdir(resim)
        })
    })
}


// ! APIDEN GELEN VERİLERİ EKRANA YAZDIRMAK İÇİN

const content = document.querySelector(".content");

function ekranaYazdir(image){
    const body = document.querySelector("body");

    const div = document.createElement("div");
    div.style.border = "2px solid green";
    div.style.width = "280px";
    div.style.height = "280px";
    div.id = image.id

    const img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "100%"
    img.src = image.urls.small;

    const deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.innerHTML = "SİL";

    body.appendChild(content);
    content.appendChild(div);
    div.appendChild(img);
    div.appendChild(deleteBtn);

}

// ! Temizle butonuna bastığımız zaman tüm içeriği silme


const clearBtn = document.querySelector("#clearBtn")

clearBtn.addEventListener("click", function(){
     content.innerHTML = "";

})

// ! Sİl butonuna basınca silme

content.addEventListener("click", function(e){
    if(e.target.id.includes("deleteBtn")){
        const parentDiv = e.target.parentElement;
        console.log(parentDiv)
        parentDiv.style.display = "none";
    }
})