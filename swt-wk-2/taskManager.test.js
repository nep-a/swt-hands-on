// import task manager
const TaskManager = require('./taskManager');
describe('TaskManager',()=>{
    let manager;
})
beforeEach(()=>{
    manager = new TaskManager();
})
test('add a task',()=>{
    const task = manager.addTask('Walking across the bridge');
    expect(task.title).toBe('Walking across the bridge');
    expect(task.id).toBe(1);
    expect(task.completed).toBe(false);
})
test('To throw an error',()=>{
    expect(()=>{
        manager.completeTask(2).toThrow('Task not found');
    })
})
test('delete a task',()=>{
    expect(()=>{
        manager.deleteTask(-2).toThrow('Task not found');
    })
})
test('get all tasks',()=>{
    expect(()=>{
        manager.getAllTask().toContain('Walking across the bridge')
    })
})
test('get all completed task',()=>{
    expect(()=>{
        manager.getCompletedTask().toEqual(manager.completeTask)
    })
})