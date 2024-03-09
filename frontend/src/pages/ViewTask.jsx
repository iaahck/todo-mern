import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from '../components/Spinner'

const ViewTask = () => {
  const [loading, setLoading] = useState(false);
  const [todo, setTodo] = useState([]);

  const getTodo = async () => {
      setLoading(true)
    try{
      const getAll = await fetch('/api/todo');
    const data = await getAll.json()
    setTodo(data.data)
    setLoading(false)
    }
    catch(error){
      setLoading(false)
      toast.error("failed to get data try again")
    }
  }

  useEffect(() => {
    getTodo()
  }, [])

  return(
      <>
        {loading ? (
        <Spinner />
      ) : (
        <div className="w-[400px] p-5 bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-start">
            <Link to={"/"}>
              <button className="flex bg-white mb-3 items-center p-2 rounded-md">
                <BsArrowLeft className="text-2xl text-blue-950" />
              </button>
            </Link>
          </div>
          <h2 className="text-center text-2xl text-blue-950 capitalize">
            todo lists
          </h2>
          <table className="w-full border-spacing-2 border-separate">
            <thead>
             <tr>
                <th className="border border-blue-950 rounded-md text-xl p-1">
                S/N
              </th>
              <th className="border border-blue-950 rounded-md text-xl p-1">
                title
              </th>
              <th className="border border-blue-950 rounded-md text-xl p-1">
                time
              </th>
              <th className="border border-blue-950 rounded-md text-xl p-1">
                action
              </th>
             </tr>
            </thead>

            <tbody>
               {todo.map((todo, index) => (
              <tr key={todo._id}>
                <td className="border border-blue-950 rounded-md text-xl p-1">
                  {index + 1}
                </td>
                <td className="border border-blue-950 rounded-md text-xl p-1">
                  {todo.title}
                </td>
                <td className="border border-blue-950 rounded-md text-xl p-1">
                  {todo.time}
                </td>
                <td className="flex justify-around mt-2 p-2 items-center border border-blue-950 rounded-md">
                  <Link to={`/update/${todo._id}`}>
                    <FaEdit className="text-green-700 text-2xl" />
                  </Link>
                  <Link to={`/delete/${todo._id}`}>
                    <FaTrashAlt className="text-red-600 text-2xl" />
                  </Link>
                </td>
                </tr>
            ))}
            </tbody>

          </table>

        </div>
      )}
      </>
    );
}

export default ViewTask;