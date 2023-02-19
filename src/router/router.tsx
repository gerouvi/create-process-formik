import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import CreateProcess from '../components/CreateProcess';
import ElectionsList from '../components/electionsList/ElectionsList';
import RootLayout from '../layouts/RootLayout';
import ProtectedRoutes from '../utils/ProtecterdRoutes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route element={<ProtectedRoutes />}>
        <Route path="createlection" element={<CreateProcess />} />
        <Route path="electionslist" element={<ElectionsList />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
);

export default router;
