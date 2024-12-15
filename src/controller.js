export default function controller({ onClickHandler }) {
  return (
    <div>
      <button onClick={(a) => onClickHandler(1, a.target.textContent)}>
        개 시발
      </button>
      <button onClick={() => onClickHandler(-1)}>-</button>
      <button onClick={() => onClickHandler(10)}>+10</button>
      <button onClick={(e) => onClickHandler(-10, e.target)}>-10</button>
    </div>
  );
}
