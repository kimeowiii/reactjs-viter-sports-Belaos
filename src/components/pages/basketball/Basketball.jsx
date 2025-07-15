import React from "react";
import Header from "../../partials/Header";
import Footer from "../../partials/Footer";
import Banner from "../../partials/Banner";
import CardStory from "../../partials/CardStory";
import TableStanding from "../../partials/TableStanding";

const Basketball = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <Banner
              background={"bg-gradient-to-r from-orange-600 to-red-700"}
              title={"Basketball Updates"}
              description={
                "Court-side coverage of NBA and international basketball"
              }
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <CardStory
                image={"/imagess/basketball-1.webp"}
                alt={"NBA game"}
                title={" NBA Finals: Game 7 Preview"}
                description={
                  "The championship comes down to one final game between two historic rivals."
                }
                bgColor={"bg-orange-600"}
                hoverColor={"hover:bg-orange-700"}
              />

              <CardStory
                image={"/imagess/basketball-2.webp"}
                alt={"Basketball player"}
                title={"Rising Stars of the Season"}
                description={
                  "Meet the young players who are taking the league by storm this year."
                }
                bgColor={"bg-orange-600"}
                hoverColor={"hover:bg-orange-700"}
              />
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                NBA Standings
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 px-4 text-left">Team</th>
                      <th className="py-2 px-4 text-center">W</th>
                      <th className="py-2 px-4 text-center">L</th>
                      <th className="py-2 px-4 text-center">PCT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableStanding
                      team={"Boston Celtics"}
                      W={"57"}
                      L={"25"}
                      PCT={".695"}
                    />
                    <TableStanding
                      team={"Milwaukee Bucks"}
                      W={"58"}
                      L={"24"}
                      PCT={".707"}
                    />
                    <TableStanding
                      team={"Denver Nuggets"}
                      W={"53"}
                      L={"29"}
                      PCT={".646"}
                    />
                    <TableStanding
                      team={"Phoenix Suns"}
                      W={"45"}
                      L={"37"}
                      PCT={".549"}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Basketball;
