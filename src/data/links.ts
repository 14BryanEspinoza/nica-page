interface LinksProps {
  url: string;
  label?: string;
  icon?: string;
}

export const linkNavbar: LinksProps[] = [
  { url: "/nica-page/", label: "Home", icon: "lucide:house" },
  {
    url: "/nica-page/tourism/",
    label: "Tourism",
    icon: "lucide:plane-takeoff",
  },
  {
    url: "/nica-page/gastronomy/",
    label: "Gastronomy",
    icon: "lucide:drumstick",
  },
  {
    url: "/nica-page/history/",
    label: "History",
    icon: "lucide:landmark",
  },
  {
    url: "/nica-page/culture/",
    label: "Culture",
    icon: "lucide:guitar",
  },
  {
    url: "/nica-page/nature/",
    label: "Nature",
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
  { url: "#", label: "Terms" },
  { url: "#", label: "Privacy" },
  { url: "#", label: "Cookies" },
];
