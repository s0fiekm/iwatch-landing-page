const colorindicator = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="119"
        viewBox="0 0 38 119"
        fill="none"
      >
        <g filter="url(#filter0_d_0_30)">
          <circle cx="19" cy="16" r="15" fill="#404354" />
          <circle cx="19" cy="16" r="13.5" stroke="white" stroke-width="3" />
        </g>
        <circle cx="19" cy="65" r="9.5" fill="#58D7C4" stroke="white" />
        <circle cx="19" cy="109" r="9.5" fill="#F2CEC6" stroke="white" />
        <circle cx="19" cy="35" r="1" fill="white" />
        <circle cx="19" cy="39" r="1" fill="white" />
        <circle cx="19" cy="43" r="1" fill="white" />
        <circle cx="19" cy="47" r="1" fill="white" />
        <circle cx="19" cy="51" r="1" fill="white" />
        <circle cx="19" cy="79" r="1" fill="white" />
        <circle cx="19" cy="83" r="1" fill="white" />
        <circle cx="19" cy="87" r="1" fill="white" />
        <circle cx="19" cy="91" r="1" fill="white" />
        <circle cx="19" cy="95" r="1" fill="white" />
        <defs>
          <filter
            id="filter0_d_0_30"
            x="0"
            y="0"
            width="38"
            height="38"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="3" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_30"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_30"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default colorindicator;
