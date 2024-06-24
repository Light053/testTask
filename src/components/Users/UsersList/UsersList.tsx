import './UserList.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { RouterPath } from '../../../router/config';

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export const UsersList = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<UserData[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      setLoading(false);
      setUsers(response.data);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h1>Users List</h1>
      {loading ? (
        <div>loading...</div>
      ) : (
        <ul>
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
