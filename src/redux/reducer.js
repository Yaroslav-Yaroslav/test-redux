// import { createReducer } from '@reduxjs/toolkit';
// import {
//   addTask,
//   deleteTask,
//   setStatusFilter,
//   toggleCompleted,
// } from './actions';
// import { statusFilters } from './constants';

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// // Використовуємо initialState як значення стану за умовчанням
// // export const taskReducer = (state = taskInitialState, action) => {
// //   // Редюсер розрізняє екшени за значенням властивості type
// //   switch (action.type) {
// //     // Залежно від типу екшену виконуватиметься різна логіка
// //     case addTask.type: {
// //       // Потрібно повернути новий об'єкт стану
// //       return [
// //         // в якому є всі існуючі завдання
// //         ...state,
// //         // та об'єкт нового завдання
// //         action.payload,
// //       ];
// //     }
// //     case deleteTask.type:
// //       return state.filter(task => task.id !== action.payload);
// //     case toggleCompleted.type:
// //       return state.map(task => {
// //         if (task.id !== action.payload) {
// //           return task;
// //         }
// //         return { ...task, completed: !task.completed };
// //       });
// //     default:
// //       // Кожен редюсер отримує всі екшени, відправлені в стор.
// //       // Якщо редюсер не повинен обробляти якийсь тип екшену,
// //       // необхідно повернути наявний стан без змін.
// //       return state;
// //   }
// // };

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     return [...state, action.payload];
//   },
//   [deleteTask]: (state, action) => {
//     return state.filter(task => task.id !== action.payload);
//   },
//   [toggleCompleted]: (state, action) => {
//     return state.map(task => {
//       if (task.id !== action.payload) {
//         return task;
//       }
//       return {
//         ...task,
//         completed: !task.completed,
//       };
//     });
//   },
// });

// const filtersInitialState = {
//   filters: {
//     status: statusFilters.all,
//   },
// };
// // export const filtersReducer = (state = filtersInitialState, action) => {
// //   switch (action.type) {
// //     case setStatusFilter.type:
// //       return {
// //         ...state,
// //         status: action.payload,
// //       };
// //     default:
// //       return state;
// //   }
// // };
// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     return {
//       ...state,
//       status: action.payload,
//     };
//   },
// });
