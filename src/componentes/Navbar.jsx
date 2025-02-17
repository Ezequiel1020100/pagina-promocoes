import { useState } from "react";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="fixed top-16 left-0">
      {/* Botão de menu */}
      <button
        onClick={() => setMenuAberto(!menuAberto)}
        className="bg-gray-800 text-white p-3 rounded-md shadow-lg"
      >
        ☰
      </button>

      {/* Menu de opções */}
      {menuAberto && (
        <nav className="bg-gray-800 text-white  rounded-lg fixed top-28 left-0 w-22 shadow-lg">
          <ul className="flex flex-col gap-2">
            <li>
              <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded">
                🏠 Home
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded">
                🔥Novidades
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded">
                📞 Contato
              </button>
            </li>
            <li>
              <button className="flex items-center gap-2 w-full p-2 hover:bg-gray-700 rounded">
                ⚙️ Config
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
