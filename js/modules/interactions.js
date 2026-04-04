// Events for Items TimeLine
export function initTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Cerrar otros items abiertos (opcional - remove para permitir múltiples abiertos)
      // timelineItems.forEach(i => {
      //   if (i !== item) i.classList.remove('active');
      // });
      item.classList.toggle("active");
    });

    // Soporte para teclado
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        item.classList.toggle("active");
      }
    });
  });
}

// Toggle for Food List
export function initFoodList() {
  const foodItems = document.querySelectorAll(".food-item");

  foodItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // No toggle si se hace click en un enlace dentro
      if (e.target.tagName === "A") return;
      item.classList.toggle("active");
    });
  });
}

// Toggle for Nature List
export function initNatureList() {
  const natureCategories = document.querySelectorAll(".nature-category");

  natureCategories.forEach((category) => {
    category.addEventListener("click", (e) => {
      if (e.target.tagName === "A") return;
      category.classList.toggle("active");
    });
  });
}

// Modal For Culture
export const cultureData = {
  gueguense: {
    title: "El Güegüense",
    content: `
      <p>Obra de teatro satírica que combina música, danza y diálogo en español y náhuatl. Es Patrimonio Cultural Inmaterial de la Humanidad según la UNESCO.</p>
      <p>Se presenta durante la Fiesta de San Sebastián en Diriamba, donde actores vestidos con máscaras coloridas representan la resistencia indígena contra la colonización española a través del humor y la ironía.</p>
      <h4>Datos destacados:</h4>
      <ul>
        <li>Reconocida por la UNESCO en 2005</li>
        <li>Data del siglo XVI o XVII</li>
        <li>Mezcla elementos nahuas y españoles</li>
        <li>Se presenta en enero durante San Sebastián</li>
      </ul>
    `,
  },
  bailes: {
    title: "Bailes Típicos",
    content: `
      <p>Nicaragua tiene una rica tradición de bailes folclóricos que varían según la región del país.</p>
      <h4>Principales bailes:</h4>
      <ul>
        <li><strong>El Güegüense:</strong> Danza satírica de Diriamba</li>
        <li><strong>Palo de Mayo:</strong> Baile afrocaribeño de la Costa</li>
        <li><strong>Las Inditas:</strong> Danza de la zona central</li>
        <li><strong>El Toro Huaco:</strong> Baile mascarado de Masaya</li>
        <li><strong>El Chinegón:</strong> Danza de Jinotepe</li>
      </ul>
      <p>Cada baile tiene vestimentas tradicionales, música propia y coreografías únicas que reflejan la historia y cultura de cada región.</p>
    `,
  },
  artesanias: {
    title: "Artesanías",
    content: `
      <p>Las artesanías nicaragüenses son el reflejo de siglos de tradición y habilidad artesanal.</p>
      <h4>Principales especialidades:</h4>
      <ul>
        <li><strong>Cerámica de San Juan de Oriente:</strong> Cerámica fina de tonos tierra</li>
        <li><strong>Textiles de Madriz:</strong> Hilos de colores vibrantes</li>
        <li><strong>Sombreros de Panamá:</strong> Toquilla de palma tejida</li>
        <li><strong>Bordados de Quezalguaque:</strong> Patrones florales únicos</li>
        <li><strong>Maderas talladas de San Juan del Sur:</strong> Tallas de animales marinos</li>
      </ul>
    `,
  },
  leyendas: {
    title: "Leyendas y Tradiciones",
    content: `
      <p>El imaginario popular nicaragüense está lleno de historias fascinantes que se han transmitido de generación en generación.</p>
      <h4>Leyendas populares:</h4>
      <ul>
        <li><strong>La Llorona del Lago:</strong> Mujer que llora buscando a sus hijos</li>
        <li><strong>La Cegueta de Granada:</strong> Espíritu que acecha en la catedral</li>
        <li><strong>El Cuentero de León:</strong> Cuentacuentos legendario</li>
        <li><strong>La Mona de Masaya:</strong> Historia de amor y tragedia</li>
        <li><strong>El espíritu de Zapaterra:</strong> Fantasma del viejo Managua</li>
      </ul>
    `,
  },
  musica: {
    title: "Música Folclórica",
    content: `
      <p>La música de Nicaragua refleja su diversidad cultural, desde el Pacífico hasta el Caribe.</p>
      <h4>Géneros principales:</h4>
      <ul>
        <li><strong>Son Nica:</strong> Música tradicional del Pacífico con marimba</li>
        <li><strong>Palo de Mayo:</strong> Ritmo afrocaribeño de la Costa</li>
        <li><strong>Marimba:</strong> Instrumento tradicional de la zona central</li>
        <li><strong>Reggae en español:</strong> Influencia moderna caribeña</li>
      </ul>
      <h4>Artistas destacados:</h4>
      <ul>
        <li>Carlos Mejía Godoy</li>
        <li>Luis Enrique Mejía Godoy</li>
        <li>Norma Helena Gadea</li>
      </ul>
    `,
  },
  gastronomia: {
    title: "Gastronomía como Cultura",
    content: `
      <p>La cocina nicaragüense es una expresión cultural que cuenta la historia de fusiones entre pueblos indígenas, españoles y afrocaribeños.</p>
      <h4>Platos emblemáticos:</h4>
      <ul>
        <li><strong>Gallo Pinto:</strong> El desayuno nacional</li>
        <li><strong>Nacatamal:</strong> El rey de los fines de semana</li>
        <li><strong>Vigorón:</strong> Comida rápida de Granada</li>
        <li><strong>Rondón:</strong> Sopa caribeña con coco</li>
        <li><strong>Indio Viejo:</strong> Guiso de maíz y carne</li>
      </ul>
      <p>La gastronomía se ha convertido en una parte fundamental de la identidad nicaragüense y una razón para visitar el país.</p>
    `,
  },
};

// Open Modal with Culture Data
export function openCultureModal(key) {
  const modal = document.getElementById("cultureModal");
  const data = cultureData[key];

  if (data && modal) {
    document.getElementById("cultureModalTitle").textContent = data.title;
    document.getElementById("cultureModalBody").innerHTML = data.content;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Close Modal
export function closeCultureModal() {
  const modal = document.getElementById("cultureModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Hacer functions globales para uso en onclick
if (typeof window !== "undefined") {
  window.openCultureModal = openCultureModal;
  window.closeCultureModal = closeCultureModal;
}

// Init All Interactions
export function initInteractions() {
  initTimeline();
  initFoodList();
  initNatureList();

  const modal = document.getElementById("cultureModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeCultureModal();
      }
    });
  }
}

// Export Interactions Functions
export default {
  initInteractions,
  initTimeline,
  initFoodList,
  initNatureList,
  openCultureModal,
  closeCultureModal,
  cultureData,
};
