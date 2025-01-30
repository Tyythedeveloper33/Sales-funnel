import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/Auth" />;
  }

  return element;
};

export default PrivateRoute;
