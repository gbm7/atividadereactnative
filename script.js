var nota1,nota2,nota3,nota4,resultado, media;



function calcular(event){  //event dar um atualizar na página
    event.preventDefault();

    nota1= parseFloat(document.getElementById('nota1').value);
    nota2 = parseFloat(document.getElementById('nota2').value);
    nota3 = parseFloat(document.getElementById('nota3').value);
    nota4 = parseFloat(document.getElementById('nota4').value);

    media=(nota1+nota2+nota3+nota4)/4;

    if(media <24){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> Sua nota anual foi: ' + media.toFixed(2) + '<br/> Reprovado';
    }else if (media >=24 )
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu nota anual foi: ' + media.toFixed(2) + '<br/> Aprovado!!';


        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';
        document.getElementById('nota4').value = '';



}