import * as React from "react";
import type { DefaultButtonProps } from "./plasmic/test_123/PlasmicButton";
import { PlasmicButton } from "./plasmic/test_123/PlasmicButton";
import type {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps,
} from "@plasmicapp/react-web";
import { Link } from "@remix-run/react";

interface ButtonProps extends DefaultButtonProps {}

function ButtonLink_(props: ButtonProps, ref: ButtonRef) {
  const { link, ...rest } = props;
  const { plasmicProps } = PlasmicButton.useBehavior<ButtonProps>(rest, ref);
  return (
    <PlasmicButton {...plasmicProps} root={{ as: Link, props: { to: link } }} />
  );
}

type ButtonComponentType = {
  (
    props: Omit<ButtonProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<ButtonProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const ButtonLink = React.forwardRef(ButtonLink_) as any as ButtonComponentType;

export default Object.assign(ButtonLink, {
  __plumeType: "button",
});
