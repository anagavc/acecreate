export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "icon",
      title: "Service icon",
      type: "string",
    },
    {
      name: "title",
      title: "Service title",
      type: "string",
    },
    {
      name: "description",
      title: "Service description",
      type: "string",
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxlength: 90,
      },
    },
  ],
};
