import { useEffect, useState } from "react";
import {
  img3ReuestingBear,
  img1HandHoldingDancingBear,
  img2SvagTeddyBear,
  img4BrokenHeartBear,
  img5BikeRider,
  img7SpiningBear,
  img11kiss,
  img14TeddyWait,
} from "./images";
import shadiSong from "./songs/humari_shadi_me(128k).mp3";
import Accept from "./components/accept";
import { Alert } from "flowbite-react";

function App() {
  let [count, setCount] = useState(0);
  const [isRejectClick, setIsRejectClick] = useState(false);

  const [isAcceptClick, setIsAcceptClick] = useState(false);

  const arr = [
    img3ReuestingBear,
    img2SvagTeddyBear,
    img14TeddyWait,
    img5BikeRider,
    img7SpiningBear,
    img11kiss,
    img1HandHoldingDancingBear,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % arr.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const b = new Audio(shadiSong);

  // acceptHandler
  const acceptHandler = () => {
    setIsRejectClick(false);
    setIsAcceptClick(true);
    b.currentTime = 21;
    b.play();
  };
  // rejectHandler

  const rejectHandler = () => {
    setIsRejectClick(true);
  };

  return (
    <>
      {isAcceptClick ? (
        <Accept />
      ) : (
        <div className="min-h-screen p-3 ">
          <div className="max-w-5xl w-full mx-auto flex flex-col items-center gap-5 p-1">
            <img
              src={isRejectClick ? img4BrokenHeartBear : arr[count]}
              className="w-40 h-40 md:w-50 md:h-50 mt-7 object-cover"
              alt="teddy"
            />
            <h1 className="text-2xl md:text-4xl font-semibold text-center text-[#d90429]">
              I would love to spend Valentine's Day with you.
              <br />
              Will you be my Valentine?
            </h1>

            <div className="flex flex-col sm:flex-row sm:mx-auto max-w-xl w-full sm:justify-between  gap-5 p-3">
              <button
                onClick={acceptHandler}
                className="bg-green-500 min-w-52 h-10 text-white text-lg rounded-md px-5"
              >
                {isRejectClick
                  ? "Itna bura hu kya me piliz click me"
                  : "Accept"}
              </button>
              <button
                onClick={rejectHandler}
                className="bg-red-500 min-w-52 h-10  text-white text-lg rounded-md"
              >
                Reject
              </button>
            </div>
            {isRejectClick && (
              <Alert
                color={"failure"}
                className="mt-7 p-3 text-xl border border-red-600"
              >
                Jo bhi Reject karegi wo kinnnar hai re baba ! 😂
              </Alert>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
