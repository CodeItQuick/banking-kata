import logo from './logo.svg';
import './App.css';
import PrintStatementHook from "./Hooks/PrintStatementHook";

function App() {
    const printStatement = PrintStatementHook();

  return (
    <div className="App">
      <table>
          <thead key={"head"}>
              <tr key={"header-row"}>
                <th>Date</th>
                <th>Amount</th>
                <th>Balance</th>
              </tr>
          </thead>
          <tbody key={"body"}>
          {
              printStatement?.data?.map((entry, idx) =>
                <tr key={`row-number-${idx}`}>
                    <td>24.12.2015</td>
                    <td>{entry?.amount}</td>
                    <td>{entry?.balance}</td>
                </tr>
              )
          }
          </tbody>
      </table>
    </div>
  );
}

export default App;
