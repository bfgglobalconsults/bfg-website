"use client";
import React, { useState, useEffect, useRef } from "react";
import { animated, useSpring } from "@react-spring/web";

const Statistics = ({ y, e, l, t }) => {
  const [years, setYears] = useState(0);
  const [enterprises, setEnterprises] = useState(0);
  const [locations, setLocations] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const targetRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          } else {
            setIsIntersecting(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      startCounting();
    } else {
      stopCounting();
    }
  }, [isIntersecting]);

  const startCounting = () => {
    // Start counting animation by setting state values to the stop values passed as props
    setYears(y);
    setEnterprises(e);
    setLocations(l);
    setTransactions(t);
  };

  const stopCounting = () => {
    // Stop counting animation at the stop values passed as props
    setYears(0);
    setEnterprises(0);
    setLocations(0);
    setTransactions(0);
  };

  const animatedYears = useSpring({
    from: { value: 0 },
    to: { value: years },
    config: { tension: 280, friction: 40 },
  });

  const animatedEnterprises = useSpring({
    from: { value: 0 },
    to: { value: enterprises },
    config: { tension: 280, friction: 40 },
  });

  const animatedLocations = useSpring({
    from: { value: 0 },
    to: { value: locations },
    config: { tension: 280, friction: 40 },
  });

  const animatedTransactions = useSpring({
    from: { value: 0 },
    to: { value: transactions },
    config: { tension: 280, friction: 40 },
  });

  return (
    <div ref={targetRef} className="bg-[#F5F5F5] py-28 my-14">
      <div className="w-full flex gap-8 justify-center">
        <div className="w-[20%] text-center">
          <div className="flex justify-center font-bold text-6xl">
          <animated.h3 className="">
            {animatedYears.value.to((n) => n.toFixed(0))} 
          </animated.h3>
          </div>
          <p className="my-2">Years in Business</p>
        </div>
        <div className="w-[20%] text-center">
          <div className="flex justify-center font-bold text-6xl">
          <animated.h3 className="">
            {animatedEnterprises.value.to((n) => n.toFixed(0))} 
          </animated.h3>
          <span>+</span>
          </div>
          <p className="my-2">
            Served enterprises from tech start-up to growing brands
          </p>
        </div>
        <div className="w-[20%] text-center">
          <div className="flex justify-center font-bold text-6xl">
          <animated.h3 className="">
            {animatedLocations.value.to((n) => n.toFixed(0))} 
          </animated.h3>
          </div>
          <p className="my-2">Country Locations</p>
        </div>
        <div className="w-[20%] text-center">
          <div className="flex justify-center font-bold text-6xl">
            <span>$</span>
          <animated.h3 className="">
            {animatedTransactions.value.to((n) => n.toFixed(0))}
          </animated.h3>
          <span>+</span>
          </div>
          <p className="my-2">Total transactions up from 2018 - 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

