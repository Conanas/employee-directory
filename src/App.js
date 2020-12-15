import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import EmployeeTable from "./components/EmployeeTable"

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <EmployeeTable />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
