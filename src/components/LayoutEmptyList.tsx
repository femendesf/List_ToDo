import {Clipboard} from 'phosphor-react'

export function LayoutEmptyList(){

   return(
    <div className='flex flex-col items-center justify-center shadow-[0_0_0_1px_#333333] rounded-xl w-auto h-[244px] animate-[opacity_1s]'>

        <img src="src\asssets\clipborad.svg" alt="Clipboard" className='mb-4' />
        <h2 className='font-bold text-gray-300'>Você ainda não tem tarefas cadastradas</h2>
        <h3 className='text-gray-300'>Crie tarefas e organize seus itens a fazer</h3>
    </div>
   )
}