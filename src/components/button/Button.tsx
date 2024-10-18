import styles from "./Button.module.css";

type Props = {
  title: string;
  mode: "fill" | "outline";
};

export default function Button(props: Props) {
  return (
    <button
      className={`${
        props.mode === "fill"
          ? styles.fill + " " + styles.general
          : styles.outline + " " + styles.general
      }`}
    >
      {props.title}
    </button>
  );
}
