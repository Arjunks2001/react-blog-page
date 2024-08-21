import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Pagination from './Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronRight,faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons'

// import { totaldata } from './Totaldata'
// import Filtereddatas from './Filtereddatas';


export const blogData = [{
    Image: "https://s3-alpha-sig.figma.com/img/cbd7/089a/fc395aa9db321bd89d3d229d5a7d381a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMa3TUtohr-77d~BvbGyJH52fXL1dyJrXWDuL-GYfRjE2lyR1Mkg66GxV8QutkpJMoo1EnlVa~57bgl3Xndgi1lkw-1SOzrgSagpv2DVYrNnwOKtrbvVdEgkuyXhq9gAa073LZsI5jVrJZ2wtch2fvZyI5jBYhhrNeORjS~GyqlnxFeLOSYd1mSI6ZNo4S23SuO5gHettugdKHeIau-W11-ed2d5jze4-z3G-IZ5XQM9ru1iVU1BL4spkEqz6nkeSJd74uTH6~K1Ya74ujKZ-9QIP1zT12e9CmrseeWOx-VgNN-6d6mHia2TIlLErnrm7BDB32q47CbrSqAIbFjSBg__",
    content: "Landing Flutter 3.22 and Dart 3.4 at Google I/O 2024",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/211c/3c7d/bd8fc440f977abee5bb393f28c6e0358?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Juv2pD2WsKhDmRM3RkiBxeFd8FAYk5YKxuOHBUq1765g7SHwJpZeFHn8LIlxyIxJW5wfzBFmHJe2500WiXFXDA3~gN0awPhKEd787Cpih7pIxm4Myn~WO9K8Ky9Z2~9zu5S2zcB1XcuWpSq2PRI~yEaPeX2c8-gNl9nTDl~Q8CDQ6DzolpUZMdLiT4mb-k77gZsgevv64hdYEwN~4rgGL8D1y1~JL7KRfLgxS0a4GLFU0580JW81SySG17zaID7JOO~1JYOZyZbmGPAJ86G6K46wnA2fT4gQOfCQKAgGNWrYfMJ8l7UEbXH4q2XGZSJliVcIMe0wL0fHNhicAEN2Mw__",
    content: "Get Started in AI and NFTs with the Limewire API",
    date: "15 Feb 2024",
  },
  
  {
    Image: "https://s3-alpha-sig.figma.com/img/cbd7/089a/fc395aa9db321bd89d3d229d5a7d381a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMa3TUtohr-77d~BvbGyJH52fXL1dyJrXWDuL-GYfRjE2lyR1Mkg66GxV8QutkpJMoo1EnlVa~57bgl3Xndgi1lkw-1SOzrgSagpv2DVYrNnwOKtrbvVdEgkuyXhq9gAa073LZsI5jVrJZ2wtch2fvZyI5jBYhhrNeORjS~GyqlnxFeLOSYd1mSI6ZNo4S23SuO5gHettugdKHeIau-W11-ed2d5jze4-z3G-IZ5XQM9ru1iVU1BL4spkEqz6nkeSJd74uTH6~K1Ya74ujKZ-9QIP1zT12e9CmrseeWOx-VgNN-6d6mHia2TIlLErnrm7BDB32q47CbrSqAIbFjSBg__",
    content: "Landing Flutter 3.22 and Dart 3.4 at Google I/O 2024",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/211c/3c7d/bd8fc440f977abee5bb393f28c6e0358?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Juv2pD2WsKhDmRM3RkiBxeFd8FAYk5YKxuOHBUq1765g7SHwJpZeFHn8LIlxyIxJW5wfzBFmHJe2500WiXFXDA3~gN0awPhKEd787Cpih7pIxm4Myn~WO9K8Ky9Z2~9zu5S2zcB1XcuWpSq2PRI~yEaPeX2c8-gNl9nTDl~Q8CDQ6DzolpUZMdLiT4mb-k77gZsgevv64hdYEwN~4rgGL8D1y1~JL7KRfLgxS0a4GLFU0580JW81SySG17zaID7JOO~1JYOZyZbmGPAJ86G6K46wnA2fT4gQOfCQKAgGNWrYfMJ8l7UEbXH4q2XGZSJliVcIMe0wL0fHNhicAEN2Mw__",
    content: "Get Started in AI and NFTs with the Limewire API",
    date: "15 Mar 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/cbd7/089a/fc395aa9db321bd89d3d229d5a7d381a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMa3TUtohr-77d~BvbGyJH52fXL1dyJrXWDuL-GYfRjE2lyR1Mkg66GxV8QutkpJMoo1EnlVa~57bgl3Xndgi1lkw-1SOzrgSagpv2DVYrNnwOKtrbvVdEgkuyXhq9gAa073LZsI5jVrJZ2wtch2fvZyI5jBYhhrNeORjS~GyqlnxFeLOSYd1mSI6ZNo4S23SuO5gHettugdKHeIau-W11-ed2d5jze4-z3G-IZ5XQM9ru1iVU1BL4spkEqz6nkeSJd74uTH6~K1Ya74ujKZ-9QIP1zT12e9CmrseeWOx-VgNN-6d6mHia2TIlLErnrm7BDB32q47CbrSqAIbFjSBg__",
    content: "Landing Flutter 3.22 and Dart 3.4 at Google I/O 2024",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/cbd7/089a/fc395aa9db321bd89d3d229d5a7d381a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMa3TUtohr-77d~BvbGyJH52fXL1dyJrXWDuL-GYfRjE2lyR1Mkg66GxV8QutkpJMoo1EnlVa~57bgl3Xndgi1lkw-1SOzrgSagpv2DVYrNnwOKtrbvVdEgkuyXhq9gAa073LZsI5jVrJZ2wtch2fvZyI5jBYhhrNeORjS~GyqlnxFeLOSYd1mSI6ZNo4S23SuO5gHettugdKHeIau-W11-ed2d5jze4-z3G-IZ5XQM9ru1iVU1BL4spkEqz6nkeSJd74uTH6~K1Ya74ujKZ-9QIP1zT12e9CmrseeWOx-VgNN-6d6mHia2TIlLErnrm7BDB32q47CbrSqAIbFjSBg__",
    content: "Landing Flutter 3.22 and Dart 3.4 at Google I/O 2024",
    date: "15 Mar 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/cd8a/fc25/a1d71b1d2ed9d10de81d901cfbc34119?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmC8mfbGxV-PVct8csq5YLSmEhgMRPbbX7VxHhGcnqBijbvJC~Rw8smrPVuaavhEKA6QDJZdwglEjZ4hUyxmxTjIcbYDG0j-KLZ5YdBLinwalvIeHi9if2OS-zUnZTg~E4oqtnZ-WnBnd1Og96ogLk5~Dl-bHOTUfDNdTWhYxVUb5jz~uA34CNQclLWTeH4DEoE5UK8wQSWh3w8cKy~NEt2e9TXb7UtOlr0XKGPb2o4wwefEoagkc0YYmvZ-ouZgykOjWl0AV9Oghc3nNaEHe8YhPzTIijGyyzEk916n4B3EZ4ESkjSxP7z8cCp7d5Gc8QavsvCBjdaGtX417TbnqQ__",
    content: "A Comprehensive Guide on Developing Responsive and Common React Filter Component",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/211c/3c7d/bd8fc440f977abee5bb393f28c6e0358?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Juv2pD2WsKhDmRM3RkiBxeFd8FAYk5YKxuOHBUq1765g7SHwJpZeFHn8LIlxyIxJW5wfzBFmHJe2500WiXFXDA3~gN0awPhKEd787Cpih7pIxm4Myn~WO9K8Ky9Z2~9zu5S2zcB1XcuWpSq2PRI~yEaPeX2c8-gNl9nTDl~Q8CDQ6DzolpUZMdLiT4mb-k77gZsgevv64hdYEwN~4rgGL8D1y1~JL7KRfLgxS0a4GLFU0580JW81SySG17zaID7JOO~1JYOZyZbmGPAJ86G6K46wnA2fT4gQOfCQKAgGNWrYfMJ8l7UEbXH4q2XGZSJliVcIMe0wL0fHNhicAEN2Mw__",
    content: "Get Started in AI and NFTs with the Limewire API",
    date: "15 Feb 2024",
  },
  
  {
    Image: "https://s3-alpha-sig.figma.com/img/cbd7/089a/fc395aa9db321bd89d3d229d5a7d381a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMa3TUtohr-77d~BvbGyJH52fXL1dyJrXWDuL-GYfRjE2lyR1Mkg66GxV8QutkpJMoo1EnlVa~57bgl3Xndgi1lkw-1SOzrgSagpv2DVYrNnwOKtrbvVdEgkuyXhq9gAa073LZsI5jVrJZ2wtch2fvZyI5jBYhhrNeORjS~GyqlnxFeLOSYd1mSI6ZNo4S23SuO5gHettugdKHeIau-W11-ed2d5jze4-z3G-IZ5XQM9ru1iVU1BL4spkEqz6nkeSJd74uTH6~K1Ya74ujKZ-9QIP1zT12e9CmrseeWOx-VgNN-6d6mHia2TIlLErnrm7BDB32q47CbrSqAIbFjSBg__",
    content: "A Comprehensive Guide on Developing Responsive and Common React Filter Component",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/cd8a/fc25/a1d71b1d2ed9d10de81d901cfbc34119?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmC8mfbGxV-PVct8csq5YLSmEhgMRPbbX7VxHhGcnqBijbvJC~Rw8smrPVuaavhEKA6QDJZdwglEjZ4hUyxmxTjIcbYDG0j-KLZ5YdBLinwalvIeHi9if2OS-zUnZTg~E4oqtnZ-WnBnd1Og96ogLk5~Dl-bHOTUfDNdTWhYxVUb5jz~uA34CNQclLWTeH4DEoE5UK8wQSWh3w8cKy~NEt2e9TXb7UtOlr0XKGPb2o4wwefEoagkc0YYmvZ-ouZgykOjWl0AV9Oghc3nNaEHe8YhPzTIijGyyzEk916n4B3EZ4ESkjSxP7z8cCp7d5Gc8QavsvCBjdaGtX417TbnqQ__",
    content: "A Comprehensive Guide on Developing Responsive and Common React Filter Component",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/211c/3c7d/bd8fc440f977abee5bb393f28c6e0358?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Juv2pD2WsKhDmRM3RkiBxeFd8FAYk5YKxuOHBUq1765g7SHwJpZeFHn8LIlxyIxJW5wfzBFmHJe2500WiXFXDA3~gN0awPhKEd787Cpih7pIxm4Myn~WO9K8Ky9Z2~9zu5S2zcB1XcuWpSq2PRI~yEaPeX2c8-gNl9nTDl~Q8CDQ6DzolpUZMdLiT4mb-k77gZsgevv64hdYEwN~4rgGL8D1y1~JL7KRfLgxS0a4GLFU0580JW81SySG17zaID7JOO~1JYOZyZbmGPAJ86G6K46wnA2fT4gQOfCQKAgGNWrYfMJ8l7UEbXH4q2XGZSJliVcIMe0wL0fHNhicAEN2Mw__",
    content: "Get Started in AI and NFTs with the Limewire API",
    date: "15 Feb 2024",
  },
  
  {
    Image: "https://s3-alpha-sig.figma.com/img/cbd7/089a/fc395aa9db321bd89d3d229d5a7d381a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMa3TUtohr-77d~BvbGyJH52fXL1dyJrXWDuL-GYfRjE2lyR1Mkg66GxV8QutkpJMoo1EnlVa~57bgl3Xndgi1lkw-1SOzrgSagpv2DVYrNnwOKtrbvVdEgkuyXhq9gAa073LZsI5jVrJZ2wtch2fvZyI5jBYhhrNeORjS~GyqlnxFeLOSYd1mSI6ZNo4S23SuO5gHettugdKHeIau-W11-ed2d5jze4-z3G-IZ5XQM9ru1iVU1BL4spkEqz6nkeSJd74uTH6~K1Ya74ujKZ-9QIP1zT12e9CmrseeWOx-VgNN-6d6mHia2TIlLErnrm7BDB32q47CbrSqAIbFjSBg__",
    content: "A Comprehensive Guide on Developing Responsive and Common React Filter Component",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/cd8a/fc25/a1d71b1d2ed9d10de81d901cfbc34119?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SmC8mfbGxV-PVct8csq5YLSmEhgMRPbbX7VxHhGcnqBijbvJC~Rw8smrPVuaavhEKA6QDJZdwglEjZ4hUyxmxTjIcbYDG0j-KLZ5YdBLinwalvIeHi9if2OS-zUnZTg~E4oqtnZ-WnBnd1Og96ogLk5~Dl-bHOTUfDNdTWhYxVUb5jz~uA34CNQclLWTeH4DEoE5UK8wQSWh3w8cKy~NEt2e9TXb7UtOlr0XKGPb2o4wwefEoagkc0YYmvZ-ouZgykOjWl0AV9Oghc3nNaEHe8YhPzTIijGyyzEk916n4B3EZ4ESkjSxP7z8cCp7d5Gc8QavsvCBjdaGtX417TbnqQ__",
    content: "A Comprehensive Guide on Developing Responsive and Common React Filter Component",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/211c/3c7d/bd8fc440f977abee5bb393f28c6e0358?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Juv2pD2WsKhDmRM3RkiBxeFd8FAYk5YKxuOHBUq1765g7SHwJpZeFHn8LIlxyIxJW5wfzBFmHJe2500WiXFXDA3~gN0awPhKEd787Cpih7pIxm4Myn~WO9K8Ky9Z2~9zu5S2zcB1XcuWpSq2PRI~yEaPeX2c8-gNl9nTDl~Q8CDQ6DzolpUZMdLiT4mb-k77gZsgevv64hdYEwN~4rgGL8D1y1~JL7KRfLgxS0a4GLFU0580JW81SySG17zaID7JOO~1JYOZyZbmGPAJ86G6K46wnA2fT4gQOfCQKAgGNWrYfMJ8l7UEbXH4q2XGZSJliVcIMe0wL0fHNhicAEN2Mw__",
    content: "Get Started in AI and NFTs with the Limewire API",
    date: "15 Feb 2024",
  },
  {
    Image: "https://s3-alpha-sig.figma.com/img/211c/3c7d/bd8fc440f977abee5bb393f28c6e0358?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Juv2pD2WsKhDmRM3RkiBxeFd8FAYk5YKxuOHBUq1765g7SHwJpZeFHn8LIlxyIxJW5wfzBFmHJe2500WiXFXDA3~gN0awPhKEd787Cpih7pIxm4Myn~WO9K8Ky9Z2~9zu5S2zcB1XcuWpSq2PRI~yEaPeX2c8-gNl9nTDl~Q8CDQ6DzolpUZMdLiT4mb-k77gZsgevv64hdYEwN~4rgGL8D1y1~JL7KRfLgxS0a4GLFU0580JW81SySG17zaID7JOO~1JYOZyZbmGPAJ86G6K46wnA2fT4gQOfCQKAgGNWrYfMJ8l7UEbXH4q2XGZSJliVcIMe0wL0fHNhicAEN2Mw__",
    content: "Get Started in AI and NFTs with the Limewire API",
    date: "15 Feb 2024",
  },

  
  ];


const Blog_list = ({listdata,blog_section}) => {


  const [currentPage, setCurrentPage] = useState(1);
  // const [cardsPerPage, setCardsPerPage] = useState(3);
  const [recordsPerPage]=useState(5)
  const [data,setData]=useState([0])
  useEffect(()=>{
    setData(listdata)
  },[])

  
  const indexOfLastCard = currentPage * recordsPerPage;
  const indexOfFirstCard = indexOfLastCard - recordsPerPage;
  const currentPosts = data.slice(indexOfFirstCard, indexOfLastCard);
  const nPages = Math.ceil(data.length / recordsPerPage)
  console.log("data",nPages)

  // const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div class="container px-4">
      <Navbar />

      <div className="container">
        <div className="row ">
          <p> Blog /<span >{blog_section}</span></p>

          {currentPosts.map((item) => (
            <div className="col-md-6 col-lg-4">
              <div className="container ms-1">
                <img
                  src={item.Image}
                  className="card_image card-img-top border rounded-4 rounded me-2 "
                />
                <p className="blog-content mt-3 ">{item.content}</p>
                <p className="blog-date mb-3">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-center '  role="button"  >
        {/* <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" style={{color: "#2d51e1",}} /> */}
        <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
       
      
      
       {/* <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" style={{color: "#254def",}} /> */}
        
        </div>
        
        
      </div>
      
    </div>
  );
}

export default Blog_list

