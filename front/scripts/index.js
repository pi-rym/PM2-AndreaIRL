tempData.map((item)=>{
        const genero=item.genre
const html = `<div class="col-md-4">
                <div class="card mb-3">
                <img src="${item.poster}" class="card-img-top h-60" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${genero.join()}</p>
                    <p class="card-text"><small class="text-muted">director ${item.director}</small></p>
                </div>
                </div>
            </div>`
    console.log(html)
    document.getElementById('pelis').innerHTML+=html
})
console.log(tempData);
