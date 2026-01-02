"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-8 xl:gap-12">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <div key={index} className="flex items-start gap-6">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5 className="font-bold">{value?.title}</h5>
                        <p className="font-normal text-gray-600">{value?.institution}</p>
                        <p className="font-normal text-gray-500">{value?.results}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* --- SKILLS SCROLL SECTION START --- */}
              <div className="w-full">
                <div 
                  className="pr-4 overflow-y-auto scrollbar-thin" 
                  style={{ 
                    maxHeight: "460px", /* Height roughly for 2 rows + gap */
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#FE4300 #f1f1f1'
                  }}
                >
                  <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full">
                    {educationData?.skills?.map((value: any, index: any) => {
                      return (
                        <div
                          key={index}
                          className="p-4 xl:p-6 border border-softGray rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between bg-white hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col items-center gap-5">
                            <Image
                              src={getImgPath(value?.icon)}
                              alt={value?.name}
                              width={70}
                              height={70}
                              className="object-contain"
                            />
                            <p className="text-black font-semibold text-center">{value?.name}</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="9"
                                  height="9"
                                  rx="4.5"
                                  fill={i < value?.rating ? "#FE4300" : "#C0D8E0"}
                                />
                              </svg>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* --- SKILLS SCROLL SECTION END --- */}

            </div>
          </div>
        </div>
      </div>

      {/* Global CSS for the scrollbar appearance */}
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #FE4300;
          border-radius: 10px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #e03a00;
        }
      `}</style>
    </section>
  );
};

export default EducationSkills;