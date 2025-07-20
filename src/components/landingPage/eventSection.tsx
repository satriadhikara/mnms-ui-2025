"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type EventType = {
  type: string;
  title: string;
  date: string;
  description: string | React.ReactNode;
  image: string;
  buttonText: string;
  buttonText2?: string;
  buttonLink?: string;
  buttonLink2?: string;
};

const EventSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState("");

  const events = [
    {
      type: "competitions",
      title: "MnMs' Competitions",
      date: "July 20th - December 6th",
      description:
        "A national-level competition for undergraduate (S1) or diploma (D3/D4) students, designed to hone their skills in solving and providing innovative solutions to real-world problems.",
      image: "/MNMScompe.png",
      buttonText: "Learn More",
      buttonLink: "/competitions",
    },
  ];

  const events2 = [
    {
      type: "case study competition",
      title: "Case Study Competition",
      date: "July 20th - December 6th",
      description: (
        <>
          <span className="font-bold">The Case Study Competition (CSC)</span> is
          a national event for undegraduates (S1) & diploma (D3/D4) students to
          solve real-world challenges in metallurgy and sustainability through
          data-driven proposals & presentations judged by industry experts.
        </>
      ),
      image: "/MNMScsc.png",
      buttonText: "Learn More",
      buttonText2: "Register",
      buttonLink: "/csc",
      buttonLink2: "/csc/form",
    },
    {
      type: "events",
      title: "Innovative Infographic Competition",
      date: "6th December 2025",
      description: (
        <>
          <span className="font-bold">
            The Innovative Infographic Competition (IIC)
          </span>{" "}
          is a national contest for undegraduates (S1) & diploma (D3/D4)
          students to propose solutions to current issues through a white paper
          and infographic on sustainable mining waste management.
        </>
      ),
      image: "/MNMSiic.png",
      buttonText: "Learn More",
      buttonText2: "Register",
      buttonLink: "/iic",
      buttonLink2: "/iic/form",
    },
  ];

  const events3 = [
    {
      type: "Company Visit",
      title: "Company Visit",
      date: "September 2026",
      description: (
        <>
          This year, the 20th Metallurgy and Materials&apos; Week will include a
          company visit to a metallurgy based company. As part of the event
          agenda
        </>
      ),
      image: "/MNMScv.png",
      buttonText: "Learn More",
      buttonText2: "Register",
      buttonLink: "/company-visit",
      buttonLink2: "/company-visit/form",
    },
    {
      type: "SUMMIT",
      title: "MnMs' SUMMIT",
      date: "6th December 2025",
      description: (
        <>
          <span className="font-bold">MnMs&apos; Summit</span> is MnMs&apos; Week&apos;s
          biggest event, consisting of{" "}
          <span className="font-bold">National Seminar</span> AND{" "}
          <span className="font-bold">MnMs&apos; Dialogue. </span>
        </>
      ),
      image: "/MNMSsummit.png",
      buttonText: "Learn More",
      buttonText2: "Register",
      buttonLink: "/summit",
      buttonLink2: "/summit/form",
    },
  ];

  const pages = [
    {
      title: "Events Timeline",
      events: events,
      background: "/EventsBG.svg",
      bgProps:
        "absolute top-0 left-0 w-full h-[25vh] md:h-[50vh] lg:h-[60vh] object-cover",
      titleColor: "text-white",
      stars: [
        {
          src: "/Star8.png",
          className:
            "absolute top-1 left-2 sm:top-2 sm:left-5 md:top-3 md:left-10 lg:top-5 lg:left-20",
          width: 50,
          height: 50,
          responsive:
            "w-[35px] h-[35px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]",
        },
        {
          src: "/Star9.png",
          className:
            "absolute bottom-1 left-5 sm:bottom-2 sm:left-10 md:bottom-3 md:left-20 lg:bottom-5 lg:left-40",
          width: 135,
          height: 135,
          responsive:
            "w-[80px] h-[80px] sm:w-[135px] sm:h-[135px] md:w-[180px] md:h-[180px] lg:w-[270px] lg:h-[270px]",
        },
        {
          src: "/Star10.png",
          className:
            "absolute top-2 right-5 sm:top-5 sm:right-10 md:top-6 md:right-25 lg:top-10 lg:right-50",
          width: 135,
          height: 135,
          responsive:
            "w-[80px] h-[80px] sm:w-[135px] sm:h-[135px] md:w-[180px] md:h-[180px] lg:w-[270px] lg:h-[270px]",
        },
        {
          src: "/Star11.png",
          className:
            "absolute bottom-4 right-2 sm:bottom-8 sm:right-5 md:bottom-10 md:right-10 lg:bottom-15 lg:right-20",
          width: 40,
          height: 40,
          responsive:
            "w-[25px] h-[25px] sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px]",
        },
      ],
      hasEllipse: true,
    },
    {
      title: "MnMs' Week Competition",
      events: events2,
      background: "/EventsBG2.svg",
      bgProps:
        "absolute bottom-0 left-0 w-full h-[25vh] md:h-[70vh] lg:h-[90vh] object-cover",
      titleColor: "text-[#DFE00D]",
      stars: [
        {
          src: "/Star12.png",
          className: "absolute bottom-0 left-1 sm:left-2 md:left-5 lg:left-10",
          width: 135,
          height: 135,
          responsive:
            "w-[80px] h-[80px] sm:w-[135px] sm:h-[135px] md:w-[180px] md:h-[180px] lg:w-[270px] lg:h-[270px]",
        },
        {
          src: "/Star13.png",
          className:
            "absolute top-1 left-10 sm:top-3 sm:left-20 md:top-4 md:left-45 lg:top-6 lg:left-90",
          width: 75,
          height: 75,
          responsive:
            "w-[45px] h-[45px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]",
        },
        {
          src: "/Star14.png",
          className:
            "absolute top-6 right-2 sm:top-12 sm:right-5 md:top-25 md:right-15 lg:top-50 lg:right-27",
          width: 150,
          height: 150,
          responsive:
            "w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]",
        },
      ],
      hasEllipse: false,
    },
    {
      title: "MnMs' Week Event",
      events: events3,
      background: ["/EventsBG3.svg", "/EventsBG4.svg"],
      bgProps: ["absolute bottom-0 left-0", "absolute top-0 right-0"],
      titleColor: "text-[#DFE00D]",
      stars: [
        {
          src: "/Star15.png",
          className:
            "absolute top-6 left-2 sm:top-12 sm:left-5 md:top-25 md:left-15 lg:top-50 lg:left-27",
          width: 150,
          height: 150,
          responsive:
            "w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]",
        },
        {
          src: "/Star16.png",
          className:
            "absolute top-1 right-10 sm:top-3 sm:right-20 md:top-4 md:right-55 lg:top-7 lg:right-110",
          width: 75,
          height: 75,
          responsive:
            "w-[45px] h-[45px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]",
        },
        {
          src: "/Star17.png",
          className:
            "absolute bottom-0 right-2 sm:right-5 md:right-15 lg:right-27",
          width: 150,
          height: 150,
          responsive:
            "w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]",
        },
      ],
      hasEllipse: false,
    },
  ];

  const nextPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection("next");

    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection("");
      }, 100);
    }, 700);
  };

  const prevPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setSlideDirection("prev");

    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection("");
      }, 100);
    }, 700);
  };

  interface GoToPage {
    (index: number): void;
  }

  const goToPage: GoToPage = (index) => {
    if (isTransitioning || index === currentPage) return;
    setIsTransitioning(true);
    setSlideDirection(index > currentPage ? "next" : "prev");

    setTimeout(() => {
      setCurrentPage(index);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection("");
      }, 100);
    }, 700);
  };

  // Background Animation
  const getBackgroundTransform = () => {
    if (!isTransitioning) return "opacity-100 scale-100";
    return "opacity-0 scale-105";
  };

  // Star Animation
  interface GetStarTransform {
    (index: number): string;
  }

  const getStarTransform: GetStarTransform = (index) => {
    if (!isTransitioning)
      return "opacity-100 scale-100 translate-x-0 translate-y-0 rotate-0";

    const exitAnimations: string[] = [
      "opacity-0 scale-75 translate-x-[-100px] translate-y-[-50px] rotate-180",
      "opacity-0 scale-75 translate-x-[100px] translate-y-[50px] rotate-270",
      "opacity-0 scale-75 translate-x-[-75px] translate-y-[75px] rotate-90",
      "opacity-0 scale-75 translate-x-[75px] translate-y-[-75px] rotate-45",
    ];

    return exitAnimations[index % exitAnimations.length];
  };

  // Title Animation
  const getTitleTransform = () => {
    if (!isTransitioning) return "opacity-100 translate-y-0";
    return slideDirection === "next"
      ? "opacity-0 translate-y-[-50px]"
      : "opacity-0 translate-y-[50px]";
  };

  // Card Animation
  interface GetCardTransform {
    (index: number): string;
  }

  const getCardTransform: GetCardTransform = (index) => {
    if (!isTransitioning)
      return "opacity-100 scale-100 translate-x-0 translate-y-0";

    const delay: number = index * 100;
    const direction: number = slideDirection === "next" ? 1 : -1;

    return `opacity-0 scale-95 translate-x-[${direction * 50
      }px] translate-y-[25px]`;
  };

  // Ellipse Animation
  const getEllipseTransform = () => {
    if (!isTransitioning) return "opacity-100 scale-100";
    return "opacity-0 scale-90";
  };

  interface StarType {
    src: string;
    className: string;
    width: number;
    height: number;
    responsive: string;
  }

  interface PageData {
    title: string;
    events: EventType[];
    background: string | string[];
    bgProps: string | string[];
    titleColor: string;
    stars: StarType[];
    hasEllipse: boolean;
  }

  interface RenderPageProps {
    (pageData: PageData): React.ReactNode;
  }

  const renderPage: RenderPageProps = (pageData) => {
    return (
      <div className="bg-black bg-auto bg-center min-h-screen flex items-center justify-center relative overflow-hidden px-1 sm:px-2 md:px-3 lg:px-4 xl:px-8 py-4 sm:py-8 md:py-4 lg:py-0">
        {/* Background with individual animation */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${getBackgroundTransform()}`}
        >
          {Array.isArray(pageData.background) ? (
            (pageData.background as string[]).map((bg, index) => (
              <Image
                key={index}
                src={bg}
                alt="Theme Background"
                width={index === 0 ? 700 : 1000}
                height={index === 0 ? 700 : 1000}
                className={`${(pageData.bgProps as string[])[index]
                  } transition-all duration-700 ease-in-out`}
              />
            ))
          ) : (
            <Image
              src={pageData.background as string}
              alt="Theme Background"
              width={(pageData.background as string).includes("2") ? 500 : 200}
              height={(pageData.background as string).includes("2") ? 500 : 100}
              className={`${pageData.bgProps as string
                } transition-all duration-700 ease-in-out`}
            />
          )}
        </div>

        {/* Stars with individual animations */}
        {pageData.stars.map((star: StarType, index: number) => (
          <Image
            key={index}
            src={star.src}
            alt="Star"
            width={star.width}
            height={star.height}
            className={`${star.className} ${star.responsive
              } transition-all duration-700 ease-in-out ${getStarTransform(
                index
              )}`}
            style={{
              transitionDelay: `${index * 150}ms`,
              zIndex: 5,
            }}
          />
        ))}

        {/* Ellipse with individual animation */}
        {pageData.hasEllipse && (
          <Image
            src="/Ellipse1.png"
            alt="Ellipse"
            width={900}
            height={900}
            className={`absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 md:-bottom-35 md:-right-60 lg:-bottom-50 lg:-right-100 xl:-bottom-32 xl:-right-60 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] lg:w-[900px] lg:h-[900px] xl:w-[600px] xl:h-[600px] transition-all duration-700 ease-in-out ${getEllipseTransform()}`}
            style={{ zIndex: 10 }}
          />
        )}

        {/* Events Timeline Content */}
        <div
          className="relative w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-7xl xl:max-w-5xl mx-auto"
          style={{ zIndex: 20 }}
        >
          {/* Title with individual animation */}
          <div className="text-center mb-3 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-8">
            <h1
              className={`text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold font-stylistic-alternates ${pageData.titleColor
                } mb-2 sm:mb-4 md:mb-3 lg:mb-4 xl:mb-2 transition-all duration-700 ease-in-out ${getTitleTransform()}`}
            >
              {pageData.title}
            </h1>
          </div>

          {/* Event Cards Container with individual animations */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-4 px-1 sm:px-2 md:px-3 lg:px-5 xl:px-3">
            {pageData.events.map((event: EventType, index: number) => (
              <div
                key={index}
                className={`relative overflow-hidden max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-sm w-full transform transition-all duration-700 ease-in-out h-[320px] sm:h-[400px] md:h-[420px] lg:h-[500px] xl:h-[420px] ${getCardTransform(
                  index
                )}`}
                style={{
                  borderRadius: "20px",
                  background: "#25B8B6",
                  transitionDelay: `${index * 200}ms`,
                  zIndex: 30 + index,
                }}
              >
                {/* Top Container Border Gradient */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 border border-transparent bg-gradient-to-r from-black via-white to-black bg-clip-border"
                  style={{ zIndex: 1 }}
                ></div>

                {/* Card Header */}
                <div
                  className="flex justify-center w-full items-center px-2 sm:px-4 md:px-5 lg:px-6 xl:px-4 py-2 sm:py-4 md:py-4 lg:py-6 xl:py-4 text-center relative"
                  style={{ zIndex: 3 }}
                >
                  <h2 className="text-sm sm:text-lg md:text-base lg:text-xl xl:text-base font-bold text-white">
                    {event.title}
                  </h2>
                </div>

                {/* Card Image */}
                <div
                  className="absolute top-12 sm:top-16 md:top-16 lg:top-20 xl:top-16 left-0 right-0 bottom-0 border-2 border-transparent bg-gradient-to-r from-black via-white to-black bg-clip-border"
                  style={{ zIndex: 2 }}
                >
                  <div className="w-full h-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Top Blur Overlay */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-black/70 via-black/30 to-transparent backdrop-blur-sm"
                    style={{ zIndex: 1 }}
                  ></div>

                  {/* Bottom Blur Overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-black/70 via-black/30 to-transparent backdrop-blur-sm"
                    style={{ zIndex: 1 }}
                  ></div>
                </div>

                {/* Card Content Overlay - HIGHEST Z-INDEX */}
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent px-2 sm:px-4 md:px-4 lg:px-6 xl:px-4 py-2 sm:py-4 md:py-4 lg:py-6 xl:py-4 text-white"
                  style={{
                    zIndex: 50,
                    pointerEvents: "auto",
                  }}
                >
                  {currentPage === 0 ? (
                    // First page layout
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-1 gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-1">
                      <div className="flex flex-col sm:flex-row justify-between w-full gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-1">
                        <div className="text-[#DFE00D] text-sm sm:text-lg md:text-base lg:text-xl xl:text-base font-bold font-sans mb-1 underline">
                          {event.date}
                        </div>
                        {event.buttonLink && (
                          <Link
                            href={event.buttonLink}
                            className="bg-white/20 hover:bg-white/30 active:bg-white/40 px-2 sm:px-4 md:px-3 lg:px-6 xl:px-3 py-1 sm:py-2 md:py-2 lg:py-3 xl:py-1 rounded-full text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs font-sans font-extrabold transition-all duration-300 backdrop-blur-sm border border-white/40 text-white hover:scale-105 active:scale-95 w-fit inline-block text-center cursor-pointer"
                            style={{
                              zIndex: 100,
                              position: "relative",
                              pointerEvents: "auto",
                            }}
                          >
                            {event.buttonText}
                          </Link>
                        )}
                      </div>
                    </div>
                  ) : (
                    // Second and third page layout - COMPLETELY RESTRUCTURED
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 sm:mb-3 md:mb-2 lg:mb-3 xl:mb-1 gap-2 sm:gap-3 md:gap-2 lg:gap-3 xl:gap-1">
                      <div className="w-full sm:w-2/3 flex flex-col gap-1 sm:gap-2 md:gap-1 lg:gap-2 xl:gap-1 pr-0 sm:pr-2">
                        <div className="text-[#DFE00D] text-sm sm:text-lg md:text-base lg:text-xl xl:text-base font-bold font-sans mb-1 underline">
                          {event.date}
                        </div>
                        <div className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs text-[#F9F9F9] font-sans font-normal text-justify leading-relaxed">
                          {event.description}
                        </div>
                      </div>

                      {/* COMPLETELY ISOLATED BUTTON CONTAINER */}
                      <div
                        className="flex flex-row sm:flex-col gap-2 sm:gap-3 md:gap-6 lg:gap-10 xl:gap-2 py-1 sm:py-2 md:py-3 lg:py-5 xl:py-2 shrink-0"
                        style={{
                          zIndex: 100,
                          position: "relative",
                          pointerEvents: "auto",
                          isolation: "isolate",
                        }}
                      >
                        {/* First Button - Learn More - COMPLETELY ISOLATED */}
                        {event.buttonLink && (
                          <Link
                            href={event.buttonLink}
                            className="bg-white/20 hover:bg-white/30 active:bg-white/40 px-2 sm:px-4 md:px-3 lg:px-6 xl:px-3 py-1 sm:py-2 md:py-2 lg:py-3 xl:py-1 rounded-full text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs font-sans font-extrabold transition-all duration-300 backdrop-blur-sm border border-white/40 text-white hover:scale-105 active:scale-95 inline-block text-center cursor-pointer"
                            style={{
                              zIndex: 200,
                              position: "relative",
                              pointerEvents: "auto",
                              touchAction: "manipulation",
                              userSelect: "none",
                              isolation: "isolate",
                            }}
                            onMouseEnter={(e) => {
                              console.log("Button hover - Learn More");
                            }}
                            onClick={(e) => {
                              console.log("Button clicked - Learn More");
                            }}
                          >
                            {event.buttonText}
                          </Link>
                        )}

                        {/* Second Button - Register - COMPLETELY ISOLATED */}
                        {event.buttonText2 && event.buttonLink2 && (
                          <Link
                            href={event.buttonLink2}
                            className="bg-white/20 hover:bg-white/30 active:bg-white/40 px-2 sm:px-4 md:px-3 lg:px-6 xl:px-3 py-1 sm:py-2 md:py-2 lg:py-3 xl:py-1 rounded-full text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs font-sans font-extrabold transition-all duration-300 backdrop-blur-sm border border-white/40 text-white hover:scale-105 active:scale-95 z-150 inline-block text-center cursor-pointer"
                            style={{
                              zIndex: 200,
                              position: "relative",
                              pointerEvents: "auto",
                              touchAction: "manipulation",
                              userSelect: "none",
                              isolation: "isolate",
                            }}
                            onMouseEnter={(e) => {
                              console.log("Button hover - Learn More");
                            }}
                            onClick={(e) => {
                              console.log("Button clicked - Learn More");
                            }}
                          >
                            {event.buttonText2}
                          </Link>
                        )}
                      </div>
                    </div>
                  )}

                  {currentPage === 0 && (
                    <div className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs text-[#F9F9F9] font-sans font-normal text-justify leading-relaxed">
                      {event.description}
                    </div>
                  )}
                </div>

                {/* Bottom Container Border Gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 border border-transparent bg-gradient-to-r from-black via-white to-black bg-clip-border"
                  style={{ zIndex: 1 }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevPage}
          disabled={isTransitioning}
          className={`absolute left-1 sm:left-2 md:left-3 lg:left-4 xl:left-10 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 md:p-2 lg:p-4 xl:p-4 transition-all duration-300 hover:scale-110 ${isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          style={{ zIndex: 1000 }}
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextPage}
          disabled={isTransitioning}
          className={`absolute right-1 sm:right-2 md:right-3 lg:right-4 xl:right-10 top-1/2 transform -translate-y-1/2  p-2 sm:p-3 md:p-2 lg:p-4 xl:p-4 transition-all duration-300 hover:scale-110 ${isTransitioning ? "opacity-50 cursor-not-allowed" : "opacity-100"
            }`}
          style={{ zIndex: 1000 }}
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div
          className="absolute bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 md:space-x-1 lg:space-x-2 xl:space-x-1"
          style={{ zIndex: 1000 }}
        >
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 sm:w-3 sm:h-3 md:w-2 md:h-2 lg:w-3 lg:h-3 xl:w-2 xl:h-2 rounded-full transition-all duration-300 hover:scale-125 ${index === currentPage
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/70"
                } ${isTransitioning
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100"
                }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden">
      {renderPage(pages[currentPage])}
    </div>
  );
};

export default EventSection;
