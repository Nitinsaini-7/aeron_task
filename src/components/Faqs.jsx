import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "Are there any age limit?",
      a: "Yes, there is an age limit. The age span is between 18-50 for this product. This age groups are important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.",
    },
    {
      q: "How %25 cash back payment works?",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi adipisci vitae ducimus ex facere laudantium voluptatem id blanditiis, dolorem minima.",
    },
    {
      q: "How I use 3 year freemium option?",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi adipisci vitae ducimus ex facere laudantium voluptatem id blanditiis, dolorem minima.",
    },
    {
      q: "What is the process to get lump sum payment when risk is realized?",
      a: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi adipisci vitae ducimus ex facere laudantium voluptatem id blanditiis, dolorem minima.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">
           Frequently Asked <span className="text-orange-500">Questions</span>
          </h1>
        </div>
      <div className="mt-14">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};
