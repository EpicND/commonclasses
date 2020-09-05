import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/Header.js'

// var props = {}

// props.id = 
const Post = ({props}) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header />
      <h1>Room: {id}</h1>
      <ul>
        
      </ul>
    </>
  )
}
// export async function getServerSideProps() {
//   var id = await router.query;
//   return {props: {id}}
// }

export default Post