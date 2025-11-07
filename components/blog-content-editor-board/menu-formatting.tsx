import React from 'react'
import { Editor } from '@tiptap/react'

export default function MenuFormatting({ editor }: { editor: Editor | null }) {
  if (!editor) {
    return (
      <>
        <p>Something went wrong</p>
      </>
    )
  }
  return (
    <div>
      <div className="bg-gray-50 dark:bg-gray-700 w-full rounded-lg border border-gray-200 dark:border-gray-600">
        <div className="border-b border-gray-200 px-3 py-2 dark:border-gray-600">
          <div className="flex flex-wrap items-center">
            <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse">
              <button
                id="toggleBoldButton"
                data-tooltip-target="tooltip-bold"
                type="button"
                onClick={() => editor.chain().focus().toggleBold()}
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 5h4.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0-7H6m2 7h6.5a3.5 3.5 0 1 1 0 7H8m0-7v7m0 0H6"
                  />
                </svg>
                <span className="sr-only">Bold</span>
              </button>
              <div
                id="tooltip-bold"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Toggle bold
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleItalicButton"
                data-tooltip-target="tooltip-italic"
                type="button"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8.874 19 6.143-14M6 19h6.33m-.66-14H18"
                  />
                </svg>
                <span className="sr-only">Italic</span>
              </button>
              <div
                id="tooltip-italic"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Toggle italic
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleUnderlineButton"
                data-tooltip-target="tooltip-underline"
                type="button"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M6 19h12M8 5v9a4 4 0 0 0 8 0V5M6 5h4m4 0h4"
                  />
                </svg>
                <span className="sr-only">Underline</span>
              </button>
              <div
                id="tooltip-underline"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Toggle underline
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleStrikeButton"
                data-tooltip-target="tooltip-strike"
                type="button"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 6.2V5h12v1.2M7 19h6m.2-14-1.677 6.523M9.6 19l1.029-4M5 5l6.523 6.523M19 19l-7.477-7.477"
                  />
                </svg>
                <span className="sr-only">Strike</span>
              </button>
              <div
                id="tooltip-strike"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Toggle strike
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleHighlightButton"
                data-tooltip-target="tooltip-highlight"
                type="button"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M9 19.2H5.5c-.3 0-.5-.2-.5-.5V16c0-.2.2-.4.5-.4h13c.3 0 .5.2.5.4v2.7c0 .3-.2.5-.5.5H18m-6-1 1.4 1.8h.2l1.4-1.7m-7-5.4L12 4c0-.1 0-.1 0 0l4 8.8m-6-2.7h4m-7 2.7h2.5m5 0H17"
                  />
                </svg>
                <span className="sr-only">Highlight</span>
              </button>
              <div
                id="tooltip-highlight"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Toggle highlight
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleCodeButton"
                type="button"
                data-tooltip-target="tooltip-code"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
                  />
                </svg>
                <span className="sr-only">Code</span>
              </button>
              <div
                id="tooltip-code"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Format code
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleLinkButton"
                data-tooltip-target="tooltip-link"
                type="button"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
                  />
                </svg>
                <span className="sr-only">Link</span>
              </button>
              <div
                id="tooltip-link"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Add link
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="removeLinkButton"
                data-tooltip-target="tooltip-remove-link"
                type="button"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1m7.4 14-1.8-1.8m0 0L16 16.4m1.8 1.8 1.8-1.8m-1.8 1.8L16 20"
                  />
                </svg>
                <span className="sr-only">Remove link</span>
              </button>
              <div
                id="tooltip-remove-link"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Remove link
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleTextSizeButton"
                data-dropdown-toggle="textSizeDropdown"
                type="button"
                data-tooltip-target="tooltip-text-size"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6.2V5h11v1.2M8 5v14m-3 0h6m2-6.8V11h8v1.2M17 11v8m-1.5 0h3"
                  />
                </svg>
                <span className="sr-only">Text size</span>
              </button>
              <div
                id="tooltip-text-size"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Text size
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                id="textSizeDropdown"
                className="dark:bg-gray-700 z-10 hidden w-72 rounded-sm bg-white p-2 shadow-sm"
              >
                <ul
                  className="space-y-1 text-sm font-medium"
                  aria-labelledby="toggleTextSizeButton"
                >
                  <li>
                    <button
                      data-text-size="16px"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-base text-gray-900 dark:text-white"
                    >
                      16px (Default)
                    </button>
                  </li>
                  <li>
                    <button
                      data-text-size="12px"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-xs text-gray-900 dark:text-white"
                    >
                      12px (Tiny)
                    </button>
                  </li>
                  <li>
                    <button
                      data-text-size="14px"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                    >
                      14px (Small)
                    </button>
                  </li>
                  <li>
                    <button
                      data-text-size="18px"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-lg text-gray-900 dark:text-white"
                    >
                      18px (Lead)
                    </button>
                  </li>
                  <li>
                    <button
                      data-text-size="24px"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-2xl text-gray-900 dark:text-white"
                    >
                      24px (Large)
                    </button>
                  </li>
                  <li>
                    <button
                      data-text-size="36px"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-4xl text-gray-900 dark:text-white"
                    >
                      36px (Huge)
                    </button>
                  </li>
                </ul>
              </div>
              <button
                id="toggleTextColorButton"
                data-dropdown-toggle="textColorDropdown"
                type="button"
                data-tooltip-target="tooltip-text-color"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  fill="none"
                  viewBox="0 0 25 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m6.532 15.982 1.573-4m-1.573 4h-1.1m1.1 0h1.65m-.077-4 2.725-6.93a.11.11 0 0 1 .204 0l2.725 6.93m-5.654 0H8.1m.006 0h5.654m0 0 .617 1.569m5.11 4.453c0 1.102-.854 1.996-1.908 1.996-1.053 0-1.907-.894-1.907-1.996 0-1.103 1.907-4.128 1.907-4.128s1.909 3.025 1.909 4.128Z"
                  />
                </svg>
                <span className="sr-only">Text color</span>
              </button>
              <div
                id="tooltip-text-color"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Text color
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                id="textColorDropdown"
                className="dark:bg-gray-700 z-10 hidden w-48 rounded-sm bg-white p-2 shadow-sm"
              >
                <div className="hover:bg-gray-100 dark:hover:bg-gray-600 group mb-3 grid grid-cols-6 items-center gap-2 rounded-lg p-1.5">
                  <input
                    type="color"
                    id="color"
                    value="#e66465"
                    className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-50 group-hover:bg-gray-50 dark:group-hover:bg-gray-700 col-span-3 h-8 w-full rounded-md border border-gray-200 p-px px-1 dark:border-gray-600"
                  />
                  <label
                    htmlFor="color"
                    className="col-span-3 text-sm font-medium text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  >
                    Pick a color
                  </label>
                </div>
                <div className="mb-3 grid grid-cols-6 gap-1">
                  <button
                    type="button"
                    data-hex-color="#1A56DB"
                    style={{ backgroundColor: '#1A56DB' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Blue</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#0E9F6E"
                    style={{ backgroundColor: '#0E9F6E' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Green</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#FACA15"
                    style={{ backgroundColor: '#FACA15' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Yellow</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#F05252"
                    style={{ backgroundColor: '#F05252' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Red</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#FF8A4C"
                    style={{ backgroundColor: '#FF8A4C' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Orange</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#0694A2"
                    style={{ backgroundColor: '#0694A2' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Teal</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#B4C6FC"
                    style={{ backgroundColor: '#B4C6FC' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Light indigo</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#8DA2FB"
                    style={{ backgroundColor: '#8DA2FB' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Indigo</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#5145CD"
                    style={{ backgroundColor: '#5145CD' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Purple</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#771D1D"
                    style={{ backgroundColor: '#771D1D' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Brown</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#FCD9BD"
                    style={{ backgroundColor: '#FCD9BD' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Light orange</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#99154B"
                    style={{ backgroundColor: '#99154B' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Bordo</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#7E3AF2"
                    style={{ backgroundColor: '#7E3AF2' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Dark Purple</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#CABFFD"
                    style={{ backgroundColor: '#CABFFD' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Light</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#D61F69"
                    style={{ backgroundColor: '#D61F69' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Dark Pink</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#F8B4D9"
                    style={{ backgroundColor: '#F8B4D9' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Pink</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#F6C196"
                    style={{ backgroundColor: '#F6C196' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Cream</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#A4CAFE"
                    style={{ backgroundColor: '#A4CAFE' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Light Blue</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#5145CD"
                    style={{ backgroundColor: '#5145CD' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Dark Blue</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#B43403"
                    style={{ backgroundColor: '#B43403' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Orange Brown</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#FCE96A"
                    style={{ backgroundColor: '#FCE96A' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Light Yellow</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#1E429F"
                    style={{ backgroundColor: '#1E429F' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Navy Blue</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#768FFD"
                    style={{ backgroundColor: '#768FFD' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Light Purple</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#BCF0DA"
                    style={{ backgroundColor: '#BCF0DA' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Light Green</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#EBF5FF"
                    style={{ backgroundColor: '#EBF5FF' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Sky Blue</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#16BDCA"
                    style={{ backgroundColor: '#16BDCA' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Cyan</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#E74694"
                    style={{ backgroundColor: '#E74694' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Pink</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#83B0ED"
                    style={{ backgroundColor: '#83B0ED' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Darker Sky Blue</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#03543F"
                    style={{ backgroundColor: '#03543F' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Forest Green</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#111928"
                    style={{ backgroundColor: '#111928' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Black</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#4B5563"
                    style={{ backgroundColor: '#4B5563' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Stone</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#6B7280"
                    style={{ backgroundColor: '#6B7280' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Gray</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#D1D5DB"
                    style={{ backgroundColor: '#D1D5DB' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Light Gray</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#F3F4F6"
                    style={{ backgroundColor: '#F3F4F6' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Cloud Gray</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#F3F4F6"
                    style={{ backgroundColor: '#F3F4F6' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Cloud Gray</span>
                  </button>
                  <button
                    type="button"
                    data-hex-color="#F9FAFB"
                    style={{ backgroundColor: '#F9FAFB' }}
                    className="h-6 w-6 rounded-md"
                  >
                    <span className="sr-only">Heaven Gray</span>
                  </button>
                </div>
                <button
                  type="button"
                  id="reset-color"
                  className="hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 w-full rounded-lg bg-white py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  Reset color
                </button>
              </div>
              <button
                id="toggleFontFamilyButton"
                data-dropdown-toggle="fontFamilyDropdown"
                type="button"
                data-tooltip-target="tooltip-font-family"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m10.6 19 4.298-10.93a.11.11 0 0 1 .204 0L19.4 19m-8.8 0H9.5m1.1 0h1.65m7.15 0h-1.65m1.65 0h1.1m-7.7-3.985h4.4M3.021 16l1.567-3.985m0 0L7.32 5.07a.11.11 0 0 1 .205 0l2.503 6.945h-5.44Z"
                  />
                </svg>
                <span className="sr-only">Font family</span>
              </button>
              <div
                id="tooltip-font-family"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Font Family
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <div
                id="fontFamilyDropdown"
                className="dark:bg-gray-700 z-10 hidden w-48 rounded-sm bg-white p-2 shadow-sm"
              >
                <ul
                  className="space-y-1 text-sm font-medium"
                  aria-labelledby="toggleFontFamilyButton"
                >
                  <li>
                    <button
                      data-font-family="Inter, ui-sans-serif"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 font-sans text-sm text-gray-900 dark:text-white"
                    >
                      Default
                    </button>
                  </li>
                  <li>
                    <button
                      data-font-family="Arial, sans-serif"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Arial, sans-serif' }}
                    >
                      Arial
                    </button>
                  </li>
                  <li>
                    <button
                      data-font-family="'Courier New', monospace"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Courier New, monospace' }}
                    >
                      Courier New
                    </button>
                  </li>
                  <li>
                    <button
                      data-font-family="Georgia, serif"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      Georgia
                    </button>
                  </li>
                  <li>
                    <button
                      data-font-family="'Lucida Sans Unicode', sans-serif"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Lucida Sans Unicode, sans-serif' }}
                    >
                      Lucida Sans Unicode
                    </button>
                  </li>
                  <li>
                    <button
                      data-font-family="Tahoma, sans-serif"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Tahoma, sans-serif' }}
                    >
                      Tahoma
                    </button>
                  </li>
                  <li>
                    <button
                      data-font-family="'Times New Roman', serif;"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                      Times New Roman
                    </button>
                  </li>
                  <li>
                    <button
                      data-font-family="'Trebuchet MS', sans-serif"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Trebuchet MS, sans-serif' }}
                    >
                      Trebuchet MS
                    </button>
                  </li>
                  <li>
                    <button
                      data-font-family="Verdana, sans-serif"
                      type="button"
                      className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-sm text-gray-900 dark:text-white"
                      style={{ fontFamily: 'Verdana, sans-serif' }}
                    >
                      Verdana
                    </button>
                  </li>
                </ul>
              </div>
              <div className="px-1">
                <span className="bg-gray-300 dark:bg-gray-600 block h-4 w-px"></span>
              </div>
              <button
                id="toggleLeftAlignButton"
                type="button"
                data-tooltip-target="tooltip-left-align"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
                  />
                </svg>
                <span className="sr-only">Align left</span>
              </button>
              <div
                id="tooltip-left-align"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Align left
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleCenterAlignButton"
                type="button"
                data-tooltip-target="tooltip-center-align"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 6h8M6 10h12M8 14h8M6 18h12"
                  />
                </svg>
                <span className="sr-only">Align center</span>
              </button>
              <div
                id="tooltip-center-align"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Align center
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button
                id="toggleRightAlignButton"
                type="button"
                data-tooltip-target="tooltip-right-align"
                className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 6h-8m8 4H6m12 4h-8m8 4H6"
                  />
                </svg>
                <span className="sr-only">Align right</span>
              </button>
              <div
                id="tooltip-right-align"
                role="tooltip"
                className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
              >
                Align right
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              id="typographyDropdownButton"
              data-dropdown-toggle="typographyDropdown"
              className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-500 flex items-center justify-center rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-600"
              type="button"
            >
              Format
              <svg
                className="-me-0.5 ms-1.5 h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>
            <div className="ps-1.5">
              <span className="bg-gray-300 dark:bg-gray-600 block h-4 w-px"></span>
            </div>
            {/* <!-- Heading Dropdown --> */}
            <div
              id="typographyDropdown"
              className="dark:bg-gray-700 z-10 hidden w-72 rounded-sm bg-white p-2 shadow-sm"
            >
              <ul
                className="space-y-1 text-sm font-medium"
                aria-labelledby="typographyDropdownButton"
              >
                <li>
                  <button
                    id="toggleParagraphButton"
                    type="button"
                    className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-base text-gray-900 dark:text-white"
                  >
                    Paragraph
                    <div className="space-x-1.5">
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Cmd
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Alt
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        0
                      </kbd>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    data-heading-level="1"
                    type="button"
                    className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-base text-gray-900 dark:text-white"
                  >
                    Heading 1
                    <div className="space-x-1.5">
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Cmd
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Alt
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        1
                      </kbd>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    data-heading-level="2"
                    type="button"
                    className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-base text-gray-900 dark:text-white"
                  >
                    Heading 2
                    <div className="space-x-1.5">
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Cmd
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Alt
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        2
                      </kbd>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    data-heading-level="3"
                    type="button"
                    className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-base text-gray-900 dark:text-white"
                  >
                    Heading 3
                    <div className="space-x-1.5">
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Cmd
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Alt
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        3
                      </kbd>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    data-heading-level="4"
                    type="button"
                    className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-base text-gray-900 dark:text-white"
                  >
                    Heading 4
                    <div className="space-x-1.5">
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Cmd
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Alt
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        4
                      </kbd>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    data-heading-level="5"
                    type="button"
                    className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-base text-gray-900 dark:text-white"
                  >
                    Heading 5
                    <div className="space-x-1.5">
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Cmd
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Alt
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        5
                      </kbd>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    data-heading-level="6"
                    type="button"
                    className="hover:bg-gray-100 dark:hover:bg-gray-600 flex w-full items-center justify-between rounded-sm px-3 py-2 text-base text-gray-900 dark:text-white"
                  >
                    Heading 6
                    <div className="space-x-1.5">
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Cmd
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        Alt
                      </kbd>
                      <kbd className="bg-gray-100 dark:bg-gray-600 rounded-lg border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 dark:border-gray-500 dark:text-gray-400">
                        6
                      </kbd>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <button
              id="addImageButton"
              type="button"
              data-tooltip-target="tooltip-image"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Add image</span>
            </button>
            <div
              id="tooltip-image"
              role="tooltip"
              className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
            >
              Add image
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              id="addVideoButton"
              type="button"
              data-tooltip-target="tooltip-video"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 7V2.221a2 2 0 0 0-.5.365L4.586 6.5a2 2 0 0 0-.365.5H9Zm2 0V2h7a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9h5a2 2 0 0 0 2-2Zm-2 4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H9Zm0 2h2v2H9v-2Zm7.965-.557a1 1 0 0 0-1.692-.72l-1.268 1.218a1 1 0 0 0-.308.721v.733a1 1 0 0 0 .37.776l1.267 1.032a1 1 0 0 0 1.631-.776v-2.984Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Add video</span>
            </button>
            <div
              id="tooltip-video"
              role="tooltip"
              className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
            >
              Add video
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              id="toggleListButton"
              type="button"
              data-tooltip-target="tooltip-list"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"
                />
              </svg>
              <span className="sr-only">Toggle list</span>
            </button>
            <div
              id="tooltip-list"
              role="tooltip"
              className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
            >
              Toggle list
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              id="toggleOrderedListButton"
              type="button"
              data-tooltip-target="tooltip-ordered-list"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"
                />
              </svg>
              <span className="sr-only">Toggle ordered list</span>
            </button>
            <div
              id="tooltip-ordered-list"
              role="tooltip"
              className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
            >
              Toggle ordered list
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              id="toggleBlockquoteButton"
              type="button"
              data-tooltip-target="tooltip-blockquote-list"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Toggle blockquote</span>
            </button>
            <div
              id="tooltip-blockquote-list"
              role="tooltip"
              className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
            >
              Toggle blockquote
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
            <button
              id="toggleHRButton"
              type="button"
              data-tooltip-target="tooltip-hr-list"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer rounded-sm p-1.5 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 12h14" />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  d="M6 9.5h12m-12 9h12M6 7.5h12m-12 9h12M6 5.5h12m-12 9h12"
                />
              </svg>
              <span className="sr-only">Toggle Horizontal Rule</span>
            </button>
            <div
              id="tooltip-hr-list"
              role="tooltip"
              className="bg-gray-900 shadow-xs tooltip dark:bg-gray-700 invisible absolute z-10 inline-block rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300"
            >
              Toggle Horizontal Rule
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
        <div className="dark:bg-gray-800 rounded-b-lg bg-white px-4 py-2">
          <label htmlFor="wysiwyg-example" className="sr-only">
            Publish post
          </label>
          <div
            id="wysiwyg-example"
            className="dark:bg-gray-800 block w-full border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          ></div>
        </div>
      </div>
    </div>
  )
}
