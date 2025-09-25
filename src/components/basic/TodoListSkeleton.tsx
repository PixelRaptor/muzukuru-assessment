import React from 'react'
import TodoItemSkeleton from './TodoItemSkeleton'

export default function TodoListSkeleton() {
  return (
		<ul className="mt-[42px] flex flex-col gap-[20px]">
			<TodoItemSkeleton />
			<TodoItemSkeleton />
			<TodoItemSkeleton />
			<TodoItemSkeleton />
			<TodoItemSkeleton />
		</ul>
  )
}
