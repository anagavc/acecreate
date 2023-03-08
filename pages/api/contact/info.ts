import nc from "next-connect";
import axios from "axios";
import { projectId, dataset } from "../../../lib/sanity.client";
const handler = nc();
handler.post(async (req, res) => {
  const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN;

  const createMutations = [
    {
      create: {
        _type: "contact",
        email: req.body.data.emailAddress,
        subject: req.body.data.subject,
        message: req.body.data.message,
      },
    },
  ];
  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v2022-07-02/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );
  const contactId = data.results[0].id;
  const contact = {
    email: req.body.data.email,
    subject: req.body.data.subject,
    message: req.body.data.message,
    contactId: contactId,
  };
  res.send({ ...contact });
});

export default handler;
