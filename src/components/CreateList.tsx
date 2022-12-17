import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash} from 'phosphor-react'

import { useState } from 'react';

interface CreateListProps{

    id?: string,
    text: string,
    check?:boolean,
    onDeleteItem: (id: string) => void,
    onCheckChanged:  (id: string, checked :  boolean) => void,


}

export function CreateList({text, id, check ,onDeleteItem, onCheckChanged} : CreateListProps) {

  const [checked, setChecked] = useState(check)

  function checkChanged(){

    if(checked){
      return(
        setChecked(false),
        onCheckChanged(id!, false)
        
      )
    }else{
      return(
        setChecked(true),
        onCheckChanged(id!, true)
      ) 
    }
  }

  function handleDeleteItem() {
    onDeleteItem(id!)
  }

  return (
      
      <div 
        className="bg-gray-500 w-[736px] flex items-start p-4 mb-3 gap-3 rounded border-gray-400 border-[1px] animate-opacity" 
      >
      <Checkbox.Root 
        className={checked ? 'items-center justify-center rounded-[999px] w-[18px] h-[18px] bg-purple-dark hover:bg-purple ' 
        : 'flex items-center justify-center rounded-[999px] border-blue hover:bg-blue-dark hover:border-blue-dark hover:bg-opacity-20 border-[2px] w-[18px] h-[18px] '}

        checked = {checked}
        onCheckedChange={checkChanged}
      >
        <Checkbox.Indicator
          asChild
          className='ml-[2px] items-center justify-center'
        
        >
          <Check size={14} weight='bold' className='text-gray-100'/>
      
        </Checkbox.Indicator>
      </Checkbox.Root>
    
        <p className={checked? 'text-sm line-through text-gray-300 w-[632px]' : 'text-sm text-gray-100 w-[632px]'}>
          {text}
        </p>
        
        <button 
          onClick={handleDeleteItem}
          className="text-gray-300 w-6 h-6 hover:bg-gray-400 hover:text-danger flex items-center justify-center rounded"
        > 
          <Trash size={18}/> 
        </button>

    </div>

  ) 
}