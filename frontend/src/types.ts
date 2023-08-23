export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

export type Contact = {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
  avatar: string;
};

export type Message = {
  id: number | undefined;
  receiverId: string;
  text: string;
  time: string;
  senderId: string;
};

