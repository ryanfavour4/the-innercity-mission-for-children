'use client'
import { IPLocResData } from '@/components/donate-component-v2'
import { initGoogleTranslate } from '@/lib/language/init-google-translate'
import { decryptClient } from '@/utils/crypt.client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GoogleTranslate() {
  const [ip, setIp] = useState<IPLocResData | null>(null)

  const changeLanguage = (lang: string) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement | null
    if (select) {
      select.value = lang
      select.dispatchEvent(new Event('change'))
    }
  }

  useEffect(() => {
    axios
      .get('/api/ip-location')
      .then((res) => {
        setIp(decryptClient(res.data) as unknown as IPLocResData)
        console.log(decryptClient(res.data))
      })
      .catch((err) => console.error(err, 'IILOC'))
  }, [])

  useEffect(() => {
    initGoogleTranslate(ip?.languages[0].split('-')[0] || 'en')
    changeLanguage(ip?.languages[0].split('-')[0] || 'en')
    console.log(ip?.languages[0].split('-')[0])
  }, [ip])

  return (
    <>
      <label htmlFor="">Language</label>
      <div id="google_translate_element" />
    </>
  )
}
