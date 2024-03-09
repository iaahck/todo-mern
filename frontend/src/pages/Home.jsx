import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./../components/Spinner";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const SendData = async (e) => {
    e.preventDefault();
    const data = { title, time };
    if (!title && !time) {
      return toast.error("All Field Are Required");
    }
    setLoading(true);
    try {
      await fetch("/api/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast.success("Event Added");
      setLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-[400px] h-auto p-5 bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="text-center text-2xl capitalize text-blue-950 mt-2 font-bold underline">
            Todo App | Isahck
          </h2>
           <p className="text-center text-xl capitalize text-blue-950 mt-2 font-bold">
            using ract js & mongodb
          </p>
          <form>
            <div className="form w-full flex flex-col justify-center items-center mt-5">
              <input
                placeholder="event title"
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full my-3 border p-2 mr-2 border-blue-950 rounded-md"
              />
              <input
                placeholder="event time"
                type="text"
                onChange={(e) => setTime(e.target.value)}
                className="w-full my-3 border p-2 mr-2 border-blue-950 rounded-md"
              />
              <button
                onClick={SendData}
                className="w-full bg-blue-950 p-2 text-white"
              >
                add task
              </button>
              <Link to={"/view"}>
                <button className="w-full mt-3 bg-green-500 p-2 text-white">
                  View Task
                </button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
