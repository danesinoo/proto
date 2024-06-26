import {question} from './global_variable';
import {Question} from './question';

export class Match {
  q: Question;
  g: string[][]; // groups

  public constructor(n: number) {
    this.q = question[n];
    this.g = [];
    for (let i = 0; i < this.q.a.length; i++) {
      this.g.push([]);
    }
  }

  public answer(user: string, ans: number) { this.g[ans].push(user); }

  public match(ps: string[]): {a: string, b: string}[] {
    let result: {a: string, b: string}[] = [];

    let us = this.g.reduce((a, b) => a.concat(b), []);

    for (let u of us) {
      if (ps.includes(u)) {
        ps.splice(ps.indexOf(u), 1);
      }
    }

    // here I could take off my number, to avoid someone else not to match
    for (let q of this.g) {
      while (q.length > 1) {
        result.push({a : popRandomElement(q), b : popRandomElement(q)});
      }
    }

    let q = this.g.reduce((a, b) => a.concat(b), []);
    q = q.concat(ps);
    while (q.length > 1) {
      result.push({a : popRandomElement(q), b : popRandomElement(q)});
    }

    return result;
  }
}

export function popRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const poppedElement = arr.splice(randomIndex, 1)[0];
  return poppedElement;
}
