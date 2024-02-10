function higherOrderFunction(name,callback)

    {
       callback(name);
    

    }
function assignmentTask(some)
{
    console.log(some);
}

higherOrderFunction("Prem",assignmentTask);