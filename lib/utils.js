// import { seedrandom } from "seedrandom";

let rngClass = Math.random; // seedrandom

export function useRng(cls) {
  rngClass = cls;
}

export const mkrng = (seed) => new rngClass(seed);

export const rngIntRange = (rng, min, max) =>
  Math.floor(rng() * (max + 1 - min) + min);

export const genHex = (rng) =>
  Math.floor(rng() * 0xffff)
    .toString(16)
    .padStart(4, "0");

export const genUniqueHex = (prefix, rng, obj) => {
  let addr;
  do {
    addr = `${prefix}:${genHex(rng)}`;
  } while (addr in obj);
  return addr;
};

// Stolen from / inspired by Text Elite from Ian Bell
// www.iancgbell.clara.net/elite/text/
const pairs =
  "..LEXEGEZACEBISOUSESARMAINDIREA.ERATENBERALAVETIEDORQUANTEISRION";
const pairsCount = Math.floor(pairs.length / 2);
export function genName(rng) {
  let name = "";
  const rounds = 2 + Math.floor(rng() * 3);
  for (let round = 0; round < rounds; round++) {
    const idx = Math.floor(rng() * pairsCount) * 2;
    name += pairs.substring(idx, idx + 2);
  }
  name = name.replace(/\./g, "");
  return name.substring(0, 1) + name.substring(1).toLowerCase();
}

export const normalizeCount = (count) =>
  count < 0 ? 0 : count === true ? 1 : count === false ? 0 : count;

export function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

export function pickSome(rng, chance, arr) {
  return arr.filter(() => rng() < chance);
}

export function shuffled(rng, arr) {
  return [...arr].sort(() => rng() - 0.5);
}

export function distanceSq(x0, y0, x1 = 0, y1 = 0) {
  return Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2);
}

export function distance(x0, y0, x1 = 0, y1 = 0) {
  return Math.sqrt(distanceSq(x0, y0, x1, y1));
}
