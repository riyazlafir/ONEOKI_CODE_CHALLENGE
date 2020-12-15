/**
 *  This function fetches all todos from https://jsonplaceholder.typicode.com/todos
 *  and all users from https://jsonplaceholder.typicode.com/users
 *  The function returns how many todos each user has completed.
 *  Example: If user = [{ id: 1, username: 'Tom'}, { id: 2, username: 'Jerry'}]
 *  and todos = [{ id: 2, userId: 1, completed: true}]
 *  Then the function would output [{ username: 'Tom', completed: 0}, { username: 'Jerry', completed: 1}]
 */
const got = require('got');
function solution() {

    var userList;
    userList = (async () => {
        try {
            var responseArray = []
            var response = await got('https://jsonplaceholder.typicode.com/users');

            var user =JSON.parse(response.body);           
            responseArray.push(user);

            var responseTodoList = await got('https://jsonplaceholder.typicode.com/todos');
            responseArray.push(JSON.parse(responseTodoList.body));
            
            return responseArray;


        } catch (error) {
            console.log(error.response.body);
        }
    })();

    return userList.then(resp => {
        
        var user =resp[0]
        var todos = resp[1]
        
        var result = []
        for (const key in user) {
            if (user.hasOwnProperty(key)) {
                const element = user[key];
                var i = 0
                var userObject = {}
                for (const key2 in todos) {

                    if (todos.hasOwnProperty(key2)) {
                        const element2 = todos[key2];


                        if (element2.userId == element.id) {

                            if (element2.completed) {
                                i++

                            }

                        }

                    }

                }
                userObject.username = element.username
                userObject.completed = i
                
                result.push(userObject)

            }
        }

        
        //console.log("========" +JSON.stringify(result) + "============");
        return  result
    }).catch(error => {
        console.log(error)

    })


}

module.exports = solution
