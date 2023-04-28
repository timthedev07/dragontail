import { forwardRef, SVGProps } from "react";

export const SuccessSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        viewBox="0 0 1024 1024"
        className={`${className} text-green-600`}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill="currentcolor"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
          ></path>
        </g>
      </svg>
    );
  }
);

SuccessSVG.displayName = "Success";

export const DangerSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 20 20"
        className={`${className} text-red-700`}
        fill="none"
        {...props}
        ref={ref}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM10 6C9.44772 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 6.44772 10.5523 6 10 6ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    );
  }
);

DangerSVG.displayName = "Dangers";

export const WarningSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 20 20"
        className={`${className} text-yellow-600`}
        fill="none"
        {...props}
        ref={ref}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM10 6C9.44772 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 6.44772 10.5523 6 10 6ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    );
  }
);

WarningSVG.displayName = "Warning";

export const InfoSVG = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        viewBox="0 0 24 24"
        className={`${className} fill-sky-600`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,15a1,1,0,0,1-2,0V11a1,1,0,0,1,2,0ZM12,8a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,8Z"></path>
        </g>
      </svg>
    );
  }
);

InfoSVG.displayName = "Info";
