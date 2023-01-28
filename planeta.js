var botao = document.getElementById("botaozinho");

botao.addEventListener("click", calculos);
botao.addEventListener("click", bajar)

var apagar = document.getElementById("reset");
apagar.addEventListener("click", resetar);

function bajar() {
    window.scrollTo({
        top: 600,
        behavior: "smooth"
    })
};

function calculos() {
    var g_Terra = 9.8;
    var peso_usu = document.getElementById("pesando").value;
    console.log(peso_usu);

/*     if(peso_usu > 200) {
        alert('Ei, poe um peso real');
        document.getElementById("pesando").value = 0;
        for(let i = 1; i <= 8; i++){
            document.getElementById(i).value = 0;
        }
    } */

    for(let i = 1; i <= 8; i++) {
        var peso_Final = 0;
        planetas = document.getElementById(i);

        switch(i){
            case 1: // Mercurio
                peso_Final = peso_usu * 3.7 / g_Terra;
                planetas.value = `${peso_Final.toFixed(2)} Kg`
                console.log(peso_Final)
            break;
            case 2: // Venus
                peso_Final = peso_usu * 8.87 / g_Terra;
                planetas.value = `${peso_Final.toFixed(2)} Kg`
                console.log(peso_Final);
            break;
            case 3: // Marte
                peso_Final = peso_usu * 3.72 / g_Terra;
                planetas.value = `${peso_Final.toFixed(2)} Kg`
                console.log(peso_Final);
            break;
            case 4: // Jupiter
                peso_Final = peso_usu * 26.79 / g_Terra;
                planetas.value = `${peso_Final.toFixed(2)} Kg`
                console.log(peso_Final);
            break;
            case 5: // Saturno
                peso_Final = peso_usu * 10.44 / g_Terra;
                planetas.value = `${peso_Final.toFixed(2)} Kg`
                console.log(peso_Final);
            break;
            case 6: // Urano
                peso_Final = peso_usu * 8.69 / g_Terra;
                planetas.value = `${peso_Final.toFixed(2)} Kg`
                console.log(peso_Final);
            break;
            case 7: // Netuno
                peso_Final = peso_usu * 11.15 / g_Terra;
                planetas.value = `${peso_Final.toFixed(2)} Kg`
                console.log(peso_Final);
            break;
            case 8: // Plutao
                peso_Final = peso_usu * 0.62 / g_Terra;
                planetas.value = `${peso_Final.toFixed(2)} Kg`
                console.log(peso_Final);
            break;
        }
    }
}

function resetar() {
    document.getElementById("pesando").value = 0;
    
    for(let i = 1; i <= 8; i++){
        document.getElementById(i).value = 0;
    }
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

var btn = document.getElementById("back_Top");
btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});