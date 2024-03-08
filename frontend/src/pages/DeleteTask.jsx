import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DeleteTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteTodo = async () => {
   try {
       const deta = await fetch(`http://localhost:3333/todo/${id}`, {
        method: "DELETE",
      });
      if(deta){ navigate('/view') }
        
    } catch (error) {
      console.log("erro");
    }
  };

  return (
    <div className="w-[350px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center font-bold text-blue-950 text-2xl mb-4">
            Are You Sure ?
          </h2>

          <div className="flex items-center justify-between">
            <button
              onClick={deleteTodo}
              className="bg-red-700 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded focus:shadow-outline"
            >
              Yes Delete
            </button>
             <Link to={"/view"}>
               <button className="bg-green-700 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:shadow-outline">
                 No Go Back
               </button>
             </Link>
           </div>
         </div>
       </div>
     </div>
  );
};

export default DeleteTask;
