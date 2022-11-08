import React from 'react';
import getAllHotels from '../Redux/HomePageAction';
import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const hotels = useSelector((state) => state.allHotels);

  const dispatch = useDispatch();

  useEffect(() => {
	dispatch(getAllHotels());
	  }, []);
  console.log(hotels);

return (
	<div>
	<h1>Home</h1>

	{hotels.map((hotel) => (
		<div key={hotel.id}>
			<h1>{hotel.attributes.name}</h1>
			<img src={hotel.attributes.image} alt={hotel.attributes.name} />
			<p>{hotel.attributes.bedroom}</p>
			</div>
		))}
	</div>
);
};

export default Home;
