import Form from './components/Form'
import Users from './components/Users'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div className="min-h-screen w-full text-[#333] flex flex-col pt-20 items-center bg-[linear-gradient(135deg,#667eea,#764ba2)] p-4 overflow-x-hidden">
      <h1 className='text-white text-3xl sm:text-4xl font-bold mb-8'>Cadastro de usuários</h1>
      <Toaster />
      <Form />
      <Users />
    </div>
  )
}

export default App
