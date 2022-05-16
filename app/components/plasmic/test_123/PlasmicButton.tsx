// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6UQ1FZXCaknS54fB1poabC
// Component: -SOUtOCL8mW
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";
import "../plasmic__default_style.css"; // plasmic-import: global/defaultcss

import "./plasmic_test_123.css"; // plasmic-import: 6UQ1FZXCaknS54fB1poabC/projectcss
import "./PlasmicButton.css"; // plasmic-import: -SOUtOCL8mW/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: ZlvI9KYyRW1/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: ae-780J4JaB/icon

export type PlasmicButton__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  shape: "rounded" | "round" | "sharp";
  size: "compact" | "minimal";
  color:
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link";
};

export type PlasmicButton__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
  >;
};

type VariantPropType = keyof PlasmicButton__VariantsArgs;
export const PlasmicButton__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "shape",
  "size",
  "color"
);

export type PlasmicButton__ArgsType = {
  children?: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  link?: string;
};

type ArgPropType = keyof PlasmicButton__ArgsType;
export const PlasmicButton__ArgProps = new Array<ArgPropType>(
  "children",
  "startIcon",
  "endIcon",
  "link"
);

export type PlasmicButton__OverridesType = {
  root?: p.Flex<"button">;
  startIconContainer?: p.Flex<"div">;
  contentContainer?: p.Flex<"div">;
  endIconContainer?: p.Flex<"div">;
};

export interface DefaultButtonProps extends pp.BaseButtonProps {
  shape?: SingleChoiceArg<"rounded" | "round" | "sharp">;
  size?: SingleChoiceArg<"compact" | "minimal">;
  color?: SingleChoiceArg<
    | "blue"
    | "green"
    | "yellow"
    | "red"
    | "sand"
    | "white"
    | "softBlue"
    | "softGreen"
    | "softYellow"
    | "softRed"
    | "softSand"
    | "clear"
    | "link"
  >;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        "plasmic_default__all",
        "plasmic_default__button",
        "root_reset_6UQ1FZXCaknS54fB1poabC",
        "plasmic_default_styles",
        "plasmic_mixins",
        "Button__root__cfeur",
        {
          Button__root___focusVisibleWithin__cfeurXbe6P:
            triggers.focusVisibleWithin_root,
          Button__rootcolor_blue__cfeurNhNkV: hasVariant(
            variants,
            "color",
            "blue"
          ),
          Button__rootcolor_clear__cfeurk2KFk: hasVariant(
            variants,
            "color",
            "clear"
          ),
          Button__rootcolor_green__cfeurIzMcw: hasVariant(
            variants,
            "color",
            "green"
          ),
          Button__rootcolor_link__cfeur6Ywds: hasVariant(
            variants,
            "color",
            "link"
          ),
          Button__rootcolor_link_size_minimal__cfeur6YwdsDuPj:
            hasVariant(variants, "color", "link") &&
            hasVariant(variants, "size", "minimal"),
          Button__rootcolor_red__cfeur8LXlh: hasVariant(
            variants,
            "color",
            "red"
          ),
          Button__rootcolor_sand__cfeurTwE1Z: hasVariant(
            variants,
            "color",
            "sand"
          ),
          Button__rootcolor_softBlue__cfeur1YdV: hasVariant(
            variants,
            "color",
            "softBlue"
          ),
          Button__rootcolor_softGreen__cfeurz3JbZ: hasVariant(
            variants,
            "color",
            "softGreen"
          ),
          Button__rootcolor_softRed__cfeurrwUCk: hasVariant(
            variants,
            "color",
            "softRed"
          ),
          Button__rootcolor_softSand__cfeurSMzJe: hasVariant(
            variants,
            "color",
            "softSand"
          ),
          Button__rootcolor_softYellow__cfeurysL0I: hasVariant(
            variants,
            "color",
            "softYellow"
          ),
          Button__rootcolor_white__cfeurUdq2X: hasVariant(
            variants,
            "color",
            "white"
          ),
          Button__rootcolor_yellow__cfeurOSBf: hasVariant(
            variants,
            "color",
            "yellow"
          ),
          Button__rootisDisabled__cfeurb5DHr: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          Button__rootshape_round__cfeurbKen: hasVariant(
            variants,
            "shape",
            "round"
          ),
          Button__rootshape_rounded__cfeurb4CfG: hasVariant(
            variants,
            "shape",
            "rounded"
          ),
          Button__rootshape_rounded_showEndIcon__cfeurb4CfGJaFwO:
            hasVariant(variants, "showEndIcon", "showEndIcon") &&
            hasVariant(variants, "shape", "rounded"),
          Button__rootshape_rounded_showStartIcon__cfeurb4CfGK1P8J:
            hasVariant(variants, "shape", "rounded") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          Button__rootshape_sharp__cfeurKuTrl: hasVariant(
            variants,
            "shape",
            "sharp"
          ),
          Button__rootshowEndIcon__cfeurjaFwO: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),
          Button__rootshowStartIcon__cfeurk1P8J: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          ),
          Button__rootsize_compact__cfeurHQhD: hasVariant(
            variants,
            "size",
            "compact"
          ),
          Button__rootsize_compact_shape_round__cfeurHQhDBKen:
            hasVariant(variants, "shape", "round") &&
            hasVariant(variants, "size", "compact"),
          Button__rootsize_compact_shape_rounded__cfeurHQhDB4CfG:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "shape", "rounded"),
          Button__rootsize_compact_showEndIcon__cfeurHQhDJaFwO:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          Button__rootsize_compact_showEndIcon_showStartIcon__cfeurHQhDJaFwOK1P8J:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon") &&
            hasVariant(variants, "showEndIcon", "showEndIcon"),
          Button__rootsize_compact_showStartIcon__cfeurHQhDK1P8J:
            hasVariant(variants, "size", "compact") &&
            hasVariant(variants, "showStartIcon", "showStartIcon"),
          Button__rootsize_minimal__cfeurDuPj: hasVariant(
            variants,
            "size",
            "minimal"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : false
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "Button__startIconContainer__czqAn",
            {
              Button__startIconContainercolor_blue__czqAnNhNkV: hasVariant(
                variants,
                "color",
                "blue"
              ),
              Button__startIconContainershape_rounded_showStartIcon__czqAnb4CfGK1P8J:
                hasVariant(variants, "shape", "rounded") &&
                hasVariant(variants, "showStartIcon", "showStartIcon"),
              Button__startIconContainershowStartIcon__czqAnk1P8J: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            }
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(
                  "plasmic_default__all",
                  "plasmic_default__svg",
                  "Button__svg___3Xc5I"
                )}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames("Button__slotTargetStartIcon__aEha5", {
              Button__slotTargetStartIconcolor_blue__aEha5NhNkV: hasVariant(
                variants,
                "color",
                "blue"
              ),
              Button__slotTargetStartIconcolor_clear__aEha5K2KFk: hasVariant(
                variants,
                "color",
                "clear"
              ),
              Button__slotTargetStartIconcolor_link__aEha56Ywds: hasVariant(
                variants,
                "color",
                "link"
              ),
              Button__slotTargetStartIconcolor_softBlue__aEha51YdV: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              Button__slotTargetStartIconcolor_softGreen__aEha5Z3JbZ:
                hasVariant(variants, "color", "softGreen"),
              Button__slotTargetStartIconcolor_softRed__aEha5RwUCk: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              Button__slotTargetStartIconcolor_softSand__aEha5SMzJe: hasVariant(
                variants,
                "color",
                "softSand"
              ),
              Button__slotTargetStartIconcolor_softYellow__aEha5YsL0I:
                hasVariant(variants, "color", "softYellow"),
              Button__slotTargetStartIconcolor_white__aEha5Udq2X: hasVariant(
                variants,
                "color",
                "white"
              ),
              Button__slotTargetStartIconcolor_yellow__aEha5OSBf: hasVariant(
                variants,
                "color",
                "yellow"
              ),
              Button__slotTargetStartIconshowStartIcon__aEha5K1P8J: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <div
        data-plasmic-name={"contentContainer"}
        data-plasmic-override={overrides.contentContainer}
        className={classNames(
          "plasmic_default__all",
          "plasmic_default__div",
          "Button__contentContainer___84TDo",
          {
            Button__contentContainer___focusVisibleWithin___84TDoXbe6P:
              triggers.focusVisibleWithin_root,
            Button__contentContainerisDisabled___84TDob5DHr: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),
            Button__contentContainershape_rounded___84TDob4CfG: hasVariant(
              variants,
              "shape",
              "rounded"
            ),
            Button__contentContainershowEndIcon___84TDojaFwO: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            )
          }
        )}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Button",
          value: args.children,
          className: classNames("Button__slotTargetChildren__i28Cd", {
            Button__slotTargetChildren___focusVisibleWithin__i28CdXbe6P:
              triggers.focusVisibleWithin_root,
            Button__slotTargetChildrencolor_blue__i28CdNhNkV: hasVariant(
              variants,
              "color",
              "blue"
            ),
            Button__slotTargetChildrencolor_clear__i28Cdk2KFk: hasVariant(
              variants,
              "color",
              "clear"
            ),
            Button__slotTargetChildrencolor_green__i28CdIzMcw: hasVariant(
              variants,
              "color",
              "green"
            ),
            Button__slotTargetChildrencolor_link__i28Cd6Ywds: hasVariant(
              variants,
              "color",
              "link"
            ),
            Button__slotTargetChildrencolor_link_size_minimal__i28Cd6YwdsDuPj:
              hasVariant(variants, "color", "link") &&
              hasVariant(variants, "size", "minimal"),
            Button__slotTargetChildrencolor_red__i28Cd8LXlh: hasVariant(
              variants,
              "color",
              "red"
            ),
            Button__slotTargetChildrencolor_sand__i28CdTwE1Z: hasVariant(
              variants,
              "color",
              "sand"
            ),
            Button__slotTargetChildrencolor_softBlue__i28Cd1YdV: hasVariant(
              variants,
              "color",
              "softBlue"
            ),
            Button__slotTargetChildrencolor_softGreen__i28Cdz3JbZ: hasVariant(
              variants,
              "color",
              "softGreen"
            ),
            Button__slotTargetChildrencolor_softRed__i28CdrwUCk: hasVariant(
              variants,
              "color",
              "softRed"
            ),
            Button__slotTargetChildrencolor_softSand__i28CdSMzJe: hasVariant(
              variants,
              "color",
              "softSand"
            ),
            Button__slotTargetChildrencolor_softYellow__i28CdysL0I: hasVariant(
              variants,
              "color",
              "softYellow"
            ),
            Button__slotTargetChildrencolor_white__i28CdUdq2X: hasVariant(
              variants,
              "color",
              "white"
            ),
            Button__slotTargetChildrencolor_yellow__i28CdOSBf: hasVariant(
              variants,
              "color",
              "yellow"
            ),
            Button__slotTargetChildrenisDisabled__i28Cdb5DHr: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),
            Button__slotTargetChildrenshape_rounded__i28Cdb4CfG: hasVariant(
              variants,
              "shape",
              "rounded"
            ),
            Button__slotTargetChildrenshowEndIcon__i28CdjaFwO: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            ),
            Button__slotTargetChildrenshowStartIcon__i28Cdk1P8J: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            ),
            Button__slotTargetChildrensize_minimal__i28CdDuPj: hasVariant(
              variants,
              "size",
              "minimal"
            )
          })
        })}
      </div>

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : false) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(
            "plasmic_default__all",
            "plasmic_default__div",
            "Button__endIconContainer__jk1ER",
            {
              Button__endIconContainercolor_white__jk1ERUdq2X: hasVariant(
                variants,
                "color",
                "white"
              ),
              Button__endIconContainercolor_yellow__jk1ERoSBf: hasVariant(
                variants,
                "color",
                "yellow"
              ),
              Button__endIconContainershowEndIcon__jk1ERjaFwO: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            }
          )}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <IconIcon
                className={classNames(
                  "plasmic_default__all",
                  "plasmic_default__svg",
                  "Button__svg__o3Dq"
                )}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames("Button__slotTargetEndIcon___3Qwst", {
              Button__slotTargetEndIconcolor_clear___3Qwstk2KFk: hasVariant(
                variants,
                "color",
                "clear"
              ),
              Button__slotTargetEndIconcolor_link___3Qwst6Ywds: hasVariant(
                variants,
                "color",
                "link"
              ),
              Button__slotTargetEndIconcolor_softBlue___3Qwst1YdV: hasVariant(
                variants,
                "color",
                "softBlue"
              ),
              Button__slotTargetEndIconcolor_softGreen___3Qwstz3JbZ: hasVariant(
                variants,
                "color",
                "softGreen"
              ),
              Button__slotTargetEndIconcolor_softRed___3QwstrwUCk: hasVariant(
                variants,
                "color",
                "softRed"
              ),
              Button__slotTargetEndIconcolor_softSand___3QwstSMzJe: hasVariant(
                variants,
                "color",
                "softSand"
              ),
              Button__slotTargetEndIconcolor_softYellow___3QwstysL0I:
                hasVariant(variants, "color", "softYellow"),
              Button__slotTargetEndIconcolor_white___3QwstUdq2X: hasVariant(
                variants,
                "color",
                "white"
              ),
              Button__slotTargetEndIconcolor_yellow___3QwstOSBf: hasVariant(
                variants,
                "color",
                "yellow"
              ),
              Button__slotTargetEndIconshowEndIcon___3QwstjaFwO: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseButtonProps>(
  props: P,
  ref: pp.ButtonRef
) {
  const b = pp.useButton<P, typeof PlasmicButton>(
    PlasmicButton,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },

    ref
  );

  return b;
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "contentContainer", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  contentContainer: ["contentContainer"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "button";
  startIconContainer: "div";
  contentContainer: "div";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicButton__ArgProps,
      internalVariantPropNames: PlasmicButton__VariantProps
    });

    return PlasmicButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton";
  } else {
    func.displayName = `PlasmicButton.${nodeName}`;
  }
  return func;
}

export const PlasmicButton = Object.assign(
  // Top-level PlasmicButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    contentContainer: makeNodeComponent("contentContainer"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicButton
    internalVariantProps: PlasmicButton__VariantProps,
    internalArgProps: PlasmicButton__ArgProps,

    useBehavior
  }
);

export default PlasmicButton;
/* prettier-ignore-end */
