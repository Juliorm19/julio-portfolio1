import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Define una interfaz para tus proyectos
export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string; // Opcional
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      image: 'assets/images/taskflow.jpg', // Crea esta carpeta y añade una imagen
      title: 'Plataforma de Gestión de Tareas (TaskFlow)',
      description: 'Aplicación web full-stack para la gestión de tareas y proyectos en equipo, con autenticación y un tablero Kanban interactivo.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap', 'JWT'],
      githubUrl: 'https://github.com/tu-usuario/taskflow-app'
    },
    {
      image: 'assets/images/taskflow.jpg', // Crea esta carpeta y añade una imagen
      title: 'Plataforma de Gestión de Tareas (TaskFlow)',
      description: 'Aplicación web full-stack para la gestión de tareas y proyectos en equipo, con autenticación y un tablero Kanban interactivo.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap', 'JWT'],
      githubUrl: 'https://github.com/tu-usuario/taskflow-app'
    },
    {
      image: 'assets/images/taskflow.jpg', // Crea esta carpeta y añade una imagen
      title: 'Plataforma de Gestión de Tareas (TaskFlow)',
      description: 'Aplicación web full-stack para la gestión de tareas y proyectos en equipo, con autenticación y un tablero Kanban interactivo.',
      tags: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap', 'JWT'],
      githubUrl: 'https://github.com/tu-usuario/taskflow-app'
    },
  ];
}
