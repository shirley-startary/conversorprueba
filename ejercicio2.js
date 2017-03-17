function convertirCelsius(fahrenheit){
   var fahrenheit = document.getElementById("fahrenheit").value;
   //var celsius = document.getElementById("celsius");
   fahrenheit = parseInt(fahrenheit);
   var resultado=0;
   resultado = (fahrenheit-32)*5/9;
   document.getElementById("celsius").value=resultado;
   //celsius.value = resultado;
}

function convertirFahrenheit(celsius){
   var celsius = document.getElementById('celsius').value;
   //var fahrenheit = document.getElementById('fahrenheit');
   celsius = parseInt(celsius);
   var resultado=0;
   resultado = (celsius*9/5)+32;
   document.getElementById("fahrenheit").value = resultado;
   //fahrenheit.value = resultado;
}
