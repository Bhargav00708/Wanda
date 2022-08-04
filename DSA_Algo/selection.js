function selection(data)
{
    for(var i = 0; i < data.length-1; i++)
    {
        var min = data[i];
        var index = i;
        for(var j = i+1; j <= data.length -1; j++)
        {
            if(min > data[j])
            {
                min = data[j];
                index = j;
            }
        }
        var temp = data[i];
        data[index] = temp;
        data[i] = min;
    }
    return data;
}

console.log(selection([20,10,30,90,2,4,6,7]));