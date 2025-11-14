import { useState, useEffect, useRef } from "react";
import { useLocation, Link, Navigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
gsap.registerPlugin(ScrollTrigger);



import Api from "./Api/Api";

// At the top of your file
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules'; // 👈 Add Navigation here

import "swiper/css";
import "swiper/css/pagination";

// tesinomial 

import googlee from "../assets/googl.png";
//


// hero 
import bghero from "../assets/Home/bghero.png";
import redBox from "../assets/Home/redBox.png"
import car1 from "../assets/Home/car1.webp"
import road from "../assets/Home/road1.png"
import carRoad from "../assets/Home/porcheRoad.webp"


// Serivce Images
import service1 from "../assets/service/service1.webp";
import service2 from "../assets/service/service2.webp";
import service3 from "../assets/service/service3.webp";
import service4 from "../assets/service/service4.jpg";
import service5 from "../assets/service/service5.jpg";
import service6 from "../assets/service/service6.jpg";

// Brand We Serve
import audi from "../assets/BrandWeServe/audi.webp";
import bmw from "../assets/BrandWeServe/bmw.png";
import ford from "../assets/BrandWeServe/ford.png";
import honda from "../assets/BrandWeServe/honda.png";
import hyundai from "../assets/BrandWeServe/hyuandai.png"; // fixed typo
import jaguar from "../assets/BrandWeServe/jaguar.webp";
import lambo from "../assets/BrandWeServe/lambo.png";
import mahindra from "../assets/BrandWeServe/mahindra.png";
import mercedes from "../assets/BrandWeServe/mercedes.webp";
import renault from "../assets/BrandWeServe/Renault.png";

import jeep from '../assets/BrandWeServe/jeep.png';
import tata from '../assets/BrandWeServe/tata.png';
import rolls from '../assets/BrandWeServe/rolls.png';
import nissan from '../assets/BrandWeServe/nisan.png'; // fixed typo
import suzuki from '../assets/BrandWeServe/sujuki.png';
import tesla from '../assets/BrandWeServe/tesla.png';
import chev from '../assets/BrandWeServe/chev.png';
import eicher from '../assets/BrandWeServe/eicher.png';
import ferrari from '../assets/BrandWeServe/ferrari.png';
import kia from '../assets/BrandWeServe/kia.png';

import isuzu from '../assets/BrandWeServe/isuzu.png';
import landRover from '../assets/BrandWeServe/landRover.png';
import mg from '../assets/BrandWeServe/mg.png';
import mitsubishi from '../assets/BrandWeServe/mituski.png'; // fixed typo
import porsche from '../assets/BrandWeServe/porsche.png';
import skoda from '../assets/BrandWeServe/skoda.png';
import toyota from '../assets/BrandWeServe/tyota.png'; // fixed typo
import volkswagen from '../assets/BrandWeServe/volkswagon.png'; // fixed typo
// why choose us
import why1 from "../assets/whyChoose/why1.webp";
import why2 from "../assets/whyChoose/why2.webp";
import why3 from "../assets/whyChoose/why3.webp";

// Latest Project
import project1 from "../assets/Project/p1.webp";
import project2 from "../assets/Project/p2.webp";
import project3 from "../assets/Project/p3.webp";
import project4 from "../assets/Project/p4.JPG";
import project5 from "../assets/Project/p5.JPG";
import project6 from "../assets/Project/p6.JPG";
import project7 from "../assets/Project/p7.JPG";
import project10 from "../assets/Project/p10.JPG";
import project11 from "../assets/Project/p11.JPG";
import project12 from "../assets/Project/p12.JPG";
import project13 from "../assets/Project/p13.JPG";



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// About
import AboutAnimation from "../Components/AboutAnimation"


const Home = () => {
  const location = useLocation();
  const testimonialBoxRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);


  useEffect(() => {
    if (location.hash) {
      // Wait for DOM to load then scroll smoothly
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'auto' });
        }
      }, 100);
    }
  }, [location]);
  ///




  // bkkoing button 
  const bookingRef = useRef(null);


  // Reusable scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  ///
  // animation 
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const brandWeServeRef = useRef(null);
  const galleryRef = useRef(null);
  const imgRef = useRef(null);
  const textRef1 = useRef(null);
  const imageRef1 = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 4, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // sab animation yaha
      // Home Section Animation
      gsap.fromTo(
        homeRef.current,
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: homeRef.current,
            start: "top 80%", // when top of section hits 80% of viewport
            toggleActions: "play none none none",
          },
        }
      );

      // About Section Animation
      const elements = gsap.utils.toArray("#about .animate-item");

      if (elements.length > 0) {
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Services Section
      const serviceItems = serviceRef.current.querySelectorAll(".animate-item");

      if (serviceRef.current) {
        const serviceItems = serviceRef.current.querySelectorAll(".animate-item");

        if (serviceItems.length > 0) {
          gsap.fromTo(
            serviceItems,
            { y: 100, opacity: 0, filter: "blur(10px)" },
            {
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: serviceRef.current,
                start: "top 40%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      }


      // Booking Form Section
      gsap.fromTo(
        "#booking form, #booking > div:first-child",
        { y: 50, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#booking",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
      // why we choiose //
      if (textRef1.current) {
        gsap.fromTo(
          textRef1.current.children,
          { x: -50, opacity: 0, filter: "blur(10px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textRef1.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Image Section Animation
      if (imageRef1.current) {
        gsap.fromTo(
          imageRef1.current.children,
          { x: 50, opacity: 0, filter: "blur(10px)" },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageRef1.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
      //



      // Animate image
      gsap.fromTo(
        imgRef.current,
        { y: 50, opacity: 0, filter: "blur(15px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 2.2, ease: "power3.out", delay: 0.5 }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  //
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => setShowMore(!showMore);

  //

  // service
  const services = [
    {
      title: "VAG CODING VIA VCDS",

      // "Unlock hidden features and optimize performance with our expert VAG Coding via VCDS service.",
      shortDescription: "Unlock hidden features and optimize performance with our expert VAG Coding via VCDS service.",
      longDescription: "Unlock hidden features and optimize performance with our expert VAG Coding via VCDS service, quickly, safely, and with complete precision every time.",

      description: "Unlock hidden features and optimize performance with our expert VAG Coding via VCDS service, quickly, safely, and with complete precision every time.",
      image: service1,
      link: '/service1'
    },
    {
      title: "ENGINE DIAGNOSTICS & REPAIR",
      description:
        "We use advanced tools to identify engine issues and fix them to keep your car performing best.",
      image: service2,
      link: '/service2'
    },
    {
      title: "BRAKE SERVICE & REPLACEMENT",
      description:
        "From worn-out pads to full brake overhauls, we ensure your vehicle stops safely every time.",
      image: service3,
      link: '/service3'
    },
    {
      title: "CAR WASHING AND DETAILING",
      description:
        "From exterior shine to interior cleaning, we make your car look and feel brand new.",
      image: service4,
      link: '/service4'
    },
    {
      title: "TRANSMISSION",
      description:
        "Keep your car’s gears running like new with transmission care. We repair smooth shifts.",
      image: service5,
      link: '/service5'
    },
    {
      title: "GRAPHENE & CERAMIC COATING",
      description:
        "Shield your car with long-lasting shine and protection using graphene and ceramic coating.",
      image: service6,
      link: '/service6'
    },
  ];

  // brand we serve
  const brand = [
    { src: audi, name: "Audi" },
    { src: jaguar, name: "Jaguar" },
    { src: mercedes, name: "Mercedes" },
    { src: hyundai, name: "Hyundai" },
    { src: mahindra, name: "Mahindra" },
    { src: honda, name: "Honda" },
    { src: ford, name: "Ford" },
    { src: bmw, name: "BMW" },
    { src: lambo, name: "Lamborghini" },
    { src: renault, name: "Renault" },
    { src: jeep, name: "Jeep" },
    { src: tata, name: "Tata" },
    { src: rolls, name: "Rolls Royce" },
    { src: nissan, name: "Nissan" },
    { src: suzuki, name: "Suzuki" },
    { src: tesla, name: "Tesla" },
    { src: chev, name: "Chevrolet" },
    { src: eicher, name: "Eicher" },
    { src: ferrari, name: "Ferrari" },
    { src: kia, name: "Kia" },
    { src: isuzu, name: "Isuzu" },
    { src: landRover, name: "Land Rover" },
    { src: mg, name: "MG" },
    { src: mitsubishi, name: "Mitsubishi" },
    { src: porsche, name: "Porsche" },
    { src: skoda, name: "Skoda" },
    { src: toyota, name: "Toyota" },
    { src: volkswagen, name: "Volkswagen" },
  ];

  // ---- STATE + LOGIC ----
  const [topBrands, setTopBrands] = useState([]);
  const [visibleBrands, setVisibleBrands] = useState([]);

  const updateVisibleItems = () => {
    const total = brand.length;
    const half = Math.ceil(total / 2); // split equally

    const topPart = brand.slice(0, half);
    const bottomPart = brand.slice(half);
    // Double each list to make scrolling seamless
    setTopBrands([...topPart, ...topPart]);
    setVisibleBrands([...bottomPart, ...bottomPart]);

    // setTopBrands(topPart);
    // setVisibleBrands(bottomPart);
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);



  //

  // project ANimation //

  const scrollRef = useRef(null); // outer overflow container
  const imageRowRef = useRef(null); // inner image row
  const animationRef = useRef(null);
  useEffect(() => {
    const el = scrollRef.current;
    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };
    if (el) el.addEventListener("wheel", onWheel);
    return () => el.removeEventListener("wheel", onWheel);
  }, []);


  useEffect(() => {
    const imageRow = imageRowRef.current;

    // ✅ Clone inner image row content for infinite loop
    const clones = imageRow.cloneNode(true);
    imageRow.appendChild(clones);

    // ✅ Animate inner image row to the left
    animationRef.current = gsap.to(imageRow, {
      x: "-50%",
      duration: 80,
      ease: "linear",
      repeat: -1,
    });

    // ✅ Pause on hover
    const handleMouseEnter = () => animationRef.current.pause();
    const handleMouseLeave = () => animationRef.current.resume();

    imageRow.addEventListener("mouseenter", handleMouseEnter);
    imageRow.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      imageRow.removeEventListener("mouseenter", handleMouseEnter);
      imageRow.removeEventListener("mouseleave", handleMouseLeave);
      animationRef.current.kill();
    };
  }, []);


  // testinimials

  const testimonials = [
    {
      name: "Bala",
      role: "8 months ago",
      review: "Knowledgeable owner and provides perfect guidance for your cars well being .",
      rating: 5,
    },
    {
      name: "Shazaib Ahmed",
      role: "A year ago",
      review: "When Passion meets Automobile industry, Revive Auto Studio and Garage is born. This is the one liner which explains this Garage.",
      rating: 4,
    },
    {
      name: "Dhiraj varma",
      role: "10 months ago",
      review: "Amazing job done by the passionate team at ReviveAuto. Complete service done with break pads replacement.",
      rating: 5,
    },
    {
      name: "Anay Raut",
      role: "9 months ago",
      review: "Had a great experience with Revive auto studio and garage for my car dent and detailing issue. Very nice people. They know their job well.",
      rating: 5,
    },
    {
      name: "Control Theorist ",
      role: "A year ago",
      review: "Very Good service. They fixed an aftermarket cruise control and dash cam so professionally. I like their service.",
      rating: 5,
    },
    {
      name: "Murali Krishna",
      role: "8 months ago",
      review: "My first time experience was amazing. Would prefer to visit again.",
      rating: 5,
    },
  ];


  const [selectedIndex1, setSelectedIndex1] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);


  const handlePrev = () => {
    if (!swiperInstance) return;

    const prevIndex =
      selectedIndex1 === 0 ? testimonials.length - 1 : selectedIndex1 - 1;
    setSelectedIndex1(prevIndex);
    swiperInstance.slideToLoop(prevIndex);
  };

  const handleNext = () => {
    if (!swiperInstance) return;

    const nextIndex =
      selectedIndex1 === testimonials.length - 1 ? 0 : selectedIndex1 + 1;
    setSelectedIndex1(nextIndex);
    swiperInstance.slideToLoop(nextIndex);
  };

  ///

  const [showAll, setShowAll] = useState(false);  // movbile
  // Decide how many to show
  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);  //mobile
  ///


  // contact Data

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const contactValidationForm = () => {
    if (formData.name.trim().length < 3) {
      toast.error("Name must be at least 3 characters long");
      return false;
    }
    // email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    // service
    if (!formData.service) {
      toast.error("Please select a service");
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long");
      return false;
    }
    if (!formData.date) {
      toast.error("Please select a date");
      return false;
    }

    if (!formData.time) {
      toast.error("Please select a time");
      return false;
    }

    return true;
  };
  const [loading, setLoading] = useState(false);

  const contactHandle = async (e) => {
    e.preventDefault();
    if (!contactValidationForm()) return;

    setLoading(true);

    try {
      // console.log("Submitting form data:", formData);
      const response = await Api.createContact(formData);
      // console.log("Response:", response);

      if (response.status === 200 || response.status === 201) {
        toast.success("Message Submitted Successfully", {
          position: "bottom-right",
          style: {
            backgroundColor: "green",
            borderLeft: "4px solid #142241",
            color: "white",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          },
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
      }
    } catch (err) {
      console.log("Frontend Error:", err);
      toast.error("Something went wrong, try again!");
    } finally {
      setLoading(false);
    }
  };

  // gallery
  const projects = [
    { img: project1, link: "https://www.instagram.com/reel/DPMANEmCSNh/" },
    { img: project2, link: "https://www.instagram.com/p/POST2_LINK" },
    { img: project3, link: "https://www.instagram.com/reel/DPMANEmCSNh/" },
    { img: project4, link: "https://www.instagram.com/reel/DPGMLTaCej_/" },
    { img: project5, link: "https://www.instagram.com/reel/DPgSTNGiRI4/" },
    { img: project6, link: "https://www.instagram.com/reel/DPQ7eXhCWZ1/" },
    { img: project7, link: "https://www.instagram.com/reel/DOkdpbmiRtt/" },
    // { img: project8, link: "https://www.instagram.com/p/POST8_LINK" },
    // { img: project9, link: "https://www.instagram.com/p/POST9_LINK" },
    { img: project10, link: "https://www.instagram.com/reel/DOsgL2lCacR/" },
    { img: project11, link: "https://www.instagram.com/reel/DOsgL2lCacR/" },
    { img: project12, link: "https://www.instagram.com/p/POST12_LINK" },
    { img: project13, link: "https://www.instagram.com/reel/DOsgL2lCacR/" },
  ];
  //

  // ROad ANimation 

  useEffect(() => {
    gsap.to("#road-animation", {
      xPercent: -50,
      duration: 10,
      repeat: -1,
      ease: "linear",
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // ensures seamless wrap
      },
    });
  }, []);

  /////

  // brand we serve 

  useEffect(() => {
    if (scrollRefBottom.current) {
      const slider = scrollRefBottom.current;
      slider.scrollLeft = slider.scrollWidth; // scroll all the way to the right
    }
  }, [visibleBrands]); // run whenever brands change


  const scrollRefTop = useRef(null);
  const scrollRefBottom = useRef(null);

  // Generic handler for any scrollable row
  const handleMouseDown = (sliderRef) => (e) => {
    const slider = sliderRef.current;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseLeave = (sliderRef) => () => {
    const slider = sliderRef.current;
    if (slider) slider.isDown = false;
  };

  const handleMouseUp = (sliderRef) => () => {
    const slider = sliderRef.current;
    if (slider) slider.isDown = false;
  };

  const handleMouseMove = (sliderRef) => (e) => {
    const slider = sliderRef.current;
    if (!slider || !slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.startX;
    const walk = (e.pageX - slider.startX) * 1.5;
    slider.scrollLeft = slider.scrollLeftStart - walk; // drag right → scroll right
  };

  // Auto-scroll effect for top and bottom rows
  useEffect(() => {
    let scrollIntervalTop;
    let scrollIntervalBottom;

    const startAutoScroll = () => {
      const topSlider = scrollRefTop.current;
      const bottomSlider = scrollRefBottom.current;

      if (!topSlider || !bottomSlider) return;

      // --- TOP ROW: Left → Right ---
      scrollIntervalTop = setInterval(() => {
        topSlider.scrollLeft += 1;

        // if reached half of the doubled content → reset smoothly
        if (topSlider.scrollLeft >= topSlider.scrollWidth / 2) {
          topSlider.scrollLeft = 0;
        }
      }, 16); // 60 FPS

      // --- BOTTOM ROW: Right → Left ---
      scrollIntervalBottom = setInterval(() => {
        bottomSlider.scrollLeft -= 1;

        // when reaching start → reset to halfway mark
        if (bottomSlider.scrollLeft <= 0) {
          bottomSlider.scrollLeft = bottomSlider.scrollWidth / 2;
        }
      }, 16);
    };

    startAutoScroll();

    // Clean up on unmount
    return () => {
      clearInterval(scrollIntervalTop);
      clearInterval(scrollIntervalBottom);
    };
  }, [topBrands, visibleBrands]);




  return (
    <>
      <main className="overflow-hidden" >
        {/* hero  */}
        <section className="w-full py-20 bg-white relative" id="home" ref={sectionRef}>
          <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:flex-row lg:flex-row items-start gap-12">

            {/* Left Content */}
            <article className="text-start mt-12 md:mt-24 lg:text-left w-2/2 md:w-1/2">
              <h1 className="text-xl md:text-2xl lg:text-5xl sm:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Drive In With Worries,<br className="hidden sm:block" /> Drive Out With <br className="lg:block hidden" /> Confidence.
              </h1>
              <p className="text-sm md:text-lg text-gray-600 mb-4 md:mb-8">
                Whether it’s a small tune-up or a complete overhaul, we restore your vehicle to peak performance.
              </p>
              <div className="inline-block bg-white p-1 shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <button onClick={() => scrollToSection(bookingRef)} className="bg-red-600 text-sm md:text-base hover:bg-red-700 hover:cursor-pointer text-white font-semibold py-2 px-4 md:py-3 md:px-9 transition duration-300">
                  Book Service
                </button>
              </div>


            </article>

            {/* Right Content (Image) */}
            <div className="relative mx-auto left-0 w-1/2 lg:left-[80px]">
              {/* Background: Main Car Image */}
              <img
                src={bghero}
                alt="Car at the service center"
                className="relative w-[100px] top-[-50px] z-0 md:w-full max-h-screen object-contain"
              />

              {/* Foreground: redBox + car1 */}
              <div className="absolute top-[35%] left-[43px] lg:left-[200px] xl:left-[285px] md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 md:w-[80%] lg:w-[90%] w-[160%]">
                <img
                  src={redBox}
                  alt="Background graphic"
                  className="w-full h-auto object-cover"
                  fetchpriority="high"
                />

                <img
                  src={car1}
                  alt="Decorative car"
                  className="absolute top-[-30px] md:top-[-43px] left-1/2 -translate-x-1/2 z-20 
               md:h-[170px] lg:h-[240px] xl:h-[290px] h-[120px] w-[90%] max-w-none 
               transition-transform duration-700 group-hover:scale-105" fetchpriority="high"
                />
              </div>
            </div>
          </div>

          {/* Road image animation (background) */}
          <div className="overflow-hidden w-full relative z-0 mt-[-120px] md:mt-[-200px] lg:mt-[-200px]">
            <div id="road-animation" className="flex w-[200%]">
              <img
                src={road}
                alt="Road"
                className="w-1/2 h-[110px] md:h-[150px] lg:h-[170px] block object-cover"
                fetchpriority="high"
              />
              <img
                src={road}
                alt="Road duplicate"
                className="w-1/2 h-[110px] md:h-[150px] lg:h-[170px] block object-cover"
                fetchpriority="high"
              />
            </div>
          </div>


          {/* carRoad image on top of the moving road */}
          <div className="absolute bottom-[390px] md:bottom-[310px] lg:bottom-[270px] xl:bottom-[200px] md:left-[100px] lg:left-[240px] z-10 group">
            <img
              src={carRoad}
              alt="Car on road"
              className="h-[130px] xl:h-[280px] md:h-[180px] lg:h-[250px] w-auto 
               transition-transform duration-700 ease-in-out group-hover:scale-105" fetchpriority="high"
            />
          </div>

        </section>



        {/* // ABout US */}
        <section
          className="w-full bg-white px-6 mt-[-190px] md:mt-[-50px] xl:mt-[50px] md:px-20 scroll-mt-20"
          ref={aboutRef}
          id="about"
        >
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-xl md:text-2xl text-center lg:text-start font-medium mb-4 animate-item">
                ABOUT US
              </h2>

              <p className="text-gray-600 text-base text-center lg:text-start leading-tight md:leading-relaxed mb-6 animate-item">
                At Revive, we’re more than just a car garage – we’re your trusted partners in keeping your vehicle safe, reliable, and running at its best. With years of hands-on experience and a passion for automobiles, our skilled technicians provide top-quality service.
                {showMore && (
                  <>
                    {" "}Our customer-first approach means transparent communication, fair pricing, and solutions tailored to your needs. From the moment you step in, we treat your vehicle like our own — with care, precision, and attention to detail. Because at Revive, your satisfaction and your car’s performance are always our top priorities.
                  </>
                )}
              </p>

              {/* Desktop Button */}
              <div className="hidden lg:inline-block bg-white p-1 shadow-[0_4px_12px_rgba(0,0,0,0.3)]" onClick={toggleText}>
                <button className="bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-semibold py-3 px-6 transition duration-300">
                  {showMore ? "SHOW LESS" : "LEARN MORE"}
                </button>
              </div>

              {/* Mobile Button */}
              <div className="flex justify-center animate-item">
                <button
                  onClick={toggleText}
                  className="text-base lg:hidden block text-black font-bold"
                >
                  {showMore ? "Show Less" : "Know More"}{" "}
                  <span className="text-black text-lg">
                    {showMore ? "▴" : "▾"}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6 text-center lg:border-l border-gray-300 lg:pl-12">
              {[
                { count: "1000+", label: "Happy Clients" },
                { count: "1000+", label: "Completed Services" },
                { count: "1000+", label: "Happy Reviews" },
                { count: "25+", label: "On Going Services" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg md:rounded-none md:bg-gray-100 p-3 h-auto md:p-13 lg:p-6 md:h-[160px] lg:h-[130px] lg:w-[200px] border border-[#E0E0E0] shadow transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_10px_20px_rgba(0,0,0,0.2),0_-4px_10px_rgba(0,0,0,0.05)] hover:z-10 relative hover:border-none animate-item"
                >
                  <h3 className="text-2xl font-bold">{stat.count}</h3>
                  <p className="text-gray-600 md:text-base text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <AboutAnimation />
        </section>

        {/* Service  */}
        <section
          className="w-[90%] mx-auto lg:mt-[100px] py-6 scroll-mt-12"
          ref={serviceRef}
          id="services"
        >
          <div>
            <div className="flex justify-center flex-col items-center animate-item">
              <h1 className="text-xl md:text-2xl font-medium">Our Services</h1>
              <div className="h-[2px] w-24 bg-[#F78430] mt-1"></div>
              <p className="max-w-3xl text-base text-center mt-4 text-[#828282] animate-item">
                We offer complete car care solutions, from routine maintenance
                to advanced repairs. <br />
                With skilled technicians and modern equipment, your vehicle
                gets the expert attention it deserves. <br />
                Whether it’s performance, safety, or style – we’ve got every
                part of your car covered.
              </p>
            </div>




            {/* Swiper Carousel */}
            <div className="py-6 px-6 md:px-12 mt-2 relative">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="!pb-10"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="flex">
                    <Link to={service.link} state={{ from: "services" }}>
                      <div className="bg-white w-full rounded-2xl shadow-xl overflow-hidden flex flex-col h-full">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-52 md:h-60 lg:h-72 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow justify-between">
                          <h3 className="text-xl font-semibold text-black mb-2">{service.title}</h3>
                          <p className="text-gray-600 text-sm md:text-base leading-snug">
                            {service.shortDescription && service.longDescription
                              ? window.innerWidth >= 780 ? service.shortDescription // Desktop
                                : service.longDescription // Mobile/Tablet
                              : service.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}

              </Swiper>

            </div>

            {/* <div className="py-6 px-6 md:px-12 mt-2 relative">
  <Swiper
    modules={[Pagination, Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
    className="!pb-10"
  >
    {services.map((service, index) => (
      <SwiperSlide key={index}>
        <Link to={service.link} state={{ from: 'services' }}>
          <div className="bg-white w-full h-[400px] rounded-2xl shadow-xl overflow-hidden flex flex-col animate-item">
            <img
              src={service.image}
              loading="lazy"
              alt={service.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-6 text-center flex-grow flex flex-col justify-start">
              <h3 className="text-2xl font-bold text-black mb-1">
                {service.title}
              </h3>
              <p className="text-base text-gray-700 leading-snug">
                {service.description}
              </p>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
</div> */}

          </div>
        </section>

        {/* Brand We Serve  */}

        <section className="w-[90%] mx-auto md:mt-[80px] mb-18 md:mb-8 py-6" id="brand-item">
          <h1 className="text-center text-xl md:text-2xl font-medium mb-10 md:mb-15">
            Brands We Serve
          </h1>

          {/* --- Top Row --- */}
          <div
            ref={scrollRefTop}
            onMouseDown={handleMouseDown(scrollRefTop)}
            onMouseLeave={handleMouseLeave(scrollRefTop)}
            onMouseUp={handleMouseUp(scrollRefTop)}
            onMouseMove={handleMouseMove(scrollRefTop, false)}
            className="w-full overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide select-none"
          >
            <div className="flex gap-8 w-max px-4">
              {topBrands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 md:w-40 flex flex-col items-center text-center"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="w-14 md:w-24 h-auto hover:scale-110 transition-transform duration-300"
                    draggable={false}
                  />
                  <p className="mt-2 text-sm md:text-base">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- Bottom Row --- */}
          <div
            ref={scrollRefBottom}
            onMouseDown={handleMouseDown(scrollRefBottom)}
            onMouseLeave={handleMouseLeave(scrollRefBottom)}
            onMouseUp={handleMouseUp(scrollRefBottom)}
            onMouseMove={handleMouseMove(scrollRefBottom, true)}
            className="w-full overflow-x-auto cursor-grab active:cursor-grabbing scrollbar-hide select-none mt-10"
          >
            <div className="flex gap-8 w-max px-4">
              {visibleBrands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 md:w-40 flex flex-col items-center text-center"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="w-14 md:w-24 h-auto hover:scale-110 transition-transform duration-300"
                    draggable={false}
                  />
                  <p className="mt-2 text-sm md:text-base">{brand.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* // Latest Project  */}
        <section className="w-[100%] md:mt-[150px] py-12 bg-gray-400 scroll-mt-18" ref={galleryRef} id='gallery'>
          <div>
            <h3 className="text-center text-lg md:text-2xl font-medium text-[#F6452D] tracking-widest">
              GALLERY
            </h3>
            <h1 className="text-center text-2xl md:text-5xl font-semibold leading-relaxed">
              LATEST PROJECTS
            </h1>
            <div className="mt-10 overflow-hidden mb-6" ref={scrollRef}>
              {/* ✅ Animated Image Row */}
              <div className="flex gap-4 w-max" ref={imageRowRef}>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="relative w-[300px] h-[300px] md:w-[400px] md:h-[300px] flex-shrink-0"
                  >
                    {/* 🖼️ Image */}
                    <img
                      src={project.img}
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      alt={`Project ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />

                    {/* 📷 Clickable “View Post” + Icon */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/60 px-3 py-2 rounded-full text-white hover:bg-black/80 transition"
                    >
                      {/* 📝 Text */}
                      <span className="text-sm font-medium">View Post</span>

                      {/* 🔗 Instagram Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zM7.5 4h9A3.5 3.5 0 0 1 20 7.5v9A3.5 3.5 0 0 1 16.5 20h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4zm9.75 1.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>

            </div>


          </div>
        </section>

        {/* /// why we choose  */}
        <section className="max-w-5xl md:px-4 mt-[100px] md:mt-[130px] lg:mt-[200px] mx-auto py-6 scroll-mt-12" id='whyChooseUs'>
          <div className="grid grid-cols-1 px-6 md:px-0 md:grid-cols-2 gap-6 lg:gap-20 items-start">
            {/* Text Section - comes first on all screens */}
            <div className="order-1 md:order-2 flex flex-col justify-start space-y-6" ref={textRef1}>
              <div>
                <h1 className="text-4xl text-center md:text-start font-medium">
                  Why Choose <span className="text-[#E62425]">Revive</span> Auto Studio ?
                </h1>
                <p className="text-sm font-bold text-[#454545] text-center md:text-start leading-snug mt-6">
                  Discover the Benefits That Set Us Apart and Propel Your
                  Fitness Journey Forward.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 md:space-y-2 lg:space-y-4">
                {[
                  {
                    title: "Expert Technicians",
                    desc: "Experienced professionals who treat every car like their own.",
                  },
                  {
                    title: "Quality Parts & Tools",
                    desc: "Genuine spares and advanced equipment for lasting performance.",
                  },
                  {
                    title: "Transparent Pricing",
                    desc: "No hidden costs, only honest service.",
                  },
                  {
                    title: "Quick Turnaround",
                    desc: "Fast, efficient service without compromising quality.",
                  },
                  {
                    title: "Customer Satisfaction",
                    desc: "We prioritize your comfort and confidence, delivering service that exceeds expectations every time.",
                  },
                ].map((item, index) => (
                  <div
                    className="flex items-center md:text-start gap-3"
                    key={index}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-sm text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="flex justify-center md:justify-start">
                  <button className="text-sm px-4 py-2 bg-[#E62425] hover:cursor-pointer text-white font-medium rounded mt-4 md:mt-2 lg:mt-10" onClick={() => scrollToSection(bookingRef)}>
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Images Section - second on mobile, right side on md+ */}
            <div className="order-2 md:order-1 flex flex-col gap-6" ref={imageRef1}>
              <img
                src={why1}
                alt="Car service"
                loading="lazy"
                className="w-full h-[180px] object-cover rounded-2xl"
                decoding="async"
                fetchpriority="low"
              />
              <img
                src={why2}
                alt="Car tools"
                loading="lazy"
                className="w-full h-[180px] object-cover rounded-2xl"
                decoding="async"
                fetchpriority="low"
              />
              <img
                src={why3}
                alt="Car repair"
                loading="lazy"
                className="w-full h-[180px] object-cover rounded-2xl"
                decoding="async"
                fetchpriority="low"
              />
            </div>
          </div>
        </section>

        {/* // testinomials */}
        <section
          className="max-w-6xl mx-auto py-16 md:mt-[100px] scroll-mt-6"
          id="testimonial"
        >
          <div className="w-full mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-1">
              What Our Customers Say
            </h2>

            <h2 className="text-xl text-center font-semibold">
              Real Stories. Real Experiences.
            </h2>

            {/* Horizontal Layout */}
            <div className="py-6 px-4 md:px-12 mt-4 md:bottom-[-80px] relative">
              {/* Background Layer */}
              <div className="absolute inset-0 flex justify-center items-center z-0">
                <div className="w-full max-w-[700px] h-[390px] sm:h-[400px] md:h-[500px] bg-[#FFEEEE] rounded-lg mx-auto"></div>
              </div>

              {/* Swiper Carousel */}
              <Swiper
                modules={[Navigation,]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={setSwiperInstance}
                pagination={{ clickable: true }}
                loop={true}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                onSlideChange={(swiper) => setSelectedIndex1(swiper.realIndex)}
                className="relative z-10 !pb-16"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white max-w-[320px] sm:max-w-none h-auto min-h-[270px] shadow-xl overflow-hidden p-6 text-start flex flex-col justify-between mx-auto w-full ">
                      <div className="flex justify-between items-center">
                        {/* Image + Text side by side */}
                        <div className="flex items-center space-x-2">
                          <img src={googlee} alt="Google Logo" className="w-6 h-auto" />
                          <h1 className="text-sm font-semibold">Reviews From Google</h1>
                        </div>

                        {/* Star Ratings */}
                        <div className="flex items-center text-yellow-500 text-lg">
                          {"★".repeat(testimonial.rating)}
                          {"☆".repeat(5 - testimonial.rating)}
                        </div>
                      </div>


                      <p className="text-[#425466] font-medium mt-4">
                        "{testimonial.review}"
                      </p>
                      <div>
                        <h3 className="text-base font-semibold text-black">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="absolute bottom-[42px] md:bottom-0 left-0 right-0 flex justify-center transform translate-y-1/2 z-20 space-x-4">
                <div className="px-3 py-2 bg-white">


                  <button
                    onClick={handlePrev}
                    className="text-black px-4 md:py-2 hover:cursor-pointer   transition"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="text-white bg-red-600 px-4 py-2 hover:bg-red-700 hover:cursor-pointer transition"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* // for mobile contact  */}
        <section className="w-[90%] bg-[#FFEEEE] py-9 mx-auto md:hidden p-4">
          <div className="space-y-8 flex flex-col justify-center items-center">
            {/* Customer Support */}
            <div className="flex flex-col justify-center items-center">
              <FaEnvelope className="text-3xl mb-2" /> {/* increased size */}
              <h1 className="text-xl font-semibold mb-2">Customer Support</h1>
              <p className="text-gray-700 text-center">
                Our customer support team is ready to assist you with any questions or concerns. Whether you need help with buying, selling, or trading a car, we're here to provide quick and reliable solutions.
              </p>
            </div>

            {/* Location */}
            <a
              href="https://www.google.com/maps?q=Revive+Auto+Studio+and+Garage,+Plot+no+11+12,+Suffah+Colony+Rd,+opp.+Wipro+Campus+Road,+Journalists+Colony+Phase+3,+Phase+3,+Gachibowli,+Gopanpalle,+Hyderabad,+Telangana+500075"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-center items-center text-center hover:text-blue-600 transition"
            >
              <FaMapMarkerAlt className="text-3xl mb-2" />
              <h1 className="text-xl font-semibold mb-2">Location</h1>
              <p className="text-gray-700 text-center">
                Revive Auto Studio and Garage, Plot no 11 12, Suffah Colony Rd, opp. Wipro Campus Road, Journalists Colony Phase 3, Phase 3, Gachibowli, Gopanpalle, Hyderabad, Telangana 500075
              </p>
            </a>

            {/* Contact Support */}
            <div className="flex flex-col justify-center items-center">
              <FaPhoneAlt className="text-3xl mb-2" /> {/* increased size */}
              <h1 className="text-xl font-semibold mb-2">Contact Support</h1>
              <div className="flex flex-col space-y-2 justify-center items-center">
                {/* <a href="https://share.google/8iGTOfYnibzGhWByl" className="text-blue-600 hover:text-blue-900 mb-2">https://share.google/8iGTOfYnibzGhWByl</a> */}
                <a href="mailto:info@revive-auto.in" className="flex items-center text-red-600 hover:underline">
                  info@revive-auto.in
                </a>
                <a href="tel:+917382661199" className="flex items-center text-red-600 hover:underline">
                  +91-7382661199
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* // Booking  */}
        <section className="w-[90%]  md:mt-[120px] max-w-6xl mx-auto py-10 scroll-mt-9" id='booking' ref={bookingRef}>
          <h2 className="text-xl md:text-2xl font-bold md:mb-18 mb-4 text-center">
            Book An Appointment
          </h2>

          <div className="grid md:grid-cols-2 items-start gap-8">
            {/* Left Side Info */}
            <div>
              <h3 className="text-lg md:text-start text-center md:text-3xl font-semibold mb-2">
                Schedule Your Service Today: <br className="md:block hidden" />{" "}
                Quick and Convenient
              </h3>
              <p className="text-gray-600 md:text-start text-center mb-1 md:mb-9">
                Scheduling with Tire cargories is quick and easy, ensuring your
                service is performed at a convenient time. Get top-tier service,
                diagnostics, repairs, or maintenance today!
              </p>

              <h3 className="text-3xl font-semibold mb-2 md:block hidden">
                Customer Support
              </h3>
              <p className="text-gray-600 mb-9 md:block hidden">
                Our customer support team is ready to assist you with any
                questions or concerns. Whether you need help with buying,
                selling, or servicing a car, we’re here to provide quick and
                reliable solutions.
              </p>
              <h3 className="text-3xl font-semibold mb-2 md:block hidden">Location</h3>
              <a
                href="https://www.google.com/maps?q=Revive+Auto+Studio+and+Garage,+Plot+no+11+12,+Suffah+Colony+Rd,+opp.+Wipro+Campus+Road,+Journalists+Colony+Phase+3,+Gachibowli,+Hyderabad,+Telangana+500075"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-600 md:block hidden mb-9 hover:underline transition"
              >
                Revive Auto Studio and Garage, Plot no 11 12, Suffah Colony Rd, opp. Wipro Campus Road, Journalists Colony Phase 3, Phase 3, Gachibowli, Gopanpalle, Hyderabad, Telangana 500075.
              </a>

              <h3 className="text-2xl font-semibold mb-2 md:block hidden">
                Contact
              </h3>
              {/* <a href="https://share.google/8iGTOfYnibzGhWByl" className="text-blue-600 hidden md:block hover:text-blue-900 mb-2">https://share.google/8iGTOfYnibzGhWByl</a> */}
              <a href="mailto:info@revive-auto.in" className="text-red-600 md:block hidden ">
                info@revive-auto.in
              </a>

              <a href="tel:+917382661199" className="text-red-600 md:block hidden ">
                +91-7382661199
              </a>

            </div>

            {/* Right Side Form */}
            <form
              onSubmit={contactHandle}
              className="bg-white md:p-6 md:border-2 border-gray-400 rounded-xl md:shadow-md"
            >
              <h3 className="text-xl font-semibold md:text-start text-center mb-4">
                Fill The Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone No.</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone No"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block mb-1 font-medium text-gray-700">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="Oil Change">Oil Change</option>
                    <option value="Brake Inspection">Brake Inspection</option>
                    <option value="Engine Diagnostics">Engine Diagnostics</option>
                    <option value="Tire Rotation">Tire Rotation</option>
                    <option value="Full Car Service">Full Car Service</option>
                    <option value="Custom Repair">Custom Repair</option>
                  </select>
                </div>


                <div>
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full mt- 1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full mt-1 rounded-lg border border-gray-300 bg-white p-3 placeholder-gray-400 shadow-sm transition-all duration-200 focus:border-red-600 focus:ring-2 focus:ring-red-100 focus:outline-none"
                  rows="4"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-red-600 text-white py-2 mt-4 font-semibold transition-colors duration-200 ${loading ? 'bg-red-400 cursor-not-allowed' : 'hover:bg-red-700 cursor-pointer'
                  }`}
              >
                {loading ? "Booking..." : "Book An Appointment"}
              </button>

            </form>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </section>


      </main>
    </>
  );
};

export default Home;
