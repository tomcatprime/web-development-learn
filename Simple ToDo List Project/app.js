let input = prompt('what would you like to do?')
//variable const as it is most commons with arrays
const  todos = ['Collect Eggs', 'Clean car']
while ( input !== 'quit'&& input !== 'q'){
    if(input === 'list'){
        console.log('***************')
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***************')
    } else if (input === 'new'){
        const newTodo = prompt('ok, what is the new todo');
        todos.push(newTodo)
        console.log(`${newTodo} added to the list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('ok, enter an index to delete:'));
        if(!Number.isNaN(index)){
            const deleted = todos.splice(index,1);
            console.log(`OK, deleted ${deleted[0]}`);  
        } else {
            console.log('Invalid Index');
        }

    }
    input = prompt('what would you like to do?')
}
console.log('OK, QUIT THE APP')