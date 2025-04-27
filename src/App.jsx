import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = [
        {
          id: '1',
          name: 'Tour 1',
          info: 'This is a sample tour.',
          image: 'https://via.placeholder.com/150',
          price: '100',
        },
        {
          id: '2',
          name: 'Tour 2',
          info: 'This is another sample tour.',
          image: 'https://via.placeholder.com/150',
          price: '200',
        },
      ];
      setTours(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (tours.length === 0) return <button onClick={fetchTours}>Refresh</button>;

  return <Gallery tours={tours} removeTour={removeTour} />;
}

export default App; //
