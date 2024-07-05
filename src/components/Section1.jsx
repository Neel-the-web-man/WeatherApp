import React from 'react'
import "./Section1.css"
const Section1 = () => {
  return (
    <section id='section1'>
      <img id='bg-1' src="/bg-img-1.jpg" alt="bg-img" />
      <div className="section1">
        <h1>
          Welcome To Weather App !
        <div className="border-btm"></div>
        </h1>
        <h1>
          Get Latest Weather Updates Here...
        <div className="border-btm"></div>
        </h1>
        <h1>
          Scroll Down to Get Data of Location You Want.
        <div className="border-btm"></div>
        </h1>
      </div>
      <div className='images-sec1'>
        <div className='img-svg'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
            <path d="M21 14.25L20.1689 13.591C19.223 12.841 18.75 12.466 18.75 12C18.75 11.534 19.223 11.159 20.1689 10.409L21 9.75M3 9.75L3.83115 10.409C4.77705 11.159 5.25 11.534 5.25 12C5.25 12.466 4.77705 12.841 3.83115 13.591L3 14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5718 21L14.7282 19.9412C14.9062 18.7362 14.9951 18.1337 15.4019 17.8986C15.8087 17.6635 16.3744 17.8876 17.5058 18.3358L18.5 18.7296M9.4282 3L9.27182 4.0588C9.09384 5.26379 9.00486 5.86629 8.59808 6.10139C8.1913 6.3365 7.62558 6.1124 6.49416 5.6642L5.5 5.27038" stroke="currentColor" strokeWidth="1.5" />
            <path d="M5 18.7317L6.07032 18.3375C7.2884 17.8889 7.89747 17.6645 8.33521 17.8994C8.77295 18.1343 8.86844 18.7367 9.05941 19.9414L9.22722 21M19 5.26825L17.9297 5.66249C16.7116 6.11115 16.1025 6.33548 15.6648 6.1006C15.2271 5.86571 15.1316 5.26333 14.9406 4.05859L14.7728 3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M19 12.0003H5M15.5 17.9998L8.5 6M15.5 6.00025L8.5 18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <div>Feels Like</div>
        </div>
        <div className="img-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
            <path d="M12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2147 13.9122 15.0005 13V5.00049C15.0005 4.06815 15.0005 3.60198 14.8481 3.23428C14.6451 2.74451 14.256 2.35537 13.7662 2.15239C13.3985 2 12.9323 2 12 2C11.0677 2 10.6015 2 10.2338 2.15239C9.74402 2.35537 9.35488 2.74451 9.1519 3.23428C8.99951 3.60198 8.99951 4.06815 8.99951 5.00049V13C7.78534 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15ZM12 15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div>
            Temperature
          </div>
        </div>
        <div className="img-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
            <path d="M2 5.94145C5.5 9.37313 10.5755 7.90241 11.7324 5.94145C11.9026 5.65301 12 5.31814 12 4.96096C12 3.87795 11.1046 3 10 3C8.89543 3 8 3.87795 8 4.96096" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M17 8.92814C17 7.31097 18.1193 6 19.5 6C20.8807 6 22 7.31097 22 8.92814C22 9.6452 21.7799 10.3021 21.4146 10.8111C19.3463 14.1915 9.2764 12.9164 4 11.8563" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13.0854 19.8873C13.2913 20.5356 13.8469 21 14.5 21C15.3284 21 16 20.2528 16 19.331C16 19.0176 15.9224 18.7244 15.7873 18.4738C14.4999 15.9925 7.99996 14.3239 2 18.7746" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M19 15.5H21" stroke="currentColor" />
          </svg>
          <div>
            Winds
          </div>
        </div>
        <div className="img-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" color="#ffffff" fill="none">
            <path d="M16.201 7.79899C17.8024 9.40034 20.3987 9.40034 22 7.79899L16.201 2C14.5997 3.60135 14.5997 6.19764 16.201 7.79899Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 8L14.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14.8322 13.001C15.4344 12.3988 15.7354 12.0977 15.7354 11.7236C15.7354 11.3494 15.4344 11.0484 14.8322 10.4462L13.5548 9.16879C12.9526 8.56662 12.6515 8.26553 12.2774 8.26553C11.9033 8.26553 11.6022 8.56662 11 9.16879L6.79367 13.3751C5.73544 14.4334 5.73544 16.1491 6.79367 17.2073C7.8519 18.2656 9.56763 18.2656 10.6259 17.2073L14.8322 13.001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15.4688 16.8563L16.8563 15.4688C17.5104 14.8147 17.8374 14.4877 18.2438 14.4877C18.6502 14.4877 18.9773 14.8147 19.6314 15.4688L21.0189 16.8563C21.673 17.5104 22 17.8374 22 18.2438C22 18.6502 21.673 18.9773 21.0189 19.6314L19.6314 21.0189C18.9773 21.673 18.6502 22 18.2438 22C17.8374 22 17.5104 21.673 16.8563 21.0189L15.4688 19.6314C14.8147 18.9773 14.4877 18.6502 14.4877 18.2438C14.4877 17.8374 14.8147 17.5104 15.4688 16.8563Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2.98112 4.36864L4.36864 2.98112C5.02273 2.32704 5.34977 2 5.75616 2C6.16256 2 6.4896 2.32704 7.14368 2.98112L8.5312 4.36864C9.18528 5.02273 9.51233 5.34977 9.51233 5.75616C9.51233 6.16256 9.18528 6.4896 8.5312 7.14368L7.14368 8.5312C6.4896 9.18528 6.16256 9.51233 5.75616 9.51233C5.34977 9.51233 5.02273 9.18528 4.36864 8.5312L2.98112 7.14368C2.32704 6.4896 2 6.16256 2 5.75616C2 5.34977 2.32704 5.02273 2.98112 4.36864Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 16L14 14M9.99999 10L8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div>
            Satellite
          </div>
        </div>
        <div className="img-svg">
          <img src="/radar.png" alt="logo" />
          <div>
            Radar
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1
