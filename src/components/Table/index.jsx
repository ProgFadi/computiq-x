import React, { useState } from "react";

import useTable from "../../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "./Table Footer";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
    <h1>Score Board</h1>
      <table className={styles.table}>
        <tbody>
          {slice.map((el,i) => (
            <tr className={styles.tableRowItems} key={i}>
              <td className={styles.tableCell}>#{i} {el.user__score_profile__photo} </td>
              <td className={styles.tableCell}>{el.user__first_name} {el.user__last_name}</td>
              <td className={styles.tableCell}>{el.total_score} points</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;