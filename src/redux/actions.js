// import { nanoid } from 'nanoid';
// import { createAction } from '@reduxjs/toolkit';
// // export const addTask = text => {
// //   return {
// //     type: 'tasks/addTask',
// //     payload: {
// //       id: nanoid(),
// //       completed: false,
// //       text,
// //     },
// //   };
// // };
// export const addTask = createAction('tasks/addTask', text => ({
//   payload: {
//     id: nanoid(),
//     completed: false,
//     text,
//   },
// }));

// // export const deleteTask = taskId => {
// //   return {
// //     type: 'tasks/deleteTask',
// //     payload: taskId,
// //   };
// // };
// export const deleteTask = createAction('tasks/deleteTask');

// // export const toggleCompleted = taskId => {
// //   return {
// //     type: 'tasks/toggleCompleted',
// //     payload: taskId,
// //   };
// // };
// export const toggleCompleted = createAction('tasks/toggleCompleted');

// // export const setStatusFilter = value => {
// //   return {
// //     type: 'filters/setStatusFilter',
// //     payload: value,
// //   };
// // };
// export const setStatusFilter = createAction('filters/setStatusFilter');
