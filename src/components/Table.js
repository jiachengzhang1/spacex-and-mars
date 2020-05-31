import React from "react";
import { Table as TB } from "react-bootstrap";

const constructHeaderHTML = (headers) => {
  return headers.map((header, i) => <th key={i}>{header}</th>);
};

const constructBodyHTML = (rows, body) => {
  if (body !== null) {
    return body;
  }
  return rows.map((datas) => {
    return (
      <tr>
        {datas.map((data) => (
          <td>{data}</td>
        ))}
      </tr>
    );
  });
};

const Table = ({ headers, rows, body = null, bootstrap = true, className }) => {
  if (bootstrap) {
    return (
      <TB className={className} responsive="sm" bordered={false}>
        <thead style={{ color: "white" }}>
          <tr>{constructHeaderHTML(headers)}</tr>
        </thead>
        <tbody style={{ color: "white" }}>
          {constructBodyHTML(rows, body)}
        </tbody>
      </TB>
    );
  }
  return (
    <table className={className}>
      <thead>
        <tr>{constructHeaderHTML(headers)}</tr>
      </thead>
      <tbody>{constructBodyHTML(rows, body)}</tbody>
    </table>
  );
};

export default Table;
