import styles from "./toggle.module.css";

type Props = {
  checked?: boolean;
  onChange: () => void;
};

export default function ToggleComponent({ checked, onChange }: Props) {
  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        checked={checked || false}
        className={styles.hidden}
        onChange={onChange}
      />
      <label htmlFor="toggle" className={styles.toggle}></label>
    </>
  );
}
