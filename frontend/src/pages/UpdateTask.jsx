import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import Spinner from '../components/Spinner'

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const getTodo = async () => {
    setLoading(true)
    try {
      const getAll = await fetch(`http://localhost:3333/todo/${id}`);
      const data = await getAll.json()
      setTitle(data.title)
      setTime(data.time)
      console.table(data)
      setLoading(false)
    }
    catch (error) {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTodo();
  }, []);

  const SendData = async (e) => {
    e.preventDefault();
    const data = { title, time };
    console.log(data)
    setLoading(true);
    try {
      await fetch(`http://localhost:3333/todo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast.success("Event Updated");
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-[400px] h-auto p-5 bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex items-center justify-start">
            <Link to={"/"}>
              <button className="flex bg-white mb-3 items-center p-2 rounded-md">
                <BsArrowLeft className="text-2xl text-blue-950" />
              </button>
            </Link>
          </div>
          <h2 className="text-center text-2xl capitalize text-blue-950 mt-2 font-bold underline">
            Edit Task
          </h2>
          <form>
            <div className="form w-full flex flex-col justify-center items-center mt-5">
              <input
                value={title}
                placeholder="event title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full my-3 border p-2 mr-2 border-blue-950 rounded-md"
              />
              <input
                value={time}
                placeholder="event time"
                type="text"
                onChange={(e) => setTime(e.target.value)}
                className="w-full my-3 border p-2 mr-2 border-blue-950 rounded-md"
              />
              <button
                onClick={SendData}
                className="w-full bg-yellow-500 p-2 text-white"
              >
                Update task
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateTask;
