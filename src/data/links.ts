interface LinksProps {
  url: string;
  label?: string;
  icon?: string;
}

export const linkNavbar: LinksProps[] = [
  { url: import.meta.env.BASE_URL, label: "Inicio", icon: "lucide:house" },
  {
    url: import.meta.env.BASE_URL + "tourism/",
    label: "Turismo",
    icon: "lucide:plane-takeoff",
  },
  {
    url: import.meta.env.BASE_URL + "gastronomy/",
    label: "Gastronomía",
    icon: "lucide:drumstick",
  },
  {
    url: import.meta.env.BASE_URL + "history/",
    label: "Historia",
    icon: "lucide:landmark",
  },
  {
    url: import.meta.env.BASE_URL + "culture/",
    label: "Cultura",
    icon: "lucide:guitar",
  },
  {
    url: import.meta.env.BASE_URL + "nature/",
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
