

const calculate = document.getElementById('calcular');


function imc() {
    const name = document.getElementById('nome').value;
    const height = document.getElementById('altura').value;
    const weight = document.getElementById('peso').value;
    const result = document.getElementById('resultado');

    if (name !== '' && height !== '' && weight !== '') {

        const imcValue = ( weight / (height * height) ).toFixed(1);

        let classification = " ";

        if (imcValue < 18.5){
            classification = "abaixo do peso"
        }else if (imcValue < 24.9){
            classification = "com o peso normal"
        }else if (imcValue <29.9){
            classification = "acima do peso"
        }else if (imcValue <34.9){
            classification = "com obesidade 1"
        }else if (imcValue <39.9){
            classification = "com obesidade 2"
        }else if (imcValue >40){
            classification = "com obesidade 3"
        }

        result.textContent =  `${name} seu IMC é ${imcValue} e você está ${classification}`;

    }else{
        result.textContent = 'Preencha todos os campos !!!'
    }
    
    
}

calculate.addEventListener('click', imc);
