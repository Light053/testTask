import './UserList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const UsersList = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<UserData[]>(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users.');
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>Users List</h1>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : users.length === 0 ? (
        <div className="no-users">No users found</div>
      ) : (
        <ul className="user-list__container">
          {users.map((user) => (
            <li key={user.id} className="user-list__item">
              <h2
                className="user-list__name"
                onClick={() => navigate(`profile/${user.id}`)}
              >
                {user.name}
              </h2>
              <p className="user-list__email">{user.email}</p>
              <p className="user-list__phone">{user.phone}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
