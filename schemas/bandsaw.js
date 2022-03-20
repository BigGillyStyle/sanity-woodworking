export default {
  name: "bandsaw",
  title: "Bandsaw",
  type: "document",
  fields: [
    {
      name: "manufacturer",
      title: "Manufacturer",
      type: "reference",
      to: [{ type: "manufacturer" }],
    },
    {
      name: "model",
      title: "Model",
      type: "string",
    },
    {
      name: "motorHp",
      title: "Motor (HP)",
      type: "number",
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
  ],
};
