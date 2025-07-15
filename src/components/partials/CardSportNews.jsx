import React from 'react'
import { Link } from 'react-router-dom'

const CardSportNews = ({title,description, textColor,link, bgColor,hoverColor}) => {
  return (
    <>
       <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h2 className={`${textColor} text-2xl font-bold mb-3`}>
                  {title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {description}
                </p>
                <Link
                  to={link}
                  className={`${bgColor} ${hoverColor} inline-block text-white px-4 py-2 rounded transition duration-300`}
                >
                  Read More
                </Link>
              </div>
    </>
  )
}

export default CardSportNews
