import { Navigate } from "react-router-dom";
import { getUserDetails } from "../../apis/users/userServices";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsAuthenticated, setLoading } from "../../redux/todoSlice";

const TodoHome = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  useEffect(function () {
    getUserData();
  }, []);

  function getUserData() {
    dispatch(setLoading(true));

    try {
      getUserDetails()
        .then(function (res) {
          console.log(res);
          const { success, user } = res;
          console.log("user: ", user);
          if (success) {
            dispatch(setIsAuthenticated(true));
            dispatch(setLoading(false));
          } else {
            dispatch(setIsAuthenticated(false));
            dispatch(setLoading(false));
          }
        })
        .catch(function (error) {
          console.error(error);
          dispatch(setLoading(false));
        });
    } catch (error) {
      console.error(error);
      dispatch(setLoading(false));
    }
  }

  if (!isAuthenticated) return <Navigate to={"/login"} />;
  return (
    <div className="w-full min-h-screen bg-gray-600 p-36 text-5xl">home</div>
  );
};

export default TodoHome;
