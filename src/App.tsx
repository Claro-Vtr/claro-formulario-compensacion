import './App.css'
import Header from './Components/Header'
import Checker from './Components/Checker'
import Faqs from './Components/Faqs'

function App() {
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Header />
      <Checker />
      <Faqs />
    </div>
    </>
  )
}

export default App
