import { ICourse } from "./declarations";

export const courseList: ICourse[] = [
  {
    id: 1,
    name: "Software QA Automation Engineer (Full Stack)",
    image: "https://utfs.io/f/f2b007c1-5548-46ca-a46a-24335d3aaa49-l31yzv.svg",
    description:
      "Java, Selenium, TestNG, BDD Cucumber, Maven, JavaScript, Cypress, Playwright, Postman, Rest Assured API, SQL, Agile, Git, Jira, Jmeter, Manual & Automation",
    lession: 40,
    enrolled: 1372,
  },
  {
    id: 2,
    name: "DevOps Engineer",
    image: "https://utfs.io/f/0ebcb0ce-8e41-49a4-a277-cf960def04bb-m2wx37.svg",
    description:
      "DevOps Course Outline: Linux, Computer Network, CI/CD, Jenkins, Maven, Gradle, Docker, Kubernetes, AWS, AZURE, GCP, Ansible, Terraform, Git, Github, SonarQube, Prometheus, Grafana, ELK",
    lession: 35,
    enrolled: 27,
  },
  {
    id: 3,
    name: "Business Analyst (BA)",
    image: "https://utfs.io/f/2521ac9a-c38f-486c-b8cd-e7cbdc173c1d-vuzimb.svg",
    description:
      "Significance of Business Analysis in Projects, Overview of Business Analysis Process, Requirement Elicitation and Gathering, Utilizing Jira for Requirement Tracking, Wireframing and Prototyping, SDLC, Agile Methodology and Scrum Framework,Test Case Development,Communication and Collaboration Skills, Professional Development and Career Pathways, Practical Applications and Case Studies:Requirement Tracking Tools JIRA, Word, Excel, Rally Wireframe Tools, Axure RP, MS Visio, MSPaint, MS Visio",
    lession: 40,
    enrolled: 12,
  },
  {
    id: 4,
    name: "Cyber Security Analyst",
    image: "https://utfs.io/f/e55471b8-f285-4967-bfeb-2912a4cdbcb0-p2015.svg",
    description:
      "Cyber-Security fundamentals, Networking fundamentals, Introduction to Web Application, Pentesting fundamentals, Kali Linux, Burpsuite, Attack vectors for Server-side & Client-side topics, Red Team engagement, Metasploit, wireshark, Passive and active recon, NMAP, Zap proxy, OWASP top 10 vulnerabilities, Active directory, WireShark, Splunk, Qualys",
    lession: 40,
    enrolled: 0,
  },
  {
    id: 5,
    name: "Data Analytics Engineer",
    image: "https://utfs.io/f/e0c48189-535f-4cc8-a89d-98851bd7192f-1txgq.svg",
    description:
      "Data base design, Erwin tool, and ER diagram. • Different objects, integrity of Databases, Tables ,columns ,PK ,FK ,Unique, Composite PK 1) DDL & DML 2) T-SQL basics : • Select, top, distinct, order, where, operators, And, OR key words 1) Insert ,Delete ,create ,drop ,alter, Microsoft SQL Server ,SQL Server Integration Services,SQL Server Analysis Service ,PowerShell(Basic design SSMS plug in),Power BI (reporting and analysis tool)",
    lession: 35,
    enrolled: 0,
  },
  {
    id: 6,
    name: "Full Stack Java Developer",
    image: "https://utfs.io/f/37b40a15-0327-46cd-812f-09f820353f92-z37p4d.svg",
    description:
      "Core Java, Advanced Java, JSP, Servlet, Log4J, EJBean, Hibernate, SQL, NoSQL, JPA, JUnit, Spring boot, Angular, NextJS, ReactJS, ZuStand, TypeScript, HTML, CSS, Javascript, AJAX, Git, Github, MessageQueue, Cron4J, Spring Batch, Jenkins, Maven, Gradle",
    lession: 40,
    enrolled: 120,
  },
];

export const lessionList = [
  {
    name: "Introduction to Computer Science",
    lessons: [
      "Binary Number System",
      "Logic Gates",
      "Introduction to Algorithms",
    ],
  },
  {
    name: "Web Development",
    lessons: [
      "HTML and CSS Basics",
      "JavaScript Fundamentals",
      "Responsive Design",
    ],
  },
  {
    name: "Data Science",
    lessons: [
      "Introduction to Data Analysis",
      "Python for Data Science",
      "Machine Learning Basics",
    ],
  },
];
