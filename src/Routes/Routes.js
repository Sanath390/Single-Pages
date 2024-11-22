import { Routes, Route } from 'react-router-dom';
import Login from '../loginPage/login';
import SignUp from '../signUpPage/SignUp';


const AppRoutes = () => {
  // const { token } = useAuth();

  return (

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
       
  );
};

export default AppRoutes;
