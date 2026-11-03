import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from '@/App';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('<App />', () => {
  it('renders the intro on /', () => {
    renderAt('/');
    expect(
      screen.getByRole('button', { name: 'Continue to profile' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Thiago')).toBeInTheDocument();
    expect(
      screen.getByText('Hello there! My name is'),
    ).toBeInTheDocument();
  });

  it('navigates to /profile when the intro is clicked', async () => {
    const user = userEvent.setup();
    renderAt('/');
    await user.click(
      screen.getByRole('button', { name: 'Continue to profile' }),
    );
    expect(
      await screen.findByLabelText('GitHub profile'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn profile')).toBeInTheDocument();
  });

  it('navigates to /profile via keyboard', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const scene = screen.getByRole('button', { name: 'Continue to profile' });
    scene.focus();
    await user.keyboard('{Enter}');
    expect(
      await screen.findByLabelText('GitHub profile'),
    ).toBeInTheDocument();
  });

  it('has safe external links on /profile', async () => {
    const user = userEvent.setup();
    renderAt('/');
    await user.click(
      screen.getByRole('button', { name: 'Continue to profile' }),
    );
    const github = await screen.findByLabelText('GitHub profile');
    const linkedin = screen.getByLabelText('LinkedIn profile');
    expect(github).toHaveAttribute(
      'href',
      'https://github.com/thiagoandf',
    );
    expect(github).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedin).toHaveAttribute(
      'href',
      'https://linkedin.com/in/thiagoandf',
    );
    expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('has a back link to / on /profile', async () => {
    const user = userEvent.setup();
    renderAt('/');
    await user.click(
      screen.getByRole('button', { name: 'Continue to profile' }),
    );
    const back = await screen.findByLabelText('Back');
    expect(back).toHaveAttribute('href', '/');
  });

  it('renders the 404 page on unknown routes', async () => {
    renderAt('/nope');
    expect(await screen.findByText('404')).toBeInTheDocument();
  });
});
