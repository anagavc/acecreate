export default {
  name: "reviews",
  title: "Reviews",
  type: "document",
  fields: [
    {
      name: "reviewer",
      title: "Reviewer",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "string",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "reviewer",
        maxlength: 90,
      },
    },
  ],
};
