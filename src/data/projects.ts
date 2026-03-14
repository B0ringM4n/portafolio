import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project-1",
    number: "01",
    name: "E-Commerce Platform",
    category: "Web Applications",
    description:
      "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración. Construida con arquitectura moderna y escalable.",
    imageUrl: "/images/project-01.webp",
    projectUrl: "#",
    tags: ["Next.js", "Node.js", "TypeScript"],
  },
  {
    id: "project-2",
    number: "02",
    name: "Task Management App",
    category: "Web Applications",
    description:
      "Aplicación de gestión de tareas con tableros Kanban, asignación de equipos y seguimiento de progreso en tiempo real.",
    imageUrl: "/images/project-02.webp",
    projectUrl: "#",
    tags: ["React", "NestJS", "Docker"],
  },
  {
    id: "project-3",
    number: "03",
    name: "Portfolio Dashboard",
    category: "Web Development",
    description:
      "Dashboard analítico con visualización de datos interactiva, reportes automatizados y métricas en tiempo real.",
    imageUrl: "/images/project-03.webp",
    projectUrl: "#",
    tags: ["Angular", ".NET", "Azure"],
  },
  {
    id: "project-4",
    number: "04",
    name: "Mobile Fitness App",
    category: "Mobile Apps",
    description:
      "Aplicación móvil de fitness con seguimiento de rutinas, planes de entrenamiento personalizados y estadísticas de progreso.",
    imageUrl: "/images/project-04.webp",
    projectUrl: "#",
    tags: ["Flutter", "Golang", "Docker"],
  },
];

export const projectCategories = [
  "All",
  "Web Development",
  "Web Applications",
  "Mobile Apps",
];
