    const botoes = document.querySelectorAll("button");

    botoes.forEach(function(botao){
    botao.addEventListener("click", botaoClicado);
         
        function botaoClicado () {
            console.log("fui clicado");
            let texto = botao.querySelector("span");
            texto.textContent++;
    }
    });

    const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

    btnTemaEscuro.addEventListener("click", mudoTema);

    function mudoTema() {
        const corpoPagina = document.body;
        if (corpoPagina.classList.contains("tema-escuro")) {
            corpoPagina.classList.remove("tema-escuro");
        } else {
            corpoPagina.classList.add("tema-escuro");
        }
    }