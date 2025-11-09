import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import ForgotPassword from "../../src/routes/auth/ForgotPassword";

const renderWithRouter = component => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("ForgotPassword Component", () => {
  test("deve renderizar o título e elementos principais", () => {
    renderWithRouter(<ForgotPassword />);

    expect(screen.getByText("Recuperar a senha.")).toBeInTheDocument();
    expect(screen.getByLabelText(/Seu email/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Enviar/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Voltar/i })).toBeInTheDocument();
  });

  test("deve permitir digitar no campo de email", async () => {
    const user = userEvent.setup();
    renderWithRouter(<ForgotPassword />);

    const emailInput = screen.getByLabelText(/Seu email/i);
    await user.type(emailInput, "teste@email.com");

    expect(emailInput.value).toBe("teste@email.com");
  });

  test("deve ter campo email como obrigatório", () => {
    renderWithRouter(<ForgotPassword />);

    const emailInput = screen.getByLabelText(/Seu email/i);
    expect(emailInput).toBeRequired();
  });

  test("deve exibir mensagem de instruções", () => {
    renderWithRouter(<ForgotPassword />);

    expect(screen.getByText(/Verifique sua caixa de entrada/i)).toBeInTheDocument();
    expect(screen.getByText(/verifique sua pasta de spam/i)).toBeInTheDocument();
  });

  test("deve ter botões com links corretos", () => {
    renderWithRouter(<ForgotPassword />);

    const sendButton = screen.getByRole("link", { name: /Enviar/i });
    const backButton = screen.getByRole("link", { name: /Voltar/i });

    expect(sendButton).toHaveAttribute("href", "/");
    expect(backButton).toHaveAttribute("href", "/");
  });
});
