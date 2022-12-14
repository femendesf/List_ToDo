import * as Checkbox from '@radix-ui/react-checkbox';
import {Circle, Check, Trash} from 'phosphor-react'


export function ListToDo() {
    return (
        <div className="bg-gray-500 w-[736px] flex items-start p-4 mb-3 gap-3 rounded border-gray-400 border-[1px]">
         
        <Checkbox.Root 
          
          className='items-center justify-center  round-[50%] align-middle appearance-none outline-none relative'            
        >
          <Circle size={24} className='text-blue '/>

          <Checkbox.Indicator
            asChild
            
          >
            <Check size={12} weight='bold' className='text-green-400 mt-[-18px] ml-[6px]'/>
            

          </Checkbox.Indicator>


        </Checkbox.Root>
      
          <p className="text-sm text-gray-100 w-[632px] ">Lorem </p>
          
          <button className="text-gray-300 w-6 h-6 hover:bg-gray-400 hover:text-danger flex items-center justify-center rounded"> <Trash size={20}/> </button>

      </div>

    )
}