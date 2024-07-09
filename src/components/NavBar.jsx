import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-slate-900 ">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="font-bold text-3xl ">
          <Link href="/">Next CRUD</Link>
        </h3>
        <ul>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-200">
              New
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
