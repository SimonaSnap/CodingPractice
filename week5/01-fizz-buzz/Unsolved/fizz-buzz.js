// Write code to loop through the array of numbers
// At each iteration, if a number is evenly divisible by 3 print "Fizz"
// If a number is evenly divisible by 5 print "Buzz"
// If a number is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a number is not divisible by 3 or 5, print the number

var fizzBuzz = function (arr)
{
    for (let i = arr[0]; i < arr.length; i++)
    {
        if (i % 5 === 0 && i % 3 === 0)
        {
            arr[i] = "FizzBuzz"
        } else if (i % 5 === 0)
        {
            arr[i] = "Buzz";
        } else if (i % 3 === 0)
        {
            arr[i] = "Fizz";
        }
        console.log(arr);
    }
};
