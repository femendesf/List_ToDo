export function App() {

  return (
   <div>
      <div>
        <header className="bg-gray-700 h-[200px]">TODO</header>
        
        <div className="flex gap-2 items-center justify-center">
          <input 
            placeholder="Adicione uma nova tarefa" 
            className="w-[638px] h-[54px] bg-gray-500 text-gray-300 rounded-lg p-4">
          </input>

          <button className="bg-blue-dark w-[90px] h-[52px] rounded-md text-gray-100 font-bold">Criar</button>
        </div>

          <div className="bg-gray-500 w-[736px] max-h-[72px] leading-relaxed items-center flex justify-center mt-16">
              <button>Check</button>
              <p className="text-sm text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsa totam minima facilis veniam? Suscipit necessitatibus vero incidunt officiis sit. Esse aut dicta expedita saepe, aliquid id maxime veniam similique.</p>
              <button></button>
          </div>

      </div>
      

   </div>
  )
}

