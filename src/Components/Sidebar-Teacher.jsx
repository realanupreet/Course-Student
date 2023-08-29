import React, { useState } from "react";
import { useAtom } from "jotai";
import { isSidebarOpenGlobal } from "../App";
const Sidebar = () => {
    const [isSidebarOpen] = useAtom(isSidebarOpenGlobal)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const lessons = Array.from(
        { length: 10 },
        (_, index) => `Lesson #{index + 1}`
    );

    return (
        <div className="relative">
            <aside
                id="default-sidebar"
                className={ `absolute z-40 top-0 left-0 h-screen md:w-64 transition-transform ${isSidebarOpen
                    ? "translate-x-0 "
                    : "-translate-x-full  md:translate-x-0 "
                    } md:translate-x-0 duration-300 ease-in-out sidebar` }
                aria-label="Sidebar"
            >
                <div class="relative h-full flex flex-col justify-between overflow-y-scroll no-scrollbar bg-teal-800 font-poppins">
                    <div>
                        <div className="w-32 h-20 relative px-3 py-4 ">
                            <img src="/desktop57to61/Ellipse.png" alt="" />
                            <div className="absolute top-10 px-2">
                                <p className="self-center  text-xl font-semibold whitespace-nowrap text-white ">
                                    Mentor Panel
                                </p>
                            </div>
                        </div>
                        <ul className="space-y-1 px-3 py-4  h-auto ">
                            <li>
                                <a
                                    href="$"
                                    class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50"
                                >
                                    <svg
                                        width="16"
                                        height="20"
                                        viewBox="0 0 16 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.3882 0H7.72574V6.76477L5.36638 5.31517L3.00702 6.76477V0H2.06327C1.56268 0 1.08259 0.203633 0.728614 0.566101C0.374641 0.928569 0.175781 1.42018 0.175781 1.93279V17.3951C0.175781 17.9077 0.374641 18.3993 0.728614 18.7618C1.08259 19.1243 1.56268 19.3279 2.06327 19.3279H13.3882C13.8888 19.3279 14.3689 19.1243 14.7229 18.7618C15.0768 18.3993 15.2757 17.9077 15.2757 17.3951V1.93279C15.2757 1.42018 15.0768 0.928569 14.7229 0.566101C14.3689 0.203633 13.8888 0 13.3882 0ZM9.61323 9.66395C9.98654 9.66395 10.3515 9.77731 10.6619 9.98969C10.9723 10.2021 11.2142 10.5039 11.357 10.8571C11.4999 11.2103 11.5373 11.5989 11.4645 11.9738C11.3916 12.3487 11.2119 12.6931 10.9479 12.9634C10.6839 13.2337 10.3476 13.4178 9.98147 13.4924C9.61533 13.567 9.23582 13.5287 8.89092 13.3824C8.54603 13.2361 8.25124 12.9884 8.04384 12.6705C7.83644 12.3527 7.72574 11.979 7.72574 11.5967C7.72574 11.0841 7.9246 10.5925 8.27858 10.2301C8.63255 9.86758 9.11264 9.66395 9.61323 9.66395ZM13.3882 17.3951H5.83825V16.4287C5.83825 15.1434 8.35805 14.4959 9.61323 14.4959C10.8684 14.4959 13.3882 15.1434 13.3882 16.4287V17.3951Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                                </a>
                            </li>
                            <li className="">
                                <button
                                    class="flex items-center p-2 w-full text-white rounded-lg hover:bg-gray-100/50 transition duration-75 relative "
                                    aria-controls="dropdown-example"
                                    data-collapse-toggle="dropdown-example"
                                    onClick={ toggleDropdown }
                                >
                                    <svg
                                        width="19"
                                        height="19"
                                        viewBox="0 0 19 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M13.7506 14.6009V16.4733C13.7506 16.5981 13.7974 16.7073 13.891 16.8009C13.9847 16.8945 14.0939 16.9414 14.2187 16.9414C14.3435 16.9414 14.4528 16.8945 14.5464 16.8009C14.64 16.7073 14.6868 16.5981 14.6868 16.4733V14.6009H16.5592C16.684 14.6009 16.7932 14.5541 16.8869 14.4604C16.9805 14.3668 17.0273 14.2576 17.0273 14.1328C17.0273 14.0079 16.9805 13.8987 16.8869 13.8051C16.7932 13.7115 16.684 13.6647 16.5592 13.6647H14.6868V11.7923C14.6868 11.6675 14.64 11.5582 14.5464 11.4646C14.4528 11.371 14.3435 11.3242 14.2187 11.3242C14.0939 11.3242 13.9847 11.371 13.891 11.4646C13.7974 11.5582 13.7506 11.6675 13.7506 11.7923V13.6647H11.8782C11.7534 13.6647 11.6442 13.7115 11.5506 13.8051C11.4569 13.8987 11.4101 14.0079 11.4101 14.1328C11.4101 14.2576 11.4569 14.3668 11.5506 14.4604C11.6442 14.5541 11.7534 14.6009 11.8782 14.6009H13.7506ZM14.2187 18.8137C12.9236 18.8137 11.8196 18.3572 10.9065 17.4441C9.99335 16.531 9.53711 15.4272 9.53773 14.1328C9.53773 12.8377 9.99429 11.7336 10.9074 10.8205C11.8205 9.90741 12.9243 9.45117 14.2187 9.4518C15.5138 9.4518 16.6179 9.90835 17.531 10.8215C18.4441 11.7346 18.9003 12.8383 18.8997 14.1328C18.8997 15.4278 18.4431 16.5319 17.53 17.445C16.6169 18.3581 15.5132 18.8144 14.2187 18.8137ZM4.85676 5.70702H12.3463C12.6116 5.70702 12.8341 5.61714 13.0138 5.43739C13.1936 5.25764 13.2831 5.03545 13.2825 4.77082C13.2825 4.50557 13.1926 4.28306 13.0129 4.10331C12.8331 3.92356 12.611 3.834 12.3463 3.83463H4.85676C4.5915 3.83463 4.369 3.9245 4.18925 4.10425C4.0095 4.284 3.91994 4.50619 3.92056 4.77082C3.92056 5.03608 4.01044 5.25858 4.19019 5.43833C4.36994 5.61808 4.59213 5.70764 4.85676 5.70702ZM8.29728 16.9414H2.04817C1.53327 16.9414 1.09232 16.7579 0.725329 16.3909C0.358341 16.0239 0.175159 15.5833 0.175783 15.069V1.96224C0.175783 1.44733 0.359277 1.00638 0.726266 0.639392C1.09325 0.272403 1.53389 0.0892212 2.04817 0.0898453H15.1549C15.6698 0.0898453 16.1108 0.27334 16.4777 0.640328C16.8447 1.00732 17.0279 1.44795 17.0273 1.96224V8.23474C16.5748 8.0163 16.1183 7.85246 15.6576 7.74324C15.197 7.63402 14.7174 7.57941 14.2187 7.57941C14.0471 7.57941 13.887 7.58315 13.7384 7.59064C13.5899 7.59813 13.4379 7.61779 13.2825 7.64962C13.1421 7.61841 12.9861 7.59907 12.8144 7.59158C12.6428 7.58409 12.4867 7.58003 12.3463 7.57941H4.85676C4.5915 7.57941 4.369 7.66928 4.18925 7.84903C4.0095 8.02878 3.91994 8.25097 3.92056 8.5156C3.92056 8.78086 4.01044 9.00336 4.19019 9.18311C4.36994 9.36286 4.59213 9.45242 4.85676 9.4518H9.65476C9.3739 9.71705 9.12019 10.0057 8.89363 10.3178C8.66707 10.6298 8.46829 10.9653 8.29728 11.3242H4.85676C4.5915 11.3242 4.369 11.4141 4.18925 11.5938C4.0095 11.7736 3.91994 11.9958 3.92056 12.2604C3.92056 12.5256 4.01044 12.7481 4.19019 12.9279C4.36994 13.1076 4.59213 13.1972 4.85676 13.1966H7.73556C7.70435 13.3526 7.68469 13.5049 7.67658 13.6534C7.66847 13.802 7.66472 13.9618 7.66534 14.1328C7.66534 14.6477 7.71215 15.1276 7.80577 15.5726C7.89939 16.0176 8.06323 16.4739 8.29728 16.9414Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <span class="ml-3">Courses</span>
                                </button>
                            </li>
                            { isDropdownOpen && (
                                <div className="transition duration-75">
                                    <ul className="space-y-2  ml-4 text-white text-sm">
                                        <li className="space-x-2">
                                            <span className="">&gt;</span>
                                            <span>Create a new course</span>
                                        </li>
                                        <li className="space-x-2">
                                            <span>&gt;</span>
                                            <span>Manage your courses</span>
                                        </li>
                                        <li className="space-x-2">
                                            <span>&gt;</span>
                                            <span>Course pricing</span>
                                        </li>
                                        <li className="space-x-2">
                                            <span>&gt;</span>
                                            <span>Course Enrollment</span>
                                        </li>
                                        <li className="space-x-2">
                                            <span>&gt;</span>
                                            <span>Chats</span>
                                        </li>
                                    </ul>
                                </div>
                            ) }

                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-100/50"
                                >
                                    <svg
                                        width="18"
                                        height="23"
                                        viewBox="0 0 18 23"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.175781 22.4358V2.88024C0.175781 2.20801 0.413781 1.63235 0.889781 1.15324C1.36497 0.674939 1.9365 0.435791 2.60435 0.435791H14.7472C15.4151 0.435791 15.987 0.674939 16.463 1.15324C16.9382 1.63235 17.1758 2.20801 17.1758 2.88024V22.4358L8.67578 18.7691L0.175781 22.4358Z"
                                            fill="white"
                                        />
                                    </svg>

                                    <span class="flex-1 ml-3 whitespace-nowrap">Academics</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-white rounded-lg  hover:bg-gray-100/50"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <rect width="22" height="22" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlinkHref="#image0_1809_3195"
                                                    transform="scale(0.0166667)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_1809_3195"
                                                width="60"
                                                height="60"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhUlEQVR4nO3awU7CQBRG4UnsY8Da1yG6cOPb6aIgSXc8kG7VqEs1OYY4JqS2pMxt5/7VOQkbyMD9QoEBGkKpVPo3AUtgC7wxTQ/AKghhn5i+D+BKAbzNgNVBM91h/NO7FJrpu+hAfwLXfxIcvh9DB00GsBSaTGAZNBnBEmgyg93ROIBd0TiB3dA4gl3QOIPjDJc9O7LV7MDAwoC+nyN4Z0HPEWyqgK0hnhnYDvHC2CFeAVtDPDOwHeKFsUO8ArZGes1+yxgvjXH9Tv0ZroHq4D6qeF3q+oUyuD4cNgH9a338u0cSXHdhT0B3YatjLwlPcN0zbDUQ3bf+6FHhBd50DHsG3AJ3PbfdDFyPGngzYNhj6GSsB7ge4ZA9+TD2AjcJw1rf1FzBi8RhrR9b/mDsG4skbG7wLu6AlsatY+r67GCJCtga4pmB7RAvjB3iFbA1xDMD2yFeGDvEK+AZnFxq6WUKcINu6ynA58Azej0OPVXi5OI3mv1PMa/eyjjDejJsqVQKin0Bf5tfVYAIX04AAAAASUVORK5CYII="
                                            />
                                        </defs>
                                    </svg>

                                    <span class="flex-1 ml-3 whitespace-nowrap">Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-white rounded-lg hover:bg-gray-100/50"
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <rect width="22" height="22" fill="url(#pattern0)" />
                                        <defs>
                                            <pattern
                                                id="pattern0"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <use
                                                    xlinkHref="#image0_1809_3362"
                                                    transform="scale(0.0166667)"
                                                />
                                            </pattern>
                                            <image
                                                id="image0_1809_3362"
                                                width="60"
                                                height="60"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO2asUoDQRBAFw0oiKi1UcvU/oRaKWqjf6GVpQEbfyG9hcSAjcRaqwhqo6CFfoKCqbTxyeoVx+Uud5ts9m7OfeXB3cybySXDZJXyeDwej8dTaIAFoAV0KR46p3OgZlP2jeLzrnO1IdxCDk0bwl3k8GFDWBRe2BSEYSwYBWGoYUEYXtiUDEW9AOaNH2yeRxVoF6HDVStG2ac+LxzGRlXTaLvoctDdy7RkbAQShRc2BWEYC0ZBGGpYEIYXNsX1pJV1osqzw1UrpoYTlRcOsFFtp5NW1okqCRsJiMILm+K4Qc/AJjANTAHLwC5wBJwBj8BXvwdIEn4G5jLkMwlsAK/ShXcM85oFbiQLLw6Q2wzQKcVOC3gCroAGsAesxhUlKm0jcBoj2XYA1wnxDvtJSxZu9ImZKG0jcC47LWA/JW6stI3Aufy3C6xluKdHWpLwQyTuUsb77Erjjk9gIhK77lwat6zHxHcrjVte4r54nErjntu4mdpA+ljioZZObp3m79AX/0YaqAWHvqRJnwJjw+yZmvocFDKktWxFlY0E6R5ZBu20AOk42Upwva7KAnAQvHJR2XHgJFSQbVUWoh/bUGfD3KsykiCr6aqyoTudIIuVBUER0UMHvXwDK3nnNjKALeAuGI31b/mv7A+KrF2B7wvoGgAAAABJRU5ErkJggg=="
                                            />
                                        </defs>
                                    </svg>

                                    <span class="flex-1 ml-3 whitespace-nowrap">
                                        Course Update
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 mx-auto hidden sm:block">
                        <svg
                            // width="239"
                            // height="594"
                            className="w-28 h-full"
                            viewBox="0 0 239 594"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.7">
                                <path
                                    opacity="0.7"
                                    d="M119.5 593.119C185.498 593.119 239 585.528 239 576.163C239 566.798 185.498 559.207 119.5 559.207C53.502 559.207 0 566.798 0 576.163C0 585.528 53.502 593.119 119.5 593.119Z"
                                    fill="#CB8461"
                                />
                                <path
                                    d="M168.839 505.572L172.051 530.56L188.113 528.775L186.507 502.895L168.839 505.572Z"
                                    fill="#FFB8B8"
                                />
                                <path
                                    d="M93.286 505.572L90.3306 530.56L75.5537 528.775L77.0314 502.895L93.286 505.572Z"
                                    fill="#FFB8B8"
                                />
                                <path
                                    d="M70.9069 240.23C70.9069 240.23 56.6567 259.437 59.8234 289.618C62.9901 319.8 68.5318 388.395 68.5318 388.395L72.4902 510.036L97.8237 508.207L101.782 404.857L114.449 321.629L148.491 418.576C148.491 418.576 165.116 509.121 165.908 509.121C166.699 509.121 189.658 506.377 189.658 506.377L178.574 399.37C178.574 399.37 161.158 243.888 150.866 241.145C140.574 238.401 70.9069 240.23 70.9069 240.23Z"
                                    fill="#2F2E41"
                                />
                                <path
                                    d="M189.372 525.895C189.372 525.895 175.381 515.22 169.94 527.674C164.499 540.129 169.163 549.026 169.163 549.026C169.163 549.026 173.827 552.584 171.495 556.143C169.163 559.701 168.386 582.832 188.595 579.273C208.804 575.715 198.699 551.694 198.699 551.694L189.372 525.895Z"
                                    fill="#1E302B"
                                />
                                <path
                                    d="M90.207 64.7802C90.207 64.7802 97.2057 87.3922 91.7623 100.055C86.3189 112.718 100.316 127.189 100.316 127.189C100.316 127.189 136.864 105.482 132.199 94.628C127.533 83.7743 119.757 69.3026 121.312 60.2578L90.207 64.7802Z"
                                    fill="#F49E9E"
                                />
                                <path
                                    d="M104.466 74.6225C118.304 74.6225 129.522 59.6526 129.522 41.1863C129.522 22.7199 118.304 7.75 104.466 7.75C90.6273 7.75 79.4092 22.7199 79.4092 41.1863C79.4092 59.6526 90.6273 74.6225 104.466 74.6225Z"
                                    fill="#FFB8B8"
                                />
                                <path
                                    d="M86.6471 99.7707C86.6471 99.7707 112.089 123.906 131.063 89.707L150.83 102.481L161.131 239.784C161.131 239.784 103.287 277.723 75.5537 245.204L79.5156 117.837L86.6471 99.7707Z"
                                    fill="#D0CDE1"
                                />
                                <path
                                    d="M94.0567 85.6914L58.5858 112.359L70.9008 179.312L54.7373 283.362L80.9068 237.218C94.1365 185.734 99.9155 150.724 94.0567 85.6914Z"
                                    fill="#CB8461"
                                />
                                <path
                                    d="M125.894 78.1055L134.511 84.7275L169.531 99.2246L164.084 211.577L178.87 284.063L157.858 296.748C157.858 296.748 153.967 262.317 129.841 245.102C105.716 227.887 120.389 83.2624 125.894 78.1055Z"
                                    fill="#CB8461"
                                />
                                <path
                                    d="M67.0739 254.805L77.0965 262.888C77.0965 262.888 64.3755 278.607 62.0626 275.912C61.3932 275.163 60.8735 274.252 60.5404 273.243C60.2073 272.234 60.069 271.152 60.1352 270.074L57.8223 263.787L67.0739 254.805Z"
                                    fill="#FFB8B8"
                                />
                                <path
                                    d="M134.206 253.91L130.75 260.156C130.75 260.156 120.584 265.551 122.93 269.148C125.276 272.744 144.826 280.837 148.736 272.744L152.646 264.652L134.206 253.91Z"
                                    fill="#FFB8B8"
                                />
                                <path
                                    d="M64.1198 112.016L58.7749 112.924L49.9942 180.619C49.9942 180.619 46.5582 192.886 50.376 221.963C54.1937 251.039 57.9743 269.974 57.9743 269.974L74.8094 255.583L67.1739 231.958L77.1 145.636L64.1198 112.016Z"
                                    fill="#CB8461"
                                />
                                <path
                                    d="M157.149 96.8438L169.803 98.6566C169.803 98.6566 184.039 115.879 186.412 134.008C188.785 152.136 187.994 203.803 187.994 203.803L151.612 269.973L131.84 253.657L159.521 197.458L146.076 130.382L157.149 96.8438Z"
                                    fill="#CB8461"
                                />
                                <path
                                    d="M128.671 16.6628C124.829 9.18757 118.816 3.67915 111.789 1.19771L106.627 6.14568L108.634 0.374431C106.946 0.0659418 105.238 -0.0523447 103.532 0.021121L98.8883 7.17605L100.81 0.266202C96.7806 0.866288 92.8982 2.4604 89.4082 4.94801C85.9181 7.43561 82.896 10.7628 80.5325 14.7196C74.6217 24.9323 73.6243 39.1349 79.4378 49.4275C81.0337 43.5508 82.9706 38.0365 84.5666 32.1597C85.8208 32.3646 87.092 32.372 88.3478 32.1818L90.2895 26.7531L90.8318 31.9522C96.8498 31.3238 105.776 29.9446 111.481 28.6808L110.927 24.6923L114.246 28.0067C115.994 27.5245 117.031 27.0873 116.946 26.7531C121.189 34.9498 125.393 40.1853 129.636 48.3819C131.247 36.8202 134.09 27.2097 128.671 16.6628Z"
                                    fill="black"
                                />
                                <path
                                    d="M126.434 47.7622C127.285 47.7622 127.975 45.9643 127.975 43.7464C127.975 41.5284 127.285 39.7305 126.434 39.7305C125.582 39.7305 124.892 41.5284 124.892 43.7464C124.892 45.9643 125.582 47.7622 126.434 47.7622Z"
                                    fill="#FFB8B8"
                                />
                                <path
                                    d="M74.3026 525.895C74.3026 525.895 88.2934 515.22 93.7343 527.674C99.1751 540.129 94.5115 549.026 94.5115 549.026C94.5115 549.026 89.8479 552.584 92.1797 556.143C94.5115 559.701 95.2888 582.832 75.0798 579.273C54.8709 575.715 64.9753 551.694 64.9753 551.694L74.3026 525.895Z"
                                    fill="#1C1C1C"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;
