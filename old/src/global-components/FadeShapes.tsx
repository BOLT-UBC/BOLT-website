import "./fade-shapes.module.css"
import { motion } from "framer-motion"

const FadeShapes = () => {

    return (
        <div className="shapes-container body">
            <motion.div
                className="middle shape"
                animate={{ scale: [0, 1, 0.5, 1] }}
                transition={{ duration: 2, type: 'spring' }}>
                <div className="middle shape" >
                    <svg width="610" height="610" viewBox="0 0 798 516" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_101_16)">
                            <path d="M731.811 685.771L1257.45 452.84L1064.06 59.9481L418.896 50.0593L40.5 440L731.811 685.771Z" fill="#9A81F1" />
                        </g>
                        <defs>
                            <filter id="filter0_d_101_16" x="0.5" y="0.0593262" width="1296.95" height="715.712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-10" />
                                <feGaussianBlur stdDeviation="20" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.19 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_16" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_16" result="shape" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>
                </div>

            </motion.div>
            <motion.div
                className="top shape"
                animate={{ scale: [0, 1, 0.5, 1] }}
                transition={{ duration: 3, type: 'spring' }}>
                <div className="top shape">
                    <svg width="610" height="610" viewBox="0 0 751 610" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_101_17)">
                            <path d="M510.987 679.269L1010.88 657.581L989.022 268.771L475.624 50.162L40.5037 250.045L510.987 679.269Z" fill="#623CE8" />
                        </g>
                        <defs>
                            <filter id="filter0_d_101_17" x="0.503906" y="0.162109" width="1050.37" height="709.107" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-10" />
                                <feGaussianBlur stdDeviation="20" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_17" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_17" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </motion.div>
            <motion.div
                className="bottom shape"
                animate={{ scale: [0, 1, 0.5, 1] }}
                transition={{ duration: 1.5, type: 'spring' }}>
                <div className="bottom shape">
                    <svg width="610" height="610" viewBox="0 0 960 745" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_bd_101_15)">
                            <path d="M679.271 714.997L919.358 50.2264L40.4414 412.575L679.271 714.997Z" fill="#E0D9FA" />
                        </g>
                        <defs>
                            <filter id="filter0_bd_101_15" x="0.441406" y="0.226318" width="958.917" height="744.771" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_101_15" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="-10" />
                                <feGaussianBlur stdDeviation="20" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0" />
                                <feBlend mode="normal" in2="effect1_backgroundBlur_101_15" result="effect2_dropShadow_101_15" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_101_15" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </motion.div>
        </div>
    );
};

export default FadeShapes;