import React from 'react'
import Card from './components/Card'

function App() {

const jobData = [
    {
      id: 1,
      companyLogo: "https://imgs.search.brave.com/DzF429iIjcgfhk0pJCKDMQYDLonOYkei9DZ_3Yl8s8A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
      companyName: "Apple",
      datePosted: "3 days ago",
      position: "Junior UI/UX Developer",
      tags: ["Contact", "Remote"],
      hourlyRate: "$100/hr",
      locations: ["Dubai", "India"]
    },
    {
      id: 2,
      companyLogo: "https://cdn.iconscout.com/icon/free/png-512/free-google-1772223-1507807.png?f=webp&w=256",
      companyName: "Google",
      datePosted: "1 week ago",
      position: "Frontend Engineer",
      tags: ["Full-Time", "Remote"],
      hourlyRate: "$80/hr",
      locations: ["USA", "UK"]
    },
    {
      id: 3,
      companyLogo: "https://cdn.iconscout.com/icon/free/png-512/free-microsoft-28-761688.png?f=webp&w=256",
      companyName: "Microsoft",
      datePosted: "2 days ago",
      position: "Backend Developer",
      tags: ["Hybrid", "Azure"],
      hourlyRate: "$90/hr",
      locations: ["India", "Germany"]
    },
    {
      id: 4,
      companyLogo: "https://cdn.iconscout.com/icon/free/png-512/free-amazon-1869030-1583154.png?f=webp&w=256",
      companyName: "Amazon",
      datePosted: "4 days ago",
      position: "Full Stack Developer",
      tags: ["Remote", "React"],
      hourlyRate: "$120/hr",
      locations: ["Canada", "India"]
    },
    {
      id: 5,
      companyLogo: "https://cdn.iconscout.com/icon/free/png-512/free-netflix-3521607-2945044.png?f=webp&w=256",
      companyName: "Netflix",
      datePosted: "6 hours ago",
      position: "UI Engineer",
      tags: ["Contract", "Remote"],
      hourlyRate: "$110/hr",
      locations: ["USA", "Remote"]
    },
    {
      id: 6,
      companyLogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      position: "Product Designer",
      tags: ["Design", "Full-Time"],
      hourlyRate: "$95/hr",
      locations: ["Singapore", "India"]
    },
    {
      id: 7,
      companyLogo: "https://cdn.iconscout.com/icon/free/png-512/free-twitter-241-721979.png?f=webp&w=256",
      companyName: "Twitter",
      datePosted: "5 days ago",
      position: "Frontend Developer",
      tags: ["React", "Next.js"],
      hourlyRate: "$85/hr",
      locations: ["Remote", "USA"]
    },
    {
      id: 8,
      companyLogo: "https://imgs.search.brave.com/93b1A4nl2F6ujz4bM7C3vnvJ4XK1KyKUD_Ks-Jjvc1U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2FpLmNvbS91/cGxvYWRzL2FydGlj/bGVzLzIwMjQvMDMv/MDUvdGVzbGEtbG9n/by13aGl0ZS0xNzA5/NjE5NTQzLmpwZw",
      companyName: "Tesla",
      datePosted: "1 month ago",
      position: "Software Engineer",
      tags: ["AI", "Embedded"],
      hourlyRate: "$150/hr",
      locations: ["Germany", "USA"]
    },
    {
      id: 9,
      companyLogo: "https://cdn.iconscout.com/icon/free/png-512/free-adobe-3521426-2944872.png?f=webp&w=256",
      companyName: "Adobe",
      datePosted: "3 weeks ago",
      position: "UX Designer",
      tags: ["Creative", "Remote"],
      hourlyRate: "$105/hr",
      locations: ["India", "Canada"]
    },
    {
      id: 10,
      companyLogo: "https://cdn.iconscout.com/icon/free/png-512/free-spotify-11-432546.png?f=webp&w=256",
      companyName: "Spotify",
      datePosted: "1 day ago",
      position: "Frontend Developer",
      tags: ["Music", "Web App"],
      hourlyRate: "$90/hr",
      locations: ["Sweden", "Remote"]
    }
  ];

    return (
      <div className='card-container'>
        {jobData.map(function(e){
          return(
            <Card 
              key={e.id} 
              companyLogo={e.companyLogo}
              companyName={e.companyName}
              datePosted={e.datePosted}
              position={e.position}
              tags={e.tags}
              hourlyRate={e.hourlyRate}
              locations={e.locations}
              />
          )
        })}
      </div>
    )
}

export default App