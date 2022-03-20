
     
    let NO_OF_CHARS = 256;
    function duplicate(str)
    {
        let count = new Array(NO_OF_CHARS);
        count.fill(0);
          
        for (let i = 0; i < str.length; i++)
            count[str[i].charCodeAt()]++;
             
        for (let i = 0; i < NO_OF_CHARS; i++)
        {
            if(count[i] > 1)
            {
                console.log(String.fromCharCode(i));
            }
        }    
    }
     
    let str = "vankayalanagaramya";
      duplicate(str);