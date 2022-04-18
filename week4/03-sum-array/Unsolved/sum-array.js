// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr)
{
    var sum = 0;

    for (let i = 0; i < arr.length; i++)
    {
        var number = arr[i];
        sum += number;
    }

    return sum;
};
