document.addEventListener('DOMContentLoaded',()=>{
    function counter(id,start,end,duration){
        let obj =document.getElementById(id);
        console.log(obj)
        current = start;
        range = end - start;
        increment = end > start;
        step = Math.abs(Math.floor(duration / range)),
     intervalId = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(intervalId)
            }
        },step); 
    } 
    counter('count1',0,1287,3000)
    
}

)