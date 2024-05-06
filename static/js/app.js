var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var temp_max = document.querySelector('.temp_max');
var temp_min = document.querySelector('.temp_min');
var umidità = document.querySelector('.umidità');
var velo_vento = document.querySelector('.velo_vento');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374&units=metric')
.then(response => response.json())
.then(data => {
  console.log(data)
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var tempmaxValue = data['main']['temp_max'];
  var tempminValue = data['main']['temp_min'];
  var umidiValue = data['main']['humidity'];
  var velo_ventoValue = data['wind']['speed'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Tempo - "+tempValue;
  temp_max.innerHTML = "Temperatura Max -  "+tempmaxValue;
  temp_min.innerHTML = "Temperatura Min -  "+tempminValue;
  umidità.innerHTML = "Umidità - "+umidiValue+'%';
  velo_vento.innerHTML = "Velocità vento -  "+velo_ventoValue;
  input.value ="";

})

.catch(err => alert("Nome della città inesistente"));
})