import { render, screen } from '@testing-library/react';
import App from './App';
import PrintStatementHook from "./Hooks/PrintStatementHook";

describe("awful UIUX tests", () => {
  test('renders the accounting table headers', () => {
    render(<App />);
    const columnOneHeader = screen.getByText(/Date/i);
    const columnTwoHeader = screen.getByText(/Amount/i);
    const columnThreeHeader = screen.getByText(/Balance/i);
    expect(columnOneHeader).toBeInTheDocument();
    expect(columnTwoHeader).toBeInTheDocument();
    expect(columnThreeHeader).toBeInTheDocument();
  });
  test('renders the data retrieved from the printStatement endpoint', () => {
    render(<App />)
    const amountAndBalance = screen.getByText(/500/i);
    expect(amountAndBalance).toBeInTheDocument();
  })
});

describe("less awful api fetch tests", () => {
  test("can fetch the two data values from the printStatement endpoint", () => {
    const printStatementHook = PrintStatementHook();
    expect(printStatementHook?.data?.length).toEqual(2)
  })
})

