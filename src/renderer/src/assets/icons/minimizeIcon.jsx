function Icon_Minimize({dimension, color}) {
    return(
        <svg
            width={!isNaN(dimension) ? (dimension + "px") : "64px"}
            height={!isNaN(dimension) ? (dimension + "px") : "64px"} viewBox="0 -12 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            fill={color ?? "#ffffff"}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <title>minus</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-414.000000, -1049.000000)"
                fill={color ?? "#ffffff"}> <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" > </path> </g> </g> </g>
        </svg>
    );
}

export default Icon_Minimize;