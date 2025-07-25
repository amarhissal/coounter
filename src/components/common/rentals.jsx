import React, { Component } from "react";
import { getRentals } from "../services/rentalService";

class Rentals extends Component {
  state = {
    rentals: [],
  };

  componentDidMount = async () => {
    try {
      const rentals = await getRentals();
      this.setState({ rentals });
    } catch (error) {
      console.error("Error fetching rentals:", error);
    }
  };

  formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  render() {
    const { rentals } = this.state;

    return (
      <div className="container mt-4">
        <h2>Rentals</h2>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Movie Title</th>
              <th>Date Out</th>
              <th>Date Returned</th>
            </tr>
          </thead>
          <tbody>
            {rentals.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">
                  No rentals found.
                </td>
              </tr>
            ) : (
              rentals.map((rental) => (
                <tr key={rental._id}>
                  <td>{rental.customer.name}</td>
                  <td>{rental.movie.title}</td>
                  <td>{this.formatDate(rental.dateOut)}</td>
                  <td>{this.formatDate(rental.dateReturned)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Rentals;
