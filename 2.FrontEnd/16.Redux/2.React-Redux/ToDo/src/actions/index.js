export const ADD_TODO = 'ADD_TODO';

export const addTask = (task) => ({
  type: ADD_TODO,
  task,
});