
type children = {
    children:React.ReactNode
}
export default function Layout ({children}:children) {
 return (
    <>
    <h2 className="text-5xl font-bold text-red-400">
        This is a layout inside Layout
    </h2>
    {children}
    </>
 )
}