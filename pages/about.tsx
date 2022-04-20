import React from "react";
import { TeliaHeading, TeliaLink } from "@teliads/components/react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <TeliaHeading tag="h1" variant="display-200">
        Telia Company
      </TeliaHeading>
      <Link href="/" passHref={true}>
        <TeliaLink>home</TeliaLink>
      </Link>
    </div>
  );
};

export default AboutPage;
