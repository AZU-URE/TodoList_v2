"use client"

type TodoItemProps={
    id:string,
    title:string,
    checked:boolean
    toggleTodo:(id:string,checked:boolean)=>void
}

export default function TodoItem({id,title,checked,toggleTodo}:TodoItemProps){
    return<li className="flex gap-2 items-center">
    <input id={id} type="checkbox" className="peer cursor-pointer" defaultChecked={checked} onChange={e=>toggleTodo(id,e.target.checked)}/>
    <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500 text-xl">{title}</label>
    </li>
}