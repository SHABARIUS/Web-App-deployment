import { useState } from "react";
import FootBar from "../Views/FootBar";
import Header from "../Views/Header";
import { createPortal } from "react-dom";
import Modal from "../Views/Modal";
import devops from "../../assets/devops.jpg";

const DevOps = () => {
  const [showModal, setShowModal] = useState(false);
  const [syllabus, setSyllabus] = useState("");
  const [showContent, setShowContent] = useState({ showing: "devops" });
  return (
    <>
      {showModal &&
        createPortal(
          <Modal syllabus={syllabus} setShowModal={setShowModal} />,
          document.getElementById("modal")
        )}
      <div>
        <Header />
        <div className="w-[90%] md:w-[55%] m-auto my-16">
          {/* first segment */}
          <div className="flex justify-between flex-wrap sm:items-center items-start mb-20 ">
            <div className="flex-3">
              <h2 className="text-xl">The most trusted way to become an</h2>
              <h1 className="text-3xl font-bold">DevOps Master</h1>
              <h1 className="text-xl">Job Oriented Program</h1>
              <ul className="my-20 list-disc list-inside">
                <li className="text-gray-700">
                  Mock interviews, hackathons and more
                </li>
                <li className="text-gray-700">
                  Multilingual training options (English and Tamil)
                </li>
                <li className="text-gray-700">
                  Job-ready portfolio of rich, functional apps
                </li>
                <li className="text-gray-700">
                  Reserve a Seat for INR 5,000/-
                </li>
              </ul>
              <div className="flex flex-col md:flex-row mb-10">
                <button
                  className="px-6 py-4 my-2 font-bold rounded-md bg-[#E5BE7F] hover:bg-[#d3ac6e] cursor-pointer mr-5"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Apply Now
                </button>
                <button
                  className="px-6 py-4 my-2 mr-5 font-bold rounded-md border border-black/20 hover:border-black/70 cursor-pointer"
                  onClick={() => {
                    setSyllabus("DevOps-Syllabus");
                    setShowModal(true);
                  }}
                >
                  Download Syllabus
                </button>
              </div>
            </div>
            <div>
              <img
                src={devops}
                alt="course image"
                width={"500px"}
                className="rounded-tr-lg rounded-br-lg object-fill"
              />
            </div>
          </div>
        </div>
        {/* second segment */}
        <div className="w-[90%] md:w-[55%] m-auto mb-20">
          <p>DEVOPS BOOTCAMP CURRICULUM</p>
          <h2 className="text-3xl font-semibold">
            Learn with a World-Class Curriculum
          </h2>
          <div className="mt-10 flex justify-between flex-wrap sm:items-center space-x-1 space-y-2">
            <div
              className="px-8 py-5 border border-black/45 rounded-xl cursor-pointer hover:border-black/95 w-60"
              onClick={() => setShowContent({ showing: "devops" })}
            >
              <p>Module 1</p>
              <h1 className="text-[#0C3948] font-bold">DevOps Introduction</h1>
            </div>
            <div
              className="px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95 w-60"
              onClick={() => setShowContent({ showing: "os" })}
            >
              <p>Module 2</p>
              <h1 className="text-[#0C3948] font-bold">OS(Linux/Mac)</h1>
            </div>
            <div
              className="px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95 w-60"
              onClick={() => setShowContent({ showing: "fileServer" })}
            >
              <p>Module 3</p>
              <h1 className="text-[#0C3948] font-bold">File servers</h1>
            </div>
            <div
              className="px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95 w-60"
              onClick={() => setShowContent({ showing: "bash" })}
            >
              <p>Module 4</p>
              <h1 className="text-[#0C3948] font-bold">Bash Scripting</h1>
            </div>
            <div
              className="px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95 w-60"
              onClick={() => setShowContent({ showing: "git" })}
            >
              <p>Module 5</p>
              <h1 className="text-[#0C3948] font-bold">Git</h1>
            </div>
            <div
              className="px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95 w-60"
              onClick={() => setShowContent({ showing: "containerization" })}
            >
              <p>Module 6</p>
              <h1 className="text-[#0C3948] font-bold">Containerization</h1>
            </div>
            <div
              className="px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95 w-60"
              onClick={() => setShowContent({ showing: "docker" })}
            >
              <p>Module 7</p>
              <h1 className="text-[#0C3948] font-bold">Dockers</h1>
            </div>
            <div
              className="px-8 py-5  border border-black/45 rounded-xl cursor-pointer hover:border-black/95 w-60"
              onClick={() => setShowContent({ showing: "aws" })}
            >
              <p>Module 8</p>
              <h1 className="text-[#0C3948] font-bold">
                AWS Infrastructure -1
              </h1>
            </div>
          </div>
        </div>
        {/* third segment optional portion */}
        {showContent.showing == "devops" && (
          <div className="w-[90%] md:w-[55%] lg:w-[50%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[620px]">
            <h1 className="text-2xl font-bold mb-5">DevOps Introduction</h1>
            <p>
              DevOps is a cultural and technical movement that emphasizes
              collaboration, automation, and integration between software
              development and IT operations teams to deliver high-quality
              software products rapidly and reliably.
            </p>
            <p className="font-bold mt-5">Topics Covered</p>
            <ul className="mb-5 list-disc list-inside">
              <li>Source and Version Control using Git and GitHub</li>
              <li>Mastering HTML5 and CSS3</li>
              <li>Mastering JavaScript (ECMAScript 2020+)</li>
              <li>Working with Remote Data and Writing Modular Code</li>
              <li>Modern JavaScript using Babel</li>
              <li>Working with Parcel and Webpack module bundlers</li>
              <li>Building Single Page Applications using React</li>
              <li>Work with the incredible Hooks API</li>
            </ul>
          </div>
        )}
        {showContent.showing == "os" && (
          <div className="w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[620px]">
            <h1 className="text-2xl font-bold mb-5">OS(Linux/Mac)</h1>
            <p>
              Linux, macOS, and Windows are three major operating systems used
              across various devices, offering distinct features and user
              experiences tailored to different needs and preferences.
            </p>
            <p className="font-bold mt-5">Topics Covered</p>
            <ul className="mb-5 list-disc list-inside">
              <li>What is SDLC?</li>
              <li>Types Of SDLC Methods.</li>
              <li>What is Agile Methodology?</li>
              <li>What is SCRUM Methodology?</li>
              <li>What is DevOps?</li>
              <li>Need for DevOps Culture.</li>
              <li>What is a Continuous Integration?</li>
              <li>What is Continuous Delivery?</li>
              <li>Benefits Of DevOps</li>
              <li>Introduction to Virtualization</li>
              <li>VM - Manual setup</li>
              <li>VM - Automated setup</li>
            </ul>
          </div>
        )}
        {showContent.showing == "fileServer" && (
          <div className="w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[620px]">
            <h1 className="text-2xl font-bold mb-5">File servers</h1>
            <p>
              A file server is a centralized computer system that provides
              storage and access to files, allowing users on a network to share
              and manage data efficiently.
            </p>
            <p className="font-bold mt-5">Topics Covered</p>
            <ul className="mb-5 list-disc list-inside">
              <li>Introduction to Linux</li>
              <li>Basic Commands</li>
              <li>More Commands (mkdir, cp, mv, touch, etc)</li>
              <li>Filters & Redirections</li>
              <li>Users and Group</li>
              <li>File permissions</li>
              <li>Process</li>
              <li>Archiving</li>
              <li>Ubuntu Based Commands</li>
            </ul>
          </div>
        )}
        {showContent.showing == "bash" && (
          <div className="w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[620px]">
            <h1 className="text-2xl font-bold mb-5">Bash Scripting</h1>
            <p>
              Bash scripting involves writing and executing commands in the Bash
              shell to automate tasks and streamline repetitive processes on
              Unix-like operating systems.
            </p>
            <p className="font-bold mt-5">Topics Covered</p>
            <ul className="mb-5 list-disc list-inside">
              <li>Introduction to Linux</li>
              <li>Basic Commands</li>
              <li>More Commands (mkdir, cp, mv, touch, etc)</li>
              <li>Filters & Redirections</li>
              <li>Users and Group</li>
              <li>File permissions</li>
              <li>Process</li>
              <li>Archiving</li>
              <li>Ubuntu Based Commands</li>
              <li>Vagrant IP, RAM & CPU</li>
              <li>Website Setup</li>
              <li>Website Setup, WordPress</li>
              <li>Automate Website setup</li>
              <li>Introduction to networking and OSI models</li>
              <li>Understanding the networking, IP</li>
              <li>Networking Commands</li>
            </ul>
          </div>
        )}
        {showContent.showing == "git" && (
          <div className="w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[620px]">
            <h1 className="text-2xl font-bold mb-5">Git</h1>
            <p>
              Git is a distributed version control system designed to track
              changes in source code during software development, facilitating
              collaboration among multiple developers and enabling efficient
              code management.
            </p>
            <p className="font-bold mt-5">Topics Covered</p>
            <ul className="mb-5 list-disc list-inside">
              <li>Introduction</li>
              <li>Versioning, staging & un staging</li>
              <li>Branching, Merging, and rebase</li>
              <li>Rollback, reset</li>
              <li>Git ssh login</li>
            </ul>
          </div>
        )}
        {showContent.showing == "containerization" && (
          <div className="w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[620px]">
            <h1 className="text-2xl font-bold mb-5">Containerization</h1>
            <p>
              Containerization is a lightweight form of virtualization that
              encapsulates applications and their dependencies into isolated
              environments, enabling consistent deployment across different
              computing environments.
            </p>
            <p className="font-bold mt-5">Topics Covered</p>
            <ul className="mb-5 list-disc list-inside">
              <li>What are containers?</li>
              <li>What is Docker?</li>
              <li>Hands-On Docker Containers</li>
              <li>Microservices</li>
            </ul>
          </div>
        )}
        {showContent.showing == "docker" && (
          <div className="w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[620px]">
            <h1 className="text-2xl font-bold mb-5">Docker</h1>
            <p>
              Docker is a platform that simplifies the process of creating,
              deploying, and managing containerized applications, offering
              efficient and consistent development-to-production workflows.
            </p>
            <p className="font-bold mt-5">Topics Covered</p>
            <ul className="mb-5 list-disc list-inside">
              <li>Introduction</li>
              <li>Docker installation and commands setup</li>
              <li>Docker logs and Docker volumes</li>
              <li>Building images</li>
              <li>Docker Compose</li>
              <li>Multistage Dockerfile</li>
              <li>Containerizing project</li>
            </ul>
          </div>
        )}
        {showContent.showing == "aws" && (
          <div className="w-[90%] md:w-[45%] m-auto bg-slate-100/60 px-20 py-10 mb-20 md:h-[620px]">
            <h1 className="text-2xl font-bold mb-5">AWS Infrastructure -1</h1>
            <p>
              AWS Infrastructure provides scalable and reliable cloud computing
              resources, including compute power, storage, and networking
              services, enabling organizations to build and deploy applications
              with flexibility and efficiency.
            </p>
            <p className="font-bold mt-5">Topics Covered</p>
            <ul className="mb-5 list-disc list-inside">
              <li>What is cloud computing?</li>
              <li>EC2 Introduction</li>
              <li>Launching an EC2 and accessing it using CLI</li>
              <li>EBS & Mounting on EBS</li>
              <li>EBS snapshots</li>
              <li>ELB</li>
              <li>Cloud watch</li>
            </ul>
          </div>
        )}
        <div className="w-[90%] md:w-[45%] m-auto mb-20">
          <h1 className="text-2xl font-bold">
            Tools and Technologies You’ll Master
          </h1>
        </div>
        <FootBar />
      </div>
    </>
  );
};

export default DevOps;
