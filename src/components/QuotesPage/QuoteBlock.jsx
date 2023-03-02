import styles from "./QuoteBlock.module.scss";

function QuoteBlock({ item }) {
  return (
    <div className={styles.quotesBlock}>
      <div>{item.quote}</div>
      <div className={styles.quoteAuthor}>
        © {item.author}
        {item.date}
      </div>
    </div>
  );
}

export default QuoteBlock;
