import React from "react";
import Footer from "../../partials/Footer";
import Header from "../../partials/Header";
import Banner from "../../partials/Banner";
import CardStory from "../../partials/CardStory";
import CardLeague from "../../partials/CardLeague";

const Football = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <Banner
              background={"bg-gradient-to-r from-green-600 to-green-800"}
              title={"Football News"}
              description={"All the latest from the world of football"}
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <CardStory
                image={"/imagess/football-1.webp"}
                alt={"Football match"}
                title={" Champions League Final Preview"}
                description={
                  "The two best teams in Europe face off in what promises to be an epic clash."
                }
                bgColor={"bg-green-600"}
                hoverColor={"hover:bg-green-700"}
              />

              <CardStory
                image={"/imagess/football-2.webp"}
                alt={"Football transfer"}
                title={"Summer Transfer Window Heats Up"}
                description={
                  "Top clubs are spending big as the transfer market reaches its peak."
                }
                bgColor={"bg-green-600"}
                hoverColor={"hover:bg-green-700"}
              />
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Top Leagues
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <CardLeague
                  title={" Premier League"}
                  textColor={"text-blue-700"}
                  country={"England"}
                />
                <CardLeague
                  title={"La Liga"}
                  textColor={"text-blue-500"}
                  country={"Spain"}
                />
                <CardLeague
                  title={"Serie A"}
                  textColor={"text-black"}
                  country={"Italy"}
                />
                <CardLeague
                  title={" Bundesliga"}
                  textColor={"text-red-600"}
                  country={"Germany"}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Football;
