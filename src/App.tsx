import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar onAddExpense={() => {}} />
          <main className="p-12">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  )
}