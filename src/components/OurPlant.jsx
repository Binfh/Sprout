import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const OurPlant = () => {
  return (
    <div className="w-full flex max-sm:flex-col items-center h-[140vh] ">
      <div className="w-1/2 h-full max-sm:w-full max-sm:h-1/2">
        <img
          src="/src/assets/image_home/op.avif"
          alt="op"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full max-sm:w-full max-sm:h-1/2 bg-[var(--bg-hover1)] text-white px-[150px] max-lg:px-10">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          viewport={{ once: true }}
        >
          <div className="mt-[125px] max-xl:mt-[60px] max-md:mt-[30px] mb-[19px] ">
            <h2 className="text-[40px] leading-tight font-[forum]">
              <span className="tracking-normal">
                Shop Our Plant Subscription Boxes
              </span>
            </h2>
          </div>
          <div className="mb-[53px] max-sm:mb-10">
            <p className="text-[18px] leading-[1.6em] font-semibold">
              and look forward to a new plant every month
            </p>
          </div>
        </motion.div>
        <div className="max-sm:flex">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="flex items-center max-sm:h-[100px] "
          >
            <div className=" mb-[46px] max-sm:mb-5 w-[80px] h-[125px] max-sm:w-[50px] max-sm:h-[60px] ">
              <svg
                className="py-[35px] px-[10px] max-sm:py-[15px] max-sm:px-1 h-full border-[2px] border-white rounded-full"
                preserveAspectRatio="xMidYMid meet"
                data-bbox="31.498 19.5 137.002 160.997"
                viewBox="31.498 19.5 137.002 160.997"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="presentation"
                aria-hidden="true"
                aria-label=""
              >
                <defs>
                  <style>{`svg [data-color="1"] {fill: #FFFFFF;}`}</style>
                </defs>
                <g>
                  <path
                    d="M168.481 142.395c-.008-.31-.017-.616-.017-.941 0-1.79 0-3.819-1.326-5.707l-.001-.001c-1.375-1.957-3.584-3.118-6.061-3.186-.991-.027-1.986-.018-2.979-.01-.481.005-.962.009-1.442.009h-11.972c2.251-6.078 3.878-12.476 4.85-19.077l4.347.825a3.241 3.241 0 0 0 3.095-1.067c.787-.91 1.05-2.198.671-3.281-.356-1.019-1.203-1.726-2.322-1.938l-5.055-.961c.347-4.269.422-8.595.223-12.912l5.044-.404a3.244 3.244 0 0 0 2.7-1.847c.517-1.085.429-2.397-.224-3.341-.615-.89-1.621-1.348-2.756-1.255l-5.261.421a101.798 101.798 0 0 0-1.601-10.018l4.148-.902c.911-.199 1.646-.732 2.069-1.504a3.192 3.192 0 0 0 .295-2.216c-.397-1.819-2.107-2.936-3.9-2.549l-4.16.905a87.588 87.588 0 0 0-3.889-10.937l3.696-1.488c1.647-.663 2.516-2.308 2.068-3.912-.245-.874-.9-1.646-1.754-2.065-.788-.387-1.644-.429-2.413-.119l-4.408 1.774c-1.862-3.469-3.949-6.691-6.226-9.611l3.15-2.14c1.523-1.035 1.888-3.062.829-4.614-.998-1.461-2.845-1.819-4.298-.831l-3.953 2.685a53.012 53.012 0 0 0-7.066-6.079 41.46 41.46 0 0 0-1.795-1.214l2.48-3.312c.497-.664.675-1.504.5-2.364-.188-.929-.769-1.755-1.553-2.214-1.464-.854-3.239-.445-4.318.995l-2.855 3.813c-3.824-1.679-7.78-2.715-11.791-3.088l-.042-4.059c-.02-1.819-1.421-3.183-3.288-3.158-1.832.019-3.201 1.391-3.182 3.195l.043 4.021c-3.997.37-8.033 1.423-11.843 3.091L82.08 25.99c-1.079-1.44-2.853-1.847-4.318-.994-.784.458-1.364 1.285-1.552 2.215-.174.859.004 1.699.501 2.363l2.484 3.317c-3.149 2.006-6.125 4.444-8.879 7.277l-3.939-2.675c-1.454-.988-3.302-.629-4.299.832-1.059 1.552-.693 3.578.831 4.613l3.151 2.14c-2.258 2.918-4.334 6.143-6.195 9.623l-4.439-1.787c-.767-.308-1.618-.27-2.402.113-.851.415-1.511 1.185-1.763 2.061-.468 1.631.382 3.243 2.066 3.922l3.732 1.502a87.54 87.54 0 0 0-3.902 10.927l-4.184-.911c-1.793-.389-3.502.731-3.9 2.55-.382 1.744.635 3.342 2.364 3.719l4.158.904a99.387 99.387 0 0 0-1.62 10.015l-5.254-.421c-1.722-.142-3.162 1.076-3.303 2.828-.133 1.648.963 3.451 3.024 3.616l5.033.403a101.91 101.91 0 0 0 .234 12.913l-5.056.961c-1.717.325-2.763 1.873-2.433 3.599.31 1.624 1.848 3.069 3.878 2.686l4.345-.825a95.387 95.387 0 0 0 4.086 16.921c.24.704.497 1.419.773 2.154-1.459-.001-2.917-.005-4.376-.009-3.914-.008-7.828-.018-11.737.01-3.564.026-6.54 2.235-7.402 5.496-.339 1.284-.301 2.622-.268 3.801.01.333.02.662.02.983 0 1.63 0 3.659 1.327 5.547 1.505 2.142 3.477 2.861 5.52 3.089v10.077c-.049 1.623.819 4.392 1.381 5.814 3.134 7.92 10.684 13.053 19.235 13.076 4.77.014 9.543.01 14.313.004l44.513-.004c2.542 0 5.086.016 7.629.031 2.516.016 5.075.031 7.644.031 2.561 0 5.133-.016 7.684-.062h.344c7.401-.059 14.233-4.034 17.829-10.376 2.133-3.761 2.584-7.652 2.647-11.072l.009-7.461c3.042-.294 5.575-2.279 6.496-5.114.443-1.343.405-2.763.371-4.017zM59.665 173.991c-.513.004-1.021.006-1.531-.02-3.621-.172-7.138-1.844-9.651-4.586-2.314-2.525-3.6-5.869-3.624-9.415-.005-.74-.004-1.479-.002-2.219l.002-5.146v-1.03h108.785c.478 0 .962.015 1.45.029l.054.001v4.585c0 .409.004.82.007 1.229.02 2.221.038 4.319-.507 6.298-1.654 5.999-7.223 10.223-13.527 10.272h-81l-.456.002zm-3.716-28.87c-1.559 0-3.122-.018-4.686-.034-3.112-.035-6.33-.07-9.495.035l-.145-.001-1.985.002c-.208.002-.418.005-.622-.001-.466-.015-.591-.148-.638-.2-.543-.584-.456-2.528-.404-3.691.018-.384.034-.746.037-1.07.01-.941.672-1.142 1.225-1.146l.644-.002.653.001 78.45.001 40.487-.001 1.298.001c.806.005 1.217.391 1.225 1.146.003.325.02.687.036 1.071.053 1.161.14 3.104-.403 3.688-.047.051-.169.183-.615.201H55.949zM99.636 33.05h.036l.056-.014.11-.007.5.009.007.001.017.003c.246.061.486.125.719.208l.131.064c.15.08.3.158.446.247.599.363.759.494 1.421 1.167a12.502 12.502 0 0 1 1.502 1.82c1.874 2.686 3.409 5.929 4.82 10.196a3.088 3.088 0 0 0 .298.916c.331 1.045.665 2.172 1.019 3.44 1.854 6.637 3.218 13.992 4.166 22.486 2.116 18.957 1.892 37.65-.665 55.56a176.473 176.473 0 0 1-.523 3.413H86.313c-2.683-16.309-3.29-33.975-1.805-52.536.716-8.921 1.872-16.775 3.537-24.014.758-3.294 1.474-5.958 2.249-8.364a3.016 3.016 0 0 0 .28-.846c.964-2.858 2.018-5.334 3.219-7.57.793-1.473 1.795-3.17 3.22-4.588a11 11 0 0 1 .785-.709l.163-.117c.142-.095.282-.19.43-.277.117-.07.237-.133.357-.197l.104-.061c.261-.1.524-.165.784-.23zm39.87 94.825a79.594 79.594 0 0 1-1.728 4.684h-17.546c1.152-7.307 1.917-14.894 2.278-22.607l2.889.456c1.761.282 3.318-.657 3.783-2.278.248-.866.092-1.862-.422-2.665-.478-.749-1.196-1.232-2.024-1.364l-4.018-.634c.075-4.24.033-8.557-.125-12.874l3.329-.012c1.817-.007 3.183-1.403 3.177-3.247-.007-1.831-1.372-3.208-3.177-3.208h-.014l-3.637.014a256.784 256.784 0 0 0-.419-5.622 204.353 204.353 0 0 0-1.202-10.829l3.206-.444c.823-.113 1.544-.583 2.029-1.321.531-.809.7-1.818.453-2.701-.455-1.618-1.969-2.539-3.754-2.293l-2.943.407a140.512 140.512 0 0 0-1.699-8.134 117.39 117.39 0 0 0-1.33-5.068l1.779-.687c1.662-.641 2.542-2.287 2.095-3.914-.237-.864-.881-1.632-1.72-2.054-.786-.395-1.648-.447-2.426-.146l-1.766.682c-.956-2.482-1.999-4.7-3.165-6.74a33.115 33.115 0 0 1 3.844 1.826c15.099 8.385 22.116 25.348 24.954 34.713 5.529 18.221 5.278 38.131-.701 56.06zM85.421 42.021l-1.78-.687c-.777-.299-1.639-.249-2.425.146-.838.421-1.481 1.188-1.722 2.055-.447 1.626.435 3.271 2.095 3.912l1.816.702c-1.199 4.083-2.199 8.413-3.046 13.191l-2.965-.41c-1.777-.249-3.288.672-3.749 2.282-.253.879-.089 1.89.442 2.702.486.744 1.209 1.217 2.036 1.331l3.238.448a218.598 218.598 0 0 0-.534 4.167 231.223 231.223 0 0 0-1.118 12.279l-3.638-.014h-.014c-1.148 0-2.167.572-2.727 1.532a3.412 3.412 0 0 0-.011 3.365c.557.972 1.581 1.555 2.738 1.559l3.33.012a231.057 231.057 0 0 0-.102 12.87l-4.043.638c-.823.13-1.54.611-2.018 1.354-.513.798-.674 1.794-.43 2.665.457 1.625 2.008 2.568 3.785 2.288l2.929-.461a224.42 224.42 0 0 0 1.899 20.153c.116.821.238 1.641.366 2.461h-17.55c-6.838-16.772-8.263-36.195-4-54.832 3.851-16.843 11.86-30.372 22.549-38.096 2.511-1.814 5.113-3.266 7.78-4.343-1.135 1.948-2.163 4.159-3.131 6.731z"
                    fill="#F15A24"
                    data-color="1"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="w-[234px] max-sm:w-[150px] mt-[33px] mb-[10px] h-[125px] ml-8">
              <p className="text-[21px] max-sm:text-[18px] font-[questrial] leading-[1.4em]">
                Cactus Lover Subscription
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="flex items-center  max-sm:h-[100px]"
          >
            <div className=" mb-[46px] max-sm:mb-5 w-[80px] h-[125px] max-sm:w-[50px] max-sm:h-[60px] ">
              <svg
                className="py-[35px] px-[10px] max-sm:py-[15px] max-sm:px-1 h-full border-[2px] border-white rounded-full"
                preserveAspectRatio="xMidYMid meet"
                data-bbox="31.999 20.504 136.001 158.997"
                viewBox="31.999 20.504 136.001 158.997"
                height="200"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
                data-type="color"
                role="presentation"
                aria-hidden="true"
                aria-label=""
              >
                <defs>
                  <style>{`svg [data-color="1"] {fill: #FFFFFF;}`}</style>
                </defs>
                <g>
                  <path
                    d="M143.672 34.743c6.759 8.875 7.772 17.419-6.1 27.86-3.326 2.503-13.804 9.653-7.863 13.276 9.531 5.811 16.927-2.147 21.026-10.557 1.464-3.005 5.488-3.707 7.706-1.204 5.314 5.997 9.737 14.455 4.849 20.752-5.452 7.022-43.824 11.499-41.558 19.664.581 2.093 7.285.351 15.808-1.864 7.706-2.002 13.46-3.524 20.578-4.028 4.647-.329 8.805 2.932 9.558 7.525.738 4.506.256 8.512-1.846 12.998-1.397 2.982-4.268 5.009-7.555 5.24-13.145.921-45.501 2.756-45.566 5.425-.058 2.387 12.791 1.54 17.49 1.17 9.09-.715 19.279-1.515 27.699 1.44 1.689.593 2.522 2.496 1.831 4.145-3.331 7.957-6.784 13.775-13.15 19.683-17.552 16.292-42.725 16.078-60.689.007l-7.386 21.135c-1.365 3.906-7.307 1.835-5.941-2.073L124.286 27.33c-12.502 1.867-25.247 1.006-20.36 19.842 1.963 7.566 6.018 24.947-8.984 23.081-13.635-1.693-17.258-15.64-15.89-26.872-2.422.842-8.887 4.076-8.923 6.885-.022 1.727 8.698 14.42 10.359 16.818 8.556 12.354 16.005 23.108 7.343 29.397-10.688 7.76-19.734-16.836-34.564-29.361-3.866 2.89-6.292 6.622-7.061 11.524 7.802 7.758 35.756 29.572 35.581 38.021-.101 4.865-4.78 7.749-9.712 6.161-9.414-3.031-20.293-18.656-32.581-24.814-5.745 24.708 9.198 48.881 32.166 50.626 3.366.256 3.983 6.67-1.253 6.181-27.55-2.579-45.069-32.559-35.997-62.022a3.129 3.129 0 0 1 4.015-2.033l.013.005c15.048 5.218 31.713 27.747 36.769 26.185.681-.211.109-1.389-.295-2.004-5.674-8.648-21.724-21.29-31.845-30.69-2.274-2.112-3.353-5.262-2.687-8.291 1.12-5.092 3.267-8.666 6.773-11.842 3.45-3.127 8.737-3.093 12.169.055 5.258 4.821 8.813 9.588 13.598 15.949 5.291 7.034 9.453 12.566 11.212 11.29 6.861-4.981-20.384-32.348-20.276-41.233.101-8.251 9.214-12.007 17.33-13.298 3.14-.499 5.664 2.436 4.893 5.517-2.293 9.167-.719 20.336 9.661 21.626 7.135.887 2.937-12.092 1.841-16.339-4.219-16.596 3.233-22.107 12.776-24.527 5.227-1.327 9.897-1.442 14.885-2.484a8.636 8.636 0 0 1 8.382 2.929c3.228 3.889 6.799 6.861 10.048 11.131zM88.159 149.786c21.071 21.031 51.996 14.028 64.408-12.334-15.934-3.343-38.902 4.998-44.949-3.861-2.782-4.077-.56-9.13 4.716-10.87 11.695-3.857 33.487-3.09 47.039-4.602 2.453-4.315 2.879-8.744 1.653-13.41-19.413.582-41.814 14.207-45.345 1.486-4.095-14.754 24.862-16.799 42.144-24.785.222-.103.388-.232.502-.378 1.717-2.21-1.305-8.729-2.665-10.892-5.865 10.213-17.193 18.432-29.21 11.106-13.372-8.154 2.052-19.66 8.196-24.29l-.002-.003c14.695-11.167 3.177-19.433-4.419-27.549L88.159 149.786z"
                    fill="#F15A24"
                    data-color="1"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="w-[234px] mt-[33px] max-sm:w-[150px] mb-[10px] h-[125px] ml-8">
              <p className="text-[21px] max-sm:text-[18px] font-[questrial] leading-[1.4em]">
                Cactus Lover Subscription
              </p>
            </div>
          </motion.div>
        </div>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="w-[200px] h-[55px] bg-transparent border-[1px] border-solid border-white rounded-[4px] text-white font-[questrial] hover:!bg-[var(--bg-header)] hover:border-none transition-all ease-in-out duration-800 "
        >
          <Link className="text-[18px]" to={'/sub'}>
            Subscription Boxes
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

export default OurPlant;
