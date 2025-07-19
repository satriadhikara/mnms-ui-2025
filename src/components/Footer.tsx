import Image from "next/image"

export const Footer = () => {
    return (
        <div className="flex justify-center bg-black min-h-32 sm:min-h-36 md:h-40 border-t-2 border-[#DFE00D] items-start px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col items-center justify-center text-white max-w-4xl w-full">
                <p className="text-xl sm:text-2xl md:text-3xl font-semibold font-stylistic-alternates mt-2 sm:mt-4 md:mt-6 text-center">
                    Contact Us
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg">
                    <a href="https://www.instagram.com/mnms_ui?igsh=NnJwbm54MW5oNXhi" target="_blank" className="font-semibold flex gap-2 items-center justify-center">
                        <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
                        <p>Instagram</p>
                    </a>
                    <a href="https://www.linkedin.com/company/the-20th-metallurgy-and-materials-week/" target="_blank" className="font-semibold flex gap-2 items-center justify-center">
                        <Image src="/icons/linkedin.svg" alt="Linkedin" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
                        <p>Linkedin</p>
                    </a>
                    <a href="https://www.tiktok.com/@mnms.ui?_t=ZS-8y9xl7hYUEi&_r=1" target="_blank" className="font-semibold flex gap-2 items-center justify-center">
                        <Image src="/icons/tiktok.svg" alt="Tiktok" width={16} height={16} className="sm:w-[18px] sm:h-[18px]" />
                        <p>Tiktok</p>
                    </a>
                </div>
                <p className="text-white text-xs sm:text-sm font-bold mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 md:mb-5 text-center">
                    Copyright © 2025 MnMs&apos; Week
                </p>
            </div>
        </div>
    )
}