function divideNumbers(value1,value2)
{
   try{
   let result=value1/value2;
    console.log("After Division Result:",result);
   }
   catch(error)
   {
    console.log("Error occured",error.message);
   }
}
divideNumbers(12,5);
divideNumbers(54,0);