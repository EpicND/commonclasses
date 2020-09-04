import Header from "./Header"

const App = ({ children }) =>
  <main>
    <link rel="stylesheet" href="/css/common.css"></link>
    <Header />
    {children}
  </main>




export default App