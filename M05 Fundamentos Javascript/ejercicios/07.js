function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:


  var tipoDato = typeof valor;
  
  console.log(tipoDato);
  return tipoDato;

}


module.exports = esTipoDato;