const isFizzBuzz = (num: number): string => {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    }
    if (num % 3 === 0) {
        return 'Fizz';
    }
    if (num % 5 === 0) {
        return 'Buzz';
    }
    return num.toString();
};

const processFizzBuzzArr = (numArr: number[]): string[] => numArr.map((num) => isFizzBuzz(num));

export default processFizzBuzzArr;
