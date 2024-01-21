
import TodoCard from './TodoCard';

import AddTodoModal from './AddTodoModal';
import TodoFilter from './TodoFilter';
import { useAppSelector } from '@/redux/hooks';

const TodoContainer = () => {
    const {todos} = useAppSelector(state => state.todos)
    return (
        <div>
            <div className='flex justify-between mb-3'>
                {/* <Button className='bg-primary-gradient text-xl font-semibold'>Add Todo</Button> */}
                <AddTodoModal></AddTodoModal>
                <TodoFilter></TodoFilter>
            </div>
            <div className='bg-primary-gradient w-full h-full rounded-xl p-5 space-y-3'>
                <div className='bg-white p-3 flex justify-center items-center rounded-md text-2xl font-bold' >
                    <p>There is no task pending</p>
                </div>
                {todos.map(item => (
                    <TodoCard {...item} />
                ))}
            </div>
        </div>
    );
};

export default TodoContainer;