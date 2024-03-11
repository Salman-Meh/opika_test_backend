import { getDb } from '../migrations-utils/db';

const defaultUsers = [
  {
    name: 'Sara Haust',
    email: 'sara@gmail.com',
    bio: 'Experienced backend developer.',
    profilePicture:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
  },
  {
    name: 'Ian Anthony',
    email: 'ian@gmail.com',
    bio: 'UI/UX Designer.',
    profilePicture:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
  },
  {
    name: 'Joe Gonzalez',
    email: 'joe@gmail.com',
    bio: 'Engineering manager.',
    profilePicture:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
];

export const up = async () => {
  const db = await getDb();
  const userCollection = db.collection('users');
  await userCollection.insertMany(defaultUsers);
};

export const down = async () => {
  const db = await getDb();
  const userCollection = db.collection('users');
  const emails = defaultUsers.map((user) => user.email);
  await userCollection.deleteMany({ email: { $in: emails } });
};
