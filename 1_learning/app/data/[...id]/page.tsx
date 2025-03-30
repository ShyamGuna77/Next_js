




type pageParams = {
    params:{
        id:string
    }
}



export default function Pages ({params}:pageParams) {
  return (
    <>
    {JSON.stringify(params.id)}
    </>
  )
}