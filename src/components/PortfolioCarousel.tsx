"use client";

import { DynamicCarousel, CarouselItemWithId } from "@/components/ui/DynamicCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

export interface PortfolioItem extends CarouselItemWithId {
  imageUrl: string;
  title: string;
  description: string;
  projectUrls: string[];
}

const portfolioItemsData: PortfolioItem[] = [
    {
    id: "pragmaBootcamp",
    imageUrl: "/certificado_bootcamp.png",
    title: "Loan Management System - Pragma Bootcamp",
    description: "Developed a comprehensive loan management system during Pragma's 6-week Java Reactive Bootcamp using Spring Webflux and AWS. Built three microservices: prestamos-service for loan requests and approvals, usuarios-service for user management and authentication, and reportes-service for business metrics. Implemented reactive programming, hexagonal architecture, JWT authentication, Docker containerization, AWS deployment with ECS/Fargate, Lambda functions for automatic validation, SQS/SNS for notifications, DynamoDB for reporting, and RDS for databases. Features include user registration, loan applications with manual and automatic approval processes, capacity assessment calculations, email notifications, and scheduled reports.",
    projectUrls: ["https://github.com/Andr3sPA/prestamos-service", "https://github.com/Andr3sPA/usuarios-service", "https://github.com/Andr3sPA/reportes-service"],
  },
{
  id: "restaurantManagement",
  imageUrl: "/restaurant_app.png", // Asegúrate de tener esta imagen en tu carpeta pública
  title: "Restaurant Management System",
  description:
    "Full-stack restaurant management app built with the T3 stack (Next.js, Prisma, NextAuth, tRPC). Enables menu browsing, role-based access (client, employee, admin), and real-time order/inventory management. Deployed on Vercel with authentication and admin metrics.",
  projectUrls: ["https://empanadas-restaurante.vercel.app"],
},

  {
    id: "gestionResiduos",
    imageUrl: "/gestion_de_residuos.png",
    title: "Waste Management System",
    description: `Academic project developed with Next.js for the University of Antioquia’s Systems Engineering program. Features an interactive waste availability map, multi-role user system (buyers/sellers/collectors), and waste classification (recyclable/non-recyclable). Streamlines auction processes, transactions, and disposal logistics for enterprises.`,
    projectUrls: ["https://gestion-de-residuos-six.vercel.app"],
  },
    {
    id: "nexum",
    imageUrl: "/nexum.png",
    title: "Nexum - University Job Board",
    description: "Nexum is a job board platform designed for the University of Antioquia, similar to LinkedIn. Developed using hexagonal architecture in Springboot for the backend, React for the frontend. Deployed backend on AWS EC2 and API Gateway, database on Neon, and frontend on Vercel. Features include job postings, user profiles, catalogs, and opportunities management.",
    projectUrls: ["https://github.com/Andr3sPA/Nexum-Opportunity", "https://github.com/Andr3sPA/Nexum-Front", "https://github.com/Andr3sPA/Nexum-Profile", "https://github.com/Andr3sPA/Nexum-Catalog"],
  },
  {
    id: "projectEcommerce",
    imageUrl: "/e_commerce.png",
    title: "Ecommerce Platform",
    description: "Full-stack application built with Go (backend) and Angular (frontend) to practice cloud-based development, featuring JWT authentication, MongoDB Atlas for database management, and Cloudinary for image storage. Designed as a clothing e-commerce platform, it focuses on implementing core functionalities while mastering Go concurrency and Angular best practices in a scalable cloud environment.",
    projectUrls: ["https://github.com/Andr3sPA/e_commerce"],
  },
  {
  id: "whaleClassification",
  imageUrl: "/whale_classification.png", // Asegúrate de tener esta imagen en tu carpeta pública
  title: "Whale Species Classification",
  description:
    "Deep learning project tackling an extreme multi-class image classification problem with over 4000 classes using CNNs. Conducted data exploration, preprocessing, and built a baseline model to classify whale species. Highlights challenges of class imbalance and the need for advanced architectures.",
  projectUrls: ["https://github.com/Andr3sPA/Proyecto_deep_learning"],
},
    {
    id: "projectMachineLearning",
    imageUrl: "/machine_learning.png",
    title: "Machine Learning",
    description: "Machine learning project for Kaggle’s competition predicting NCAA basketball tournament outcomes using Python, Pandas, and scikit-learn. Engineered features from game statistics (team performance, win trends), trained classification models (logistic regression), and validated results via cross-validation. Achieved competitive accuracy by analyzing rankings and game locations, with workflows deployed in Jupyter and Google Colab for collaborative model iteration.",
    projectUrls: ["https://github.com/Andr3sPA/proyecto_modelos_simulacion_1"],
  },

];

export function PortfolioCarousel() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-8 md:px-16"> {/* Aumentado px-6 a px-8 y md:px-12 a md:px-16 */}
      <DynamicCarousel
        items={portfolioItemsData}
        carouselClassName="w-full"
        contentClassName="-ml-1"
        itemClassName="pl-1 md:basis-1/2 lg:basis-1/3"
        renderItem={(item: PortfolioItem) => (
          <div className="p-1 h-full">
            <Card className="h-full flex flex-col">
              <CardContent className="p-4 flex flex-col flex-grow items-center text-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover mb-4 rounded-md"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
                {item.projectUrls.length > 1 ? (
                  <div>
                    <p className="text-xs text-gray-500 mb-2">Repositorios:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {item.projectUrls.map((url, index) => (
                        <Button key={index} size="sm" variant="secondary" onClick={() => window.open(url, "_blank")} className="flex items-center gap-1">
                          <FaGithub className="w-3 h-3" />
                          {url.split('/').pop()}
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Button onClick={() => window.open(item.projectUrls[0], "_blank")} className="mt-auto">
                    Ver Proyecto
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      />
    </div>
  );
}
