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
      name: "motor_hp",
      title: "Motor (HP)",
      type: "number",
    },
  ],
};
