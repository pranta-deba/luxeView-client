import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const Private = ({ children }) => {
    const { user } = useAuth();
    const location = useLocation();
    if (!user) {
        return <Navigate to="/login" state={location.pathname} />;
    }
    return children;
};
Private.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Private;