import { Helmet } from "react-helmet-async";
import { useDinerData } from "@/hooks/use-diner-data";

export function SEO() {
  const { reviews } = useDinerData();
  const title = "Fox's Diner — Best Pittsburgh Breakfast | Munhall, PA | KDKA Featured";
  const description = "Pittsburgh's #1 diner, KDKA PTL Diner Week 2025 final stop. Homemade breakfast, lunch & dinner in Munhall, PA. 4.5 stars. Call (412) 461-7345.";
  const url = "https://www.foxsdiner.com/";
  const image = "https://www.foxsdiner.com/wp-content/uploads/2024/10/Diner-from-Outside-1.jpg";

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Fox's Diner",
    "image": image,
    "@id": url,
    "url": url,
    "telephone": "+14124617345",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3716 Main St",
      "addressLocality": "Munhall",
      "addressRegion": "PA",
      "postalCode": "15120",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.3951,
      "longitude": -79.9015
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "14:00"
      }
    ],
    "servesCuisine": ["American", "Breakfast", "Comfort Food", "Diner"],
    "priceRange": "$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card",
    "hasMenu": "https://www.foxsdinerpa.com/order",
    "sameAs": [
      "https://www.facebook.com/foxsdinermunhall/",
      "https://www.foxsdiner.com/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "309",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map((r) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.author },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": r.text,
      "publisher": { "@type": "Organization", "name": r.source }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are Fox's Diner's hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fox's Diner is open Monday through Friday 7:00 AM – 7:00 PM and Saturday 7:00 AM – 2:00 PM. We are closed on Sundays."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Fox's Diner located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fox's Diner is located at 3716 Main St, Munhall, PA 15120 — just outside Pittsburgh in the Mon Valley. Street parking is available."
        }
      },
      {
        "@type": "Question",
        "name": "Was Fox's Diner featured on KDKA Pittsburgh Today Live?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Fox's Diner was the #1 final stop of KDKA's Pittsburgh Today Live Diner Week 2025, airing February 28, 2025. Hosts Heather Abraham and David Highfield highlighted Fox's exceptional homemade food as the best of the week."
        }
      },
      {
        "@type": "Question",
        "name": "Is Fox's Diner open on Sunday?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Fox's Diner is closed on Sundays. We are open Monday–Friday 7 AM–7 PM and Saturday 7 AM–2 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Can I order from Fox's Diner online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! You can place an online order at foxsdinerpa.com/order, or call us at (412) 461-7345."
        }
      },
      {
        "@type": "Question",
        "name": "What is Fox's Diner known for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fox's Diner is a beloved family diner known for its signature Apple Fritter French Toast, generous portions, homemade comfort food, and friendly service. It has 4.5 stars on Google with over 300 reviews and was named the best diner in Western Pennsylvania by KDKA Pittsburgh Today Live in 2025."
        }
      }
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="best diner Pittsburgh, Fox's Diner Munhall, Pittsburgh breakfast diner, KDKA diner week 2025, best breakfast Pittsburgh PA, family diner Munhall PA, Pittsburgh Today Live diner, Mon Valley diner" />
      <link rel="canonical" href={url} />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* Open Graph */}
      <meta property="og:type" content="restaurant" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Fox's Diner" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Restaurant Schema */}
      <script type="application/ld+json">
        {JSON.stringify(restaurantSchema)}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
}
