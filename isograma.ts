// isograma: no tiene letras repetidas
// true si es isograma o false si no es

const esIsograma = (word: string): boolean => {
  if (word === "") return true;

  const letters: string[] = [];
  const validWord = word.toLowerCase().trim();

  if (word.split(" ").length > 1) {
    return false;
  }

  for (let i = 0; i < validWord.length; i++) {
    const letter = validWord[i]!;
    const includesLetter = letters.includes(letter);

    if (includesLetter) {
      return false;
    } else {
      letters.push(letter);
    }
  }

  return true;
};

const murcielago = esIsograma("murcielago");
const reto = esIsograma("reto");
const casa = esIsograma("casa");
const perro = esIsograma("PeRro");
const gato = esIsograma("GaTo");
const avion = esIsograma("avion");
const sol = esIsograma("sol");
const luna = esIsograma("luna");
const elefante = esIsograma("elefante");
const bicicleta = esIsograma("bicicleta");
const isograma = esIsograma("isograma");
const repetido = esIsograma("repetido");
const espacio = esIsograma("es pa cio");

console.table({ murcielago, reto, casa, perro, gato, avion, sol, luna, elefante, bicicleta, isograma, repetido, espacio });
