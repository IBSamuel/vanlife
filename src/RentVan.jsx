
import React, { useEffect, useState } from 'react'
import CustomNavbar from './Navbar'
import { Link, useParams } from 'react-router-dom';
import Footer from './Footer';

const vans = [
    { id: 1, name: "Modest Explorer", price: 60, description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "simple", hostId: "123", btnstyle: `w-fit capitalize inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:bg-orange-400 dark:bg-orange-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "` },
    { id: 2, name: "Beach Bum", price: 80, description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "rugged", hostId: "123", btnstyle: `w-fit capitalize inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-900 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:bg-green-800 dark:bg-green-800 dark:hover:bg-green-800 dark:focus:ring-blue-900 "` },
    { id: 3, name: "Reliable Red", price: 100, description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "luxury", hostId: "456", btnstyle: `w-fit capitalize inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:bg-black dark:bg-black dark:hover:bg-black dark:focus:ring-gray-600 "` },
    { id: 4, name: "Dreamfinder", price: 65, description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "simple", btnstyle: `w-fit capitalize inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-300 focus:ring-4 focus:outline-none focus:bg-orange-400 dark:bg-orange-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "` },

    { id: 5, name: "The Cruiser", price: 120, description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "luxury", hostId: "789", btnstyle: `w-fit capitalize inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black focus:ring-4 focus:outline-none focus:bg-black dark:bg-black dark:hover:bg-black dark:focus:ring-gray-600 "` },
    { id: 6, name: "Green Wonder", price: 70, description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "rugged", hostId: "123", btnstyle: `" w-fit capitalize inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-900 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:bg-green-800 dark:bg-green-800 dark:hover:bg-green-800 dark:focus:ring-blue-900 "` }
];
const RentVan = () => {
    const { id } = useParams()
    const [info, setinfo] = useState([])
    useEffect(() => {
        let vanFilter = vans.filter((student) => id == student.id);
        setinfo(vanFilter);
    }, []);
useEffect(() => {
    console.log("jfjfjf")

}, [])

    useEffect(() => {
        console.log(info);
    }, [info]);
    useEffect(() => {
      if(localStorage['retailedVan']){
        const localStorageData = JSON.parse(localStorage['retailedVan']);
      }
    }, []);
    
    const rentsVan=()=>{
      let localStorageData =  localStorage.setItem('retailedVan',JSON.stringify(info))
    }



    return (
        <>
            <CustomNavbar />
            <div>
                {info.map((student,index) => (
                    <a href="#" className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none " src={student.imageUrl} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                        <h className={student.btnstyle}>{student.type}</h>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><span>{student.name}</span><span className='lg:ms-5 md:ms-5'>${student.price} <span className='text-xs'>/day</span></span></h5>
  
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{student.description}</p>
                            <Link to="/signin" onClick={rentsVan} class="text-white bg-amber-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-amber-900">Rent this van</Link>
                        </div>
                    </a>

                ))}
            </div>
            <Footer/>

        </>
    )
}

export default RentVan