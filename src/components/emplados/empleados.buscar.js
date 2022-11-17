import React from "react";
import { Container, Row } from "react-bootstrap";
//import { request } from "../helper/helper";
import "./empleados.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  SizePerPageDropdownStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const products = [
  {
    id: 1,
    name: "Novio 1",
    price: 1000,
  },
  {
    id: 2,
    name: "Novio 2",
    price: 2000,
  },
  {
    id: 3,
    name: "Novio 3",
    price: 2500,
  },
  {
    id: 4,
    name: "Novio 4",
    price: 3000,
  },
  {
    id: 5,
    name: "Novio 5",
    price: 3500,
  },
  {
    id: 6,
    name: "Novio 6",
    price: 4000,
  },
  {
    id: 7,
    name: "Novio 7",
    price: 4500,
  },
  {
    id: 8,
    name: "Novio 8",
    price: 5000,
  },
  {
    id: 9,
    name: "Novio 9",
    price: 5500,
  },
  {
    id: 10,
    name: "Novio 10",
    price: 6000,
  },
  {
    id: 4,
    name: "Novio 4",
    price: 3000,
  },
  {
    id: 5,
    name: "Novio 5",
    price: 3500,
  },
  {
    id: 6,
    name: "Novio 6",
    price: 4000,
  },
  {
    id: 7,
    name: "Novio 7",
    price: 4500,
  },
  {
    id: 8,
    name: "Novio 8",
    price: 5000,
  },
  {
    id: 9,
    name: "Novio 9",
    price: 5500,
  },
  {
    id: 10,
    name: "Novio 10",
    price: 6000,
  },
];
const columns = [
  {
    dataField: "id",
    text: "Product ID",
  },
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
];

export default class empleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const options = {
      custom: true,
      totalSize: products.length,
    };
    return (
      <Container id="empleados-buscar-container">
        <Row>
          <h1>Buscar Empleados</h1>
        </Row>
        <Row>
          <ToolkitProvider
            keyField="id"
            data={products}
            columns={columns}
            search
          >
            {(props) => (
              <>
                <h3>Input something at below input field:</h3>
                <SearchBar {...props.searchProps} />
                <hr />
                <PaginationProvider pagination={paginationFactory(options)}>
                  {({ paginationProps, paginationTableProps }) => (
                    <div>
                      <SizePerPageDropdownStandalone {...paginationProps} />
                      <BootstrapTable
                        keyField="id"
                        data={products}
                        columns={columns}
                        {...paginationTableProps}
                        {...props.baseProps}
                      />
                      <PaginationListStandalone {...paginationProps} />
                    </div>
                  )}
                </PaginationProvider>
              </>
            )}
          </ToolkitProvider>
        </Row>
      </Container>
    );
  }
}
