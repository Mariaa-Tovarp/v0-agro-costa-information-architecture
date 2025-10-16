import Link from "next/link"
import { Sprout, TrendingUp, CloudRain, Users, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">AgroCosta</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/precios" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Precios de Hoy
            </Link>
            <Link href="/cultivos" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Mis Cultivos
            </Link>
            <Link href="/alertas" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Alertas Climáticas
            </Link>
            <Link
              href="/comunidad"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Comunidad
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 text-foreground">
              Información agrícola para el Caribe colombiano
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8">
              Accede a precios de mercado, información de cultivos, alertas climáticas y conecta con otros agricultores
              de la región.
            </p>

            {/* Search Bar */}
            <div className="flex gap-2 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Buscar precios, cultivos, información..." className="pl-10 h-12 text-base" />
              </div>
              <Button size="lg" className="h-12 px-6">
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="container px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Acceso Rápido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/precios" className="group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Precios de Hoy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Consulta los precios actualizados de tus cultivos en el mercado local
                </CardDescription>
              </CardContent>
            </Card>
          </Link>

          <Link href="/cultivos" className="group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent text-accent-foreground">
                    <Sprout className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Mis Cultivos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Información técnica sobre siembra, cuidado y cosecha de tus cultivos
                </CardDescription>
              </CardContent>
            </Card>
          </Link>

          <Link href="/alertas" className="group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <CloudRain className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Alertas Climáticas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pronóstico del tiempo y alertas importantes para tu zona
                </CardDescription>
              </CardContent>
            </Card>
          </Link>

          <Link href="/comunidad" className="group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                    <Users className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">Comunidad</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Conecta con otros agricultores y comparte experiencias
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Dashboard Widgets */}
      <section className="container px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Tu Panel de Información</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Prices Widget */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Precios Actualizados
              </CardTitle>
              <CardDescription>Últimos precios del mercado local</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Maíz", price: "$1,200", unit: "kg", change: "+5%" },
                  { name: "Yuca", price: "$800", unit: "kg", change: "-2%" },
                  { name: "Plátano", price: "$1,500", unit: "racimo", change: "+3%" },
                  { name: "Arroz", price: "$2,100", unit: "kg", change: "0%" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Por {item.unit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">{item.price}</p>
                      <p
                        className={`text-sm ${item.change.startsWith("+") ? "text-green-600" : item.change.startsWith("-") ? "text-red-600" : "text-muted-foreground"}`}
                      >
                        {item.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/precios">
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Ver Todos los Precios
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Weather Alert Widget */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CloudRain className="h-5 w-5 text-blue-600" />
                Clima Hoy
              </CardTitle>
              <CardDescription>Barranquilla, Atlántico</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center py-4">
                  <p className="text-5xl font-bold text-foreground">32°C</p>
                  <p className="text-muted-foreground mt-2">Parcialmente nublado</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Humedad</span>
                    <span className="font-medium text-foreground">75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Viento</span>
                    <span className="font-medium text-foreground">15 km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lluvia</span>
                    <span className="font-medium text-foreground">20%</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-900 dark:text-blue-100">
                    <strong>Alerta:</strong> Posibles lluvias en la tarde
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-12">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">AgroCosta</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Plataforma de información agrícola para el Caribe colombiano
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Navegación</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/precios" className="text-muted-foreground hover:text-primary">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/cultivos" className="text-muted-foreground hover:text-primary">
                    Cultivos
                  </Link>
                </li>
                <li>
                  <Link href="/alertas" className="text-muted-foreground hover:text-primary">
                    Alertas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Recursos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/ayuda" className="text-muted-foreground hover:text-primary">
                    Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/capacitacion" className="text-muted-foreground hover:text-primary">
                    Capacitación
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-muted-foreground hover:text-primary">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacidad" className="text-muted-foreground hover:text-primary">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/terminos" className="text-muted-foreground hover:text-primary">
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 AgroCosta. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
