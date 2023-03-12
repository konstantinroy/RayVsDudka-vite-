import styles from "./ToggleSwitchBtn.module.scss";

function ToggleSwitchBtn({ defaultValue, onChange }) {
  const onStateChange = (val) => {
    onChange();
  };

  return (
    <>
      <input
        className={styles.input}
        type="checkbox"
        id="switch"
        value={defaultValue}
        onChange={onStateChange}
      />
      <label htmlFor="switch">Toggle</label>
    </>
  );
}

export default ToggleSwitchBtn;
