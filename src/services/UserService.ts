// src/services/userService.ts
// import {Pool} from 'pg'
// import  pool  from '../config/db';
import { QueryResult } from 'pg';
import { User } from '../models/UserModel';
import pool from '../utils/db';

export const getUsers = async (): Promise<User[]> => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    return rows;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Internal Server Error');
  }
};

export const getUserById = async (id: number): Promise<User | null> => {
  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return rows[0] || null;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw new Error('Internal Server Error');
  }
};

export const createUser = async (user: User): Promise<User> => {
  try {
    const { name, email } = user;
    const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    return rows[0];
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Internal Server Error');
  }
};

export const updateUser = async (id: number, user: User): Promise<any> => {
  try {
    const { name, email } = user;
    // const result:any  = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
    const { rows }: QueryResult<User> = await pool.query(`UPDATE users SET name = ${name}, email = ${email} WHERE id = ${id}`);
    console.log(rows)
    return rows[0] || null;
    
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    throw new Error('Internal Server Error');
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
  } catch (error) {
    console.error(`Error deleting user with ID ${id}:`, error);
    throw new Error('Internal Server Error');
  }
};
