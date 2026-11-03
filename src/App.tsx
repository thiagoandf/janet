import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import Home from '@/pages/Home/Home';

const Profile = lazy(() => import('@/pages/Profile/Profile'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile"
        element={
          <Suspense fallback={null}>
            <Profile />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
