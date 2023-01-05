import styled from "styled-components";

export const TablePaginationBox = styled.div`
  /* width: 800px;

  overflow-x: scroll; */
`;

export const Table = styled.table`
  border: 1px solid black;
  border-top: 0;

  border-collapse: collapse;
`;

export const THead = styled.thead`
  background-color: green;
  color: white;
`;

export const THeadRow = styled.tr`
  //border: 2px solid red;
  /* background-color: green;

  color: white; */
`;

export const TH = styled.th`
  //border: 1px solid blue;
  padding: 4px;
`;

export const TBody = styled.tbody`
  /* border: 1px solid red; */
`;

export const TBodyRow = styled.tr`
  :nth-child(even) {
    background-color: #e5e4e2;
  }

  :hover {
    background-color: #818589;
    color: white;
    border-color: white;
  }
`;

export const TD = styled.td`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 4px;
  padding-bottom: 4px;
  border-right: 1px solid gray;

  //border: 1px solid blue;
`;

export const Button = styled.button`
  border: none;
  background-color: lightgreen;
  padding: 8px;
  border-radius: 4px;
  min-width: 100px;
  min-height: 30px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const PaginationDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;

  input {
    width: 35px;
    outline: none;

    :focus {
      background-color: lightgreen;
    }
  }
`;

export const PaginationButton = styled.button`
  padding: 8px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: lightgreen;
  min-width: 70px;
  border: none;
  cursor: pointer;
  :disabled {
    background-color: gray;
    color: white;
  }
`;
