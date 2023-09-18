import { redirect } from "next/navigation";
import Link from "next/link"
import prisma from "@/db";
async function createItem(data:FormData){
	"use server"
	
	const title = data.get("title");
	// console.log(typeof title);

	if(typeof title != "string" || title.length == 0){
		throw Error("Invalid title");
		// redirect('/')
	}

	await prisma.todolist.create({data:{title,checked:false}});
	redirect("/")
	 
}
export default function New() {
	return <>
	<header className="m-4 items-center flex justify-between">
		<h1 className="text-2xl">New Item</h1>
	</header>
	<form action={createItem} className="flex-col items-center ">
		<input name="title" placeholder="Enter Item" type="text" className="w-full text-xl border px-2 py-1 rounded-md hover:bg-slate-500 focus-within:bg-slate-700 bg-transparent"/>
		<div className="flex mt-5 space-x-4 justify-end">
			<button className="text-xl border px-2 py-1 rounded-md hover:bg-slate-500 focus-within:bg-slate-700 bg-slate-700">Submit</button>
			<Link href='..' className="text-xl border px-2 py-1 rounded-md hover:bg-slate-500 focus-within:bg-slate-700">Back</Link>
		</div>
	</form>
	</>
}