import { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContest } from '../Providers/AuthProviders';

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContest);
  const location = useLocation();

  if(loading){
    return <div className='w-full h-[300px] flex justify-center items-center text-3xl'>
      <span className="loading loading-bars loading-lg h-[150px]"></span>
    </div>
  }

  if (user) {
    return children;
  } return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node,
}