let expressionHistory=[];
let resultHistory=[];
let expression=[];
function digitfunction(num)
{  
    if(expression.length===0)
    {
    expression.push(num);
   document.getElementById("displayinput").innerText=expression;
   return;
     }
    else if(num==='/'||num==='*'||num==='-'||num==='+') {
        let c=expression[expression.length-1];
        if(c==='/'||c==='*'||c==='-'||c==='+')
        {
            alert("can't enter two operator contineously");
            return;
        }
        else {expression.push(num);
            document.getElementById("displayinput").innerText=arraytostring(expression);
              return;

        }
    }
    else {expression.push(num);
        document.getElementById("displayinput").innerText=arraytostring(expression);
        document.getElementById("displayoutput").innerText=eval(arraytostring(expression));
        return;
    }
}



function evaluation(){
   if(document.getElementById("displayoutput").innerText===''&&document.getElementById("displayinput").innerText==='')
   {
       return;
   }
   else if(document.getElementById("displayoutput").innerText==='')
   {return;}
   else{
    expressionHistory.push(document.getElementById("displayinput").innerText);expression=[];

    resultHistory.push(document.getElementById("displayoutput").innerText);

   for(let i=0;i<resultHistory[resultHistory.length-1].length;i++)
   {
   expression.push(resultHistory[resultHistory.length-1].charAt(i));
   }

    
    document.getElementById("displayinput").innerText= arraytostring(expression);
    document.getElementById("displayoutput").innerText='';


   }
 
}



function clearbutton(){
    if(expression.length===0)
    {
        alert("empty");
        document.getElementById("displayoutput").innerText='';
        return;
    }
    else{
    expression.pop();
    document.getElementById("displayinput").innerText= arraytostring(expression);
    if(expression[expression.length-1]>=0&&expression[expression.length-1]<=9)
    {document.getElementById("displayoutput").innerText=eval(arraytostring(expression));}
   
    
    else {document.getElementById("displayoutput").innerText='';}
    }

}


function arraytostring(a)
{ let s='';
   for(let i=0;i<a.length;i++)
   s+=a[i];
  console.log(s);
  return s;


}




 function backtrack(){
    if(expressionHistory.length===0)
    {
        alert("NO History present");
        document.getElementById("displayinput").innerText='';
        document.getElementById("displayoutput").innerText='';
        return;
    }
  document.getElementById("displayinput").innerText=expressionHistory.pop();
  document.getElementById("displayoutput").innerText=resultHistory.pop();
 }

function clearallbutton(){ 
    while(expression.length!==0){
    expression.pop();}
    document.getElementById("displayinput").innerText='';
    document.getElementById("displayoutput").innerText='';
    while(expressionHistory.length!==0)
    {
        expressionHistory.pop();
        resultHistory.pop();
    }
}

  
 