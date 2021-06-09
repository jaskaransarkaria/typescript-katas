import test, { ExecutionContext } from 'ava';
import fizzBuzz from './index';

test('GIVEN a fizzBuzz function WHEN the function returns THEN it should return true', (t: ExecutionContext) => {
    t.is(fizzBuzz(), true);
    // t.pass();
});
