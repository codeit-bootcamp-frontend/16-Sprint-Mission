import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';
import LoadingPage from '../pages/LoadingPage/LoadingPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import { Suspense } from 'react';
import HomePage from '../pages/HomePage/HomePage';
import SignUpPage from '../pages/AuthPage/SignUpPage';
import SignInPage from '../pages/AuthPage/SignInPage';

const AppRouter = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<SignInPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRouter;
