import Link from "next/link"
import { ArrowLeft, TrendingUp, TrendingDown, Filter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PreciosPage() {
  const productos = [
    { id: 1, nombre: "Maíz", precio: 1200, unidad: "kg", cambio: 5, categoria: "Cereales", ubicacion: "Barranquilla" },
    { id: 2, nombre: "Arroz", precio: 2100, unidad: "kg", cambio: 0, categoria: "Cereales", ubicacion: "Montería" },
    { id: 3, nombre: "Yuca", precio: 800, unidad: "kg", cambio: -2, categoria: "Tubérculos", ubicacion: "Sincelejo" },
    { id: 4, nombre: "Ñame", precio: 1500, unidad: "kg", cambio: 3, categoria: "Tubérculos", ubicacion: "Cartagena" },
    {
      id: 5,
      nombre: "Plátano",
      precio: 1500,
      unidad: "racimo",
      cambio: 3,
      categoria: "Plátano y Banano",
      ubicacion: "Santa Marta",
    },
    {
      id: 6,
      nombre: "Banano",
      precio: 2000,
      unidad: "caja",
      cambio: -1,
      categoria: "Plátano y Banano",
      ubicacion: "Barranquilla",
    },
    { id: 7, nombre: "Algodón", precio: 3500, unidad: "kg", cambio: 7, categoria: "Algodón", ubicacion: "Valledupar" },
    { id: 8, nombre: "Mango", precio: 1800, unidad: "kg", cambio: 2, categoria: "Frutales", ubicacion: "Riohacha" },
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
          <h1 className="text-xl font-bold text-foreground">Precios de Mercado</h1>
        </div>
      </header>

      <div className="container px-4 py-8">
        {/* Filters Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtrar Precios
            </CardTitle>
            <CardDescription>Encuentra los precios de tu cultivo y ubicación</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Buscar producto</label>
                <Input placeholder="Ej: Maíz, Yuca..." />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Categoría</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las categorías" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las categorías</SelectItem>
                    <SelectItem value="cereales">Cereales</SelectItem>
                    <SelectItem value="tuberculos">Tubérculos</SelectItem>
                    <SelectItem value="platano">Plátano y Banano</SelectItem>
                    <SelectItem value="algodon">Algodón</SelectItem>
                    <SelectItem value="frutales">Frutales</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Ubicación</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las ubicaciones" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las ubicaciones</SelectItem>
                    <SelectItem value="barranquilla">Barranquilla</SelectItem>
                    <SelectItem value="cartagena">Cartagena</SelectItem>
                    <SelectItem value="monteria">Montería</SelectItem>
                    <SelectItem value="sincelejo">Sincelejo</SelectItem>
                    <SelectItem value="valledupar">Valledupar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <Card key={producto.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{producto.nombre}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3" />
                      {producto.ubicacion}
                    </CardDescription>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                    {producto.categoria}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-foreground">${producto.precio.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Por {producto.unidad}</p>
                  </div>
                  <div className="text-right">
                    {producto.cambio !== 0 && (
                      <div
                        className={`flex items-center gap-1 ${producto.cambio > 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {producto.cambio > 0 ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        <span className="font-semibold">{Math.abs(producto.cambio)}%</span>
                      </div>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">vs. semana anterior</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Nota:</strong> Los precios mostrados son referenciales y pueden variar
              según el mercado local. Última actualización: Hoy, 10:30 AM
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
