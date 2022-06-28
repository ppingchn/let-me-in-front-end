import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import RecentlyPostedJobsElement from "./RecentlyPostedJobsElement";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function RecentlyPostedJob() {
  const settingsCarousel = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col h-fit gap-2 w-full sm:min-w-[636px] border-[1px] rounded-lg border-slate-200 bg-white">
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="font-bold">Recently posted jobs</h1>
        <div className="flex gap-2">
          <div className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer">
            <MdKeyboardArrowLeft className="text-2xl" />
          </div>
          <div className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray cursor-pointer">
            <MdKeyboardArrowRight className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="px-5 py-5">
        <Slider {...settingsCarousel}>
          <RecentlyPostedJobsElement
            position={"Line Producer"}
            companyName={"DNEG"}
            address={"Vancouver, BC"}
            date={"2022-06-20"}
          />
          <RecentlyPostedJobsElement
            position={"Line Producer"}
            companyName={"DNEG"}
            address={"Vancouver, BC"}
          />
          <RecentlyPostedJobsElement
            position={"Line Producer"}
            companyName={"DNEG"}
            address={"Vancouver, BC"}
          />
          <RecentlyPostedJobsElement
            position={"Line Producer"}
            companyName={"DNEG"}
            address={"Vancouver, BC"}
          />
          <RecentlyPostedJobsElement
            position={"Line Producer"}
            companyName={"DNEG"}
            address={"Vancouver, BC"}
          />
          <RecentlyPostedJobsElement
            position={"Line Producer"}
            companyName={"DNEG"}
            address={"Vancouver, BC"}
          />
          <RecentlyPostedJobsElement
            position={"Line Producer"}
            companyName={"DNEG"}
            address={"Vancouver, BC"}
          />
        </Slider>
      </div>
      <div className="flex flex-col w-full">
        <button className="flex justify-center items-center gap-2 w-full hover:bg-gray border-t-[1px] border-gray transition-all py-3 font-bold text-darkgray">
          See all jobs
        </button>
      </div>
    </div>
  );
}
