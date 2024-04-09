//logueo a el array comp,leto
const matrixCharacters = {
    c1: "neo",
    c2: "trinity",
    c3: "morfeo",
}

console.log(matrixCharacters);

//escribo texto dinamico por javaScript
    //capturo donde quiero inyectar
    const main = document.querySelector(".content__main");
    //escribo los nombes llamando a los objetos
    main.innerHTML = matrixCharacters.c1 + "+" + matrixCharacters.c2 + "+" + matrixCharacters.c3;


//Añado el agente Smith
const smithAgent = matrixCharacters.push(".agenteSmith");
console.log(smithAgent);


//logueo a neo
console.log("neo"); 


//logueo a trinity+morfeo
console.log("morfeo+trinity"); 