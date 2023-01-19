
// .then (response) = response.json()
// .then (data) = console.log((data));

async function getData() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    data.map((person)=>{
       let p = document.createElement('p');
       p.innerText = person.id;
       document.body.appendChild(p);
       let k = document.createElement('p');
       k.innerText = person.title;
       document.body.appendChild(k);
       let f = document.createElement('p');
       f.innerText = person.completed;
       document.body.appendChild(f);

    })
    console.log(data)
}
