import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render 'no users available' when the users array is empty", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should not render 'no users available' when the users array is not empty", () => {
    const users: User[] = [{ id: 101, name: "Robin" }];
    render(<UserList users={users} />);

    expect(screen.queryByText(/no users/i)).not.toBeInTheDocument();
  });

  it("should render a list of users when the users array is not empty", () => {
    const users: User[] = [
      { id: 101, name: "Robin" },
      { id: 102, name: "Mosh" },
    ];
    render(<UserList users={users} />);

    users.forEach((user: User) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
