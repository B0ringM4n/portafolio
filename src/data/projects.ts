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
    about:
      "Plataforma de comercio electrónico full-stack que permite a pequeños negocios vender online sin fricción. Incluye catálogo dinámico, carrito persistente, pasarela de pagos integrada y panel de administración en tiempo real.",
    problem:
      "Los pequeños comercios dependen de plataformas rígidas con comisiones altas. Esta app ofrece una tienda propia en minutos, con control total sobre inventario, pagos y experiencia de marca — a un costo fijo, sin sorpresas.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind", "Redis"],
    year: "2025",
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
    about:
      "Aplicación de gestión de tareas con colaboración en tiempo real, tableros Kanban, etiquetas personalizadas y vista de progreso. Diseñada para equipos pequeños y productividad individual.",
    problem:
      "Los equipos pequeños pierden tiempo coordinando trabajo en hilos de chat dispersos. Esta app centraliza tareas, responsables y plazos en un único espacio visual, reduciendo la fricción de coordinación.",
    techStack: ["React", "NestJS", "TypeScript", "PostgreSQL", "Docker", "Socket.io"],
    year: "2024",
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
    about:
      "Dashboard analítico empresarial con visualización de datos interactiva, reportes automatizados y métricas en tiempo real. Conecta múltiples fuentes de datos en una sola vista unificada.",
    problem:
      "Las organizaciones manejan datos en silos — hojas de cálculo, sistemas legacy, APIs externas. Este dashboard unifica esas fuentes en métricas accionables sin necesidad de exportar ni reconciliar manualmente.",
    techStack: ["Angular", ".NET", "Azure", "SQL Server", "Power BI", "SignalR"],
    year: "2024",
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
    about:
      "Aplicación móvil de fitness cross-platform con seguimiento de rutinas, planes de entrenamiento personalizados generados por IA y estadísticas de progreso detalladas. Disponible en iOS y Android.",
    problem:
      "Las apps de fitness genéricas no se adaptan al nivel ni disponibilidad del usuario. Esta app aprende del historial de entrenamientos para generar planes progresivos que se ajustan a la vida real de cada persona.",
    techStack: ["Flutter", "Golang", "PostgreSQL", "Docker", "Firebase", "TensorFlow Lite"],
    year: "2025",
  },
];

export const projectCategories = [
  "All",
  "Web Development",
  "Web Applications",
  "Mobile Apps",
];
