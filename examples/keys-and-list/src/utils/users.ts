export interface User {
   id: number;
   name: string;
}

export const users: User[] = Array(10)
   .fill(0)
   .map((_, i) => ({ id: i, name: `User${i}` }));