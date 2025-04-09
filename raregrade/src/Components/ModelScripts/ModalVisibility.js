
export default function ModoalVisibility()
{
    try{
       var v = document.getElementById("Model-Show")

       if(v.hidden = true)
        {
        v.hidden = false;
       

        }

        else{
            v.hidden = true;
        }
        
    }
    catch{
        alert("Something Went wrong");
    }
    
}                                            