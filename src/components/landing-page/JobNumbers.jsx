import { useState, useEffect, useRef } from "react";

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const startAnimation = () => {
    let start = 0;
    const duration = 2500;
    const interval = 50;
    const peak = Math.round(end * 1.1);
    let phase = "up";

    const timer = setInterval(() => {
      if (phase === "up") {
        start += (peak - start) / 5;
        if (start >= peak - 1) {
          phase = "down";
        }
      } else {
        start -= (peak - end) / 5;
        if (start <= end + 1) {
          start = end;
          clearInterval(timer);
        }
      }
      setCount(Math.round(start));
    }, interval);
  };

  return (
    <span ref={ref} className="text-3xl font-bold text-blue-600 md:text-4xl lg:text-5xl">
      {count.toLocaleString()}
    </span>
  );
};

const JobNumbers = () => {
  return (
    <div className="container flex flex-wrap items-center justify-center gap-4 mt-20 md:gap-6">

      {[
        { end: 102450, text: "Available jobs for you to choose from" },
        { end: 305622, text: "Active users on our platform" },
        { end: 609841, text: "Jobs completed and approved" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg w-full md:w-[30%] lg:w-[25%] p-6 shadow-md flex flex-col items-center text-center h-[150px] md:h-[180px] lg:h-[200px] justify-center"
        >
          <Counter end={item.end} />
          <p className="mt-2 text-sm text-gray-700 md:text-base">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default JobNumbers;
