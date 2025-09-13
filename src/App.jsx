import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowRight, Building2, Calendar, Code2 } from 'lucide-react'

function Nav() {
  const links = [
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#experiencia', label: 'Experiencia' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#contacto', label: 'Contacto' },
  ]
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800">
      <div className="container-pro py-3 flex items-center justify-between">
        <a href="#inicio" className="font-semibold tracking-tight">jeiss.dev</a>
        <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contacto" className="group text-sm px-3 py-1.5 rounded-md bg-violet-600 hover:bg-violet-500 transition-colors inline-flex items-center gap-1">
          Contactar <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  )
}

function SectionTitle({ children, id }) {
  return (
    <h2 id={id} className="text-xl md:text-2xl font-semibold tracking-tight mb-6">
      {children}
    </h2>
  )
}

function Hero() {
  const [emailCopied, setEmailCopied] = useState(false)
  const email = "jeissonsantiagocortes@gmail.com"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar email:', err)
    }
  }

  return (
    <section id="inicio" className="pt-16">
      <div className="container-pro py-16 md:py-24 grid md:grid-cols-3 gap-10 items-center relative">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(60%_60%_at_50%_0%,#000_20%,transparent_70%)]">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 h-[480px] w-[720px] bg-violet-600/20 blur-3xl rounded-full" />
        </div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:col-span-2 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-300">
            <span className="size-1.5 rounded-full bg-emerald-500" /> Disponible para oportunidades
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            Software Engineer especializado en desarrollo Backend
          </h1>
          <p className="text-neutral-300 max-w-2xl">
            Diseño y construyo APIs robustas, escalables y mantenibles. Me enfoco en arquitectura limpia,
            buenas prácticas y automatización de despliegues.
          </p>
          <div className="flex gap-3">
            <a href="#contacto" className="px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-500 transition-colors">Hablemos</a>
            <a href="#proyectos" className="px-4 py-2 rounded-md border border-neutral-700 hover:border-neutral-500 transition-colors">Ver proyectos</a>
          </div>
          <div className="flex gap-4 pt-2 text-sm text-neutral-400">
            <a className="hover:text-white inline-flex items-center gap-1" href="https://linkedin.com/in/jeisson-cortes-0ba9611b9" target="_blank" rel="noreferrer"><Linkedin className="size-4"/> LinkedIn</a>
            <a className="hover:text-white inline-flex items-center gap-1" href="https://github.com/" target="_blank" rel="noreferrer"><Github className="size-4"/> GitHub</a>
            <button 
              onClick={copyEmail}
              className="hover:text-white inline-flex items-center gap-1 relative"
            >
              <Mail className="size-4"/> 
              {emailCopied ? 'Email copiado!' : 'Email'}
              {emailCopied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  ¡Email copiado al portapapeles!
                </span>
              )}
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="md:col-span-1">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-700 to-fuchsia-600 p-[2px]">
            <div className="h-full w-full rounded-2xl bg-neutral-900/80 grid place-items-center text-neutral-400">
              Tu Foto
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SobreMi() {
  return (
    <section id="sobre-mi" className="border-t border-neutral-800">
      <div className="container-pro py-12 md:py-16">
        <SectionTitle>Sobre mí</SectionTitle>
        <div className="prose prose-invert max-w-none">
          <p>
          Ingeniero de Sistemas con más de 4 años de experiencia en desarrollo backend en entornos de alta demanda. He contribuido en proyectos de marketplace y Seller Central en Mercado Libre, he optimizando el rendimiento y en la estabilidad de los servicios. Experiencia en integración de soluciones IA (chatbots) para automatizar procesos y mejorar la eficiencia operativa. Disfruto impulsando ideas innovadoras en colaboración con distintos perfiles y asumiendo la responsabilidad de proyectos importantes que marquen la diferencia.
          </p>
        </div>
      </div>
    </section>
  )
}

function Experiencia() {
  const items = [
    {
      rol: 'Software Engineer',
      empresa: 'MERCADO LIBRE',
      periodo: 'Abril 2024 — Presente',
      detalles: [
        'Desarrollo de nuevas funcionalidades y mejoras dentro de la plataforma de marketplace y Seller Central.',
        'Implementación de soluciones escalables y eficientes utilizando tecnologías como Java, Spring Boot y NoSQL.',
        'Resolución de incidencias y bugs en producción, garantizando la estabilidad y fiabilidad del sistema.',
        'Automatización y entrenamiento de modelos de IA (como chatbots) para agilizar el acceso a información y mejorar la eficiencia en la toma de decisiones, reduciendo tiempos de respuesta y aumentando la productividad del equipo de producto.',
      ],
    },
    {
      rol: 'Desarrollador de software',
      empresa: 'IAS SOFTWARE',
      periodo: 'Noviembre 2021 — Abril 2024',
      detalles: [
        <>Participación en proyectos de <span className="font-medium text-neutral-100">Bancolombia</span> como analista de requerimientos y desarrollador de software.</>,
        'Desarrollo de aplicaciones empresariales para los diferentes clientes de la compañía.',
        'Desarrollo de requerimientos funcionales e historias de usuario.',
        'Desarrollos en stacks tecnológicos como Spring Boot, Angular, PostgreSQL y AWS.',
      ],
    },
  ]
  return (
    <section id="experiencia" className="border-t border-neutral-800">
      <div className="container-pro py-12 md:py-16">
        <SectionTitle>Experiencia</SectionTitle>
        <div className="relative before:absolute before:left-4 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-neutral-800">
          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, idx) => (
              <motion.div key={item.empresa+item.periodo} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative pl-10 md:pl-0">
                <div className="card p-5">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium inline-flex items-center gap-2"><Building2 className="size-4"/> {item.rol} • {item.empresa}</p>
                    <span className="text-sm text-neutral-400 inline-flex items-center gap-1"><Calendar className="size-4"/> {item.periodo}</span>
                  </div>
                  {item.detalles && (
                    <ul className="mt-2 list-disc pl-5 text-sm text-neutral-300 space-y-1">
                      {item.detalles.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Proyectos() {
  const projects = [
    {
      nombre: 'Plantilla Spring Boot Clean Architecture',
      descripcion: 'Base de proyecto opinionada con módulos, integración con PostgreSQL, validación y pruebas.',
      enlaces: [{ href: '#', label: 'Código' }],
      etiquetas: ['Spring Boot', 'PostgreSQL', 'Docker']
    },
    {
      nombre: 'API de Catálogo',
      descripcion: 'Servicio REST para gestión de productos con cache y paginación eficiente.',
      enlaces: [{ href: '#', label: 'Código' }],
      etiquetas: ['Java', 'Spring Data', 'Redis']
    },
  ]
  return (
    <section id="proyectos" className="border-t border-neutral-800">
      <div className="container-pro py-12 md:py-16">
        <SectionTitle>Proyectos</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.article key={p.nombre} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card p-5">
              <h3 className="font-medium mb-2 inline-flex items-center gap-2"><Code2 className="size-4"/>{p.nombre}</h3>
              <p className="text-sm text-neutral-300 mb-3">{p.descripcion}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.etiquetas.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 text-sm">
                {p.enlaces.map((e) => (
                  <a key={e.label} href={e.href} className="text-violet-400 hover:text-violet-300">{e.label}</a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Habilidades() {
  const skills = {
    Backend: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'REST', 'Kafka/RabbitMQ'],
    Infraestructura: ['Docker', 'Kubernetes', 'CI/CD', 'Kibana', 'Datadog'],
    BD: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis'],
    Testing: ['JUnit', 'Testcontainers', 'MockMVC'],
  }
  return (
    <section id="habilidades" className="border-t border-neutral-800">
      <div className="container-pro py-12 md:py-16">
        <SectionTitle>Habilidades</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([cat, list], idx) => (
            <motion.div key={cat} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
              <p className="mb-3 text-sm uppercase tracking-widest text-neutral-400">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="chip">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contacto() {
  return (
    <section id="contacto" className="border-t border-neutral-800">
      <div className="container-pro py-12 md:py-16">
        <SectionTitle>Contacto</SectionTitle>
        <div className="card p-6">
          <p className="text-neutral-300 mb-4">¿Tienes un proyecto o una vacante? Me encantará conversar.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="mailto:jeissonsantiagocortes@gmail.com" className="px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-500 transition-colors text-center">Escríbeme</a>
            <a href="https://linkedin.com/in/jeisson-cortes-0ba9611b9" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-neutral-700 hover:border-neutral-500 transition-colors text-center">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Habilidades />
      <Contacto />
      <footer className="border-t border-neutral-800">
        <div className="container-pro py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} — Hecho con  AI , React + Tailwind
        </div>
      </footer>
    </div>
  )
}
