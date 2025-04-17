import Mercedes1 from "@/public/Projects/4.mercedes/1mercedes.jpg"
import Mercedes2 from "@/public/Projects/4.mercedes/2mercedes.jpg"
import Mercedes3 from "@/public/Projects/4.mercedes/3mercedes.jpg"

import BMW1 from "@/public/Projects/2.bmw/1bmw.jpg"
import BMW2 from "@/public/Projects/2.bmw/2bmw.jpg"
import BMW3 from "@/public/Projects/2.bmw/3bmw.jpg"

import Audi2 from "@/public/Projects/3.audi/2audi.jpg"
import Audi3 from "@/public/Projects/3.audi/3audi.jpg"
import Audi4 from "@/public/Projects/3.audi/4audi.jpg"

import Volvo1 from "@/public/Projects/1.Volvo/1volvo.jpg"
import Volvo2 from "@/public/Projects/1.Volvo/2volvo.jpg"
import Volvo3 from "@/public/Projects/1.Volvo/3volvo.png"


export const projectList = [
   {
      name: "NovaUI",
      title: "Frontend Framework",
      desc: "NovaUI is a modern frontend toolkit built with accessibility and developer experience in mind.",
      image: {
         main: Mercedes1,
         additional: [
            Mercedes2,
            Mercedes3
         ]
      },
      additionalInfo: "Built with React and Tailwind CSS.",
      paragraphs: [
         "NovaUI was designed to bridge the gap between design systems and flexible frontend development. With prebuilt components and dynamic theming, it empowers teams to launch interfaces quickly while maintaining brand consistency. Developers can customize layouts and behavior with minimal overhead thanks to its plugin-friendly structure.",
         "The project has been adopted by several startups and is maintained by a growing open-source community. NovaUI’s roadmap includes support for dark mode theming, internationalization, and integration with popular headless CMS platforms. It’s a go-to choice for teams who want power and simplicity in one stack."
      ],
      tags: ["UI/UX Design", "website", "cms"]
   },
   {
      name: "EchoAPI",
      title: "Scalable API Engine",
      desc: "EchoAPI helps developers build, test, and scale secure APIs faster than ever.",
      image: {
         main: BMW1,
         additional: [
            BMW2,
            BMW3
         ]
      },
      additionalInfo: "Node.js-based with REST & GraphQL support.",
      paragraphs: [
         "EchoAPI was created with backend scalability and developer velocity at its core. It provides a CLI tool and dashboard for managing endpoints, handling authentication, and monitoring performance. The system supports REST and GraphQL out of the box and is fully container-ready.",
         "It has been integrated in logistics, e-commerce, and finance applications, and provides SDKs for JavaScript, Python, and Go. EchoAPI also includes real-time logs, webhook integrations, and auto-generated documentation. Whether you're a solo dev or a team of ten, EchoAPI fits right in."
      ],
      tags: ["cms", "chatbot", "e-commerce"]
   },
   {
      name: "PixelBloom",
      title: "UX/UI Design Kit",
      desc: "PixelBloom is a Figma-based design library for rapid interface prototyping and collaboration.",
      image: {
         main: Audi4,
         additional: [
            Audi2,
            Audi3
         ]
      },
      additionalInfo: "Loved by product designers and startups.",
      paragraphs: [
         "PixelBloom was crafted to simplify how teams build product design systems. It includes accessible color palettes, typography systems, mobile-first layouts, and hundreds of prebuilt components. It’s especially useful in fast-moving teams that want to avoid design inconsistencies across platforms.",
         "Designers can collaborate in real-time and ship designs directly to dev handoff tools. PixelBloom evolves with community feedback and features frequent updates to reflect current UI trends. Whether you’re redesigning a SaaS dashboard or launching a mobile app MVP, PixelBloom gets you there faster."
      ],
      tags: ["UI/UX Design", "smc", "website"]
   },
   {
      name: "StackNomad",
      title: "Full Stack Starter Kit",
      desc: "StackNomad is a developer-first boilerplate combining modern frontend, backend, and DevOps tooling.",
      image: {
         main: Volvo1,
         additional: [
            Volvo2,
            Volvo3
         ]
      },
      additionalInfo: "Perfect for solo founders and remote teams.",
      paragraphs: [
         "StackNomad includes everything a full-stack developer needs: Next.js for the frontend, Express or Fastify for the backend, PostgreSQL integration, and a fully dockerized setup. It supports user authentication, REST/GraphQL APIs, CI/CD pipelines, and environment-based config handling out of the box.",
         "The stack has been field-tested by indie hackers and growing startups alike. It reduces the boilerplate barrier so developers can focus on features, not setup. With clear docs and a community Discord, StackNomad is ideal for kickstarting your next SaaS, marketplace, or internal tool."
      ],
      tags: ["chatbot", "e-commerce", "smc"]
   }
];