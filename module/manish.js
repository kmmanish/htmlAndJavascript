//Manish's function

export function findingMaxNumber(list)
{
    length = list.length
    let max = 0;
    let position = 0;
    for (let i = 0; i <= length-1; i++)
    {
        if (list[i] > max)
        {
            max = list[i];
            position = i;
        }
    }

    return max;
}
