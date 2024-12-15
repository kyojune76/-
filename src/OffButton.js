function OffButton({ setOnHandler }) {
  return (
    <button style={{ background: "red" }} onClick={() => setOnHandler(true)}>
      OffButton
    </button>
  );
}

export default OffButton;
