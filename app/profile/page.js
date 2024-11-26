"use client";

import Image from "next/image";
import style from "../app.module.css";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MyAds from "../myAds/page";
import MyPackages from "../myPackages/page";
import { useRouter } from "next/navigation";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null); // State for the profile image

  const [toggleState, setToggleState] = useState(1);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      router.push('/logIn');
    } else {
      setUser(user);
      // Pre-fill form data with the user's data from localStorage
      setFormData({
        name: user.name,
        surname: user.surname,
        email: user.email,
        phone: user.phoneNumber,
      });
      setProfileImage(user.profileImage || '/images/person.png'); // Use e
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the uploaded image as the profile picture
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 URL
    }
  };


  if (!user) return null;

  return (
    <div className={style.profile}>
      <Navbar />
      <section className="flex my-8 mx-12">
        <div className="h-full px-4 py-4 w-80 bg-white aside shadow-md">
          <div className="pb-3 flex">
            <div className={style.profileImg}>
              <Image
                src="/images/person.png"
                width={130}
                height={130}
                alt="Person"
                priority={true}
              />
            </div>
            <div className="grid pl-4">
              <span className={style.text}>{user?.name} {user?.surname}</span>
              <span style={{ color: "#A1A1A1" }}>Azerbaijan,Baku</span>
              <span style={{ color: "#706AB5", fontWeight: "500" }}>4.8</span>
            </div>
          </div>

          <hr />
          <ul className="space-y-2 ">
            <li>
              <a
                href="#"
                onClick={() => toggleTab(1)}
                className={`flex items-center p-1 pt-4 text-gray-900 rounded-md-lg  group `}
              >
                {
                  toggleState === 1 ? <Image
                    src="/icons/user2.png"
                    width={25}
                    height={30}
                    alt="user"
                    priority={true}
                  /> : <Image
                    src="/icons/user.png"
                    width={25}
                    height={30}
                    alt="user"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  ${toggleState === 1 ? "active-tabs" : "tabs"}`}>Profile</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => toggleTab(2)}
                className={`flex items-center p-1  text-gray-900 rounded-md-lg   group `}

              >
                {
                  toggleState === 2 ? <Image
                    src="/icons/megaphone2.png"
                    width={25}
                    height={30}
                    alt="megaphone"
                    priority={true}
                  /> : <Image
                    src="/icons/megaphone.png"
                    width={25}
                    height={30}
                    alt="megaphone"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  ${toggleState === 2 ? "active-tabs" : "tabs"}`}>My Ads Trip</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => toggleTab(3)}
                className={`flex items-center p-1  text-gray-900 rounded-md-lg   group `}

              >
                {
                  toggleState === 3 ? <Image
                    src="/icons/megaphone2.png"
                    width={25}
                    height={30}
                    alt="megaphone"
                    priority={true}
                  /> : <Image
                    src="/icons/megaphone.png"
                    width={25}
                    height={30}
                    alt="megaphone"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  ${toggleState === 3 ? "active-tabs" : "tabs"}`}>My Ads Send</span>
              </a>
            </li>
            
            <li>
              <a
                href="#"
                onClick={() => toggleTab(4)}
                className={`flex items-center p-1  text-gray-900 rounded-md-lg   group `}

              >
                {
                  toggleState === 4 ? <Image
                    src="/icons/box2.png"
                    width={25}
                    height={30}
                    alt="box"
                    priority={true}
                  /> : <Image
                    src="/icons/box.png"
                    width={25}
                    height={30}
                    alt="box"
                    priority={true}
                  />
                }
                <span className={`flex-1 ms-3 whitespace-nowrap  ${toggleState === 4 ? "active-tabs" : "tabs"}`}>
                  Password
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"

                className="flex items-center p-1 pt-6 text-gray-900 rounded-md-lg  group"

              >
                <Image
                  src="/icons/logout.png"
                  width={25}
                  height={30}
                  alt="logout"
                  priority={true}
                />
                <span className="flex-1 ms-3 whitespace-nowrap logout ">
                  Log Out
                </span>
              </a>
            </li>
          </ul>
        </div>

        {toggleState === 1 ? (
          <div className={`active-content secondBox bg-white aside shadow-md w-3/4 ml-14 px-7 py-5 ${toggleState === 1 ? "active-content" : "tabs"}`}>
            <h3>Personal Information</h3>

            <div className="flex">
            <div className={style.profileImg }     style={{
                  width: "120px",
                  height: "118px",
                  margin: "25px 0 0 25px",
                }}>
              <Image
                src={profileImage || "/images/person.png"} // Use the selected profile image
                width={130}
                height={130}
                alt="Person"
                priority={true}
                onClick={() => document.getElementById('file-input').click()} // Trigger file input click on image click
              />
              <input
                type="file"
                id="file-input"
                style={{ display: "none" }} // Hide the file input
                accept="image/png, image/jpeg" // Allow only PNG and JPEG files
                onChange={handleImageChange} // Handle the image change
              />
            </div>
              <div className="ml-[7.5rem] pt-6 md:w-[74%] ">
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label className="block tracking-wide text-gray text-sm text-left mb-1">Name</label>
                    <input
                      name="name"
                      className="appearance-none block w-full border border-gray-200 rounded-md-lg py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block tracking-wide text-gray text-sm text-left mb-1">Surname</label>
                    <input
                      name="surname"
                      className="appearance-none block w-full border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      value={formData.surname}
                      onChange={handleChange}
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label className="block tracking-wide text-gray text-sm text-left mb-1">Email</label>
                    <input
                      name="email"
                      className="appearance-none block w-full border border-gray-200 rounded-md-lg py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </div>
                 
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block tracking-wide text-gray text-sm text-left mb-1">Telephone Number</label>
                    <input
                      name="phone"
                      className="appearance-none block w-full border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full md:w-1/2 px-3 md:mb-0">
                    <label className="block tracking-wide text-gray text-sm text-left mb-1">Country</label>
                    <input
                      name="country"
                      className="appearance-none block w-full border border-gray-200 rounded-md-lg py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      // value={formData.email}
                      onChange={handleChange}
                      placeholder="Country"
                    />
                  </div>
                 
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block tracking-wide text-gray text-sm text-left mb-1">City</label>
                    <input
                      name="city"
                      className="appearance-none block w-full border border-gray-200 rounded-md-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                      type="text"
                      // value={formData.phone}
                      onChange={handleChange}
                      placeholder="City"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-5" />

            <div className="float-right m-5">
              <button className="bg-transparent font-semibold py-1.5 px-8 border mr-4 rounded-md cancelButton">
                Cancel
              </button>
              <button className="font-bold py-1.5 px-10 border rounded-md saveButton">
                Save
              </button>
            </div>
          </div>
        ) : toggleState === 2 ? (
          <MyAds />
        ) : toggleState === 3 ? (
          <MyAds />
        ) : toggleState === 4 ? (
          <MyPackages />
        ) : null}
      </section>
    </div>
  );
}
