
//edit your code 
fetch('http://localhost:3000/user?name=lyna',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

//edit your code 
fetch('http://localhost:3000/user',{
    method:'POST',
    body:{"name":"lyna"},
    headers: {
        'Content-Type': 'application/json',
    }
}).then(res => res.json())
.then(json => console.log(json))
.catch(err => console.log(err))