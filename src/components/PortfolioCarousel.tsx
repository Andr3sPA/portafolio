"use client";

import { DynamicCarousel, CarouselItemWithId } from "@/components/ui/DynamicCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface PortfolioItem extends CarouselItemWithId {
  imageUrl: string;
  title: string;
  description: string;
  projectUrl: string;
}

const portfolioItemsData: PortfolioItem[] = [
  {
    id: "gestionResiduos",
    imageUrl: "/gestion_de_residuos.png",
    title: "Waste Management System",
    description: `Academic project developed with Next.js for the University of Antioquia’s Systems Engineering program. Features an interactive waste availability map, multi-role user system (buyers/sellers/collectors), and waste classification (recyclable/non-recyclable). Streamlines auction processes, transactions, and disposal logistics for enterprises.`,
    projectUrl: "https://gestion-de-residuos-six.vercel.app/",
  },
  {
    id: "projectEcommerce",
    imageUrl: "/e_commerce.png",
    title: "Ecommerce Platform",
    description: "Full-stack application built with Go (backend) and Angular (frontend) to practice cloud-based development, featuring JWT authentication, MongoDB Atlas for database management, and Cloudinary for image storage. Designed as a clothing e-commerce platform, it focuses on implementing core functionalities while mastering Go concurrency and Angular best practices in a scalable cloud environment.",
    projectUrl: "https://github.com/Andr3sPA/e_commerce", // Recuerda cambiar esta URL
  },
    {
    id: "projectTelcoNova",
    imageUrl: "/telcoNova.png",
    title: "Telco Nova Platform",
    description: "Developed the frontend for the automated/manual technician assignment feature using Next.js (Vite), Tailwind CSS, and shadcn/ui, deployed on Vercel. Designed intuitive interfaces for algorithm-driven technician allocation (optimizing workload, location, and expertise) and supervisor-manual assignments, integrated role-based authentication, and built interactive dashboards with real-time data visualization. Collaborated on REST API integration to sync with backend services, ensuring seamless communication for assignment notifications and operational metrics.",
    projectUrl: "https://fronttelconovafeature2.vercel.app", // Recuerda cambiar esta URL
  },
    {
    id: "projectMachineLearning",
    imageUrl: "/machine_learning.png",
    title: "Machine Learning",
    description: "Machine learning project for Kaggle’s competition predicting NCAA basketball tournament outcomes using Python, Pandas, and scikit-learn. Engineered features from game statistics (team performance, win trends), trained classification models (logistic regression), and validated results via cross-validation. Achieved competitive accuracy by analyzing rankings and game locations, with workflows deployed in Jupyter and Google Colab for collaborative model iteration.",
    projectUrl: "https://github.com/Andr3sPA/proyecto_modelos_simulacion_1", // Recuerda cambiar esta URL
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
                <Button
                  onClick={() => window.open(item.projectUrl, "_blank")}
                  className="mt-auto"
                >
                  Ver Proyecto
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      />
    </div>
  );
}
