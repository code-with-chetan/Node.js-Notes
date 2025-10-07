import readline from "readline";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


const todo=[];

const showMenu=()=>{
    console.log("\n1.ADD task");
    console.log("2.View the task");
    console.log("3.Exit");
    rl.question("Enter your choice:",handleInput);
      
};


const handleInput=(input)=>{
    if(input==="1"){
        rl.question("Enter the task:-",(task)=>{
            todo.push(task);
            console.log("task added successfully!");         
            showMenu();
        })
        
    }

   else if(input==="2"){
    console.log("\nyour taks:");
    todo.forEach((items,index)=>{
        console.log(`${index+1}.${items}`);      
    })
    showMenu();
    
   }

    else if(input==="3"){
        rl.close();
    
    }

    else{
        console.log("sorry! Invalid Option.");
        showMenu();      
    }
}


showMenu();