'use client'
import { IPLocResData } from '@/components/donate-component-v2'
import { initGoogleTranslate } from '@/lib/language/init-google-translate'
import { decryptClient } from '@/utils/crypt.client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GoogleTranslate() {
  const [ip, setIp] = useState<IPLocResData | null>(null)

  useEffect(() => {
    initGoogleTranslate(ip?.country_code?.toLowerCase() || 'en')
    console.log(ip)
  }, [ip])

  useEffect(() => {
    axios
      .get('/api/ip-location')
      .then((res) => {
        setIp(decryptClient(res.data) as unknown as IPLocResData)
      })
      .catch((err) => console.error(err, 'IILOC'))
  }, [])

  return (
    <>
      <div id="google_translate_element" />
    </>
  )
}
