var peso,altura,imc,resultado;



function calcular(event){  //event dar um atualizar na página
event.preventDefault();

peso = document.getElementById('peso').value;
altura = document.getElementById('altura').value;

imc=peso/(altura * altura);

    if(imc <= 19,1){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> cuidado você está levemente abaixo do peso!!!';
    }else if (imc > 19,1 && imc <= 25,8){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está com o peso ideal';

    } else if (imc > 25,8 && imc <= 27,3){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está um pouco acima do peso';

    } else if (imc > 27,4 && imc <= 32,3){
        resultado=document.getElementById('resultado');
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso';

    }else if (imc >=32,4){
    resultado=document.getElementById('resultado');
    resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Obesidade';

}




}