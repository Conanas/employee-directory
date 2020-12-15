import React from "react";
import Header from "./components/Header"
import EmployeeTable from "./components/EmployeeTable"

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <div className="row">
          <div className="col-md-12">
            <EmployeeTable />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
