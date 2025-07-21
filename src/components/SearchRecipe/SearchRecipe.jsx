// import { useState } from 'react';
import css from './SearchRecipe.module.css';

export default function SearchRecipe({ onSearch }) {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const recipe = form.elements.recipe.value;
    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.recipe.value.trim() === '') {
      alert('Please enter search term!');
      return;
    }
    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSearch(recipe);
    form.reset();
  };

  return (
    <div>
      <div className={css.wrapper}>
        <div className={`${css.container} container`}>
          <h1 className={css.title}>Plan, Cook, and Share Your Flavors</h1>
          <form className={css.searchForm} onSubmit={handleSubmit}>
            <input
              className={css.input}
              type="text"
              name="recipe"
              placeholder="Search recipes"
            />
            <button className={css.btn} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
