"use client";

import { motion } from "framer-motion";

const Testimonies = [
  {
    text: "Florian has shown strong will to learn and has carried the various tasks assigned to him on schedule and without much hassle. Beyond that, Florian has also shown the ability to acquire technical skills as well as understand what purpose the different technologies used served. This allowed him to focus on other part of the work (such as client specific knowledge gathering) and not be hindered by fundamental skills.",
    Author: "Carl-Louis",
    link: "https://www.dropbox.com/scl/fo/cejv1m5tsuwcica1fhsrz/h/Evaluations/Interns%20performance%20evaluation%20finale.PDF?rlkey=t2u0pk3cl72kh8o313pzxncjd&dl=0",
  },
];

export default function TestimoniesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {Testimonies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-2"
            >
              <p className="text-gray-800 italic font-sans text-center max-w-4xl">
                "{item.text}"
              </p>
              <div className="flex items-center justify-end">
                <p className="text-gray-600">{item.Author} </p>
                <a href={item.link}>
                  <svg
                    className="ml-2 w-6 h-6 text-blue-600 group-hover:text-blue transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    href={item.link}
                  >
                    <path d="M8 3.517a1 1 0 011.62-.784l5.348 4.233a1 1 0 010 1.568l-5.347 4.233A1 1 0 018 11.983v-1.545c-.76-.043-1.484.003-2.254.218-.994.279-2.118.857-3.506 1.99a.993.993 0 01-1.129.096.962.962 0 01-.445-1.099c.415-1.5 1.425-3.141 2.808-4.412C4.69 6.114 6.244 5.241 8 5.042V3.517zm1.5 1.034v1.2a.75.75 0 01-.75.75c-1.586 0-3.066.738-4.261 1.835a8.996 8.996 0 00-1.635 2.014c.878-.552 1.695-.916 2.488-1.138 1.247-.35 2.377-.33 3.49-.207a.75.75 0 01.668.745v1.2l4.042-3.2L9.5 4.55z"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
