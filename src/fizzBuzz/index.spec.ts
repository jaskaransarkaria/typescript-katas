import test, { ExecutionContext } from 'ava';
import processFizzBuzzArr from './index';

test(`GIVEN a processFizzBuzzArr function WHEN the argument is divisible by 3 THEN
  it should return "Fizz"`, (t: ExecutionContext) => {
    t.deepEqual(processFizzBuzzArr([3, 6, 9]), ['Fizz', 'Fizz', 'Fizz']);
});

test(`GIVEN a processFizzBuzzArr function WHEN the argument is divisible by 5 THEN 
  it should return "Buzz"`, (t: ExecutionContext) => {
    t.deepEqual(processFizzBuzzArr([5, 10, 20]), ['Buzz', 'Buzz', 'Buzz']);
});

test(`GIVEN a processFizzBuzzArr function WHEN the argument is divisible by 5 or
  5 THEN it should return "FizzBuzz"`, (t: ExecutionContext) => {
    t.deepEqual(processFizzBuzzArr([15, 30, 45]), ['FizzBuzz', 'FizzBuzz', 'FizzBuzz']);
});

test(`GIVEN a processFizzBuzzArr function WHEN the argument is NOT divisible by 3 or
  5 THEN it should return the number as a string`, (t: ExecutionContext) => {
    t.deepEqual(processFizzBuzzArr([1, 2, 4]), ['1', '2', '4']);
});

test(`GIVEN a processFizzBuzzArr function WHEN the argument is varied THEN return
  the correct value`, (t: ExecutionContext) => {
    t.deepEqual(processFizzBuzzArr([1, 3, 5, 2, 4, 150]), ['1', 'Fizz', 'Buzz', '2', '4', 'FizzBuzz']);
});

test(`GIVEN a processFizzBuzzArr function WHEN the argument is an empty array THEN
  return an empty array`, (t: ExecutionContext) => {
    t.deepEqual(processFizzBuzzArr([]), []);
});
