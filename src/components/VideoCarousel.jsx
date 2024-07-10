import React, { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [videoId, startPlay, isPlaying, loadedData]);

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      //animate the progress of the video
      let anime = gsap.to(span[videoId], {
        onUpdate: () => {},

        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div id="slider" key={list.id} className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="bg-black w-full h-full flex-center rounded-3xl overflow-hidden">
                <video
                  playsInline={true}
                  id="video"
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10 ">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex-center mt-10">
        <div className="backdrop-blur rounded-full flex-center px-5 py-7 bg-gray-300">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="h-3 w-3 bg-gray-200 cursor-pointer relative rounded-full mx-2"
            >

              <span className="h-full w-full absolute rounded-full"
              ref={(el) => (videoSpanRef.current[i] = el)}
              />

            </span>
          ))}
        </div>

        <button className="">

        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
