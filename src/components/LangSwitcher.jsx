import { useId } from 'react';

export default function LangSwitcher({ value, onSelect }) {
  const selectId = useId();

  return (
    <div>
      <h2>LangSwitcher</h2>
      <label htmlFor={selectId}>Cgoose language</label>
      <select
        id={selectId}
        value={value}
        onChange={evt => onSelect(evt.target.value)}
      >
        <option value="uk">Ukrainian</option>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
}
