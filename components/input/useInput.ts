/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLInputTypeAttribute, InputHTMLAttributes, useEffect, useState } from "react";

export type IInputState = {
    value: string;
    error?: boolean;
    message?: string;
};

type IInputTypeEnums = HTMLInputTypeAttribute | "text-area" | "amount";
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: IInputTypeEnums;
    name: string;
    state: IInputState;
    setState: React.Dispatch<
        React.SetStateAction<{
            value: string;
        }>
    >;
    placeholder?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    className?: string;
}

export interface ITextAreaProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    state: IInputState;
    setState: React.Dispatch<
        React.SetStateAction<{
            value: string;
        }>
    >;
    placeholder?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    className?: string;
}

export default function useInput(
    type: IInputTypeEnums,
    state: IInputState,
    required: boolean,
    setState: React.Dispatch<
        React.SetStateAction<{
            value: string;
        }>
    >,
    minLength?: number,
    maxLength?: number,
) {
    const [inputType, setInputType] = useState(type);
    const [seePassword, setSeePassword] = useState(false);

    useEffect(() => {
        if (type === "password") setInputType(seePassword ? "text" : "password");
        return () => {};
    }, [seePassword, type]);

    const validateOnBlur = (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        _e: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>,
    ) => {
        if (state.value.length < 1 && required)
            setState((prev: any) => ({
                ...prev,
                error: true,
                message: `Please fill in this field`,
            }));
        else if (minLength && state.value.length < minLength && required)
            setState((prev: any) => ({
                ...prev,
                error: true,
                message: `Please enter at least ${minLength} characters`,
            }));
        else if (maxLength && state.value.length > maxLength && required)
            setState((prev: any) => ({
                ...prev,
                error: true,
                message: `Characters cannot be above ${minLength}`,
            }));
        else {
            setState((prev: any) => ({
                ...prev,
                error: false,
                message: "",
            }));
        }
    };

    return { seePassword, inputType, validateOnBlur, setSeePassword };
}
