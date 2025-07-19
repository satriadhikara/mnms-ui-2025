import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { type Control } from "react-hook-form";
import { motion } from 'framer-motion';

export const CustomFormField = ({
    control,
    name,
    label,
    example,
    placeholder = "Enter your answer",
    required = false,
    type = "text",
    index = 0
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    name: string;
    label: string;
    example?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    index?: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
    >
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <motion.div
                        className="gap-0"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            whileHover={{
                                color: "#DFE00D",
                                textShadow: "0px 0px 8px rgba(223, 224, 13, 0.6)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <FormLabel className="text-[#F9F9F9] text-lg sm:text-xl md:text-2xl gap-0">
                                {label}{required && <span className="text-[#FF0000]">*</span>}
                            </FormLabel>
                        </motion.div>
                        {example && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                                whileHover={{
                                    color: "#FFFFFF",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <FormLabel className="text-[#DFE00D] text-xs sm:text-sm font-bold block mt-1">
                                    {example}
                                </FormLabel>
                            </motion.div>
                        )}
                    </motion.div>
                    <FormControl>
                        <motion.div
                            whileHover={{
                                scale: 1.02,
                                // boxShadow: "0px 5px 20px rgba(223, 224, 13, 0.2)"
                            }}
                            whileFocus={{
                                scale: 1.02,
                                // boxShadow: "0px 5px 20px rgba(223, 224, 13, 0.4)"
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            <Input
                                type={type}
                                placeholder={placeholder}
                                {...field}
                                className="text-base sm:text-lg md:text-xl text-[#F9F9F9] rounded-full px-4 sm:px-5 md:px-[22px] py-2 sm:py-3 h-auto backdrop-blur-sm transition-all duration-300 hover:border-[#DFE00D]/50 focus:border-[#DFE00D] focus:ring-2 focus:ring-[#DFE00D]/20"
                            />
                        </motion.div>
                    </FormControl>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    >
                        <FormMessage className="text-sm" />
                    </motion.div>
                </FormItem>
            )}
        />
    </motion.div>
)