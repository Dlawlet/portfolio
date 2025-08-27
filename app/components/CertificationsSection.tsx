"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    name: "AWS Academy Graduate - Microservices and Ci/CD Pipeline Builder & Cloud Foundations",
    provider: "AWS Cloud academy",
    status: "Completed",
    badge: "/awsbadge.png",
    link: "https://www.credly.com/badges/dfb94648-5105-4440-a55b-6c56ebc12307/public_url",
  },
  {
    name: "Microsoft Certified: Power BI Data Analyst Associate",
    provider: "AWS Cloud academy",
    status: "Ongoing",
  },
  {
    name: "Java Certified Foundations Associate",
    provider: "Oracle",
    status: "Ongoing",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center text-gray-900"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h3>
              <div className="flex col">
                <div className="flex-grow">
                  <p className="text-gray-600">Provider: {item.provider}</p>
                  <p className="text-gray-600">Status: {item.status}</p>
                </div>
                <div className="w-24 flex justify-end">
                  {item.badge && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={item.badge} onError={() => {}} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
