"use client";

import React from "react";
import InputMask from "react-input-mask";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, mask = "+380 (99) 999-99-99", ...props }, ref) => {
    return (
      <InputMask
        mask={mask}
        maskChar={null}
        {...props}
      >
        {(inputProps: any) => (
          <Input
            {...inputProps}
            ref={ref}
            className={cn(inputProps.className, className)}
          />
        )}
      </InputMask>
    );
  }
);
PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
