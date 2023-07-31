const todoList_id1 = "12re-sdfs"
const todoList_id2 = "12re-ggfs"

const todoLists = [{
    id: todoList_id1, title: "What to Learn", filter: "all",
}, {
    id: todoList_id2, title: "What to Buy", filter: "all",
},]

const tasks = {
    [todoList_id1]: [{id: 1, title: "HTML", isDone: true,}, {id: 2, title: "CSS", isDone: true,}, {
        id: 3, title: "Javascript", isDone: true,
    },], [todoList_id2]: [{id: 4, title: "Apple", isDone: true,}, {id: 5, title: "Banana", isDone: true,}, {
        id: 6, title: "Oranges", isDone: true,
    },],

}


console.log(tasks[todoList_id1])
console.log(tasks["12re-sdfs"])
console.log(tasks[todoLists[0].id])

const setTodolist = ([]) => {
}
const setTasks = ({}) => {
}

const addTodoList = (title) => {
    const todoListId = "2x93-df34"
    const newTodo = {
        id: todoListId, title: title, filter: "all",
    }
    setTodolist([...todoLists, newTodo])
    setTasks({...tasks, [todoListId]: []})
}

const changeStatus = (taskId, newStatus) => {
    setTasks({
        ...tasks, [todoList_id1]: tasks[todoList_id1].map(t => t.id === taskId ?
            t.id = newStatus :
            t)
    })
}

const changeStatus2 = (taskId, newStatus) => {
    const tasksForUpdate = tasks[todoList_id1]
    const updatedTasks = tasksForUpdate.map(t => t.id === taskId ?
        t.isDone === newStatus :
        t)
    const copyTasks = {...tasks}
    copyTasks[todoList_id1] = updatedTasks
    setTasks(copyTasks)
}

const removeTask = (taskId, todoListId) => {
    const updatedTasks = tasks[todoListId].filter(t => t.id === taskId)
    setTasks({...tasks, [todoListId] : updatedTasks})
}