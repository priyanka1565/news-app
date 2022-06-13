
async function getData(){
    let inp = document.getElementById("search").value;
    let url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${inp}`
    let res = await fetch(url)
    let data = await res.json();
    let a = data.articles
    showData(a)
    console.log(a)
}


// append data

function showData(a){
   a.forEach(function(el){
    let maindiv = document.getElementById("news_result");
    let div = document.createElement("div");
    maindiv.appendChild(div);
   
  

    

   let img = document.createElement("img");
   img.src = el.urlToImage;
    
   let t = document.createElement("h3");
   t.innerHTML = el.title;
   
   let h1 = document.createElement("h1");
    h1.innerHTML = el.author;
   

    div.append(img,t,h1)

   })
}

