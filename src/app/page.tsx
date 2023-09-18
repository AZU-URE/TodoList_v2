import Link from "next/link"
import prisma from "../db"
import TodoItem from "@/components/TodoItem";
// 'use client';

function todo(){
return prisma.todolist.findMany();
}

async function toggleTodo(id:string,checked:boolean){
	"use server"
	await prisma.todolist.update({where:{id},data:{checked}})
	// console.log("hiii");
	
}
export default async function Home(){
	// await prisma.todolist.create({data:{title:"test1",checked:false}})
	const todos = await todo();

	// const onClickBtn = ()=>{
	// 	alert("hii");
	// }

	return <>
	<header className="m-4 items-center flex justify-between">
		<h1 className="text-2xl">Todos</h1>
		<Link href='/new' className="text-xl border px-2 py-1 rounded-md hover:bg-slate-500 focus-within:bg-slate-700 ">New</Link>		
	</header> 
	<ul>
		{todos.map((todo)=>(
			<TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/> 
		))}
	</ul>
		</>
	
}