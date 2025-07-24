function NavBar(){
    return(
        <>
        <nav className="flex w-[100%]  my-12" >
            <div className="w-[20%]">
                <span className="font-medium text-[25px] ml-[2rem] cursor-pointer">Sarobar</span>
            </div>
            <div className="w-[50%] ">
                <ul className="flex gap-x-10 ml-[20rem] text-[18px] ">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Contact</li>
                    <li className="cursor-pointer">Projects</li>
                </ul>
            </div>
            <div className="flex justify-end w-[30%] ">
                <button className="px-4 py-2 bg-primary rounded-md text-white text-[18px] hover:shadow-2xl">Hire me
                </button>
            </div>
        </nav>
        </>
    )
}

export default NavBar;