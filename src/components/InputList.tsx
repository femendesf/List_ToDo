import { useState } from "react"

import {PlusCircle} from 'phosphor-react'
import { ListToDo } from "./ListToDo"

import * as Checkbox from '@radix-ui/react-checkbox';
import {Circle, Check, Trash} from 'phosphor-react'

export function InputList() {

    const [newTextListToDo, setListToDo] = useState('')
    const [updateList, setUpdateList] = useState ('')

    function handleNewList(item: React.ChangeEvent<HTMLTextAreaElement>){

        item.preventDefault()
        item.target.setCustomValidity('')
        
        setListToDo(item.target.value)
        
    }


    function handleSendToList(){

        console.log(newTextListToDo)
        setListToDo('')
        setUpdateList(newTextListToDo)

    }

    
    return (
        <div>

            <div className="flex gap-2 items-center justify-center mt-[-50px] mb-16" id="list">
                <textarea 
                    className="w-[638px] h-[54px] bg-gray-500 text-gray-300 rounded-lg p-4 overflow-hidden resize-none focus:outline-none  focus:shadow-[0_0_0_1px_#5E60CE] " 
                    onChange={handleNewList}
                    value={newTextListToDo}
                    placeholder="Adicione uma nova tarefa"  
                    name="text_list" 
                    id="text_list">
                    
                </textarea>

                <button 
                    onClick={handleSendToList}
                    className="bg-blue-dark w-[90px] h-[52px] rounded-md text-gray-100 font-bold flex items-center justify-center gap-2 hover:bg-blue">
                        Criar
                        <PlusCircle weight="bold" size={16} />
                </button>

            </div>

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
       
           <p className="text-sm text-gray-100 w-[632px]">{updateList}</p>
           
           <button className="text-gray-300 w-6 h-6 hover:bg-gray-400 hover:text-danger flex items-center justify-center rounded"> <Trash size={20}/> </button>
 
       </div>
 

        </div>
        
    
    )
}

