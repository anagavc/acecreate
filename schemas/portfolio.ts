export default {
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "string",
    },

    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
};
