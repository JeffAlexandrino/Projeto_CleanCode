import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Login from '../routes/auth/Login';

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Login Component', () => {
  test('deve renderizar elementos principais', () => {
    renderWithRouter(<Login />);
    
    expect(screen.getByText(/Seja bem-vindo\(a\) novamente/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seu email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sua senha/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Entrar/i })).toBeInTheDocument();
  });

  test('deve permitir interação com os campos', async () => {
    const user = userEvent.setup();
    renderWithRouter(<Login />);
    
    const emailInput = screen.getByLabelText(/Seu email/i);
    const passwordInput = screen.getByLabelText(/Sua senha/i);
    const rememberCheckbox = screen.getByLabelText(/Lembrar de mim/i);

    await user.type(emailInput, 'teste@email.com');
    await user.type(passwordInput, 'senha123');
    await user.click(rememberCheckbox);

    expect(emailInput.value).toBe('teste@email.com');
    expect(passwordInput.value).toBe('senha123');
    expect(rememberCheckbox).toBeChecked();
  });

  test('deve ter campos obrigatórios', () => {
    renderWithRouter(<Login />);
    
    expect(screen.getByLabelText(/Seu email/i)).toBeRequired();
    expect(screen.getByLabelText(/Sua senha/i)).toBeRequired();
  });

  test('deve ter navegação correta', () => {
    renderWithRouter(<Login />);
    
    expect(screen.getByRole('link', { name: /Entrar/i })).toHaveAttribute('href', '/home');
    expect(screen.getByRole('link', { name: /Esqueci a senha/i })).toHaveAttribute('href', '/forgot-password');
  });
});