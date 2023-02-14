//your code here

let pageNumberHere = 1;
async function fetchData(){
    let url = `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`;
    const result = await fetch(url);
    const data = await result.json();

    let pageNumber = document.getElementById('page-number');
    pageNumber.innerHTML = "Page Number " + pageNumberHere;

    let ol = document.createElement('ol');

    data.map((issue) =>{
        ol.innerHTML += `<li>${issue.title}</li>`;
    })

    let dataDiv =  document.getElementById('issues');
    dataDiv.innerHTML = "";
    dataDiv.appendChild(ol);
}

fetchData();

function next(){
    pageNumberHere++;

    fetchData();
}

function prev(){

    if(pageNumberHere >= 2){
        pageNumberHere--;
        fetchData();
    }
    
    return;

}




