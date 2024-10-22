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
