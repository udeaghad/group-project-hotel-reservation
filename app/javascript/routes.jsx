import Reserve from '../Components/Reserve/Reserve';
import MyReservations from '../Components/MyReservations/MyReservations';
const routes = [
  {
    path: '/reserve',
    element: <Reserve />,
  },
  {
    path: '/reservations',
    element: <MyReservations />,
  }
];

export default routes;
