import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Corporate Text */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Surtrade y Co.</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Tenemos una sólida experiencia en comercio internacional, fuertemente enfocados en brindar soluciones
              integrales de importación para PYMEs argentinas y la región.
            </p>
          </div>

          {/* Quick Menu */}
          <div>
            <h4 className="font-semibold mb-4">Menú Rápido</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-accent transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/store" className="hover:text-accent transition-colors">
                  Tienda de Productos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="opacity-90">Ciudad de Córdoba, Argentina</span>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:mcarabajal@sur-trade.com" className="hover:text-accent transition-colors opacity-90">
                    mcarabajal@sur-trade.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href="mailto:jferreira@sur-trade.com" className="hover:text-accent transition-colors opacity-90">
                    jferreira@sur-trade.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Surtrade y Co. Todos los derechos reservados.</p>
          <a
            href="https://wa.me/3512075102?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20soluciones%20y%20desarrollos%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            Created by <span className="text-secondary font-medium">Gaitán Javier Emanuel</span> -{" "}
            <span className="text-primary font-medium">Tab Soluciones</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
