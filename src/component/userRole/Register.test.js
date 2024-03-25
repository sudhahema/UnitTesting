import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import App from './App';
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//sort out the axios error
jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: { id: 1, name: "hema" ,email: 'test@example.com', password: 'password123' },
    }),
  },
}));

//email should need to rendered
test("email should need to rendered", async () => {
  render(
    //to sort out the useNavigate error
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const email = screen.getByTestId("email");
  expect(email).toBeInTheDocument();
});

//password should need to rendered
test("password should need to rendered", async () => {
  render(
    //to sort out the useNavigate error
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  const email = screen.getByTestId("password");
  expect(email).toBeInTheDocument();
});


//Enter the vaild email id
test('Enter the vaild email id ', async () => {

  render( <BrowserRouter>
    <Register />
  </BrowserRouter>);
  fireEvent.change(screen.getByTestId("email"), { target: { value: 'test@example.com' } });
});

//Enter the vaild password
test('Enter the vaild password ', async () => {

  render( <BrowserRouter>
    <Register />
  </BrowserRouter>);
  fireEvent.change(screen.getByTestId("password"), { target: { value: 'password@123' } });

});

//Submitting form with valid credentials navigates to admin page
test('Submitting form with valid credentials navigates to admin page', async () => {

  render( <BrowserRouter>
    <Register />
  </BrowserRouter>);
  fireEvent.change(screen.getByTestId("email"), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByTestId("password"), { target: { value: 'password123' } });

});

