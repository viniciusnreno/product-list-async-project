const createProduct = (data, i) => {
    // Create elements
    let item = document.createElement('li');
    let link = document.createElement('a');
    let list = document.getElementById('list');
    
    // Add attributes
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://www.princeofstreets.com.br/' + data[i].link);
    link.classList.add('btn');
    link.classList.add('btn-link');
    item.classList.add('list-group-item');
    item.classList.add('d-flex');
    item.classList.add('justify-content-between');
    item.classList.add('align-items-center');
    item.classList.add('bg-dark');
    item.classList.add('text-white-50');
    
    // Add content
    item.innerHTML = data[i].name + '<br>' + 'R$ ' + data[i].price ;
    link.innerHTML = 'Comprar';
    list.appendChild(item); 
    item.appendChild(link); 
}

const getList = async () => {
    const response = await fetch('products.json');
    if (response.status !== 200) {
        throw new Error('Cannot fetch the data');
    }
    const data = await response.json();
    return data;
}

getList()
    .then(data => {
        for(let i=0; i<data.length; i++){
            createProduct(data, i);
        }
    }).catch(err => {
        console.log(err.message);
});




