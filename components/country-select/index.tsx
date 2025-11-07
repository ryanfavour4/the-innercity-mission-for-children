import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import countries from '@/json/countries-list.json'

type Props = {
  name?: string
  className?: string
  value: string
  placeHolder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CountrySelect({
  name = 'country',
  value,
  onChange,
  className,
  placeHolder,
}: Props) {
  const selectedCountry = countries.find((country) => country.name === value)
  const [select, setSelect] = useState(selectedCountry?.code || '')
  const CountryCodes = countries.map((codes) => codes.code)

  const onSelect = (code: string) => {
    setSelect(code)
    console.log(value)
    const selectedCountry = countries.find((country) => country.code === code)
    console.log(selectedCountry)
    onChange({
      target: {
        name: selectedCountry?.name,
        value: selectedCountry?.code,
      },
    } as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <ReactFlagsSelect
      className={className}
      selected={select}
      onSelect={onSelect}
      placeholder={`${placeHolder || 'Select a country'}`}
      searchable
      id={name}
      searchPlaceholder={'Search Your Country'}
      countries={CountryCodes}
      showSelectedLabel
      /*
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
    />
  )
}
