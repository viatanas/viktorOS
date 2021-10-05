import Link from "next/link";
import { useState } from "react";

export default function Nav({ selected }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-screen flex flex-col space-y-2 mt-4 absolute top-0 z-50">
      <div className="px-6 flex flex-row justify-between items-center">
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <svg
              className="w-5 h-5 fill-current text-gray-900"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.29303 4.29308C4.48056 4.10561 4.73487 4.00029 5.00003 4.00029C5.26519 4.00029 5.5195 4.10561 5.70703 4.29308L10 8.58608L14.293 4.29308C14.3853 4.19757 14.4956 4.12139 14.6176 4.06898C14.7396 4.01657 14.8709 3.98898 15.0036 3.98783C15.1364 3.98668 15.2681 4.01198 15.391 4.06226C15.5139 4.11254 15.6255 4.18679 15.7194 4.28069C15.8133 4.37458 15.8876 4.48623 15.9379 4.60913C15.9881 4.73202 16.0134 4.8637 16.0123 4.99648C16.0111 5.12926 15.9835 5.26048 15.9311 5.38249C15.8787 5.50449 15.8025 5.61483 15.707 5.70708L11.414 10.0001L15.707 14.2931C15.8892 14.4817 15.99 14.7343 15.9877 14.9965C15.9854 15.2587 15.8803 15.5095 15.6948 15.6949C15.5094 15.8803 15.2586 15.9855 14.9964 15.9878C14.7342 15.99 14.4816 15.8892 14.293 15.7071L10 11.4141L5.70703 15.7071C5.51843 15.8892 5.26583 15.99 5.00363 15.9878C4.74143 15.9855 4.49062 15.8803 4.30521 15.6949C4.1198 15.5095 4.01463 15.2587 4.01236 14.9965C4.01008 14.7343 4.11087 14.4817 4.29303 14.2931L8.58603 10.0001L4.29303 5.70708C4.10556 5.51955 4.00024 5.26525 4.00024 5.00008C4.00024 4.73492 4.10556 4.48061 4.29303 4.29308V4.29308Z"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 fill-current text-gray-900"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 5C3 4.73478 3.10536 4.48043 3.29289 4.29289C3.48043 4.10536 3.73478 4 4 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5C17 5.26522 16.8946 5.51957 16.7071 5.70711C16.5196 5.89464 16.2652 6 16 6H4C3.73478 6 3.48043 5.89464 3.29289 5.70711C3.10536 5.51957 3 5.26522 3 5ZM3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H16C16.2652 9 16.5196 9.10536 16.7071 9.29289C16.8946 9.48043 17 9.73478 17 10C17 10.2652 16.8946 10.5196 16.7071 10.7071C16.5196 10.8946 16.2652 11 16 11H4C3.73478 11 3.48043 10.8946 3.29289 10.7071C3.10536 10.5196 3 10.2652 3 10ZM3 15C3 14.7348 3.10536 14.4804 3.29289 14.2929C3.48043 14.1054 3.73478 14 4 14H16C16.2652 14 16.5196 14.1054 16.7071 14.2929C16.8946 14.4804 17 14.7348 17 15C17 15.2652 16.8946 15.5196 16.7071 15.7071C16.5196 15.8946 16.2652 16 16 16H4C3.73478 16 3.48043 15.8946 3.29289 15.7071C3.10536 15.5196 3 15.2652 3 15Z"
              />
            </svg>
          )}
        </div>
        <div className="flex flex-row space-x-4">
          <a
            href="https://twitter.com/viatanas"
            target="_blank"
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex justify-center items-center cursor-pointer"
          >
            <svg
              className="w-4 h-4 fill-current text-gray-900"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.7747 3.77062C14.2657 3.99575 13.726 4.1436 13.1734 4.20928C13.7559 3.86091 14.1918 3.31263 14.4 2.66662C13.8534 2.99195 13.254 3.21995 12.6294 3.34328C12.2098 2.89434 11.6536 2.59659 11.0473 2.49634C10.4411 2.39609 9.81866 2.49895 9.27688 2.78892C8.7351 3.07889 8.30429 3.53974 8.05144 4.09981C7.7986 4.65989 7.73787 5.2878 7.8787 5.88595C6.77011 5.83039 5.68559 5.5423 4.69556 5.04039C3.70553 4.53849 2.83212 3.83398 2.13204 2.97262C1.88423 3.39825 1.75401 3.8821 1.7547 4.37462C1.7547 5.34128 2.2467 6.19528 2.9947 6.69528C2.55204 6.68135 2.11912 6.5618 1.73204 6.34662V6.38128C1.73217 7.02508 1.95495 7.64903 2.3626 8.14732C2.77025 8.64562 3.33769 8.9876 3.9687 9.11528C3.55778 9.22664 3.12691 9.24306 2.7087 9.16328C2.88661 9.71744 3.23337 10.2021 3.70043 10.5494C4.16749 10.8966 4.73145 11.0891 5.31337 11.0999C4.73502 11.5542 4.07282 11.8899 3.36462 12.0881C2.65642 12.2862 1.91612 12.3428 1.18604 12.2546C2.4605 13.0742 3.9441 13.5094 5.45937 13.5079C10.588 13.5079 13.3927 9.25928 13.3927 5.57462C13.3927 5.45462 13.3894 5.33328 13.384 5.21462C13.9299 4.82006 14.4011 4.3313 14.7754 3.77128L14.7747 3.77062Z" />
            </svg>
          </a>
          <a
            href="mailto:viktor_atanasov@icloud.com"
            target="_blank"
            className="w-8 h-8 rounded-full hover:bg-gray-100 flex justify-center items-center cursor-pointer"
          >
            <svg
              className="w-4 h-4 fill-current text-gray-900"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.60229 4.7074L7.99989 7.9058L14.3975 4.7074C14.3738 4.29975 14.1952 3.91659 13.8982 3.63638C13.6011 3.35617 13.2082 3.20012 12.7999 3.2002H3.19989C2.79156 3.20012 2.39865 3.35617 2.10164 3.63638C1.80462 3.91659 1.62598 4.29975 1.60229 4.7074V4.7074Z" />
              <path
                d="M14.4001 6.49414L8.0001 9.69414L1.6001 6.49414V11.1997C1.6001 11.6241 1.76867 12.0311 2.06873 12.3311C2.36878 12.6312 2.77575 12.7997 3.2001 12.7997H12.8001C13.2244 12.7997 13.6314 12.6312 13.9315 12.3311C14.2315 12.0311 14.4001 11.6241 14.4001 11.1997V6.49414Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        className={`${
          open ? "flex" : "hidden"
        } flex-col bg-white space-y-7 w-screen border-t border-b border-gray-200 px-6 py-5 font-main text-sm font-medium`}
      >
        <Link href="/">
          <a className="flex py-2 space-x-3 items-center">
            <svg
              className="w-5 h-5 fill-current text-gray-900"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293C10.5195 2.10553 10.2651 2.00021 9.99998 2.00021C9.73482 2.00021 9.48051 2.10553 9.29298 2.293L2.29298 9.293C2.11082 9.4816 2.01003 9.7342 2.01231 9.9964C2.01458 10.2586 2.11975 10.5094 2.30516 10.6948C2.49057 10.8802 2.74138 10.9854 3.00358 10.9877C3.26578 10.99 3.51838 10.8892 3.70698 10.707L3.99998 10.414V17C3.99998 17.2652 4.10534 17.5196 4.29287 17.7071C4.48041 17.8946 4.73476 18 4.99998 18H6.99998C7.2652 18 7.51955 17.8946 7.70709 17.7071C7.89462 17.5196 7.99998 17.2652 7.99998 17V15C7.99998 14.7348 8.10534 14.4804 8.29287 14.2929C8.48041 14.1054 8.73476 14 8.99998 14H11C11.2652 14 11.5196 14.1054 11.7071 14.2929C11.8946 14.4804 12 14.7348 12 15V17C12 17.2652 12.1053 17.5196 12.2929 17.7071C12.4804 17.8946 12.7348 18 13 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5094 10.8802 17.6948 10.6948C17.8802 10.5094 17.9854 10.2586 17.9877 9.9964C17.9899 9.7342 17.8891 9.4816 17.707 9.293L10.707 2.293V2.293Z"
                fill="#1A202C"
              />
            </svg>
            <span>Home</span>
          </a>
        </Link>
        <Link href="/writing">
          <a className="flex py-2 space-x-3 items-center">
            <svg
              className="w-5 h-5 fill-current text-gray-900"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.586 3.58592C13.7705 3.3949 13.9912 3.24253 14.2352 3.13772C14.4792 3.0329 14.7416 2.97772 15.0072 2.97542C15.2728 2.97311 15.5361 3.02371 15.7819 3.12427C16.0277 3.22484 16.251 3.37334 16.4388 3.56113C16.6266 3.74891 16.7751 3.97222 16.8756 4.21801C16.9762 4.4638 17.0268 4.72716 17.0245 4.99272C17.0222 5.25828 16.967 5.52072 16.8622 5.76473C16.7574 6.00874 16.605 6.22942 16.414 6.41392L15.621 7.20692L12.793 4.37892L13.586 3.58592V3.58592ZM11.379 5.79292L3 14.1719V16.9999H5.828L14.208 8.62092L11.378 5.79292H11.379Z" />
            </svg>

            <span>Writing</span>
          </a>
        </Link>
        <Link href="/projects">
          <a className="flex py-2 space-x-3 items-center">
            <svg
              className="w-5 h-5 fill-current text-gray-900"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Projects</span>
          </a>
        </Link>
        <Link href="/about">
          <a className="flex py-2 space-x-3 items-center">
            <svg
              className="w-5 h-5 fill-current text-gray-900"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>About</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
