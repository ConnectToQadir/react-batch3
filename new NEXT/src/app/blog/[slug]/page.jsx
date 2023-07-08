
export const metadata = {
    title: 'Dynamic Blog',
    description: 'Blogs Dynamic Description',
}

const page = (props) => {



  return (
    <div>
        <h1>Dynamic Blog Description Route = {props.params.slug} </h1>
    </div>
  )
}

export default page