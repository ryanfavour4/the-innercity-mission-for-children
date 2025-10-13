import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleError(error: any, msg: string) {
    if (error.response) {
        const { status, data } = error.response;
        return NextResponse.json({
            message: msg,
            status: status || 500,
            error: data || error,
        });
    } else {
        return NextResponse.json({
            message: "Unexpected error occurred!",
            status: 500,
            error: error,
        });
    }
}
