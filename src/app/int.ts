interface Room {
  name: string;
  users: User[];
  meetings: Message[];
}

interface User {
  id: number;
  name: string;
}


interface Message {
  message: string;
  roomId: number;
  authorId: number;
}

export { Room, User }