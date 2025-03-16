
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const committeeMembers = [
  {
    name: "Prof. Aisha Mohammed",
    role: "Chairperson",
    organization: "Office of the Surveyor General of the Federation",
    bio: "Professor Mohammed has over 25 years of experience in geospatial sciences and has been instrumental in developing national policies for spatial data infrastructure."
  },
  {
    name: "Dr. Emmanuel Okafor",
    role: "Vice Chairperson",
    organization: "National Space Research and Development Agency",
    bio: "Dr. Okafor specializes in satellite remote sensing and leads Nigeria's earth observation programs, bringing valuable expertise to the committee."
  },
  {
    name: "Mrs. Ngozi Adekunle",
    role: "Secretary",
    organization: "Federal Ministry of Science and Technology",
    bio: "With a background in technology policy development, Mrs. Adekunle coordinates the committee's activities and implementation strategies."
  },
  {
    name: "Mr. Ibrahim Yusuf",
    role: "Member",
    organization: "National Information Technology Development Agency",
    bio: "Mr. Yusuf focuses on the integration of geospatial technologies with national IT infrastructure and digital transformation initiatives."
  },
  {
    name: "Dr. Chinedu Eze",
    role: "Member",
    organization: "Federal Ministry of Environment",
    bio: "Dr. Eze brings environmental expertise to the committee, focusing on geospatial applications for environmental monitoring and management."
  },
  {
    name: "Prof. Olubunmi Akande",
    role: "Member",
    organization: "University of Lagos - Department of Geography",
    bio: "Professor Akande represents academic institutions and focuses on research and education in geospatial sciences."
  }
];

const Committee = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">NGDI Committee</h1>
            
            <p className="text-lg text-gray-700 text-center mb-12">
              The NGDI Committee is responsible for overseeing the development, implementation, and maintenance of Nigeria's Geospatial Data Infrastructure.
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Committee Responsibilities</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Develop and maintain NGDI policies, standards, and guidelines</li>
                  <li>Coordinate activities among stakeholders in the geospatial community</li>
                  <li>Review and approve national geospatial data standards</li>
                  <li>Oversee the implementation of NGDI initiatives</li>
                  <li>Advise the government on geospatial matters</li>
                  <li>Foster collaboration between public and private sectors</li>
                  <li>Monitor compliance with established standards</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-6">Committee Members</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {committeeMembers.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-ngdi-600 font-medium mb-2">{member.role}</p>
                      <p className="text-gray-500 text-sm mb-3">{member.organization}</p>
                      <p className="text-gray-700">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-4">Meeting Schedule</h2>
                <p className="text-gray-700 mb-4">
                  The NGDI Committee meets quarterly to review progress, address challenges, and set priorities for the coming period. Special meetings may be called to address urgent matters.
                </p>
                <p className="text-gray-700">
                  The next scheduled meeting is: <span className="font-semibold">September 15, 2023</span>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Committee;
