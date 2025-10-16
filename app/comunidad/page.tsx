import Link from "next/link"
import { ArrowLeft, Users, MessageCircle, BookOpen, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function ComunidadPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center gap-4 px-4">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold text-foreground">Comunidad</h1>
        </div>
      </header>

      <div className="container px-4 py-8">
        {/* Community Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <CardTitle>Foro de Agricultores</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Comparte experiencias, haz preguntas y aprende de otros agricultores de la región
              </CardDescription>
              <Button className="w-full">Ir al Foro</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent text-accent-foreground">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle>Capacitaciones</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Accede a cursos, talleres y material educativo sobre técnicas agrícolas modernas
              </CardDescription>
              <Button className="w-full bg-transparent" variant="outline">
                Ver Cursos
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Asistencia Técnica</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base mb-4">
                Contacta con expertos agrónomos para resolver dudas específicas sobre tus cultivos
              </CardDescription>
              <Button className="w-full bg-transparent" variant="outline">
                Contactar Experto
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Discussions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Discusiones Recientes
            </CardTitle>
            <CardDescription>Conversaciones activas en la comunidad</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  autor: "Carlos Mendoza",
                  iniciales: "CM",
                  tema: "¿Cómo controlar el gusano cogollero en época de lluvias?",
                  respuestas: 12,
                  tiempo: "Hace 2 horas",
                  categoria: "Control de Plagas",
                },
                {
                  autor: "María Rodríguez",
                  iniciales: "MR",
                  tema: "Mejores variedades de yuca para suelos arenosos",
                  respuestas: 8,
                  tiempo: "Hace 5 horas",
                  categoria: "Cultivos",
                },
                {
                  autor: "José Pérez",
                  iniciales: "JP",
                  tema: "Recomendaciones para riego por goteo en plátano",
                  respuestas: 15,
                  tiempo: "Hace 1 día",
                  categoria: "Riego",
                },
                {
                  autor: "Ana Martínez",
                  iniciales: "AM",
                  tema: "¿Dónde conseguir semillas certificadas de maíz?",
                  respuestas: 6,
                  tiempo: "Hace 1 día",
                  categoria: "Insumos",
                },
              ].map((discusion, index) => (
                <div key={index} className="p-4 rounded-lg border hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="flex gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {discusion.iniciales}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{discusion.tema}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                          {discusion.categoria}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Por {discusion.autor} • {discusion.tiempo}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MessageCircle className="h-4 w-4" />
                        <span>{discusion.respuestas} respuestas</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              Ver Todas las Discusiones
            </Button>
          </CardContent>
        </Card>

        {/* Success Stories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Historias de Éxito
            </CardTitle>
            <CardDescription>Experiencias inspiradoras de agricultores de la región</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  nombre: "Pedro Gómez",
                  ubicacion: "Montería, Córdoba",
                  historia: "Aumenté mi producción de maíz en 40% usando técnicas de riego eficiente",
                  cultivo: "Maíz",
                },
                {
                  nombre: "Luisa Hernández",
                  ubicacion: "Sincelejo, Sucre",
                  historia: "Logré controlar plagas de forma orgánica y mejoré la calidad de mi yuca",
                  cultivo: "Yuca",
                },
              ].map((historia, index) => (
                <div key={index} className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {historia.nombre
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{historia.nombre}</p>
                      <p className="text-xs text-muted-foreground">{historia.ubicacion}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{historia.historia}</p>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground">
                    {historia.cultivo}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
