
const themeBtn: HTMLElement = document.getElementById('theme-switch')!;

export function toggleTheme(): void {
  if (themeBtn.classList.contains('light-mode')) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

export function setTheme(type: string): void {
  
  if (type === 'dark') {
    document.body.style.backgroundColor = "#17181c";
    document.body.style.color = "#fff";
    themeBtn.classList.remove('light-mode');
    themeBtn.classList.add('night-mode');
    localStorage.setItem('theme', 'dark');
  }

  if (type === 'light') {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#17181c";
    themeBtn.classList.remove('night-mode');
    themeBtn.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
}
