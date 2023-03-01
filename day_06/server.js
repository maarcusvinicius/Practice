
function myFunction(years) {
  const x = years;
  const d = new Date();
  age = d.getFullYear();
  
  acess = age - x
  
  if ( acess >= 18 ) {
    console.log("Acesso liberado :)");
  } else {
    console.log("Acesso negado :(");
  }

  return (
    "Ele(a) tem " + acess + " anos e nasceu em " + x
  )
}

console.log(myFunction(2003));