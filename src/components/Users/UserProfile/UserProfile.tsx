import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserData } from './types';
import axios from 'axios';
import './UserProfile.css';

export const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/' + id
      );
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
      <h1 className="user-profile__name">{user?.name}</h1>
      <img
        src={`https://i.pravatar.cc/150?img=${id}`}
        alt={user?.name}
        className="user-profile__avatar"
      />
      <p className="user-profile__username">@{user?.username}</p>
      <p className="user-profile__bio">
        Hi, I’m {user?.name}. I live in {user?.address.city}, and work at{' '}
        {user?.company.name}.
      </p>
      <div className="user-profile__contact">
        <p>
          Email: <a href={`mailto:${user?.email}`}>{user?.email}</a>
        </p>
        <p>
          Phone: <a href={`tel:${user?.phone}`}>{user?.phone}</a>
        </p>
        <p>
          Website:{' '}
          <a
            href={`http://${user?.website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user?.website}
          </a>
        </p>
      </div>
    </div>
  );
};