/* eslint-env jest */

import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

// eslint-disable-next-line no-undef
describe("TodoList Component", () => {

  // eslint-disable-next-line no-undef
  test("renders initial todos", () => {
    render(<TodoList />);

    // eslint-disable-next-line no-undef
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    // eslint-disable-next-line no-undef
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    // eslint-disable-next-line no-undef
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test("toggles a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);

    // eslint-disable-next-line no-undef
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  // eslint-disable-next-line no-undef
  test("deletes a todo", () => {
    render(<TodoList />);

    const deleteButtons = screen.getAllByText("Delete");

    fireEvent.click(deleteButtons[0]);

    // eslint-disable-next-line no-undef
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });

});