/**
 * Função bonAppetit
 * @param bill - Matriz de inteiros que representa o valor de cada conta
 * @param k - Um inteiro que representa o índice que Anna não comeu
 * @param b - A quantia de dinheiro que Anna contribuiu para a conta
 * @returns "Bon Appetit" ou valor do reembolso para Anna.
 */

function bonAppetit(bill: number[], k: number, b: number): void {
  const billAnna = (bill.reduce((a, b) => a + b, 0) - bill[k]) / 2;
  billAnna === b ? console.log("Bon Appetit") : console.log(b - billAnna);
}

// test 0
bonAppetit([2, 4, 6], 2, 3); // 'Bon Appetit'
// test 1
bonAppetit([3, 10, 2, 9], 1, 7); // 'Bon Appetit'
// test 2
bonAppetit([5, 7, 6, 3, 3], 2, 12); // 3
// test 3
bonAppetit([2, 2, 3, 4, 5], 0, 8); // 1
