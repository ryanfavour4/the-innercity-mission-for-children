import React from 'react'

type MetaProps = {
  title?: string
  description?: string
  icon?: string // Favicon
  keyword?: string
}

export default function MetaTags(Props: MetaProps) {
  const { title, description, icon, keyword } = Props

  return (
    <>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title?.length ? title : 'InnerCity Mission HQ'}</title>
      <meta
        name="description"
        content={
          description?.length
            ? description
            : 'The InnerCity Mission for Children is a full-fledged faith-based Non-Governmental Organisation [NGO] in Consultative Status with the United Nations [UN]; It is under the auspices of Pastor Chris Oyakhilome Foundation.'
        }
      />
      <link
        rel="icon"
        href={icon?.length ? icon : '/favicon.png'}
        sizes="any"
        type="image/svg+xml"
      />
      <link rel="shortcut icon" href={icon?.length ? icon : '/favicon.png'} type="image/x-icon" />
      <link rel="apple-touch-icon" href={icon?.length ? icon : '/favicon.png'} />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="keywords"
        content={
          keyword?.length
            ? keyword
            : 'the innercity mission for children, the innercity mission children, the innercity children, the innercity mission, the innercity, inner city, innercity, Christ Embassy, Believers Loveworld, BLW, Inner, City'
        }
      />

      {/* <!-- Browser Compatibility Tags --> */}
      <meta name="author" content="The InnerCity Mission For Children" />
      <meta
        name="robots"
        content="index, follow, max-image-preview: large, max-video-preview: -1, max-snippet: -1"
      />
      <meta name="apple-mobile-web-app-title" content="Home Page - InnerCity Mission HQ" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://theinnercitymission.ngo/" />
      <meta property="article:publisher" content="https://facebook.com/OfficialInnerCityMission" />
      <meta property="article:modified_time" content="2024-07-24T04:39:39+00:00" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@innercityhq" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="theme-color" content="#0080DE" />
      <meta name="googlebot" content="NOODP" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
      <link rel="dns-prefetch" href="https://theinnercitymission.ngo/" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="profile" href="https://theinnercitymission.ngo/" />
      <meta name="apple-touch-fullscreen" content="YES" />
      <meta
        name="msapplication-TileImage"
        content="https://theinnercitymission.ngo/inner-city-banner.png"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Home Page - InnerCity Mission HQ" />
      <meta property="og:url" content="https://theinnercitymission.ngo/" />
      <meta property="og:site_name" content="InnerCity Mission HQ" />
      <meta
        property="og:description"
        content="The InnerCity Mission for Children is a full-fledged faith-based Non-Governmental Organisation [NGO] in Consultative Status with the United Nations [UN]; It is under the auspices of Pastor Chris Oyakhilome Foundation."
      />
      <meta property="og:image" content="https://theinnercitymission.ngo/inner-city-banner.png" />
      <meta property="og:site_name" content="Innercity Mission for Children HQ" />
      <meta property="og:locale" content="en_GB" />

      {/* <!-- Twitter Property --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://theinnercitymission.ngo" />
      <meta property="twitter:title" content="InnerCity Mission HQ | Every Child is Your Child" />
      <meta
        property="twitter:description"
        content="The InnerCity Mission for Children is a full-fledged faith-based Non-Governmental Organisation [NGO] in Consultative Status with the United Nations [UN]; It is under the auspices of Pastor Chris Oyakhilome Foundation."
      />
      <meta
        property="twitter:image"
        content="https://theinnercitymission.ngo/inner-city-banner.png"
      />
      <meta name="twitter:image" content="https://theinnercitymission.ngo/inner-city-banner.png" />
      <meta name="twitter:site" content="@theinnercitymission" />
      <meta name="twitter:card" content="summary" />
    </>
  )
}
