import { UserCard } from './UserCard';

export const App = () => {
  return (
    <div className="container">
      <UserCard userId={1} isAdmin={true} />
    </div>
  );
};
