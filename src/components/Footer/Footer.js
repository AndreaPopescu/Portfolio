import './Footer.css';
import {FaLinkedin,FaGithub,FaYoutube} from 'react-icons/fa'


function Footer() {
  return (
    <div id='footer'>
      <div className='container' >
      <a href='/Portfolio' className='logo'>
        <svg width="184" height="22" viewBox="0 0 184 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.6415 13.4208H5.19191L4.31831 16H0.595114L5.87831 1.3984H9.99671L15.2799 16H11.5151L10.6415 13.4208ZM9.72631 10.6752L7.91671 5.3296L6.12791 10.6752H9.72631ZM24.2719 4.2688C25.6308 4.2688 26.7124 4.71253 27.5167 5.6C28.3348 6.4736 28.7439 7.68 28.7439 9.2192V16H25.2079V9.6976C25.2079 8.92107 25.0068 8.31787 24.6047 7.888C24.2025 7.45813 23.6617 7.2432 22.9823 7.2432C22.3028 7.2432 21.762 7.45813 21.3599 7.888C20.9577 8.31787 20.7567 8.92107 20.7567 9.6976V16H17.1999V4.3936H20.7567V5.9328C21.1172 5.41973 21.6025 5.0176 22.2127 4.7264C22.8228 4.42133 23.5092 4.2688 24.2719 4.2688ZM30.8203 10.176C30.8203 8.98347 31.0421 7.93653 31.4859 7.0352C31.9435 6.13387 32.5605 5.44053 33.3371 4.9552C34.1136 4.46987 34.9803 4.2272 35.9371 4.2272C36.6997 4.2272 37.3931 4.38667 38.0171 4.7056C38.6549 5.02453 39.1541 5.4544 39.5147 5.9952V0.608H43.0715V16H39.5147V14.336C39.1819 14.8907 38.7035 15.3344 38.0795 15.6672C37.4693 16 36.7552 16.1664 35.9371 16.1664C34.9803 16.1664 34.1136 15.9237 33.3371 15.4384C32.5605 14.9392 31.9435 14.2389 31.4859 13.3376C31.0421 12.4224 30.8203 11.3685 30.8203 10.176ZM39.5147 10.1968C39.5147 9.30933 39.2651 8.60907 38.7659 8.096C38.2805 7.58293 37.6843 7.3264 36.9771 7.3264C36.2699 7.3264 35.6667 7.58293 35.1675 8.096C34.6821 8.5952 34.4395 9.28853 34.4395 10.176C34.4395 11.0635 34.6821 11.7707 35.1675 12.2976C35.6667 12.8107 36.2699 13.0672 36.9771 13.0672C37.6843 13.0672 38.2805 12.8107 38.7659 12.2976C39.2651 11.7845 39.5147 11.0843 39.5147 10.1968ZM49.5135 6.328C49.9295 5.69013 50.4495 5.19093 51.0735 4.8304C51.6975 4.456 52.3908 4.2688 53.1535 4.2688V8.0336H52.1759C51.2884 8.0336 50.6228 8.22773 50.1791 8.616C49.7353 8.9904 49.5135 9.656 49.5135 10.6128V16H45.9567V4.3936H49.5135V6.328ZM66.1063 10.0096C66.1063 10.3424 66.0855 10.6891 66.0439 11.0496H57.9943C58.0498 11.7707 58.2786 12.3253 58.6807 12.7136C59.0967 13.088 59.6029 13.2752 60.1991 13.2752C61.0866 13.2752 61.7037 12.9008 62.0503 12.152H65.8359C65.6418 12.9147 65.2882 13.6011 64.7751 14.2112C64.2759 14.8213 63.645 15.2997 62.8823 15.6464C62.1197 15.9931 61.2669 16.1664 60.3239 16.1664C59.1869 16.1664 58.1746 15.9237 57.2871 15.4384C56.3997 14.9531 55.7063 14.2597 55.2071 13.3584C54.7079 12.4571 54.4583 11.4032 54.4583 10.1968C54.4583 8.9904 54.701 7.93653 55.1863 7.0352C55.6855 6.13387 56.3789 5.44053 57.2663 4.9552C58.1538 4.46987 59.173 4.2272 60.3239 4.2272C61.4471 4.2272 62.4455 4.46293 63.3191 4.9344C64.1927 5.40587 64.8722 6.0784 65.3575 6.952C65.8567 7.8256 66.1063 8.8448 66.1063 10.0096ZM62.4663 9.0736C62.4663 8.46347 62.2583 7.97813 61.8423 7.6176C61.4263 7.25707 60.9063 7.0768 60.2823 7.0768C59.6861 7.0768 59.1799 7.25013 58.7639 7.5968C58.3618 7.94347 58.1122 8.43573 58.0151 9.0736H62.4663ZM67.5875 10.176C67.5875 8.98347 67.8094 7.93653 68.2531 7.0352C68.7107 6.13387 69.3278 5.44053 70.1043 4.9552C70.8809 4.46987 71.7475 4.2272 72.7043 4.2272C73.5225 4.2272 74.2366 4.3936 74.8467 4.7264C75.4707 5.0592 75.9491 5.496 76.2819 6.0368V4.3936H79.8387V16H76.2819V14.3568C75.9353 14.8976 75.4499 15.3344 74.8259 15.6672C74.2158 16 73.5017 16.1664 72.6835 16.1664C71.7406 16.1664 70.8809 15.9237 70.1043 15.4384C69.3278 14.9392 68.7107 14.2389 68.2531 13.3376C67.8094 12.4224 67.5875 11.3685 67.5875 10.176ZM76.2819 10.1968C76.2819 9.30933 76.0323 8.60907 75.5331 8.096C75.0478 7.58293 74.4515 7.3264 73.7443 7.3264C73.0371 7.3264 72.4339 7.58293 71.9347 8.096C71.4494 8.5952 71.2067 9.28853 71.2067 10.176C71.2067 11.0635 71.4494 11.7707 71.9347 12.2976C72.4339 12.8107 73.0371 13.0672 73.7443 13.0672C74.4515 13.0672 75.0478 12.8107 75.5331 12.2976C76.0323 11.7845 76.2819 11.0843 76.2819 10.1968ZM93.8519 6.0992C93.8519 6.94507 93.6578 7.7216 93.2695 8.4288C92.8812 9.12213 92.285 9.68373 91.4807 10.1136C90.6764 10.5435 89.678 10.7584 88.4855 10.7584H86.2807V16H82.7239V1.3984H88.4855C89.6503 1.3984 90.6348 1.59947 91.4391 2.0016C92.2434 2.40373 92.8466 2.9584 93.2487 3.6656C93.6508 4.3728 93.8519 5.184 93.8519 6.0992ZM88.2151 7.9296C88.8946 7.9296 89.4007 7.77013 89.7335 7.4512C90.0663 7.13227 90.2327 6.6816 90.2327 6.0992C90.2327 5.5168 90.0663 5.06613 89.7335 4.7472C89.4007 4.42827 88.8946 4.2688 88.2151 4.2688H86.2807V7.9296H88.2151ZM101.299 16.1664C100.162 16.1664 99.1356 15.9237 98.2204 15.4384C97.3191 14.9531 96.6049 14.2597 96.078 13.3584C95.5649 12.4571 95.3084 11.4032 95.3084 10.1968C95.3084 9.00427 95.5719 7.95733 96.0988 7.056C96.6257 6.1408 97.3468 5.44053 98.262 4.9552C99.1772 4.46987 100.203 4.2272 101.34 4.2272C102.477 4.2272 103.504 4.46987 104.419 4.9552C105.334 5.44053 106.055 6.1408 106.582 7.056C107.109 7.95733 107.372 9.00427 107.372 10.1968C107.372 11.3893 107.102 12.4432 106.561 13.3584C106.034 14.2597 105.306 14.9531 104.377 15.4384C103.462 15.9237 102.436 16.1664 101.299 16.1664ZM101.299 13.088C101.978 13.088 102.554 12.8384 103.025 12.3392C103.511 11.84 103.753 11.1259 103.753 10.1968C103.753 9.26773 103.517 8.5536 103.046 8.0544C102.588 7.5552 102.02 7.3056 101.34 7.3056C100.647 7.3056 100.072 7.5552 99.614 8.0544C99.1564 8.53973 98.9276 9.25387 98.9276 10.1968C98.9276 11.1259 99.1495 11.84 99.5932 12.3392C100.051 12.8384 100.619 13.088 101.299 13.088ZM113.128 6.0368C113.475 5.496 113.953 5.0592 114.563 4.7264C115.173 4.3936 115.888 4.2272 116.706 4.2272C117.663 4.2272 118.529 4.46987 119.306 4.9552C120.082 5.44053 120.692 6.13387 121.136 7.0352C121.594 7.93653 121.823 8.98347 121.823 10.176C121.823 11.3685 121.594 12.4224 121.136 13.3376C120.692 14.2389 120.082 14.9392 119.306 15.4384C118.529 15.9237 117.663 16.1664 116.706 16.1664C115.901 16.1664 115.187 16 114.563 15.6672C113.953 15.3344 113.475 14.9045 113.128 14.3776V21.5328H109.571V4.3936H113.128V6.0368ZM118.203 10.176C118.203 9.28853 117.954 8.5952 117.455 8.096C116.969 7.58293 116.366 7.3264 115.645 7.3264C114.938 7.3264 114.335 7.58293 113.835 8.096C113.35 8.60907 113.107 9.30933 113.107 10.1968C113.107 11.0843 113.35 11.7845 113.835 12.2976C114.335 12.8107 114.938 13.0672 115.645 13.0672C116.352 13.0672 116.955 12.8107 117.455 12.2976C117.954 11.7707 118.203 11.0635 118.203 10.176ZM134.941 10.0096C134.941 10.3424 134.921 10.6891 134.879 11.0496H126.829C126.885 11.7707 127.114 12.3253 127.516 12.7136C127.932 13.088 128.438 13.2752 129.034 13.2752C129.922 13.2752 130.539 12.9008 130.885 12.152H134.671C134.477 12.9147 134.123 13.6011 133.61 14.2112C133.111 14.8213 132.48 15.2997 131.717 15.6464C130.955 15.9931 130.102 16.1664 129.159 16.1664C128.022 16.1664 127.01 15.9237 126.122 15.4384C125.235 14.9531 124.541 14.2597 124.042 13.3584C123.543 12.4571 123.293 11.4032 123.293 10.1968C123.293 8.9904 123.536 7.93653 124.021 7.0352C124.521 6.13387 125.214 5.44053 126.101 4.9552C126.989 4.46987 128.008 4.2272 129.159 4.2272C130.282 4.2272 131.281 4.46293 132.154 4.9344C133.028 5.40587 133.707 6.0784 134.193 6.952C134.692 7.8256 134.941 8.8448 134.941 10.0096ZM131.301 9.0736C131.301 8.46347 131.093 7.97813 130.677 7.6176C130.261 7.25707 129.741 7.0768 129.117 7.0768C128.521 7.0768 128.015 7.25013 127.599 7.5968C127.197 7.94347 126.947 8.43573 126.85 9.0736H131.301ZM141.851 16.1664C140.839 16.1664 139.938 15.9931 139.147 15.6464C138.357 15.2997 137.733 14.8283 137.275 14.232C136.818 13.6219 136.561 12.9424 136.506 12.1936H140.021C140.063 12.5957 140.25 12.9216 140.583 13.1712C140.915 13.4208 141.324 13.5456 141.81 13.5456C142.253 13.5456 142.593 13.4624 142.829 13.296C143.079 13.1157 143.203 12.8869 143.203 12.6096C143.203 12.2768 143.03 12.0341 142.683 11.8816C142.337 11.7152 141.775 11.5349 140.999 11.3408C140.167 11.1467 139.473 10.9456 138.919 10.7376C138.364 10.5157 137.885 10.176 137.483 9.7184C137.081 9.24693 136.88 8.616 136.88 7.8256C136.88 7.16 137.06 6.5568 137.421 6.016C137.795 5.46133 138.336 5.02453 139.043 4.7056C139.764 4.38667 140.617 4.2272 141.602 4.2272C143.058 4.2272 144.202 4.58773 145.034 5.3088C145.88 6.02987 146.365 6.98667 146.49 8.1792H143.203C143.148 7.77707 142.968 7.45813 142.663 7.2224C142.371 6.98667 141.983 6.8688 141.498 6.8688C141.082 6.8688 140.763 6.952 140.541 7.1184C140.319 7.27093 140.208 7.48587 140.208 7.7632C140.208 8.096 140.381 8.3456 140.728 8.512C141.089 8.6784 141.643 8.8448 142.392 9.0112C143.252 9.23307 143.952 9.45493 144.493 9.6768C145.034 9.8848 145.505 10.2315 145.907 10.7168C146.323 11.1883 146.538 11.8261 146.552 12.6304C146.552 13.3099 146.358 13.92 145.97 14.4608C145.595 14.9877 145.048 15.4037 144.327 15.7088C143.619 16.0139 142.794 16.1664 141.851 16.1664ZM148.333 10.1968C148.333 8.9904 148.576 7.93653 149.061 7.0352C149.56 6.13387 150.247 5.44053 151.12 4.9552C152.008 4.46987 153.02 4.2272 154.157 4.2272C155.613 4.2272 156.826 4.60853 157.797 5.3712C158.781 6.13387 159.426 7.20853 159.731 8.5952H155.946C155.627 7.70773 155.01 7.264 154.095 7.264C153.443 7.264 152.923 7.52053 152.535 8.0336C152.146 8.5328 151.952 9.25387 151.952 10.1968C151.952 11.1397 152.146 11.8677 152.535 12.3808C152.923 12.88 153.443 13.1296 154.095 13.1296C155.01 13.1296 155.627 12.6859 155.946 11.7984H159.731C159.426 13.1573 158.781 14.2251 157.797 15.0016C156.812 15.7781 155.599 16.1664 154.157 16.1664C153.02 16.1664 152.008 15.9237 151.12 15.4384C150.247 14.9531 149.56 14.2597 149.061 13.3584C148.576 12.4571 148.333 11.4032 148.333 10.1968ZM173.407 4.3936V16H169.85V14.4192C169.489 14.9323 168.997 15.3483 168.373 15.6672C167.763 15.9723 167.084 16.1248 166.335 16.1248C165.447 16.1248 164.664 15.9307 163.984 15.5424C163.305 15.1403 162.778 14.5648 162.404 13.816C162.029 13.0672 161.842 12.1867 161.842 11.1744V4.3936H165.378V10.696C165.378 11.4725 165.579 12.0757 165.981 12.5056C166.383 12.9355 166.924 13.1504 167.604 13.1504C168.297 13.1504 168.845 12.9355 169.247 12.5056C169.649 12.0757 169.85 11.4725 169.85 10.696V4.3936H173.407Z" fill="white"/>
          <path d="M179.891 16.2765C178.855 16.2765 178.002 15.977 177.334 15.3779C176.689 14.7558 176.366 13.9955 176.366 13.097C176.366 12.1754 176.689 11.4035 177.334 10.7814C178.002 10.1594 178.855 9.84832 179.891 9.84832C180.905 9.84832 181.735 10.1594 182.38 10.7814C183.048 11.4035 183.382 12.1754 183.382 13.097C183.382 13.9955 183.048 14.7558 182.38 15.3779C181.735 15.977 180.905 16.2765 179.891 16.2765Z" fill="#0E91E6"/>
        </svg>
      </a>
          <ul className='menu'>
            <li><a href='#Home'>Home</a></li>
            <li><a href='#About'>About</a></li>
            <li><a href='#Projects'>Projects</a></li>
            <li><a href='#Contact'>Contact</a></li>
          </ul>
          <ul className='social'>
            <li><a href='https://www.linkedin.com/in/andrea-popescu-635599248/' target='_blank' rel='noreferrer'><FaLinkedin/></a></li>
            <li><a href='https://github.com/AndreaPopescu' target='_blank' rel='noreferrer'><FaGithub/></a></li>
            <li><a href='https://www.youtube.com/channel/UCBH-0q1oupuWFn1zRFJkpKg' target='_blank' rel='noreferrer'><FaYoutube/></a></li>
          </ul>
        </div>
      <div className='line'></div>
      <p>Copyright © 2023. Made by Andrea Popescu</p>
    </div>
  );
}

export default Footer;