interface Room {
  id: number;
  name: string;
  users: User[];
  meetings: Message[];
}

interface User {
  id: number;
  name: string;
}


interface Message {
  id: number;
  message: string;
  roomId: number;
  authorId: number;
  createdAt: Date;
}

export { Room, User, Message }