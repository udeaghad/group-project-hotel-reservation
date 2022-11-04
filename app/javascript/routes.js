import Reserve from '../Components/Reserve/Reserve';
import MyReservations from '../Components/MyReservations/MyReservations';
const Routes = [
  {
    path: '/reserve',
    element: <Reserve />,
  },
  {
    path: '/reservations',
    element: <MyReservations />,
  }
];

export default Routes;
