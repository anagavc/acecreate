import nc from "next-connect";
import axios from "axios";
import { projectId, dataset } from "../../../lib/sanity.client";
const handler = nc();
handler.post(async (req, res) => {
  const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN;

  const createMutations = [
    {
      create: {
        _type: "subscription",
        email: req.body.subscriberEmail,
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
  const enquiryId = data.results[0].id;
  const enquiry = {
    email: req.body.subscriberEmail,
    enquiryId: enquiryId,
  };
  res.send({ ...enquiry });
});

export default handler;
