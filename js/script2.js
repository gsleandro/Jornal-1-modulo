setInterval(function horas() {
  var horas = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();

  function zero(x) {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  }

  minuto = zero(minutes);
  segundo = zero(seconds);

  document.getElementById("horas").innerHTML =
    "Horario De Brasilia <br> " + horas + " : " + minuto + " : " + segundo;
}, 1000);

var isFalse = NaN;

function clicar() {
  if (isFalse == NaN) {
    isFalse = false;
    console.log(isFalse);
  } else if (isFalse == false) {
    document.getElementById("clickX").style.display = "Block";
    document.getElementById("Menu").style.display = "none";
    isFalse = true;
    console.log(isFalse);
  } else {
    document.getElementById("clickX").style.display = "none";
    document.getElementById("Menu").style.display = "block";
    isFalse = false;
    console.log(isFalse);
  }
}

$(function () {
  var availableTags = [
    "Cientistas usam cogumelos para fazer chips biodegradáveis",
    "polêmicas por trás do Koo",
    "O brasileiro que pretende criar...",
    "Usuários idosos no Instagram",
    "Hackers russos causaram maioria...",
    "Nova radioterapia é promissora",
    "Os cientistas que alcançaram a temperatura",
    "O que nos deixa tão viciados no TikTok, segundo a Ciência",
    "Twitter anuncia botão 'editar'",
    "Elon Musk conclui compra do Twitter por US$ 44 bi",
    "WhatsApp diz que nenhum governo...",
    "Twitter teve um aumento de 1,6 milhão",
    "Fiat Pulse Abarth vende metade da produção para 2022",
    "Notion lança recurso de inteligência artificial que escreve",
    "Existem encontros memoráveis nos aplicativos de namoro?",
    "Black Friday: Roku Express transforma qualquer TV em Smart TV por menos de 200",
    "Perseverance explora leito rochoso em Marte onde busca por sinais de vida",
    "Artemis 1: decolagem do megafoguete lunar danifica plataforma de lançamento da NASA",
    "Vai criar um site? Design e alinhamento visual são importantíssimos",
  ];
  $("#search").autocomplete({
    source: availableTags,
  });
});

var input = document.getElementById("search");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    var input = document.getElementById("search").value;
    switch (input) {
      case "Cientistas usam cogumelos para fazer chips biodegradáveis":
        window.location.href("./notícias/12/Page.html");
        break;
    }
  }
});
