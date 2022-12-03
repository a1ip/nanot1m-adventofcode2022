// @ts-check

import { last, reduce } from "./itertools.js"

/**
 * @param {T} x
 * @returns {T}
 * @template T
 */
export function id(x) {
  return x
}

/**
 * @param {T[]} xs
 * @param {(arg: T) => string | number} fn
 *
 * @template T
 */
export function minBy(xs, fn) {
  return xs.reduce((a, b) => (fn(a) < fn(b) ? a : b))
}

/**
 * @param {T[]} xs
 * @param {(arg: T) => string | number} fn
 *
 * @template T
 */
export function maxBy(xs, fn) {
  return xs.reduce((a, b) => (fn(a) > fn(b) ? a : b))
}

/**
 * @param {number[]} xs
 */
export function min(xs) {
  return minBy(xs, id)
}

/**
 * @param {number[]} xs
 */
export function max(xs) {
  return maxBy(xs, id)
}

/**
 *
 * @param {T[]} xs
 * @param {T[][]} yss
 * @returns {T[][]}
 *
 * @template T
 */
export function zip(xs, ...yss) {
  const minLength = minBy(yss, (ys) => ys.length).length
  return xs.slice(0, minLength).map((val, i) =>
    yss.reduce(
      (a, arr) => {
        a.push(arr[i])
        return a
      },
      [val],
    ),
  )
}

/**
 * @param {string} input
 */
export function readLines(input) {
  return input.split("\n")
}

/**
 * @param {string} input
 */
export function readBlocks(input) {
  return input.split("\n\n")
}

/**
 *
 * @param {T} value
 * @template T
 */
export function functor(value) {
  return {
    /**
     *
     * @param {(arg: T) => R} fn
     * @template R
     */
    map(fn) {
      return functor(fn(value))
    },
    get() {
      return value
    },
  }
}

/**
 * @param {T[]} xs
 * @param {number} n
 * @template T
 */
export function rotate(xs, n) {
  return xs.slice(n).concat(xs.slice(0, n))
}

/**
 * @param {T[]} xs
 * @param {number} n
 * @template T
 */
export function at(xs, n) {
  if (n < 0) {
    n = xs.length + n
  }
  return xs[n]
}

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */
export function add(a, b) {
  return a + b
}

/**
 *
 * @param {T[]} xs
 * @param {number} i
 * @param {(arg: T) => T} fn
 *
 * @template T
 */
export function update(xs, i, fn) {
  return xs
    .slice(0, i)
    .concat(fn(xs[i]))
    .concat(xs.slice(i + 1))
}

/**
 * @param {number} x
 */
export function inc(x) {
  return x + 1
}

/**
 * @param {T} xs
 * @param {number} n
 * @returns {[T, T]}
 *
 * @template {{slice(start: number, end?: number): T}} T
 */
export function splitAt(xs, n) {
  return [xs.slice(0, n), xs.slice(n)]
}
