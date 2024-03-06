import { render, screen } from "@testing-library/react";
import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

describe("UserAccount", () => {
  it("should render user name", () => {
    const user: User = {
      id: 101,
      name: "Robin",
    };
    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render edit button if use is admin", () => {
    const user: User = {
      id: 101,
      name: "Robin",
      isAdmin: true,
    };
    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render edit button if use is not admin", () => {
    const user: User = {
      id: 101,
      name: "Robin",
      isAdmin: false,
    };
    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });
});
