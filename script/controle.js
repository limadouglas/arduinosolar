var cont=0;
var config;
var refRaiz;
var mainApp;

var starCountRef;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function iniciarProcessos() {
    config = {
        apiKey: "AIzaSyAk1_Id4Z7Z4-_gszdUW230qUtLzq8qcdQ",
        authDomain: "solar-d6274.firebaseapp.com",
        databaseURL: "https://solar-d6274.firebaseio.com",
        storageBucket: "solar-d6274.appspot.com",
        messagingSenderId: "966387592758"
    };

    mainApp = firebase.initializeApp(config);
    refRaiz = firebase.database().ref();
    starCountRef = firebase.database().ref("/log");
    
    starCountRef.once('value').then(function (snapshot) {
        snapshot.forEach(function (data) {
            addTabela(data.key, data.val());
        });
    });
    
    atualizarCont();
}


$(document).ready(function () {
    iniciarProcessos(); 
});

function atualizarCont() {
    var refRaiz = firebase.database().ref();
    refRaiz.on('value', function (snapshot) {
        if (snapshot.child("contador").val() == null) {
            cont = 0;
            firebase.database().ref().update({
                'contador': [cont]
            });
        } else
            cont = parseInt(snapshot.child("contador").val());
    });
}

function addTabela(chave, valor) {
    var tabela = $('#tabela_log');
    var novaLinha = $("<tr>");
    var coluna = "";
    coluna += '<td>' + chave + '</td>';
    coluna += '<td>' + valor + '</td>';
    novaLinha.append(coluna);
    tabela.append(novaLinha);
}


function criarJson(msg) {
    atualizarCont();
    console.log(cont);
    firebase.database().ref("log/").update({
                    [++cont]: msg
    });

    firebase.database().ref().update({
        'contador': [++cont]
    });
    
    starCountRef = firebase.database().ref("/log");
    starCountRef.once('value').then(function (snapshot) {
        snapshot.forEach(function (data) {
            if (cont == data.key)
                addTabela(data.key, data.val());
        });
    });
}
