import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm.jsx';
import SearchRecipe from './SearchRecipe/SearchRecipe';
import LangSwitcher from './LangSwitcher';

export default function App() {
  return (
    <>
      <h1>app</h1>
      <RegisterForm />
      <LoginForm />

      {/* <SearchRecipe /> */}
      {/* <p>Select language: {lang}</p> */}
      {/* <LangSwitcher value={lang} onSelect={setLang} /> */}
    </>
  );
}

// import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// import Layout from './Layout';
// import HomePage from '../pages/HomePage/HomePage';
// import PrivateRoute from './PrivateRoute';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
// import RegisterPage from '../pages/RegisterPage/RegisterPage.jsx'

// const ProfilePage = lazy(() => import('../pages/ProfilePage/ProfilePage'));

// export default function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route
//           path="/profile/:recipeType"
//           element={
//             <PrivateRoute>
//               <ProfilePage />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/not-found" element={<NotFoundPage/>}/>
//         <Route path="/register" element={<RegisterPage/>}/>
//       </Routes>
//     </Layout>
//   );
// }
