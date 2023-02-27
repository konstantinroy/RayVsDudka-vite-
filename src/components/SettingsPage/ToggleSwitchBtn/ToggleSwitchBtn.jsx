import styles from "./ToggleSwitchBtn.module.scss";

function ToggleSwitchBtn() {
  return (
    <>
      <input type="checkbox" id="switch" />
      <label for="switch">Toggle</label>
    </>
  );
}

export default ToggleSwitchBtn;
