"use client";
import { CloseXIcon, MenuFriesIcon } from "@/components/svgs";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function LandingPageNavbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="relative shadow">
        THIS IS A NAVBAR

            {/* @Media Mobile << */}
        
        </nav>
    );
}
