import React from 'react';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Accordion, AccordionTab } from 'primereact/accordion';
import Teaser from '../../../view/Teaser';

const FaqBlock = () => {
  return (
    <div className="container mx-auto text-center mt-[45px]">
      <h3>How does WORAGE work?</h3>
      <p>Advertise your storage space now to earn money.</p>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-[45px] align-items-center">
        <div>
          <Button label="Register free of charge">
            <Ripple/>
          </Button>
          <Teaser text={'Register for free on WORAGE. Registration is very easy! All you need is your email address.'}/>
          <Accordion activeIndex={0}>
            <AccordionTab header="Header I">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="Header II">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Header III">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
        <div>
          <svg width="545" height="470" viewBox="0 0 545 470" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M466.021 430.202C362.007 483.258 193.376 483.258 89.3622 430.202C-14.652 377.146 -14.652 291.073 89.3622 238.075C193.376 185.077 362.007 185.019 466.021 238.075C570.035 291.131 570.035 377.158 466.021 430.202Z"
              fill="#F5F5F5"/>
            <path
              d="M125.854 345.45C120.159 348.735 108.956 347.601 100.835 342.925L54.0661 315.812C45.9451 311.135 43.9998 304.682 49.7067 301.385C55.4137 298.088 66.6049 299.257 74.7142 303.933L121.483 331.069C129.592 335.711 131.561 342.165 125.854 345.45Z"
              fill="#F5F5F5"/>
            <path d="M407.604 370.458L455.204 343.042L407.604 315.613V370.458Z" fill="#F5F5F5"/>
            <path d="M273.063 386.861L349.784 342.643L273.039 298.508L273.063 386.861Z" fill="#F5F5F5"/>
            <path
              d="M56.4914 274.704C56.4914 274.704 54.9211 251.321 41.0932 233.9C27.2652 216.48 28.109 209.348 37.6479 205.84C47.1868 202.333 69.2998 223.319 64.4132 251.32C59.5265 279.322 56.4914 274.704 56.4914 274.704Z"
              fill="#FF631C"/>
            <path opacity="0.1"
                  d="M56.4914 274.704C56.4914 274.704 54.9211 251.321 41.0932 233.9C27.2652 216.48 28.109 209.348 37.6479 205.84C47.1868 202.333 69.2998 223.319 64.4132 251.32C59.5265 279.322 56.4914 274.704 56.4914 274.704Z"
                  fill="#FF631C"/>
            <path
              d="M60.71 261.352C60.8484 261.352 60.9818 261.301 61.0838 261.208C61.1859 261.115 61.2491 260.987 61.2608 260.849C62.878 235.058 44.6204 213.896 37.8237 209.102C37.7662 209.049 37.698 209.009 37.6238 208.985C37.5495 208.96 37.4708 208.951 37.393 208.959C37.3151 208.968 37.2399 208.992 37.1723 209.031C37.1047 209.071 37.0463 209.124 37.001 209.188C36.9556 209.251 36.9244 209.324 36.9094 209.401C36.8944 209.477 36.8959 209.556 36.9139 209.632C36.9318 209.708 36.9658 209.779 37.0136 209.841C37.0614 209.903 37.1218 209.954 37.1909 209.991C43.8939 214.668 61.7999 235.443 60.2062 260.779C60.1996 260.921 60.2484 261.06 60.3424 261.167C60.4363 261.274 60.5681 261.34 60.71 261.352Z"
              fill="white"/>
            <path
              d="M60.2531 294.064C54.0253 296.093 47.646 297.626 41.1752 298.648C30.4644 300.331 25.7418 295.222 25.7418 295.222C25.7418 295.222 29.9605 285.202 36.0425 282.361C29.4586 283.837 23.1713 286.41 17.4451 289.972C17.4451 289.972 10.9061 290.078 8.30459 280.116C8.30459 280.116 12.1834 274.119 25.1793 270.88C25.1793 270.88 17.2693 268.893 5.86712 271.792C5.01167 272.131 1.36719 259.259 0.265641 253.319C-0.835905 247.38 1.55469 247.474 6.20696 246.199C10.8592 244.925 26.2223 241.523 29.1285 244.06C32.0347 246.597 33.5113 255.319 33.5113 255.319C34.6624 251.748 34.8124 247.931 33.9448 244.282C33.9448 244.282 38.1284 242.657 44.6088 244.539C49.9173 246.071 50.1751 249.672 49.929 253.74C49.6154 257.275 48.8271 260.751 47.5853 264.076C47.5853 264.076 51.7219 258.791 51.8508 247.322C51.8508 247.322 62.7022 252.712 64.5538 263.456C65.6319 269.29 67.0498 286.395 60.2531 294.064Z"
              fill="#FF631C"/>
            <path
              d="M58.2022 291.983C58.0898 291.982 57.9799 291.95 57.8847 291.89C57.7896 291.83 57.7129 291.745 57.6632 291.644C49.0149 273.721 16.8825 252.899 5.36315 250.666C5.28547 250.652 5.2114 250.622 5.1454 250.579C5.07939 250.536 5.0228 250.48 4.97902 250.414C4.93524 250.349 4.90519 250.275 4.89065 250.198C4.87611 250.121 4.87739 250.041 4.89441 249.964C4.90847 249.886 4.9379 249.812 4.98098 249.746C5.02407 249.679 5.07996 249.622 5.14539 249.578C5.21082 249.533 5.28449 249.502 5.36211 249.486C5.43973 249.47 5.51975 249.47 5.59752 249.485C17.3161 251.765 49.9641 272.868 58.7413 291.118C58.777 291.189 58.798 291.267 58.8031 291.346C58.8083 291.426 58.7974 291.506 58.7712 291.581C58.745 291.656 58.704 291.725 58.6505 291.784C58.5971 291.843 58.5323 291.891 58.46 291.925C58.3792 291.962 58.2913 291.982 58.2022 291.983Z"
              fill="white"/>
            <path
              d="M476.18 354.044C475.498 354.016 474.836 353.811 474.258 353.448L241.644 219.451C240.274 218.55 239.135 217.339 238.321 215.917C237.507 214.496 237.039 212.902 236.957 211.267V15.4102L478.278 154.458V351.121C478.278 352.957 477.516 354.044 476.18 354.044Z"
              fill="white"/>
            <path
              d="M237.59 16.5902L477.622 154.854V351.12C477.622 351.787 477.481 353.365 476.18 353.365C475.617 353.332 475.072 353.155 474.598 352.851L241.984 218.866C240.716 218.023 239.66 216.9 238.898 215.584C238.135 214.268 237.688 212.795 237.59 211.278V16.5902ZM236.219 14.2519V211.278C236.315 213.034 236.824 214.743 237.706 216.267C238.588 217.79 239.816 219.085 241.293 220.046L473.918 354.043C474.599 354.466 475.379 354.704 476.18 354.733C477.844 354.733 478.993 353.412 478.993 351.12V154.059L236.219 14.2168V14.2519Z"
              fill="#D8D8D8"/>
            <path d="M478.993 154.059V186.959L236.23 47.1285V14.2168L478.993 154.059Z" fill="#FF631C"/>
            <path
              d="M459.95 155.814V160.49C459.95 161.449 459.27 161.847 458.427 161.367L383.791 118.377V110.193L458.427 153.183C458.869 153.473 459.237 153.861 459.501 154.318C459.766 154.775 459.92 155.287 459.95 155.814Z"
              fill="white"/>
            <path
              d="M375.787 105.586C374.955 105.095 374.264 105.492 374.264 106.463V111.139C374.293 111.666 374.447 112.179 374.711 112.636C374.976 113.093 375.344 113.481 375.787 113.77L383.791 118.447V110.262L375.787 105.586Z"
              fill="#585858"/>
            <path
              d="M478.993 143.456C478.896 141.7 478.387 139.991 477.505 138.467C476.624 136.944 475.395 135.649 473.918 134.688L241.293 0.690768C238.492 -0.922667 236.219 0.386787 236.219 3.61366V14.2179L478.993 154.061V143.456Z"
              fill="#585858"/>
            <path
              d="M263.208 18.8234C263.894 19.2759 264.464 19.8831 264.871 20.5961C265.278 21.309 265.511 22.1076 265.552 22.9272C265.552 24.4471 264.485 25.055 263.208 24.3068C262.523 23.8505 261.954 23.2407 261.547 22.5262C261.14 21.8116 260.906 21.0121 260.864 20.1913C260.829 18.6598 261.895 18.0635 263.208 18.8234Z"
              fill="#FF631C"/>
            <path
              d="M255.625 14.4737C256.312 14.9247 256.883 15.5317 257.29 16.2449C257.698 16.9581 257.93 17.7574 257.969 18.5774C257.969 20.0973 256.914 20.7052 255.625 19.957C254.94 19.5007 254.371 18.8909 253.964 18.1764C253.557 17.4619 253.323 16.6623 253.281 15.8416C253.281 14.3217 254.348 13.7137 255.625 14.4737Z"
              fill="#FF631C"/>
            <path
              d="M248.126 10.124C248.812 10.5765 249.382 11.1837 249.789 11.8967C250.196 12.6096 250.429 13.4082 250.47 14.2278C250.47 15.7477 249.403 16.3556 248.126 15.6074C247.441 15.1511 246.872 14.5413 246.465 13.8268C246.058 13.1122 245.824 12.3127 245.782 11.492C245.747 9.97205 246.813 9.36409 248.126 10.124Z"
              fill="#FF631C"/>
            <g opacity="0.1">
              <path opacity="0.1"
                    d="M312.39 68.5479C313.905 69.5353 315.165 70.8648 316.069 72.4289C316.973 73.993 317.495 75.7476 317.593 77.5504C317.593 80.8591 315.249 82.227 312.39 80.5434C310.876 79.5572 309.617 78.2295 308.713 76.6676C307.809 75.1057 307.286 73.3535 307.187 71.5526C307.187 68.2439 309.53 66.8994 312.39 68.5479Z"
                    fill="black"/>
              <path opacity="0.1"
                    d="M336.19 82.2624C337.704 83.2486 338.964 84.5764 339.867 86.1383C340.771 87.7002 341.294 89.4524 341.393 91.2532C341.393 94.5619 339.05 95.9299 336.19 94.258C334.675 93.2706 333.415 91.941 332.511 90.3769C331.607 88.8129 331.085 87.0583 330.987 85.2555C330.987 81.9468 333.319 80.6256 336.19 82.2624Z"
                    fill="black"/>
              <path opacity="0.1"
                    d="M288.589 54.9042C290.104 55.8891 291.365 57.2165 292.269 58.7786C293.173 60.3408 293.695 62.0937 293.792 63.8949C293.792 67.2036 291.449 68.5715 288.589 66.8879C287.075 65.9031 285.814 64.5757 284.91 63.0136C284.006 61.4514 283.484 59.6985 283.386 57.8972C283.386 54.5301 285.718 53.1856 288.589 54.9042Z"
                    fill="black"/>
              <path opacity="0.1"
                    d="M264.789 41.1081C266.303 42.0943 267.562 43.4221 268.466 44.984C269.37 46.5459 269.893 48.2981 269.992 50.0989C269.992 53.4076 267.648 54.7756 264.789 53.092C263.274 52.1078 262.012 50.7806 261.108 49.2183C260.204 47.6559 259.683 45.9027 259.586 44.1012C259.586 40.7925 261.918 39.4479 264.789 41.1081Z"
                    fill="black"/>
            </g>
            <path
              d="M454.841 189.531L398.346 156.982C395.545 155.368 393.271 156.678 393.271 159.905V214.025C393.368 215.781 393.877 217.49 394.759 219.014C395.64 220.537 396.869 221.832 398.346 222.793L454.841 255.331C457.642 256.944 459.915 255.635 459.915 252.408V198.3C459.821 196.543 459.312 194.833 458.43 193.309C457.549 191.786 456.319 190.491 454.841 189.531Z"
              fill="#D8D8D8"/>
            <path
              d="M373.983 142.918L255.625 74.78C252.824 73.1549 250.551 74.4644 250.551 77.7029V131.811C250.647 133.568 251.156 135.277 252.038 136.8C252.92 138.324 254.148 139.619 255.625 140.58L373.983 208.765C376.783 210.379 379.057 209.069 379.057 205.842V151.687C378.96 149.931 378.451 148.221 377.569 146.698C376.688 145.175 375.459 143.88 373.983 142.918Z"
              fill="#D8D8D8"/>
            <path
              d="M454.84 271.781L365.029 220.046C362.228 218.432 359.955 219.578 359.955 222.606C360.08 224.306 360.605 225.953 361.486 227.413C362.368 228.874 363.582 230.107 365.029 231.012L454.84 282.747C457.641 284.361 459.915 283.215 459.915 280.187C459.789 278.487 459.265 276.84 458.383 275.38C457.502 273.919 456.288 272.686 454.84 271.781Z"
              fill="#D8D8D8"/>
            <path
              d="M454.84 290.98L365.029 239.245C362.228 237.631 359.955 238.777 359.955 241.805C360.08 243.505 360.605 245.152 361.486 246.613C362.368 248.073 363.582 249.306 365.029 250.212L454.84 301.947C457.641 303.56 459.915 302.414 459.915 299.386C459.789 297.686 459.265 296.039 458.383 294.579C457.502 293.118 456.288 291.886 454.84 290.98Z"
              fill="#D8D8D8"/>
            <path
              d="M454.84 310.165L365.029 258.43C362.228 256.817 359.955 257.963 359.955 260.991C360.08 262.691 360.605 264.338 361.486 265.798C362.368 267.259 363.582 268.491 365.029 269.397L454.84 321.132C457.641 322.746 459.915 321.6 459.915 318.572C459.789 316.872 459.265 315.225 458.383 313.764C457.502 312.304 456.288 311.071 454.84 310.165Z"
              fill="#D8D8D8"/>
            <path
              d="M412.349 245.089C412.292 244.035 411.986 243.009 411.457 242.094C410.927 241.18 410.189 240.404 409.302 239.828L253.551 150.118C252.609 149.64 251.567 149.391 250.51 149.391C249.453 149.391 248.411 149.64 247.469 150.118L244.035 152.094C243.148 152.67 242.409 153.446 241.879 154.36C241.35 155.275 241.045 156.301 240.988 157.356V276.469C241.048 277.523 241.355 278.547 241.884 279.461C242.414 280.375 243.15 281.152 244.035 281.73L399.763 371.439C400.705 371.918 401.747 372.167 402.804 372.167C403.861 372.167 404.903 371.918 405.845 371.439L409.279 369.463C410.164 368.886 410.902 368.109 411.431 367.195C411.96 366.281 412.267 365.256 412.326 364.202L412.349 245.089Z"
              fill="#FF631C"/>
            <path opacity="0.4"
                  d="M411.482 242.096L402.845 247.076L241.902 154.362C242.417 153.437 243.154 152.654 244.047 152.083L247.492 150.118C248.434 149.64 249.476 149.391 250.533 149.391C251.59 149.391 252.632 149.64 253.574 150.118L409.326 239.828C410.224 240.391 410.966 241.171 411.482 242.096Z"
                  fill="white"/>
            <path opacity="0.1"
                  d="M412.349 245.089V364.202C412.293 365.257 411.987 366.283 411.458 367.197C410.928 368.112 410.19 368.888 409.302 369.463L405.869 371.439C405.605 371.592 405.326 371.717 405.037 371.813C404.629 371.95 404.209 372.048 403.783 372.106C402.982 372.203 402.171 372.172 401.38 372.012C401.178 371.974 400.979 371.923 400.783 371.86L400.431 371.72C400.66 371.82 400.908 371.871 401.158 371.871C401.408 371.871 401.655 371.82 401.884 371.72C402.21 371.505 402.47 371.205 402.635 370.852C402.8 370.499 402.865 370.108 402.822 369.721V250.584C402.853 250.042 402.718 249.504 402.436 249.041C402.153 248.577 401.736 248.21 401.24 247.988L402.822 247.076L411.458 242.096C412.006 243.002 412.312 244.032 412.349 245.089Z"
                  fill="black"/>
            <path opacity="0.2"
                  d="M402.822 247.076L330.694 273.967C328.198 274.897 325.459 274.952 322.929 274.121C320.398 273.29 318.226 271.623 316.772 269.395L305.194 251.695L241.305 154.035L302.886 252.361L240.988 276.527C241.04 277.601 241.366 278.644 241.938 279.555L303.062 252.665L316.561 274.119C318.057 276.505 320.366 278.273 323.063 279.098C325.761 279.923 328.666 279.749 331.245 278.608L340.819 274.388L401.884 371.743C402.21 371.528 402.47 371.228 402.635 370.875C402.801 370.522 402.865 370.131 402.822 369.744V367.768L341.077 274.318L402.822 247.076Z"
                  fill="black"/>
            <path
              d="M274.305 110.333V383.798C274.305 387.025 272.031 388.335 269.231 386.721L146.092 315.789C144.615 314.827 143.386 313.533 142.505 312.009C141.623 310.486 141.114 308.777 141.018 307.02V33.5551C141.018 30.3282 143.291 29.0187 146.092 30.6322L269.231 101.565C270.708 102.525 271.938 103.819 272.82 105.343C273.702 106.867 274.21 108.577 274.305 110.333Z"
              fill="white" stroke="#D8D8D8" stroke-width="1.17" stroke-miterlimit="10"/>
            <path
              d="M267.168 115.418C267.13 114.986 266.992 114.569 266.764 114.199C266.536 113.83 266.225 113.518 265.855 113.29L251.793 105.211C251.055 104.791 250.469 105.071 250.469 105.831C250.507 106.265 250.646 106.683 250.876 107.053C251.106 107.423 251.42 107.733 251.793 107.959L265.855 116.038C266.582 116.459 267.168 116.178 267.168 115.418Z"
              fill="#585858"/>
            <path
              d="M267.168 120.868C267.132 120.435 266.995 120.017 266.767 119.647C266.539 119.277 266.226 118.967 265.855 118.74L251.793 110.661C251.055 110.24 250.469 110.521 250.469 111.269C250.505 111.705 250.643 112.125 250.874 112.497C251.104 112.869 251.419 113.181 251.793 113.409L265.855 121.476C266.582 121.897 267.168 121.628 267.168 120.868Z"
              fill="#585858"/>
            <path
              d="M267.168 126.316C267.132 125.883 266.995 125.465 266.767 125.095C266.539 124.725 266.226 124.414 265.855 124.188L251.793 116.109C251.055 115.688 250.469 115.957 250.469 116.717C250.505 117.151 250.643 117.57 250.874 117.94C251.104 118.31 251.419 118.62 251.793 118.845L265.855 126.923C266.582 127.391 267.168 127.075 267.168 126.316Z"
              fill="#585858"/>
            <path
              d="M150.733 56.5644L152.467 57.7336C152.584 57.8262 152.67 57.9528 152.713 58.096C152.825 58.596 152.97 59.0881 153.147 59.5691C153.169 59.6338 153.173 59.7037 153.156 59.7702C153.139 59.8367 153.103 59.8969 153.053 59.9433L152.08 60.7734C152.039 60.825 152.017 60.8888 152.017 60.9546C152.017 61.0204 152.039 61.0842 152.08 61.1358L153.475 63.5443C153.507 63.6024 153.559 63.6472 153.621 63.6707C153.683 63.6943 153.752 63.695 153.815 63.6729L154.986 63.252C155.051 63.2316 155.119 63.2308 155.184 63.2495C155.249 63.2682 155.306 63.3057 155.35 63.3572C155.678 63.7668 156.031 64.1572 156.404 64.5264C156.511 64.6302 156.581 64.7655 156.604 64.9122L156.791 67.0167C156.802 67.089 156.827 67.1584 156.865 67.2208C156.903 67.2831 156.954 67.3369 157.014 67.3791L158.912 68.4664C158.933 68.4854 158.959 68.4975 158.987 68.5014C159.016 68.5052 159.044 68.5005 159.069 68.4879C159.095 68.4752 159.116 68.4553 159.129 68.4306C159.143 68.4059 159.149 68.3776 159.147 68.3495L159.322 66.5139C159.325 66.4841 159.333 66.4551 159.348 66.4292C159.363 66.4032 159.384 66.381 159.409 66.3641C159.434 66.3473 159.462 66.3362 159.492 66.3318C159.521 66.3274 159.551 66.3297 159.58 66.3386C159.88 66.4032 160.187 66.4346 160.494 66.4321C160.564 66.4297 160.634 66.4445 160.698 66.475C160.761 66.5056 160.816 66.551 160.857 66.6075L162.264 68.7119C162.301 68.7636 162.356 68.8003 162.419 68.8153C162.481 68.8303 162.546 68.8227 162.604 68.7938L163.775 68.0923C163.829 68.0564 163.868 68.0024 163.886 67.9402C163.903 67.8779 163.897 67.8116 163.869 67.7532L162.697 65.4968C162.669 65.4324 162.654 65.3627 162.654 65.2922C162.654 65.2217 162.669 65.152 162.697 65.0876C162.856 64.8258 162.986 64.5475 163.084 64.2575C163.09 64.2293 163.103 64.2029 163.12 64.18C163.138 64.1571 163.161 64.1383 163.186 64.125C163.212 64.1116 163.24 64.104 163.269 64.1027C163.298 64.1013 163.327 64.1063 163.354 64.1172L165.041 64.8771C165.17 64.8771 165.264 64.8771 165.264 64.7485V62.5622C165.259 62.4893 165.239 62.4182 165.204 62.3537C165.17 62.2892 165.122 62.2327 165.064 62.1881L163.342 61.0189C163.222 60.9286 163.135 60.8011 163.096 60.6565C162.985 60.1548 162.836 59.6624 162.65 59.1833C162.632 59.1173 162.632 59.0475 162.651 58.9815C162.669 58.9156 162.706 58.8559 162.756 58.8092L163.729 57.9674C163.777 57.9247 163.81 57.8664 163.821 57.8025C163.831 57.7385 163.819 57.6729 163.787 57.6167L162.393 55.2082C162.36 55.1501 162.309 55.1053 162.246 55.0818C162.184 55.0582 162.116 55.0575 162.053 55.0796L160.881 55.5005C160.815 55.5218 160.744 55.5232 160.677 55.5044C160.611 55.4857 160.551 55.4477 160.506 55.3953C160.185 54.9829 159.836 54.5923 159.463 54.2261C159.354 54.1197 159.284 53.9797 159.264 53.8286L159.076 51.7241C159.064 51.6525 159.037 51.5842 158.997 51.5237C158.956 51.4632 158.904 51.412 158.842 51.3734L156.943 50.2861C156.838 50.2159 156.733 50.2861 156.721 50.403L156.533 52.2386C156.533 52.2679 156.526 52.2968 156.512 52.3229C156.498 52.3489 156.479 52.3714 156.455 52.3885C156.431 52.4055 156.403 52.4167 156.374 52.4212C156.345 52.4256 156.315 52.4231 156.287 52.4139C155.987 52.3505 155.68 52.3191 155.373 52.3204C155.302 52.3209 155.231 52.3054 155.166 52.2751C155.101 52.2447 155.044 52.2003 154.998 52.145L153.674 50.0405C153.636 49.9888 153.581 49.9522 153.519 49.9372C153.457 49.9222 153.391 49.9298 153.334 49.9587L152.162 50.6602C152.109 50.6939 152.07 50.7451 152.05 50.8049C152.031 50.8647 152.033 50.9293 152.057 50.9876L153.229 53.2557C153.261 53.3192 153.277 53.3893 153.277 53.4603C153.277 53.5314 153.261 53.6014 153.229 53.6649C153.074 53.9271 152.948 54.2054 152.854 54.495C152.846 54.5237 152.833 54.5503 152.814 54.573C152.795 54.5957 152.771 54.6138 152.744 54.6262C152.717 54.6385 152.687 54.6446 152.658 54.6442C152.628 54.6438 152.599 54.6367 152.572 54.6236L150.885 53.8637C150.862 53.8502 150.836 53.8434 150.81 53.8441C150.783 53.8448 150.757 53.853 150.735 53.8676C150.713 53.8823 150.696 53.9029 150.685 53.927C150.674 53.9511 150.67 53.9778 150.674 54.004V56.1903C150.646 56.3179 150.667 56.4513 150.733 56.5644ZM154.752 57.5231C154.752 55.4888 156.182 54.6587 157.951 55.6759C158.889 56.2792 159.669 57.0965 160.227 58.0601C160.786 59.0237 161.106 60.106 161.162 61.2177C161.162 63.252 159.721 64.0821 157.951 63.0532C157.018 62.4497 156.241 61.6338 155.684 60.6724C155.128 59.711 154.809 58.6317 154.752 57.5231Z"
              fill="#585858"/>
            <path
              d="M207.662 110.087C193.271 101.798 181.611 108.52 181.611 125.099C181.611 141.678 193.271 161.822 207.662 170.111C222.052 178.401 233.712 171.678 233.712 155.111C233.712 138.544 222.052 118.376 207.662 110.087Z"
              fill="#585858"/>
            <path
              d="M207.849 123.135C203.162 120.446 199.4 122.621 199.4 127.999C199.559 130.923 200.407 133.768 201.875 136.303C203.343 138.838 205.39 140.992 207.849 142.59C212.537 145.279 216.299 143.104 216.299 137.726C216.138 134.803 215.289 131.959 213.821 129.424C212.353 126.889 210.308 124.734 207.849 123.135Z"
              fill="#FF631C"/>
            <path
              d="M191.174 151.803C191.174 142.976 197.396 139.387 205.06 143.806L209.924 146.565C217.599 150.985 223.81 161.764 223.81 170.568V172.988C222.363 173.449 220.853 173.682 219.334 173.678C215.222 173.538 211.219 172.329 207.72 170.17C201.029 166.065 195.369 160.486 191.174 153.861V151.803Z"
              fill="#FF631C"/>
            <path
              d="M231.181 194.769L184.143 167.68C182.736 166.873 181.6 167.446 181.6 168.966C181.663 169.816 181.927 170.638 182.369 171.368C182.81 172.097 183.418 172.712 184.143 173.163L231.169 200.253C232.564 201.071 233.7 200.486 233.7 198.978C233.64 198.129 233.381 197.305 232.943 196.574C232.506 195.843 231.902 195.225 231.181 194.769Z"
              fill="#FF631C"/>
            <path
              d="M236.22 214.154L179.103 181.172C177.697 180.365 176.561 180.938 176.561 182.458C176.624 183.308 176.888 184.131 177.329 184.86C177.771 185.589 178.379 186.204 179.103 186.655L236.22 219.602C237.626 220.409 238.763 219.836 238.763 218.316C238.694 217.472 238.428 216.657 237.986 215.934C237.545 215.211 236.94 214.602 236.22 214.154Z"
              fill="#585858"/>
            <path
              d="M177.58 207.759L161.584 198.546C160.74 198.066 160.061 198.288 160.061 199.048C160.124 199.514 160.294 199.959 160.559 200.349C160.823 200.738 161.174 201.061 161.584 201.293L177.58 210.506C178.424 210.985 179.103 210.763 179.103 210.015C179.042 209.547 178.872 209.1 178.608 208.708C178.343 208.316 177.991 207.991 177.58 207.759Z"
              fill="#585858"/>
            <path
              d="M257.488 248.316L234.051 234.789C232.645 233.982 231.508 234.637 231.508 236.25V252.338C231.556 253.217 231.811 254.072 232.253 254.834C232.695 255.596 233.311 256.243 234.051 256.722L257.488 270.249C258.882 271.056 260.019 270.401 260.019 268.788V252.7C259.971 251.823 259.717 250.969 259.277 250.207C258.837 249.446 258.224 248.798 257.488 248.316Z"
              fill="#FF631C"/>
            <path
              d="M253.738 250.562L237.742 241.349C236.91 240.869 236.219 241.092 236.219 241.84C236.283 242.307 236.454 242.753 236.718 243.145C236.982 243.536 237.332 243.861 237.742 244.096L253.738 253.309C254.582 253.789 255.261 253.567 255.261 252.818C255.2 252.35 255.03 251.903 254.766 251.511C254.501 251.12 254.15 250.795 253.738 250.562Z"
              fill="white"/>
            <path
              d="M255.261 258.676V263.353C255.261 264.323 254.582 264.709 253.738 264.229L237.742 255.017C237.301 254.727 236.933 254.338 236.669 253.881C236.404 253.424 236.25 252.912 236.219 252.386V247.709C236.219 246.739 236.898 246.353 237.742 246.833L253.738 255.999C254.186 256.293 254.558 256.689 254.823 257.154C255.088 257.62 255.238 258.141 255.261 258.676Z"
              fill="white"/>
            <path
              d="M219.404 226.384L195.967 212.857C194.561 212.05 193.436 212.705 193.436 214.319V230.406C193.481 231.284 193.734 232.139 194.174 232.901C194.614 233.663 195.228 234.31 195.967 234.79L219.404 248.318C220.81 249.124 221.947 248.47 221.947 246.856V230.769C221.899 229.89 221.644 229.034 221.202 228.272C220.76 227.511 220.144 226.864 219.404 226.384Z"
              fill="#FF631C"/>
            <path
              d="M215.666 228.628L199.67 219.415C198.826 218.936 198.146 219.158 198.146 219.906C198.208 220.374 198.378 220.822 198.642 221.213C198.907 221.605 199.258 221.93 199.67 222.163L215.666 231.376C216.498 231.855 217.189 231.633 217.189 230.873C217.123 230.408 216.952 229.964 216.688 229.575C216.424 229.186 216.074 228.862 215.666 228.628Z"
              fill="white"/>
            <path
              d="M217.189 236.742V241.419C217.189 242.389 216.498 242.775 215.666 242.296L199.67 233.083C199.226 232.795 198.857 232.407 198.593 231.95C198.328 231.493 198.175 230.98 198.146 230.452V225.776C198.146 224.805 198.826 224.42 199.67 224.899L215.666 234.112C216.107 234.402 216.475 234.791 216.739 235.247C217.004 235.704 217.158 236.216 217.189 236.742Z"
              fill="white"/>
            <path
              d="M181.33 204.451L157.893 190.912C156.498 190.105 155.361 190.76 155.361 192.373V208.472C155.41 209.35 155.664 210.204 156.104 210.965C156.543 211.727 157.156 212.375 157.893 212.857L181.33 226.384C182.724 227.191 183.861 226.536 183.861 224.922V208.835C183.813 207.957 183.558 207.104 183.119 206.342C182.679 205.58 182.066 204.933 181.33 204.451Z"
              fill="#FF631C"/>
            <path
              d="M177.58 206.695L161.584 197.541C160.74 197.049 160.061 197.272 160.061 198.032C160.121 198.498 160.291 198.945 160.555 199.334C160.82 199.724 161.172 200.047 161.584 200.276L177.58 209.489C178.424 209.98 179.103 209.758 179.103 208.998C179.051 208.521 178.886 208.063 178.621 207.663C178.356 207.262 177.999 206.93 177.58 206.695Z"
              fill="white"/>
            <path
              d="M179.103 214.808V219.485C179.103 220.443 178.424 220.841 177.58 220.362L161.584 211.137C161.14 210.85 160.77 210.462 160.506 210.004C160.241 209.547 160.088 209.034 160.061 208.506V203.83C160.061 202.859 160.74 202.462 161.584 202.953L177.58 212.166C178.025 212.454 178.396 212.844 178.661 213.304C178.926 213.763 179.077 214.279 179.103 214.808Z"
              fill="white"/>
            <path
              d="M254.946 285.227L160.377 230.757C157.576 229.143 155.303 230.289 155.303 233.317C155.428 235.017 155.953 236.664 156.834 238.124C157.716 239.585 158.929 240.818 160.377 241.723L254.946 296.194C257.747 297.808 260.02 296.662 260.02 293.634C259.895 291.934 259.37 290.287 258.489 288.826C257.607 287.366 256.394 286.133 254.946 285.227Z"
              fill="#D8D8D8"/>
            <path
              d="M254.946 307.173L160.377 252.702C157.576 251.088 155.303 252.234 155.303 255.262C155.428 256.962 155.953 258.609 156.834 260.07C157.716 261.53 158.929 262.763 160.377 263.669L254.946 318.151C257.747 319.765 260.02 318.619 260.02 315.579C259.894 313.879 259.369 312.233 258.487 310.772C257.606 309.312 256.393 308.079 254.946 307.173Z"
              fill="#D8D8D8"/>
            <path
              d="M224.162 316.864L191.174 297.853C189.768 297.046 188.631 297.701 188.631 299.315V309.919C188.679 310.798 188.934 311.653 189.376 312.415C189.818 313.177 190.434 313.824 191.174 314.303L224.173 333.314C225.58 334.121 226.716 333.466 226.716 331.852V321.248C226.667 320.368 226.41 319.512 225.966 318.75C225.522 317.988 224.904 317.342 224.162 316.864Z"
              fill="#FF631C"/>
            <path
              d="M252.884 286.852C253.57 287.307 254.14 287.917 254.547 288.632C254.954 289.346 255.187 290.147 255.227 290.968C255.227 292.476 254.161 293.096 252.884 292.336C252.197 291.881 251.628 291.271 251.22 290.556C250.813 289.842 250.58 289.041 250.54 288.22C250.505 286.712 251.571 286.092 252.884 286.852Z"
              fill="white"/>
            <path
              d="M245.348 282.503C246.035 282.958 246.605 283.568 247.012 284.283C247.419 284.997 247.652 285.798 247.692 286.619C247.692 288.127 246.626 288.747 245.348 287.987C244.661 287.533 244.09 286.924 243.683 286.209C243.276 285.494 243.043 284.693 243.005 283.871C242.97 282.363 244.024 281.72 245.348 282.503Z"
              fill="white"/>
            <path
              d="M237.802 278.211C238.488 278.666 239.058 279.276 239.465 279.99C239.872 280.705 240.105 281.505 240.145 282.327C240.145 283.835 239.079 284.454 237.802 283.694C237.115 283.24 236.546 282.63 236.138 281.915C235.731 281.2 235.498 280.4 235.458 279.579C235.423 278.012 236.489 277.393 237.802 278.211Z"
              fill="white"/>
            <path
              d="M230.266 273.804C230.953 274.259 231.523 274.868 231.93 275.583C232.337 276.298 232.57 277.098 232.61 277.919C232.61 279.427 231.544 280.047 230.266 279.287C229.58 278.832 229.01 278.222 228.603 277.508C228.196 276.793 227.963 275.993 227.923 275.171C227.888 273.663 228.954 273.044 230.266 273.804Z"
              fill="white"/>
            <path
              d="M222.72 269.456C223.407 269.909 223.978 270.519 224.385 271.234C224.792 271.949 225.025 272.75 225.063 273.571C225.063 275.079 224.009 275.699 222.72 274.939C222.033 274.484 221.463 273.875 221.056 273.16C220.649 272.445 220.416 271.645 220.376 270.824C220.341 269.316 221.407 268.696 222.72 269.456Z"
              fill="white"/>
            <path
              d="M215.184 265.106C215.871 265.561 216.44 266.171 216.848 266.886C217.255 267.6 217.488 268.401 217.528 269.222C217.528 270.73 216.462 271.35 215.184 270.59C214.498 270.135 213.928 269.525 213.521 268.81C213.114 268.096 212.881 267.295 212.841 266.474C212.806 264.966 213.872 264.346 215.184 265.106Z"
              fill="white"/>
            <path
              d="M207.65 260.756C208.336 261.211 208.906 261.821 209.313 262.535C209.72 263.25 209.953 264.05 209.993 264.872C209.993 266.38 208.927 266.999 207.65 266.239C206.963 265.785 206.392 265.176 205.985 264.461C205.578 263.746 205.345 262.945 205.306 262.124C205.236 260.674 206.325 259.996 207.65 260.756Z"
              fill="white"/>
            <path
              d="M252.884 308.808C253.569 309.264 254.137 309.874 254.544 310.589C254.951 311.303 255.185 312.103 255.227 312.923C255.227 314.443 254.161 315.051 252.884 314.291C252.197 313.839 251.628 313.232 251.221 312.519C250.813 311.806 250.58 311.007 250.54 310.188C250.505 308.668 251.571 308.06 252.884 308.808Z"
              fill="white"/>
            <path
              d="M245.348 304.46C246.034 304.917 246.602 305.526 247.009 306.241C247.416 306.955 247.65 307.755 247.692 308.576C247.692 310.096 246.626 310.704 245.348 309.944C244.661 309.493 244.09 308.886 243.683 308.172C243.276 307.459 243.043 306.66 243.005 305.84C242.97 304.32 244.024 303.712 245.348 304.46Z"
              fill="white"/>
            <path
              d="M237.802 300.11C238.487 300.566 239.055 301.176 239.462 301.89C239.869 302.605 240.103 303.405 240.145 304.225C240.145 305.745 239.079 306.353 237.802 305.593C237.115 305.141 236.546 304.534 236.139 303.821C235.731 303.108 235.498 302.309 235.458 301.49C235.423 299.97 236.489 299.35 237.802 300.11Z"
              fill="white"/>
            <path
              d="M230.266 295.749C230.952 296.205 231.52 296.815 231.927 297.53C232.334 298.244 232.568 299.044 232.61 299.865C232.61 301.384 231.544 301.992 230.266 301.232C229.58 300.78 229.011 300.173 228.603 299.46C228.196 298.747 227.963 297.948 227.923 297.129C227.888 295.621 228.954 295.001 230.266 295.749Z"
              fill="white"/>
            <path
              d="M222.72 291.411C223.407 291.864 223.978 292.473 224.385 293.189C224.792 293.904 225.025 294.705 225.063 295.526C225.063 297.046 224.009 297.654 222.72 296.894C222.033 296.442 221.464 295.834 221.057 295.121C220.649 294.408 220.416 293.61 220.376 292.79C220.341 291.27 221.407 290.651 222.72 291.411Z"
              fill="white"/>
            <path
              d="M215.184 287.063C215.871 287.518 216.44 288.127 216.848 288.842C217.255 289.557 217.488 290.357 217.528 291.178C217.528 292.698 216.462 293.306 215.184 292.546C214.498 292.094 213.929 291.487 213.521 290.774C213.114 290.061 212.881 289.262 212.841 288.443C212.806 286.923 213.872 286.303 215.184 287.063Z"
              fill="white"/>
            <path
              d="M207.65 282.714C208.336 283.169 208.906 283.778 209.313 284.493C209.72 285.208 209.953 286.008 209.993 286.829C209.993 288.349 208.927 288.957 207.65 288.197C206.961 287.744 206.39 287.135 205.983 286.42C205.575 285.705 205.344 284.903 205.306 284.082C205.236 282.573 206.325 281.954 207.65 282.714Z"
              fill="white"/>
            <path
              d="M85.7065 327.316C67.2849 316.7 52.8945 290.628 52.8945 267.97C52.8945 255.109 57.7343 244.903 66.1834 240.039C74.152 235.444 84.0073 236.064 93.933 241.781C112.355 252.397 126.745 278.457 126.745 301.116C126.745 313.976 121.905 324.183 113.456 329.058C109.951 331.075 105.971 332.125 101.925 332.098C96.1921 331.951 90.5988 330.302 85.7065 327.316ZM74.3044 254.162C71.1052 256.009 69.1951 261.177 69.1951 267.97C69.1951 284.771 80.5035 305.476 93.8861 313.181C96.5814 314.736 101.644 317.028 105.288 314.923C108.487 313.088 110.398 307.908 110.398 301.116C110.398 284.315 99.0892 263.609 85.7065 255.904C83.296 254.4 80.5509 253.513 77.7145 253.32C76.5067 253.301 75.3162 253.608 74.2692 254.209L74.3044 254.162Z"
              fill="#585858"/>
            <path
              d="M66.2305 271.641C66.2305 258.909 74.2694 254.209 74.2694 254.209C71.0702 256.056 69.1601 261.224 69.1601 268.017C69.1601 284.817 80.4685 305.523 93.8512 313.228C96.5464 314.783 101.609 317.074 105.253 314.97C105.253 314.97 98.4683 319.179 89.0934 314.07C75.535 306.692 66.2305 288.442 66.2305 271.641Z"
              fill="#585858"/>
            <path
              d="M79.1309 112.531C79.1309 110.295 80.021 108.151 81.6055 106.571C83.1901 104.99 85.3391 104.102 87.58 104.102C89.8208 104.102 91.9699 104.99 93.5544 106.571C95.1389 108.151 96.0291 110.295 96.0291 112.531V246.645C95.971 247.397 95.7107 248.12 95.2756 248.737C94.8404 249.355 94.2465 249.843 93.5564 250.152C91.7033 251.086 89.6561 251.573 87.58 251.573C85.5038 251.573 83.4566 251.086 81.6035 250.152C80.9134 249.843 80.3195 249.355 79.8843 248.737C79.4492 248.12 79.1889 247.397 79.1309 246.645V112.555V112.531Z"
              fill="#585858"/>
            <path
              d="M85.8823 142.509C85.9727 140.819 86.4612 139.173 87.3082 137.707C88.1552 136.24 89.3368 134.993 90.7572 134.068C91.2591 133.701 91.8524 133.478 92.4724 133.425C93.0923 133.371 93.7151 133.488 94.2728 133.764L115.12 145.759L115.624 146.052C115.702 146.08 115.774 146.124 115.835 146.18C116.192 146.416 116.526 146.687 116.831 146.987C117.594 147.745 118.17 148.67 118.513 149.689C118.856 150.708 118.956 151.792 118.806 152.856C118.656 153.92 118.259 154.935 117.648 155.82C117.037 156.704 116.228 157.435 115.284 157.954C114.266 158.492 113.132 158.773 111.98 158.772C110.831 158.777 109.699 158.496 108.687 157.954L108.288 157.72L87.2885 145.654C86.7976 145.299 86.4091 144.822 86.1622 144.27C85.9153 143.718 85.8187 143.11 85.8823 142.509Z"
              fill="#585858"/>
            <path
              d="M85.8825 176.086C85.9747 174.398 86.4641 172.755 87.311 171.291C88.1579 169.826 89.3386 168.581 90.7575 167.657C91.2577 167.287 91.8505 167.061 92.4708 167.006C93.091 166.95 93.7146 167.066 94.273 167.341L118.718 181.371L119.222 181.663L119.421 181.792C119.78 182.025 120.114 182.296 120.417 182.599C121.626 183.765 122.367 185.33 122.502 187.002C122.637 188.674 122.157 190.338 121.152 191.682C120.146 193.027 118.684 193.959 117.039 194.306C115.394 194.652 113.679 194.389 112.214 193.565L111.816 193.331L87.2067 179.301C86.725 178.927 86.3495 178.433 86.1173 177.869C85.8851 177.305 85.8042 176.691 85.8825 176.086Z"
              fill="#585858"/>
          </svg>

        </div>
      </div>
    </div>
  );
}

export default FaqBlock;
