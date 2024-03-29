// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import type { DefaultHomepageProps } from "./plasmic/test_123/PlasmicHomepage";
import { PlasmicHomepage } from "./plasmic/test_123/PlasmicHomepage";
import type { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Link } from "@remix-run/react";
import ButtonLink from "./ButtonLink";

export interface HomepageProps extends DefaultHomepageProps {
  toggle: () => void;
}

const HomepageOne = (
  { toggle, ...rest }: HomepageProps,
  ref: HTMLElementRefOf<"div">
) => {
  return (
    <PlasmicHomepage
      root={{ ref }}
      {...rest}
      logo={{
        onClick: toggle,
      }}
      services={{
        as: ButtonLink,
        props: { link: "/services" },
        // as: Link,
        // props: {
        //   to: "/services",
        //   prefetch: "intent",
        // },
      }}
      features={{
        as: ButtonLink,
        props: { link: "/features" },
        // as: Link,
        // props: {
        //   to: "/features",
        //   prefetch: "intent",
        // },
      }}
      company={{
        as: ButtonLink,
        props: { link: "/company" },
        // as: Link,
        // props: {
        //   to: "/company",
        //   prefetch: "intent",
        // },
      }}
      contact={{
        as: ButtonLink,
        props: { link: "/contact" },
        // as: Link,
        // props: {
        //   to: "/contact",
        //   prefetch: "intent",
        // },
      }}
      login={{
        as: ButtonLink,
        props: { link: "/login" },
        // as: Link,
        // props: {
        //   to: "/login",
        //   prefetch: "intent",
        // },
      }}
      signup={{
        as: ButtonLink,
        props: { link: "/signup" },
        // as: Link,
        // props: {
        //   to: "/signup",
        //   prefetch: "intent",
        // },
      }}
    />
  );
};

const HomepageTwo = (
  { toggle, ...rest }: HomepageProps,
  ref: HTMLElementRefOf<"div">
) => {
  return (
    <PlasmicHomepage
      root={{ ref }}
      logo={{ onClick: toggle }}
      services={{
        props: {
          link: "/services",
        },
      }}
      features={{
        props: {
          link: "/features",
        },
      }}
      company={{
        props: {
          link: "/company",
        },
      }}
      contact={{
        props: {
          link: "/contact",
        },
      }}
      login={{
        props: {
          link: "/login",
        },
      }}
      signup={{
        props: {
          link: "/signup",
        },
      }}
      {...rest}
    />
  );
};

function Homepage_(props: DefaultHomepageProps, ref: HTMLElementRefOf<"div">) {
  const [state, setState] = React.useState(true);
  const toggle = () => setState((cur) => !cur);
  return state
    ? HomepageOne({ ...props, toggle }, ref)
    : HomepageTwo({ ...props, toggle }, ref);
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
