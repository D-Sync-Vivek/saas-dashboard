import Sidebar from "@/Components/Sidebar"

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className='flex flex-row h-screen overflow-hidden'>
            <Sidebar/>
            <main className="flex flex-col flex-1">
                <div className="h-12 flex justify-center p-3 text-xl">Header</div>
                <p className="border-b border-b-gray-400"></p>
                <div className="flex-1 overflow-y-auto p-6"> {children}</div>
            </main>
        </div>
    )
}

export default layout
