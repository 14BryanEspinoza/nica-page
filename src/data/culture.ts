import leyenda from "@assets/culture/leyenda.png";
import gueguense from "@assets/culture/gueguense.png";
import musica from "@assets/culture/musica.png";
import gastronomia from "@assets/culture/gastronomia.png";
import artesania from "@assets/culture/artesanias.png";
import bailes from "@assets/culture/bailes.png";

interface Props {
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt?: string;
}

export const culture: Props[] = [
  {
    title: "Leyendas",
    description:
      "El imaginario popular nicaragüense está lleno de historias fascinantes que se han transmitido de generación en generación. Figuras como el Carca Nagua, La Cegua, El Cadejo y la Procesión de las Ánimas mezclan creencias indígenas y coloniales para advertir, castigar o explicar lo que la razón no alcanza.",
    image: leyenda,
    imageAlt:
      "Portada ilustrada del libro Cuentos y Mitos de Nicaragua con dibujos para colorear del Carca Nagua, La Cegua, El Cadejo y la Procesión de las Ánimas",
  },
  {
    title: "El Güegüense",
    description:
      "Obra de teatro satírica que combina música, danza y diálogo en español y náhuatl. Es Patrimonio Cultural Inmaterial de la Humanidad según la UNESCO. Se presenta durante la Fiesta de San Sebastián en Diriamba, donde actores vestidos con máscaras coloridas representan la resistencia indígena contra la colonización española a través del humor y la ironía.",
    image: gueguense,
    imageAlt:
      "Actores enmascarados con trajes y sombreros tradicionales actuando en una calle durante la fiesta de San Sebastián en Diriamba",
  },
  {
    title: "Música",
    description:
      "La música de Nicaragua refleja su diversidad cultural, desde el Pacífico hasta el Caribe. En la región central y pacífica predominan el son nica, la polca y la parranda con acordeón, guitarra y marimba, mientras en la Costa Atlántica suenan el calipso, el reggae y el tambor, herencia afrocaribeña.",
    image: musica,
    imageAlt:
      "Músico tocando el acordeón y cantando en un escenario iluminado, acompañado por un guitarrista de fondo",
  },
  {
    title: "Gastronomía",
    description:
      "La cocina nicaragüense es una expresión cultural que cuenta la historia de fusiones entre pueblos indígenas, españoles y afrocaribeños. Del gallo pinto al nacatamal y el rondón, cada plato se cocina con ingredientes locales y se sirve tradicionalmente sobre hoja de plátano.",
    image: gastronomia,
    imageAlt:
      "Comida nicaragüense servida sobre hoja de plátano: carne asada, arroz, plátano frito y soperos con salsas y encurtidos",
  },
  {
    title: "Artesanías",
    description:
      "Las artesanías nicaragüenses son el reflejo de siglos de tradición y habilidad artesanal. Cerámica pintada a mano, talla en madera y jícaras, textiles y fibras tejidas se elaboran en talleres familiares que mantienen vivos oficios heredados de generación en generación.",
    image: artesania,
    imageAlt:
      "Jarrones, botellas y cántaros de cerámica pintada a mano en colores azul, verde y naranja exhibidos en escalones",
  },
  {
    title: "Bailes Típicos",
    description:
      "Nicaragua tiene una rica tradición de bailes folclóricos que varían según la región del país. Destacan el Palo de Mayo de la Costa Atlántica, el Son Nica con sus estrofas improvisadas y la Gigantona, sátira popular que se baila junto al Güegüense en las fiestas de Diriamba.",
    image: bailes,
    imageAlt:
      "Dos bailarinas con vestidos tradicionales verde y rosa, flores en el pelo y faldas levantadas al bailar al aire libre",
  },
];
