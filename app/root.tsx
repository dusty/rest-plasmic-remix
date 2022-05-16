import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import plasmic from "@plasmicapp/react-web/lib/plasmic.css";
import plasmicDefault from "~/components/plasmic/plasmic__default_style.css";
import plasmicHomepage from "~/components/plasmic/test_123/PlasmicHomepage.css";
import plasmicButton from "~/components/plasmic/test_123/PlasmicButton.css";
import plasmicTest123 from "~/components/plasmic/test_123/plasmic_test_123.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    plasmic,
    plasmicDefault,
    plasmicHomepage,
    plasmicButton,
    plasmicTest123,
  ].map((href) => ({ rel: "stylesheet", href }));
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
