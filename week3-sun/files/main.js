const inputs= document.getElementsByTagName('input');

inputs.forEach(input=> {
    console.log(input);
})
let li;
console.log(inputs);
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(list => 
    // console.log(list)
    // let li;
    list.forEach(ele=> {
     li = document.createElement("div");
     li.innerHTML = `Task: ${ele.title}: 
     <br>Completed:${ele.completed}`;
     li.style.background='#f0f0f0';
     li.style.marginTop='10px';
     li.style.padding='5px';
     console.log(li);
     document.getElementById('todos').appendChild(li);
    })
    )