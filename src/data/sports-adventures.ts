import type { ImageMetadata } from "astro";
import buceo from "@assets/adventure/buceo.png";
import canyoning from "@assets/adventure/canyoning.png";
import kayak from "@assets/adventure/kayak.png";
import sandboarding from "@assets/adventure/sandboarding.png";
import senderismo from "@assets/adventure/senderismo.png";
import surf from "@assets/adventure/surf.png";

interface Props {
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt?: string;
}

export const sportsAdventures: Props[] = [
  {
    title: "Surf",
    description:
      "El Pacífico nicaragüense ofrece olas para todos los niveles, con temporada de marzo a noviembre. Popoyo y Playa Hermosa, en Rivas, son spots consagrados, mientras que Playa Maderas y Remanso, cerca de San Juan del Sur, atraen a escuelas de surf y surfistas de todos los niveles.",
    image: surf,
    imageAlt: "Surfista girando sobre una ola verde con un estallido de espuma",
  },
  {
    title: "Sandboarding",
    description:
      "Cerro Negro, cerca de León, es uno de los volcanes más jóvenes y activos de Centroamérica y el escenario clásico del sandboarding. Se sube a pie por la pendiente de arena y ceniza negra y se baja en tabla, con vista de León y de la cadena volcánica del país.",
    image: sandboarding,
    imageAlt:
      "Persona deslizándose en tabla por la ladera de ceniza negra de un volcán",
  },
  {
    title: "Senderismo",
    description:
      "Nicaragua ofrece rutas de distinta exigencia. El ascenso a los volcanes Concepción y Maderas en Ometepe atraviesa bosques húmedos, y el Volcán Mombacho guarda un bosque nuboso sobre Granada. En Estelí, la Reserva Miraflor suma senderos entre bosques y avifauna.",
    image: senderismo,
    imageAlt:
      "Grupo de caminantes en un sendero con un cono volcánico negro al fondo",
  },
  {
    title: "Kayak y Navegación",
    description:
      "Las Isletas de Granada, más de 300 islotes formados por desprendimientos del Volcán Mombacho, se recorren en kayak sobre el Gran Lago de Nicaragua (Cocibolca). En Ometepe, el río Istián serpentea entre manglares y aves, y la Laguna de Apoyo ofrece aguas tranquilas.",
    image: kayak,
    imageAlt:
      "Kayakista remando hacia un volcán que emerge del lago bajo un cielo nublado",
  },
  {
    title: "Canyoning y Cascadas",
    description:
      "La Cascada San Ramón, en Ometepe, se alcanza tras una caminata y cae desde el Volcán Concepción. Cerca de Managua, la reserva Chocoyero–El Brujo reúne cascadas y el vuelo de los chocoyos, mientras que Ojo de Agua ofrece un manantial termal para descansar.",
    image: canyoning,
    imageAlt:
      "Nadadores con chalecos entre paredes rocosas de un cañón estrecho",
  },
  {
    title: "Buceo",
    description:
      "El Caribe nicaragüense concentra los mejores sitios de buceo: Corn Island y Little Corn Island, con arrecife de coral y el Parque Marino, y la Isla de los Pájaros. En el Pacífico, San Juan del Sur también ofrece inmersiones. Las aguas cálidas permiten ver vida marina tropical.",
    image: buceo,
    imageAlt: "Buzo explorando un arrecife de coral rodeado de peces naranjas",
  },
];
