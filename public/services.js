const container = document.querySelector('.services_con')
const results = document.querySelector('.results')
const options = document.querySelector('select')
  
async function getData(){
  const response = await fetch('/api/service')
  const data = await response.json()
  console.log(data)
  data.forEach(s => {
      const li = document.createElement('option')
      li.value = s
      li.innerText = s
      container.appendChild(li)
  });
}
function sendData(){
  let data = {search:options.value}
  console.log(data)
  fetch('/api/service', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if(data.length != 0){
        results.innerHTML=" "
        data.forEach(s => {
          const li = document.createElement('a')
          li.innerText = s.Name
          li.href = s.Name
          results.appendChild(li)
          results.appendChild(document.createElement('br'))
      });
      }else{
        results.innerHTML=" "
        const li = document.createElement('h3')
        li.innerText = "NOT Found 😢 😢 😢 "
        results.appendChild(li)
      }
    })
}
getData()

