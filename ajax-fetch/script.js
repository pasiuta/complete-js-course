const requestURL='https://jsonplaceholder.typicode.com/users'
const xhr= new XMLHttpRequest()
xhr.open('GET',requestURL);
xhr.onload =()=>{
    console.log(JSON.parse(xhr.response));
}
xhr.send()