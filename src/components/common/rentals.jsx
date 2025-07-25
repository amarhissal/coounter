import React, { Component } from "react";
import _ from "lodash";

import Table from "./table";
import { getRentals } from "../services/rentalService";

class Rentals extends Component {
  state = {
    data: [],
    sortColumn: { path: "customer.name", order: "asc" },
  };

  formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  columnns = [
    {
      path: "customer.name",
      lable: "Customer Name",
      content: (rental) => rental.customer.name,
    },
    {
      path: "movie.title",
      lable: "Movie Title",
      content: (rental) => rental.movie.title,
    },
    {
      path: "dateOut",
      lable: "Date Out",
      content: (rental) => this.formatDate(rental.dateOut),
    },
    {
      path: "dateReturned",
      lable: "Date Returned",
      content: (rental) => this.formatDate(rental.dateReturned),
    },
  ];

  handleSort = (sortColumn) => {
    const sorted = _.orderBy(
      this.state.data,
      [sortColumn.path],
      [sortColumn.order]
    );
    this.setState({ sortColumn, data: sorted });
  };

  async componentDidMount() {
    try {
      const rentals = await getRentals();
      this.setState({ data: rentals });
    } catch (error) {
      console.error("Error fetching rentals data:", error);
    }
  }

  render() {
    const { data, sortColumn } = this.state;

    return (
      <>
        <h1>Rentals</h1>
        <Table
          data={data}
          sortColumn={sortColumn}
          onSort={this.handleSort}
          columns={this.columnns} 
        />
      </>
    );
  }
}

export default Rentals;
