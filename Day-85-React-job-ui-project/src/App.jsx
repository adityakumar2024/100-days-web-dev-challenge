import React from 'react'
import Card from './component/Card'


const App = () => {

 const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/jpeg;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-1967.jpg?width=672&height=454&name=ibm-logo-1967.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];


  return (
    <div className='parent'>
       {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App