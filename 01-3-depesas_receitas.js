const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

for (const usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas);

    usuario.saldo = saldo;

    if(saldo > 0) {
      console.log(`${usuario.nome} possui saldo POSITIVO de ${usuario.saldo.toFixed(2)}`);
    } else {
      console.log(`${usuario.nome} possui saldo NEGATIVO de ${usuario.saldo.toFixed(2)}`);
    }
}

function calculaSaldo(receitas, despesas) {
  const totalReceitas = somaNumeros(receitas);
  const totalDespesas = somaNumeros(despesas);

  const saldo = totalReceitas - totalDespesas;

  return saldo;
}

function somaNumeros(numeros) {
  let total = 0;
  for (const numero of numeros) {
     total += numero;
  }
  return total;
}

