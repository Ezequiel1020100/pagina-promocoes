
import Navbar from "./componentes/Navbar";

const produtos = [
  {
    nome: "Chuteiras Fast Football",
    descricao: "Criança/adulto",
    precoOriginal: "180,00",
    precoPromocional: "100,00",
     imagem: "/img3-chuteira.png" ,// Substitua pelo caminho correto da imagem
  },
  {
    nome: "Bola De Futebol Campo Oficial Penalty",
    descricao: "Profissional S11 R2 Xxiii",
    precoOriginal: "150,00",
    precoPromocional: "100,00",
    imagem: "/img2-bola.png",
  },
  {
    nome: "Camisa 8 Manchester City",
    descricao: "Original Gundogan",
    precoOriginal: "130,00",
    precoPromocional: "80,00",
    imagem: "/img1-camisa.png",
  },
];

const App = () => {
  return (
    <div className="min-h-screen p-4 bg-orange-500 text-white ">
        <header className="flex items-center justify-between border-b pb-2">
          <h1 className="text-xl font-bold">WELCOME</h1>
          <a href="#" className="text-blue-600 underline">Contato</a>
          
        <Navbar /> {/* Adicionando o menu de opções */}
        </header>

        <h2 className="text-white text-3xl font-bold text-center mt-4">PROMOÇÕES DO DIA</h2>


        <section className="mt-4">
          {produtos.map((produto, index) => (
            <div key={index} className="bg-yellow-300 shadow-xl text-white p-1 rounded-lg mb-3">

              <div className="flex flex-col text-black bg-yellow-500 rounded-md shadow-xl">
           <h3 className="font-bold text-center">{produto.nome}</h3>
           <p className="text-sm text-center">{produto.descricao}</p>
           </div>
            <div className="flex gap-1 items-center ml-9">
                <img src={produto.imagem} alt={produto.nome} className="w-30 h-32 object-cover rounded" />
                <div className="flex flex-col">
              <p className="text-red-500 font-bold text-3xl line-through">R$ {produto.precoOriginal}</p>
              <p className="text-green-600 text-3xl font-bold">R$ {produto.precoPromocional}</p>
              </div>
            </div>
              <button className="bg-green-600 text-white font-bold px-4 py-1 rounded w-full mt-1">COMPRAR</button>
              </div>
          ))}
        </section>
        <p className="font-bold text-black text-center">-OUTROS-</p>

        <footer className=" mt-12 text-sm">
          <p className="text-white text-center ">Desenvolvedor & Ezequiel ✨</p>
        </footer>
      </div>
  );
};

export default App;

