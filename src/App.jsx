import Dashboard from "./pages/Dashboard"
import ThemeProvider from "./features/ThemeSwitching/ThemeContext"

function App() {

  return (
    <>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </>
  )
}

export default App