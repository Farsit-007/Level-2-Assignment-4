
export default function Footer() {
    return (
        <footer className="flex flex-col max-w-[1380px] mx-auto px-4">
            <div className="flex flex-col  items-center justify-between gap-5  py-8  md:flex-row md:gap-0">
                <h5 className="text-2xl font-bold">NavigateUI</h5>
                <nav className="text-lg">
                    <ul className="flex h-full items-center justify-center gap-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Home</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Contact</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <aside className=" py-5 text-center text-sm  ">
                <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
            </aside>
        </footer>
    );
}
