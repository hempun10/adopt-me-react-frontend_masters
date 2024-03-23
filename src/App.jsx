
import './App.css'
import Details from './Details'
import Pet from './Pet'
import SearchParams from './SearchParams'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})
function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div>
            <h1>Adopt Me</h1>
            <Routes>
              <Route path='/details/:id' element={<Details />} />
              <Route path='/' element={<SearchParams />} />
            </Routes>
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  )
}

export default App
