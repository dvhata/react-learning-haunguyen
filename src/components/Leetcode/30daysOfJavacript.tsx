import React from "react";

// https://leetcode.com/studyplan/30-days-of-javascript/
export default function ThirtyDaysOfJavacript() {
  function createCounter(n: number): () => number {
    return function () {
      return n++;
    };
  }

  /**
   * const counter = createCounter(10)
   * counter() // 10
   * counter() // 11
   * counter() // 12
   */

  type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
  };

  function expect(val: any): ToBeOrNotToBe {
    return {
      toBe: (val2) => {
        if (val !== val2) throw new Error("Not Equal");
        else return true;
      },
      notToBe: (val2) => {
        if (val === val2) throw new Error("Equal");
        else return true;
      },
    };
  }

  /**
   * expect(5).toBe(5); // true
   * expect(5).notToBe(5); // throws "Equal"
   */

  type Counter = {
    increment: () => number;
    decrement: () => number;
    reset: () => number;
  };

  function createCounter2(init: number): Counter {
    let currentCount = init;
    let result: any = {};
    result.increment = () =>
      ++currentCount; /* currentCount = currentCount + 1  */
    result.decrement = () => --currentCount;
    result.reset = () => (currentCount = init);
    return result;
  }

  /**
   * const counter = createCounter(5)
   * counter.increment(); // 6
   * counter.reset(); // 5
   * counter.decrement(); // 4
   */

  function arrayTransform(
    arr: number[],
    fn: (n: number, i: number) => number
  ): number[] {
    let newArrat: number[] = [];
    newArrat = arr?.map((item: number, index: number) => {
      return fn(item, index);
    });
    return newArrat;
  }

  type Fn = (n: number, i: number) => any;
  function filter(arr: number[], fn: Fn): number[] {
    let newArray: any[] = [];
    arr.forEach((item, index) => {
      if (fn(item, index)) newArray.push(item);
    });
    return newArray;
  }

  type Fn2 = (accum: number, curr: number) => number;
  function reduce(nums: number[], fn: Fn2, init: number): number {
    let sum: number = init;
    nums?.forEach((item) => {
      sum = fn(sum, item);
    });
    return sum;
  }

  type F = (x: number) => number;

  function compose(functions: F[]): F {
    return function (x) {
      let result: number = x;
      let count = functions.length - 1;
      while (count >= 0) {
        result = functions[count](result);
        count--;
      }
      return result;
    };
  }

  const fn = compose([(x) => x + 1, (x) => 2 * x]);
  fn(4); // 9

  return <div>30DaysOfJS</div>;
}
