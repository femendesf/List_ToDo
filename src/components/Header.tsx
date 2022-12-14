export function Header() {

    return (
        <header className="bg-gray-700 h-[200px] flex items-center justify-center gap-3">
            <img className='flex items-center justify-center w-[22px] h-[36px]' src="src\asssets\logo.svg" alt="" />
            <div className='flex text-[40px]'>
                <h1 className='text-blue font-black'>to</h1>
                <h1 className='text-purple-dark font-black'>do</h1>
            </div>
        </header>
    )
}