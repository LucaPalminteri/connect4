// Hash Table
// A data structure that stores key-value pairs using a hash function to compute
// an index into an internal array (buckets)
// in js there is already an implementation of hash table with the object Map

// array of prime numbers, helps distrubute keys more uniformly across buckets when
// using a modulus % operations in the hash function
// prime numbers reduce the chance that patterns in the input keys cause collisions
const SIZE_BUCKETS = [53, 97, 193, 389, 769, 1543, 3079, 6151, 12289];

class HashTable {
  constructor(size = SIZE_BUCKETS[0]) {
    this.buckets = new Array(size);
    this.size = size;
  }

  _hash(key) {
    let total = 0;
    const PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.size;
    }

    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      const [k, v] = this.buckets[index][i];
      if (k === key) {
        this.buckets[index][i][1] = value;
        return;
      }
    }

    this.buckets[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      for (let [k, v] of bucket) {
        if (k === key) return v;
      }
    }

    return undefined;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  delete(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket.splice(i, 1);
          return true;
        }
      }
    }

    return false;
  }

  keys() {
    const keysArray = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [k, v] of bucket) {
          keysArray.push(k);
        }
      }
    }

    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let bucket of this.buckets) {
      if (bucket) {
        for (let [k, v] of bucket) {
          valuesArray.push(v);
        }
      }
    }

    return valuesArray;
  }
}

const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 30);
ht.set("occupation", "Engineer");

console.log(ht.get("name"));
console.log(ht.has("age"));
console.log(ht.keys());
console.log(ht.values());
ht.delete("age");
console.log(ht.has("age"));
