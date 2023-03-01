

fetch('https://api.github.com/users/LukasDniel')

.then (data => { return data.json();})
.then(get => {console.log(get);});
