import { createFileRoute } from "@tanstack/react-router";
import {
  BedDouble,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Coffee,
  Flame,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  ShieldCheck,
  Sparkles,
  Tv,
  Waves,
  Wifi,
} from "lucide-react";
import heroImage from "../assets/posada-clay-hero.jpg";

const roomRates = [
  { room: "Individual", guests: "1 huésped", price: 25 },
  { room: "Matrimonial", guests: "2 huéspedes", price: 35 },
  { room: "Doble", guests: "2 huéspedes", price: 35 },
  { room: "Triple", guests: "3 huéspedes", price: 40 },
  { room: "Cuádruple", guests: "4 huéspedes", price: 50 },
  { room: "Quíntuple", guests: "5 huéspedes", price: 55 },
  { room: "Séxtuple", guests: "6 huéspedes", price: 65 },
];

const amenities = [
  { icon: BedDouble, label: "Baño privado" },
  { icon: Waves, label: "Agua caliente" },
  { icon: Tv, label: "TV por cable" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: CarFront, label: "Estacionamiento" },
  { icon: Coffee, label: "Restaurante y café" },
  { icon: ShieldCheck, label: "Ambiente sin humo" },
  { icon: PawPrint, label: "Mascotas pequeñas" },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Posada Luz Caraballo | Hospedaje en Mérida" },
      {
        name: "description",
        content:
          "Hospedaje tradicional en el casco central de Mérida. Habitaciones con baño privado, Wi-Fi, estacionamiento y atención 24 horas.",
      },
      { property: "og:title", content: "Posada Luz Caraballo | Mérida" },
      {
        property: "og:description",
        content: "Tradición y confort en el corazón de Mérida desde 1987.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          name: "Posada Turística Luz Caraballo",
          description: "Posada tradicional merideña fundada en 1987.",
          telephone: ["+58 274-2525441", "+58 424-7081640"],
          email: "posadaluzcaraballo@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. 2 Lora, N.º 13-80, frente a la Plaza Sucre (Milla)",
            addressLocality: "Mérida",
            addressCountry: "VE",
          },
          priceRange: "$25–$65 USD",
          petsAllowed: true,
          smokingAllowed: false,
        }),
      },
    ],
  }),
});

function BrandMark() {
  return (
    <a href="#inicio" className="brand-mark" aria-label="Posada Luz Caraballo, inicio">
      <span className="brand-sun" aria-hidden="true">LC</span>
      <span>
        <strong>Posada Luz Caraballo</strong>
        <small>Mérida · Venezuela</small>
      </span>
    </a>
  );
}

function Index() {
  const whatsapp =
    "https://wa.me/584247081640?text=Hola%2C%20quisiera%20consultar%20disponibilidad%20en%20Posada%20Luz%20Caraballo.";

  return (
    <main id="inicio" className="site-shell">
      <header className="site-header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#historia">Nuestra historia</a>
          <a href="#habitaciones">Habitaciones</a>
          <a href="#servicios">Servicios</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>
        <a className="clay-button clay-button-small" href={whatsapp} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> Reservar
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={heroImage}
          alt="Representación artesanal en arcilla de la Posada Luz Caraballo frente a las montañas de Mérida"
          width={1536}
          height={1024}
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={16} /> Recibiendo viajeros desde 1987</p>
          <h1 id="hero-title">Un hogar merideño<br />en el corazón de la ciudad</h1>
          <p className="hero-lead">
            Tradición, descanso y una atención cercana en el casco central de Mérida.
          </p>
          <div className="hero-actions">
            <a className="clay-button" href={whatsapp} target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Consultar disponibilidad
            </a>
            <a className="text-link" href="#habitaciones">
              Ver habitaciones <ChevronDown size={18} />
            </a>
          </div>
        </div>
        <div className="hero-stamp" aria-label="Atención las 24 horas">
          <Clock3 size={24} />
          <span><strong>24 h</strong> atención</span>
        </div>
      </section>

      <section id="historia" className="story-section page-section">
        <div className="section-kicker">Nuestra historia</div>
        <div className="story-grid">
          <div>
            <h2>Tradición que se siente como en casa.</h2>
          </div>
          <div className="story-copy">
            <p>
              Desde 1987, la Posada Luz Caraballo forma parte de la memoria turística de Mérida.
              Su ambiente rústico, sus paredes de ladrillo y su cálida chimenea evocan el confort
              de una casa merideña tradicional.
            </p>
            <p>
              Nuestro nombre celebra la cultura local y el poema <em>“Luz Caraballo”</em> de Andrés
              Eloy Blanco, un relato profundamente unido al paisaje de los Andes venezolanos.
            </p>
          </div>
        </div>
        <div className="story-ribbon" aria-label="Características de la posada">
          <span><Flame size={21} /> Ambiente acogedor</span>
          <span><MapPin size={21} /> Casco central</span>
          <span><Clock3 size={21} /> Atención 24 horas</span>
        </div>
      </section>

      <section id="habitaciones" className="rooms-section page-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">Tarifas 2026</div>
            <h2>Una habitación para cada viaje</h2>
          </div>
          <p>Precios por noche en dólares estadounidenses. Consulta disponibilidad para tus fechas.</p>
        </div>
        <div className="rate-board">
          {roomRates.map((rate, index) => (
            <article className={index === 6 ? "rate-row rate-row-featured" : "rate-row"} key={rate.room}>
              <span className="rate-number">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{rate.room}</h3><p>{rate.guests}</p></div>
              <strong>${rate.price}<small> USD</small></strong>
            </article>
          ))}
        </div>
        <div className="center-action">
          <a className="clay-button" href={whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={20} /> Consultar una habitación
          </a>
        </div>
      </section>

      <section id="servicios" className="amenities-section page-section">
        <div className="section-kicker">Comodidades</div>
        <h2>Todo lo necesario para una estancia tranquila.</h2>
        <div className="amenities-grid">
          {amenities.map(({ icon: Icon, label }) => (
            <div className="amenity" key={label}>
              <span className="amenity-icon"><Icon size={26} strokeWidth={1.8} /></span>
              <span>{label}</span>
              <Check size={17} className="amenity-check" />
            </div>
          ))}
        </div>
        <p className="amenities-note">Las habitaciones están equipadas para brindar comodidad a viajeros solos, parejas, familias y grupos.</p>
      </section>

      <section id="ubicacion" className="location-section page-section">
        <div className="location-panel">
          <div className="section-kicker">Encuéntranos</div>
          <h2>A pasos de la Plaza de Milla.</h2>
          <p className="location-address">
            Av. 2 Lora, N.º 13-80, frente a la Plaza Sucre (Milla), Mérida, Venezuela.
          </p>
          <p>
            Una ubicación estratégica para descubrir los principales puntos turísticos de la ciudad.
          </p>
          <a
            className="clay-button clay-button-dark"
            href="https://www.google.com/maps/search/?api=1&query=Av.+2+Lora+13-80+Plaza+Sucre+Milla+Merida+Venezuela"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={20} /> Abrir en Google Maps
          </a>
        </div>
        <div className="contact-panel">
          <p className="contact-label">Reservas y contacto</p>
          <a href="tel:+582742525441"><Phone size={20} /> (0274) 252-5441</a>
          <a href="tel:+584247081640"><Phone size={20} /> 0424-7081640</a>
          <a href="mailto:posadaluzcaraballo@gmail.com"><Mail size={20} /> posadaluzcaraballo@gmail.com</a>
          <a href="https://www.instagram.com/posada_luzcaraballo/" target="_blank" rel="noreferrer"><Instagram size={20} /> @posada_luzcaraballo</a>
          <div className="check-times">
            <div><small>Entrada</small><strong>16:00–23:00</strong></div>
            <div><small>Salida</small><strong>06:30–09:00</strong></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <BrandMark />
        <p>Tradición y confort en el corazón de Mérida.</p>
        <a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Escríbenos por WhatsApp</a>
      </footer>
    </main>
  );
}