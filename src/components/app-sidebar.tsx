import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    url: "https://github.com/Andr3sPA",
    icon: <DiGithubBadge size="36px" />, // Using a specific pixel size, e.g., 36px or try "2.25em"
  },
  {
    url: "www.linkedin.com/in/andrés-darío-peña-asprilla-6aa9ab290",
    icon: <FaLinkedin size="36px" />, // Using a specific pixel size, e.g., 36px or try "2.25em"
  },
];

export function AppSidebar() {
  return (
    <Sidebar side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {/* Puedes añadir otros elementos aquí arriba si es necesario */}
            <SidebarMenu className="mt-4"> {/* Añadida clase de margen superior */}
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild size="lg">
                    <a
                      href={item.url}
                      className="flex items-center justify-center w-full h-full p-2 rounded-md hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {item.icon}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
