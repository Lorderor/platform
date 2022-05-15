import { Route, Routes } from 'react-router-dom';

export const RoutesSwitch = ({ routes }) => {
    return (
        <Routes>
            {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    );
};

export default RoutesSwitch;