import { LoginProps } from './types';

// Just a simple function to test the login
export function loginTestlog({ username, password }: LoginProps) {
  console.log(`Logging in as ${username} with password: ${password}`)
};
