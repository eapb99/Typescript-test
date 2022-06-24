//Escribe una función que invierta un número.

function reverse_a_number(n:number)
{   
    let m:string = n.toString();
	m = m + "";
	return +m.split("").reverse().join("");
}
    


//Escriba una función que acepte una cadena como parámetro y encuentre la palabra más larga dentro de la cadena
function palabraMasLarga(str:string)
{
  let array1: string[] = str.split(" ");
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
// Escriba una funcion que dado un input verifica si es un string
function esString(input:String) {
    if (Object.prototype.toString.call(input) === '[object String]')
      return true;
    else
      return false;   
};


// Escriba una función para obtener el número de días en un mes.

function getDays(year:number, month:number){
    return new Date(year, month, 0).getDate();

}


export {reverse_a_number,palabraMasLarga,esString,getDays}