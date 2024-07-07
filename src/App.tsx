import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment } from './redux/features/counterslice';

function App() {

  const {count} = useSelector((state) => state.counter)
  const dispatch = useDispatch();

  return (
    <>
      <div className="h-screen flex justify-center items-center ">
        <div className="flex space-x-5 bg-purple-900 p-20 rounded-md">
          <button onClick={()=> dispatch(increment())} className="px-4 py-2 bg-green-700 text-white hover:bg-green-950 text-sm rounded-sm">
            Increment
          </button>
          <h2 className="font-bold text-xl py-2 px-4 bg-black text-white">{count}</h2>
          <button onClick={()=> dispatch(decrement())} className="px-4 py-2 bg-red-700 text-white hover:bg-red-950 text-sm rounded-sm">
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default App
