function OnButton({ setOnHandler }) {
  return (
    <button style={{ background: "green" }} onClick={() => setOnHandler(false)}>
      OnButton
    </button>
  );
}
export default OnButton;
