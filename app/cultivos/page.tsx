import Link from "next/link"
import { ArrowLeft, Sprout, Calendar, Droplets, Bug, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CultivosPage() {
  const cultivos = [
    {
      id: 1,
      nombre: "Maíz",
      categoria: "Cereales",
      imagen: "/endless-cornfield.png",
      descripcion: "Cultivo de cereal fundamental en la región Caribe",
    },
    {
      id: 2,
      nombre: "Yuca",
      categoria: "Tubérculos",
      imagen: "/cassava-plant.jpg",
      descripcion: "Tubérculo resistente ideal para clima tropical",
    },
    {
      id: 3,
      nombre: "Plátano",
      categoria: "Plátano y Banano",
      imagen: "/plantain-farm.jpg",
      descripcion: "Cultivo perenne de alta demanda en la región",
    },
    {
      id: 4,
      nombre: "Arroz",
      categoria: "Cereales",
      imagen: "/lush-rice-paddy.png",
      descripcion: "Cereal de importancia económica en zonas inundables",
    },
  ]

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
          <h1 className="text-xl font-bold text-foreground">Información de Cultivos</h1>
        </div>
      </header>

      <div className="container px-4 py-8">
        {/* Categories */}
        <Tabs defaultValue="todos" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 h-auto">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="cereales">Cereales</TabsTrigger>
            <TabsTrigger value="tuberculos">Tubérculos</TabsTrigger>
            <TabsTrigger value="platano">Plátano</TabsTrigger>
            <TabsTrigger value="algodon">Algodón</TabsTrigger>
            <TabsTrigger value="frutales">Frutales</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultivos.map((cultivo) => (
                <Link key={cultivo.id} href={`/cultivos/${cultivo.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all h-full">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <img
                        src={cultivo.imagen || "/placeholder.svg"}
                        alt={cultivo.nombre}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{cultivo.nombre}</CardTitle>
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {cultivo.categoria}
                        </span>
                      </div>
                      <CardDescription className="text-base">{cultivo.descripcion}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full bg-transparent">
                        Ver Información Completa
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Crop Detail Example */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Sprout className="h-6 w-6 text-primary" />
              Cultivo Destacado: Maíz
            </CardTitle>
            <CardDescription>Información técnica completa para el cultivo de maíz</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Siembra</h3>
                </div>
                <p className="text-sm text-muted-foreground">Abril - Mayo</p>
                <p className="text-sm text-muted-foreground">Septiembre - Octubre</p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-foreground">Riego</h3>
                </div>
                <p className="text-sm text-muted-foreground">Moderado</p>
                <p className="text-sm text-muted-foreground">600-800mm/ciclo</p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <Bug className="h-5 w-5 text-red-600" />
                  <h3 className="font-semibold text-foreground">Plagas Comunes</h3>
                </div>
                <p className="text-sm text-muted-foreground">Gusano cogollero</p>
                <p className="text-sm text-muted-foreground">Barrenador del tallo</p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-foreground">Cosecha</h3>
                </div>
                <p className="text-sm text-muted-foreground">90-120 días</p>
                <p className="text-sm text-muted-foreground">3-5 ton/hectárea</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-foreground">Preparación del Suelo</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  El suelo debe estar bien drenado y con pH entre 5.5 y 7.0. Se recomienda realizar análisis de suelo
                  antes de la siembra para determinar necesidades de fertilización.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-foreground">Variedades Recomendadas</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>ICA V-305: Alta resistencia a sequía</li>
                  <li>Pioneer 30F35: Alto rendimiento</li>
                  <li>Dekalb 7088: Resistente a enfermedades</li>
                </ul>
              </div>

              <Link href="/precios">
                <Button className="mt-4">Ver Precios Actuales del Maíz</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
