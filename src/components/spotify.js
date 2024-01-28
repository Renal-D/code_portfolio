"use client";

import { SiSpotify } from "react-icons/si";
import useSWR from "swr";
import Link from "next/link";

export default function SpotifyTop() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("../api/spotify", fetcher);

  if (isLoading || error) {
    return (
      <>
        <div className="w-full bg-[#1ed760] p-1 fixed bottom-0 z-[999999999] rounded-t-lg">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 ">
                <SiSpotify size={20} color={"#000000"} />
                <h1 className="text-black text-sm">Not Listening</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (data) {
    return (
      <>
        {data?.currentlyPlaying ? (
          <Link
            href={data?.currentlyPlaying ? data?.href : "#"}
            target="_blank"
          >
            <div className="w-full bg-[#1ed760] p-1 fixed bottom-0 z-[999999999] rounded-t-lg">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 ">
                    <SiSpotify size={20} color={"#000000"} />
                    <div className="text-black text-sm flex items-center gap-1">
                      <h1>Listening {data?.name}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <Link
            href={data?.currentlyPlaying ? data?.href : "#"}
            target="_blank"
          >
            <div className="w-full bg-[#1ed760] p-1 fixed bottom-0 z-[999999999] rounded-t-lg">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 ">
                    <SiSpotify size={20} color={"#000000"} />
                    <div className="text-black text-sm flex items-center gap-1">
                      <h1>Not Listening</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}
      </>
    );
  }
}