import React from 'react'

const Faq = () => {
     const [showItems, setShowItems] = useState([false, false, false]);

  const toggleShowItem = (index) => {
    setShowItems((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };

  const questions = [
    {
      title: "What services does your firm offer?",
      content:
        "Our consulting firm specializes in a wide range of services tailored to meet the diverse needs of our clients. These services include but are not limited to strategic business planning, business development, market research, training & development, financial analysis, project management, Technology Solutions & organizational development.",
    },
    {
      title: "How experienced are your consultants?",
      content:
        " Our consultants are seasoned professionals with extensive experience across various industries. Each consultant brings a wealth of knowledge, having worked on numerous projects and overcoming diverse challenges. ",
    },
    {
      title: "How do you ensure confidentiality & security?",
      content:
        "We prioritize confidentiality and security at every stage of our collaboration. Our team adheres to strict data protection protocols, ensuring that all sensitive information is handled with the utmost care. We use secure communication channels and robust encryption methods to protect your data from unauthorized access.",
    },
    {
      title: "Measure experience with clients",
      content:
        "We measure our experience with clients through key metrics such as client satisfaction, project success rates, and client retention. We also track client referrals, demonstrating the trust and quality of our work. Our diverse industry experience and detailed case studies further highlight our expertise, ensuring continuous improvement in delivering exceptional consulting services.",
    },
    ];
    
  return (
      <>
      <div className="w-[100%] lg:w-[60%]">
              {questions.map((question, index) => (
                <div key={index} className="w-full flex gap-2 mb-4">
                  <div className="w-[80%] py-4 px-4 rounded-3xl border border-[#F0F6FF]">
                    <div>
                      <p className="text-lg font-semibold">{question.title}</p>
                      {showItems[index] && (
                        <>
                          <hr className="my-2" />
                          <p className="text-[#999]">{question.content}</p>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="w-[20%] my-4">
                    <button onClick={() => toggleShowItem(index)}>
                      {showItems[index] ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="36"
                          height="36"
                          fill="rgba(226,96,21,1)"
                        >
                          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="36"
                          height="36"
                          fill="rgba(226,96,21,1)"
                        >
                          <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
      </>
  )
}

export default Faq