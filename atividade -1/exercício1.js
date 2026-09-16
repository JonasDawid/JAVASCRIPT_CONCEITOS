// UMA FABRICA DESEJA CALCULAR SUA PRODUCAP DIARIA O PROGRAMA DEVE SOLICITAR O PRODUTO, A QUANTIDADE PRODUZIDA 
// POR HORA E A QUANTIDADE DE HORAS TRABALHADAS.AO FINAL, DEVE CALCULAR E EXIBIR A PRODUÇÃO TOTAL.

const entrada = require ('readline sync');

const produto = entrada.question("qual o nome do produto:");
const qtdPorHora = entrada.questionInt(" Quantas pecas sao produzidas por hora?");
const horas = entrada.quetsionInt ("quantas horas trabalhadas ?");

const prodDiaria = qtdPorHora * horas

console.log("=== RELATORIO DE PRODUÇÃO ===");
console.log(`Produto: ${produto}`);
conosle.log(`Peças produzidas por hora: ${qtdPorHora}`);
console.log (`Horas trabalhadas: ${horas}`);