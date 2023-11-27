import { Schema } from "mongoose";

export type createQuestionParams = {
  title: string;
  content: string;
  tags: string[];
  // author: Schema.Types.ObjectId;
  author: string;
  path?: string;
};

export type TagType = {
  _id: Schema.Types.ObjectId;
  name: string;
  createdAt: Date;
  followers: Schema.Types.ObjectId[];
  questions: Schema.Types.ObjectId[];
};

// export type QuestionType = {
//    _id: new ObjectId('6561f4097e240e398b171a63'),
//   title: 'how to understand react',
//   content: "<p>I've been working with JavaScript for a while now, and I'm trying to grasp the
// concept of Promises. I understand that they are used for handling asynchronous operations, but I'm struggling to fully comprehend how they work and how to use them effectively. Could you provide a clear explanation of JavaScript Promises, along with some practical examples to illustrate their usage? Additionally, any tips or best practices for working with Promises would be greatly appreciated. Thanks!</p>",
//   tags: [
//     {
//       _id: new ObjectId('6561f40a4228ce15a5898818'),
//       name: 'react',
//       __v: 0,
//       createdAt: 2023-11-25T11:48:35.558Z,
//       followers: [],
//       questions: [Array]
//     }
//   ],
//   views: 0,
//   upvotes: [],
//   downvotes: [],
//   author: UserTyp
//   answers: [],
//   createdAt: 2023-11-25T11:28:09.690Z,
//   __v: 0
// }

// export type UserType = {
//   _id: string;
//   clerkId: string;
//     name: string;
//     username: string;
//     email: string;
//     password: string;
//     bio: string;
//     picture: string;
//     location: string;
//     portfolioWebsite: string;
//   reputation: number;
//     joinedAt: Date
// }
