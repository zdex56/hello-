function isvalid(test)
{

    let result = []

    let para = 
    {
        ')':'('
        ,']':'['
        ,'}':'{',
    };

    for (let i of test)
    {
        if (i === '(' || i === '[' || i === '{')
        {
            result.push(i)
        }

        else
        {
            if (result.length ===0)
            {
                return false 
            }
        

        let last  = result.pop();

        if (last!== para[i])
        {
            return false;
        }
    }


    }
    return result.length === 0;
}


console.log(isvalid("()"));      
console.log(isvalid("(]"));     
console.log(isvalid("()[]{}"));  