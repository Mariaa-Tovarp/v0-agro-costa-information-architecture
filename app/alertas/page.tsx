import Link from "next/link"
import { ArrowLeft, CloudRain, AlertTriangle, Wind, Sun, Thermometer, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertasPage() {
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
          <h1 className="text-xl font-bold text-foreground">Alertas Climáticas</h1>
        </div>
      </header>

      <div className="container px-4 py-8">
        {/* Active Alerts */}
        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold text-foreground">Alertas Activas</h2>

          <Alert variant="destructive">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="text-lg">Alerta de Lluvias Intensas</AlertTitle>
            <AlertDescription className="text-base">
              Se esperan lluvias fuertes en Barranquilla y municipios cercanos durante las próximas 24 horas.
              Recomendamos proteger cultivos sensibles y revisar sistemas de drenaje.
            </AlertDescription>
          </Alert>

          <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-950 dark:border-orange-800">
            <Wind className="h-5 w-5 text-orange-600" />
            <AlertTitle className="text-lg text-orange-900 dark:text-orange-100">Vientos Fuertes</AlertTitle>
            <AlertDescription className="text-base text-orange-800 dark:text-orange-200">
              Vientos de hasta 45 km/h esperados en la región de La Guajira. Asegure estructuras y proteja cultivos
              altos.
            </AlertDescription>
          </Alert>
        </div>

        {/* Weather Forecast */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CloudRain className="h-5 w-5 text-blue-600" />
              Pronóstico Semanal
            </CardTitle>
            <CardDescription>Barranquilla, Atlántico</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { dia: "Lun", temp: "32°", condicion: "Soleado", icon: Sun, lluvia: "10%" },
                { dia: "Mar", temp: "31°", condicion: "Parcial", icon: CloudRain, lluvia: "30%" },
                { dia: "Mié", temp: "30°", condicion: "Lluvioso", icon: CloudRain, lluvia: "80%" },
                { dia: "Jue", temp: "29°", condicion: "Lluvioso", icon: CloudRain, lluvia: "70%" },
                { dia: "Vie", temp: "31°", condicion: "Parcial", icon: CloudRain, lluvia: "40%" },
                { dia: "Sáb", temp: "32°", condicion: "Soleado", icon: Sun, lluvia: "15%" },
                { dia: "Dom", temp: "33°", condicion: "Soleado", icon: Sun, lluvia: "5%" },
              ].map((dia, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/50 text-center">
                  <p className="font-semibold mb-2 text-foreground">{dia.dia}</p>
                  <dia.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-2xl font-bold text-foreground">{dia.temp}</p>
                  <p className="text-xs text-muted-foreground mt-1">{dia.condicion}</p>
                  <p className="text-xs text-blue-600 mt-1">{dia.lluvia}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regional Weather */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { ciudad: "Barranquilla", temp: 32, humedad: 75, lluvia: 20 },
            { ciudad: "Cartagena", temp: 31, humedad: 80, lluvia: 35 },
            { ciudad: "Santa Marta", temp: 30, humedad: 78, lluvia: 25 },
            { ciudad: "Montería", temp: 33, humedad: 70, lluvia: 15 },
            { ciudad: "Valledupar", temp: 34, humedad: 65, lluvia: 10 },
            { ciudad: "Sincelejo", temp: 32, humedad: 72, lluvia: 30 },
          ].map((ciudad) => (
            <Card key={ciudad.ciudad}>
              <CardHeader>
                <CardTitle className="text-lg">{ciudad.ciudad}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      <span className="text-sm text-muted-foreground">Temperatura</span>
                    </div>
                    <span className="font-semibold text-foreground">{ciudad.temp}°C</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-muted-foreground">Humedad</span>
                    </div>
                    <span className="font-semibold text-foreground">{ciudad.humedad}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CloudRain className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-muted-foreground">Prob. Lluvia</span>
                    </div>
                    <span className="font-semibold text-foreground">{ciudad.lluvia}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle>Recomendaciones para esta Semana</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Proteja cultivos sensibles al exceso de agua durante los días de lluvia (Mié-Jue)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Aproveche los días soleados (Lun, Sáb, Dom) para aplicaciones de fertilizantes y pesticidas</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Revise sistemas de drenaje antes del miércoles</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Monitoree plagas que proliferan con humedad alta después de las lluvias</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
