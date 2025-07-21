import ArticleList from './ArticleList.jsx';
import NotFound from './NotFound/NotFound.jsx';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm.jsx';
import SearchRecipe from './SearchRecipe/SearchRecipe';
// import { useState } from 'react';
import { Triangle } from 'react-loader-spinner';
// import { fetchArticlesWithTopic } from '../articles-api.js';
import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from '../components/App.module.css';

import HomePage from '../pages/HomePage.jsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function App() {
  // const [articles, setArticles] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const handleSearch = async recipe => {
  //   try {
  //     setArticles([]);
  //     setError(false);
  //     setLoading(true);
  //     const data = await fetchArticlesWithTopic(recipe);
  //     setArticles(data);
  //   } catch (error) {
  //     setError(true);
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          HomePage
        </NavLink>
        <NavLink to="/search" className={buildLinkClass}></NavLink>
        <NavLink to="login" className={buildLinkClass}></NavLink>
        <NavLink to="register" className={buildLinkClass}></NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchRecipe />} />
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <h1>app</h1> */}
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      {/* <SearchRecipe onSearch={handleSearch} /> */}
      {/* {loading && ( */}
      {/* <Triangle
          height="100"
          width="100"
          color="#9b6c43"
          ariaLabel="triangle-loading"
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40px',
          }}
          visible={true}
        />
      )} */}
      {/* {error && ( */}
      {/* <p>Whoops, something went wrong! Please try reloading this page!</p> */}
      {/* )} */}
      {/* {articles.length > 0 && <ArticleList items={articles} />} */}
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
