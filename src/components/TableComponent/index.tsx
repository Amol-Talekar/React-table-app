import { useMemo } from "react";
import { usePagination, useTable, useSortBy } from "react-table";
import { COLUMNS, TestData } from "./Mockdata";
import {
  Table,
  TBody,
  TBodyRow,
  TD,
  TH,
  THead,
  THeadRow,
  Button,
  TablePaginationBox,
  PaginationButton,
  PaginationDiv,
} from "./style";

interface IpopupData {
  id: string;
  consigneeName: string;
  shipmentId: string;
  shipperName: string;
  createdAt: string;
  options: [string];
}
const initialData: IpopupData = {
  id: "",
  consigneeName: "",
  shipmentId: "",
  shipperName: "",
  createdAt: "",
  options: [""],
};

export const TableComponent = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => TestData, []);

  const tableInstance = useTable(
    {
      //@ts-ignore
      columns: columns,
      data: data,
    },

    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    //@ts-ignore
    page,
    prepareRow,
    //@ts-ignore
    nextPage,
    //@ts-ignore
    previousPage,
    //@ts-ignore
    canNextPage,
    //@ts-ignore
    canPreviousPage,
    //@ts-ignore
    pageOptions,
    //@ts-ignore
    pageCount,
    //@ts-ignore
    gotoPage,
    state,
  } = tableInstance;

  //@ts-ignore
  const { pageIndex } = state;

  //@ts-ignore
  //   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //     useTable({
  //       //@ts-ignore
  //       columns,
  //       data,
  //     });

  return (
    <TablePaginationBox>
      <Table {...getTableProps()}>
        <THead>
          {headerGroups.map((headerGroup) => (
            <THeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((headerColumn) => (
                <TH
                  {...headerColumn.getHeaderProps(
                    //@ts-ignore
                    headerColumn.getSortByToggleProps()
                  )}
                >
                  {headerColumn.render("Header")}
                  <span>
                    {
                      //@ts-ignore
                      headerColumn.isSorted
                        ? //@ts-ignore
                          headerColumn.isSortedDesc
                          ? " 🔼"
                          : " 🔽"
                        : ""
                    }
                  </span>
                </TH>
              ))}
            </THeadRow>
          ))}
        </THead>

        <TBody {...getTableBodyProps()}>
          {page.map((singleRow: any, index: any) => {
            prepareRow(singleRow);

            return (
              <TBodyRow {...singleRow.getRowProps()}>
                {singleRow.cells.map((singleCell: any, index: any) => (
                  <TD key={index}>
                    {singleCell.column.Header === "Options" ? (
                      <Button>{singleCell.render("Cell")}</Button>
                    ) : (
                      <>{singleCell.render("Cell")}</>
                    )}
                  </TD>
                ))}
              </TBodyRow>
            );
          })}
        </TBody>
      </Table>

      <PaginationDiv>
        <span>
          <strong>
            Page{""} {pageIndex + 1} of {pageOptions.length}{" "}
          </strong>
        </span>
        <PaginationButton
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <span> {"<<"} </span>
        </PaginationButton>
        <PaginationButton onClick={previousPage} disabled={!canPreviousPage}>
          <span> Previous</span>
        </PaginationButton>

        {/* First Button */}

        <PaginationButton
          onClick={() => {
            let newPage = pageIndex + 1;
            let testPage = pageCount - 3;
            if (newPage <= testPage) {
              gotoPage(newPage);
            } else {
              gotoPage(testPage);
            }
          }}
        >
          <span>
            {pageIndex + 1 <= pageCount - 3 ? pageIndex + 1 : pageCount - 3}
          </span>
        </PaginationButton>

        {/* Second Button */}

        <PaginationButton
          onClick={() => {
            let newPage = pageIndex + 2;
            let testPage = pageCount - 2;
            if (newPage <= testPage) {
              gotoPage(newPage);
            } else {
              gotoPage(testPage);
            }
          }}
        >
          <span>
            {pageIndex + 2 <= pageCount - 2 ? pageIndex + 2 : pageCount - 2}
          </span>
        </PaginationButton>

        {/* Third Button */}
        <PaginationButton
          onClick={() => {
            let newPage = pageIndex + 3;
            let testPage = pageCount - 1;
            if (newPage <= testPage) {
              gotoPage(newPage);
            } else {
              gotoPage(testPage);
            }
          }}
        >
          <span>
            {pageIndex + 3 < pageCount ? pageIndex + 3 : pageCount - 1}
          </span>
        </PaginationButton>

        <div>
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              let jumpToPageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(jumpToPageNumber);
            }}
          />
        </div>

        <PaginationButton onClick={nextPage} disabled={!canNextPage}>
          <span>Next </span>
        </PaginationButton>
        <PaginationButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <span>{">>"} </span>
        </PaginationButton>
      </PaginationDiv>
    </TablePaginationBox>
  );
};
