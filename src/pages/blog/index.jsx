import Layout from "../../../components/Layout"
import Link from 'next/link'

export default function index({data}) {
    return(
        <Layout
            title="Primer Post - next.js"
            description= "agregue una descripcion"
        >
            <div>
                <h1>Lista de Posts</h1>
                {
                    data.map((post) => (
                        <div key={post.id}>
                            <h3>
                                <Link href={`/blog/${post.id}`}>
                                    {post.id} - {post.title}
                                </Link>
                            </h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export async function getStaticProps () {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const dataJson = await res.json()
        return {
            props: {
                data: dataJson
            }
        }

    } catch(error){
        console.log(error)
    }
}