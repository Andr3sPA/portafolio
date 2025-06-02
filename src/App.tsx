import './App.css'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'; // Added import
import { Progress } from "@/components/ui/progress"
import { FcCommandLine } from "react-icons/fc";
import { Card, CardContent } from './components/ui/card';
import { SortableDynamicOverlayDemo } from './extra_skills';
import { AppSidebar } from './components/app-sidebar';
import { SidebarProvider } from './components/ui/sidebar';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { DialogDemo } from './components/hireMe';
import { Toaster } from "@/components/ui/sonner"
function App() {

  return (
    <>
     <Toaster />
      <ResizablePanelGroup direction="horizontal" className="rounded-lg border md:min-w-[450px] ">
        <ResizablePanel className="w-2" style={{backgroundColor: '#e8f8f5'}} defaultSize={25}>
            <div className="flex flex-col items-center w-full gap-5 pt-8"> {/* Modified classes */}
             <div className="flex items-center justify-center">
              <img src="/img side bar.png" alt="Sidebar visual aid" />
            </div>
            <div>
              Andrés Peña
            </div>
            <div>
              Software engineer
            </div>
            <div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">Email:</TableCell>
                    <TableCell align="right">andresdario.2001@gmail.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Phone:</TableCell>
                    <TableCell align="right">+57 3126138758</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Residence:</TableCell>
                    <TableCell align="right">Medellín, Colombia</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Freelance:</TableCell>
                    <TableCell align="right">Available</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <span className="text-sm">Lenguages</span>
            </div>
            <div className="w-full px-4 py-2 space-y-2"> 
              <div className="flex justify-between items-center">
                <span className="text-sm mr-2">English</span>
                <div className="flex-grow">
                  <Progress value={80} />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm mr-2">Spanish</span>
                <div className="flex-grow">
                  <Progress value={100} />
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm">Programming Languages</span>
            </div>
            <div className="w-full px-4 py-2">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="text-sm pr-2 py-1 text-left">Java</td>
                    <td className="w-full py-1 text-right"><Progress value={70} /></td>
                  </tr>
                  <tr>
                    <td className="text-sm pr-2 py-1 text-left">TypeScript</td>
                    <td className="w-full py-1 text-right"><Progress value={90} /></td>
                  </tr>
                  <tr>
                    <td className="text-sm pr-2 py-1 text-left">JavaScript</td>
                    <td className="w-full py-1 text-right"><Progress value={100} /></td>
                  </tr>
                  <tr>
                    <td className="text-sm pr-2 py-1 text-left">Python</td>
                    <td className="w-full py-1 text-right"><Progress value={90} /></td>
                  </tr>
                  <tr>
                    <td className="text-sm pr-2 py-1 text-left">Go</td>
                    <td className="w-full py-1 text-right"><Progress value={80} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <span className="text-sm">Frameworks</span>
            </div>
            {/* Wrapper for all framework items to control spacing */}
            <div className="w-full px-4 flex flex-col space-y-1">
              <div className="flex items-center py-1">
                <FcCommandLine className="mr-1"/>
                <span className="text-sm">Flask, FastAPI,Django</span>
              </div>
              <div className="flex items-center py-1">
                <FcCommandLine className="mr-1"/>
                <span className="text-sm">Next,React, Express</span>
              </div>
              <div className="flex items-center py-1">
                <FcCommandLine className="mr-1"/>
                <span className="text-sm">Springboot</span>
              </div>
              <div className="flex items-center py-1">
                <FcCommandLine className="mr-1"/>
                <span className="text-sm">Golang</span>
              </div>
              <div className="flex items-center py-1">
                <FcCommandLine className="mr-1"/>
                <span className="text-sm">Mongoose, Prisma</span>
              </div>
            </div>
          </div>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        <ResizablePanel
          className="overflow-auto" // Added overflow-auto
          style={{backgroundColor: '#f0f3f4'}}
          defaultSize={75}
        >
          {/* Main content wrapper for the right panel */}
          <div className="flex flex-col items-center justify-center w-full gap-3"> {/* Removed h-full */}
            <Card className="mt-5 mx-4">

  <CardContent>
    <div className="flex flex-col md:flex-row items-center justify-between w-full">
      {/* Sección de texto */}
<div className="md:w-[55%] mb-8 md:mb-0 text-left"> {/* Añade text-left para ser explícito */}
  <h1 className="text-4xl font-bold text-gray-800 mb-4">
    Andrés Peña
    
  </h1>
  <h1 className="text-4xl font-bold text-blue-600 mb-4"> {/* Cambiado text-gray-800 a text-blue-600 */}
    Developer
  </h1>
  <p className="text-gray-600 leading-relaxed mb-8 whitespace-pre-line">
    {`Analytical and motivated Systems Engineering student skilled in backend development, API design,
     and scalable solutions. Passionate about continuous learning and applying emerging technologies 
     to solve complex challenges. Maintain a disciplined mindset through sports and fitness, enhancing 
     focus in technical projects.`}
  </p>
  <DialogDemo/>
</div>

      <div className="md:w-[40%] flex justify-center">
        <img 
          src="/img body.png" 
          alt="Profile illustration" 
          className="w-full max-w-[400px] h-auto"
        />
      </div>
    </div>
  </CardContent>

</Card>
                <div className="w-full">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        My Knowledge
      </h1>
      
      {/* Contenido */}
      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
        {`Backend (Spring Boot, Go, FastAPI), frontend (React, Next.js), databases (MongoDB, Oracle), 
        and cloud tools (Vercel, Docker). Proficient in REST APIs, authentication systems (JWT), and 
        machine learning workflows. Actively exploring DevOps, serverless architectures, and agile 
        practices.`}
      </p>
    </div>
          </div>
    <div className="py-5 px-4"> 
      <SortableDynamicOverlayDemo/>
    </div>
                              <div className="w-full">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Education
      </h1>
      
      {/* Contenido */}
      <p className="text-gray-600 leading-relaxed whitespace-pre-line">
        {`B.S. in Systems Engineering (2025 Expected)
University of Antioquia, Colombia`}
      </p>
    </div>
    <Card className="mx-4 my-2">
  <CardContent>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell> 
      <h2 className="text-lg font-semibold text-gray-900">University Of Antioquia</h2>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-sm text-gray-700">Student</span>
        <span className="bg-yellow-400 text-white text-sm px-2 py-1 rounded-md">
          Feb 2019 - Dec 2025
        </span>
    </div>
    </TableCell>
                <TableCell className="h-auto whitespace-normal"> 
                  <div className="w-full text-left"> 
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                      System Engineering Career
                    </h2>
                    <p className="text-sm text-gray-500 leading-relaxed break-words">
                      Currently serving as a Programming Assistant, developing backend solutions and automation tools to streamline workflows. Focused on applying software architecture principles and security best practices learned through coursework to deliver efficient, scalable systems.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
  </CardContent>
</Card>
                                        <div className="w-full">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Portfolio
      </h1>
      <PortfolioCarousel/>
    </div>
        </ResizablePanel>
      </ResizablePanelGroup>
              <SidebarProvider  
    className="h-0 w-0 overflow-hidden" // Correcto para que no ocupe espacio en el flujo
    style={{
      "--sidebar-width": "4rem" // Esto define el ancho del sidebar cuando está colapsado (solo íconos)
    } as React.CSSProperties & Record<string, any>}
>
      <AppSidebar />
    </SidebarProvider>

    </>
  )
}

export default App