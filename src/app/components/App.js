import Header from "./Header"

const App = ({ children }) =>
  <main onScroll={Header.scrolled}>
    <link rel="stylesheet" href="/css/common.css"></link>
    <script src="https://use.fontawesome.com/21807ee75e.js"></script>
    <Header />
    {children}
  </main>




export default App