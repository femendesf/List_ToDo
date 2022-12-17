import { useState } from "react"

import { PlusCircle} from 'phosphor-react'
import { CreateList } from "./CreateList"

import { v4 as uuidv4 } from 'uuid';

import { LayoutEmptyList } from "./LayoutEmptyList";

interface Task{
  id: string,
  text: string,
  check?: boolean
}

export function InputList() {

    const [textListToDo, setTextListToDo] = useState('')

    const [listToDo, setListToDo] = useState<Task[]>([])

    function handleTextToList(item: React.ChangeEvent<HTMLTextAreaElement>){

        item.preventDefault()
        item.target.setCustomValidity('')
        
        setTextListToDo(item.target.value)
        
    }
    
    function handleCreateList(){
      
      if(textListToDo == ''){
        alert('DIGITA ALGO SEU ARROMBADO, QUER CRIAR UMA LISTA COM NADA?????????? LIXOOOO')
      }else{
        setListToDo([...listToDo,{
        id: uuidv4(),
        text: textListToDo,
        check: false
      }])
      }

      setTextListToDo('')
    }

    function deleteItem(itemToDelete: string){
     
      const newListToDO = listToDo.filter(item => {
       return(
        item.id != itemToDelete
       )
      })

      setListToDo(newListToDO)
    }
    
    function updateCheckFromList(idCheck: string, checked : boolean){

      const newList = listToDo.map(item => {
        if(item.id == idCheck){
           item.check = checked
        }
        return item
      })

      setListToDo(newList)
    }

    const countCheck = listToDo.reduce((atual, {check}) => {
      if(check == true){
        atual +=1
      }
      return atual
    }, 0)

    console.log(countCheck)

      return (

        <div>

            <div className="flex gap-2 items-center justify-center mt-[-50px] mb-16" id="list">
                <textarea 
                    className="w-[638px] h-[54px] bg-gray-500 text-gray-300 rounded-lg p-4 overflow-hidden resize-none focus:outline-none focus:shadow-[0_0_0_1px_#5E60CE] " 
                    onChange={handleTextToList}
                    value={textListToDo}
                    placeholder="Adicione uma nova tarefa"  
                    name="text_list" 
                    required
                    id="text_list">
                    
                    
                </textarea>

                <button
                    onClick={handleCreateList}
                    className="bg-blue-dark w-[90px] h-[52px] rounded-md text-gray-100 font-bold flex items-center justify-center gap-2 hover:bg-blue">
                        Criar
                        <PlusCircle weight="bold" size={16} />
                </button>

            </div>

          <main >

            <header className="flex items-center justify-between h-5 mb-6">
              <h2 className="text-sm font-bold text-blue flex gap-2 items-center ">Tarefas criadas 
              <span 
                className="flex justify-center items-center px-2 py-[2px] bg-gray-400 rounded-[100px] text-gray-200 text-xs font-bold"
              >
                {listToDo.length}
                </span>
              </h2>
              
              <h2 className="flex items-center justify-center text-sm text-purple font-bold gap-2">
                Concluídas
                <span className="flex justify-center items-center px-2 py-[2px] bg-gray-400 rounded-[100px] text-gray-200 text-xs font-bold">{countCheck} de {listToDo.length}</span>
              </h2>

            </header>

            {(listToDo.length > 0 ? listToDo.map(({id, text, check}) => {
              return (
                <CreateList
                  key={id}
                  id={id}
                  text={text}
                  check = {check}
                  onDeleteItem={deleteItem}
                  onCheckChanged = {updateCheckFromList
                  }
                 
                />
              )
            }): <LayoutEmptyList/>)
            }
          </main>
        </div>
    ) 
}
