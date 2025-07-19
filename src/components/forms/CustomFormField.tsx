import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { type Control } from "react-hook-form";

export const CustomFormField = ({
    control,
    name,
    label,
    example,
    placeholder = "Enter your answer",
    required = false,
    type = "text"
}: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    name: string;
    label: string;
    example?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
}) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <FormItem>
                <div className="gap-0">
                    <FormLabel className="text-[#F9F9F9] text-2xl gap-0">
                        {label}{required && <span className="text-[#FF0000]">*</span>}
                    </FormLabel>
                    {example && (
                        <FormLabel className="text-[#DFE00D] text-[11px] font-bold">
                            {example}
                        </FormLabel>
                    )}
                </div>
                <FormControl>
                    <Input
                        type={type}
                        placeholder={placeholder}
                        {...field}
                        className="!text-xl text-[#F9F9F9] rounded-full px-[22px] py-3 h-auto backdrop-blur-sm"
                    />
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />
)