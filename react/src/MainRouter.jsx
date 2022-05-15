import { RoutesSwitch } from './components/Common/RoutesSwitch';

import { ROUTES } from './constants/routes';

export const MainRouter = () => {
  return <RoutesSwitch routes={ROUTES} />;
};
