function bubble(data)
{ 
    for(var i = 0; i < data.length-1; i++)
    {
        var swap = true;
        for(var j = 1; j < data.length; j++)
        {
            if(data[j-1] > data[j])
            {
                var temp = data[j];
                data[j] = data[j-1];
                data[j-1] = temp;
                swap = false;
            }
        }
        if(swap)
        {
            break;
        }
    }
    return data;
}

console.log(bubble([101,100,99,98,97]));