rotulo1.innerHTML = "ingrese el primer valor";
rotulo2.innerHTML = "ingrese el segundo valor";
rotulo3.innerHTML = "ingrese 1 para sumar o 2 para restar";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  let valor1: number = Number(dato1.value);
  let valor2: number = Number(dato2.value);
  let valor3: number = Number(dato3.value);

  function guion(n:number){
    let guion: string = "-";
    for (let i = 0; i <= n; i++) {
      guion = guion + "-";
    }
    console.log(guion);
  };

  if(valor3 == 1){
    guion(5);
    console.log("el resultado es : " valor1 + valor2);
    guion(5);
  }else if(valor3 == 2){
    guion(6);
    console.log("el resultado es :" valor1 - valor2);
    guion(6);
  }else{
    guion(2);
    console.log("fin del algoritmo");
    guion(2);
  }

});