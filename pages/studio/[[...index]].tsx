import { NextStudio } from "next-sanity/studio";
import { NextStudioHead } from "next-sanity/studio/head";

import config from "../../sanity.config";

export default function StudioPage() {
  return (
    <>
      <NextStudioHead favicons={false} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://www.sanity.io/static/images/favicons/favicon-32x32.png"
      />
      <NextStudio config={config} />
    </>
  );
}
