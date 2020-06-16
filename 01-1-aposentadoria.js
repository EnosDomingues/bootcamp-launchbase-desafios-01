const nome = "Hunberto";
const sexo = "M";
const idade = 48;
const contribuicao = 33;

// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;

if (contribuicao >= 30) {
  if (sexo === 'F') {
    if (idade + contribuicao >= 85) {
      console.log(`${nome}, você pode se aposentar!`);
    } else {
      console.log(`${nome}, você ainda não pode se aposentar!`);
    }
  } else if (sexo === 'M') {
    if (idade + contribuicao >= 95) {
      console.log(`${nome}, você pode se aposentar!`);
    } else {
      console.log(`${nome}, você ainda não pode se aposentar!`);
    }
  }
} else {
  console.log('O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos.')
}