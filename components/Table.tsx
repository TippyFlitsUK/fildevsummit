import styles from '@components/Table.module.scss';

export default function Table({ title, table }) {
  return (
    <div className={styles.container}>
      {title && <h3>{title}</h3>}

      <section className={styles.table}>
        {table.map((tableColumn, index) => {
          const { header, tableItems } = tableColumn;

          return (
            <div key={index}>
              <div className={styles.header}>{header}</div>

              <div className={styles.content}>
                {tableItems.map((item, index) => {
                  const { text } = item ?? null;
                  return (
                    <div key={index} className={styles.tableItem}>
                      {text && <p>{text}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
