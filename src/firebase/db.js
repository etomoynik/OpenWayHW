import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

export const onceGetForms = () =>
  db.ref('forms').once('value');

export const onceGetForm = () =>
  db.ref('forms').once('value');

export const submitForm = (form) =>
  db.ref(`forms/${form.email}`).set({form});

// Other db APIs ...
