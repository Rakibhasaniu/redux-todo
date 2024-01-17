
import TodoCard from './TodoCard';
import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
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
                <TodoCard></TodoCard>
                <TodoCard></TodoCard>
            </div>
        </div>
    );
};

export default TodoContainer;