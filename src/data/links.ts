interface LinksProps {
  url: string;
  label?: string;
  icon?: string;
}

export const linkNavbar: LinksProps[] = [
  { url: "/nica-page/", label: "Inicio", icon: "lucide:house" },
  {
    url: "/nica-page/tourism/",
    label: "Turismo",
    icon: "lucide:plane-takeoff",
  },
  {
    url: "/nica-page/gastronomy/",
    label: "Gastronomía",
    icon: "lucide:drumstick",
  },
  {
    url: "/nica-page/history/",
    label: "Historia",
    icon: "lucide:landmark",
  },
  {
    url: "/nica-page/culture/",
    label: "Cultura",
    icon: "lucide:guitar",
  },
  {
    url: "/nica-page/nature/",
    label: "Naturaleza",
    icon: "lucide:leaf",
  },
];

export const socialNetworks: LinksProps[] = [
  {
    url: "https://www.linkedin.com/in/14bryanespinoza",
    icon: "simple-icons:linkedin",
  },
  {
    url: "https://github.com/14bryanespinoza",
    icon: "simple-icons:github",
  },
  {
    url: "https://www.facebook.com/14bryanespinoza",
    icon: "simple-icons:facebook",
  },
  {
    url: "https://twitter.com/14bryanespinoza",
    icon: "simple-icons:x",
  },
];

export const linkOthers: LinksProps[] = [
  { url: "#", label: "Términos" },
  { url: "#", label: "Privacidad" },
  { url: "#", label: "Cookies" },
];
