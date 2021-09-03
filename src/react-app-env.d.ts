declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: string;
  export default content;
}

declare module "*.module.less" {
  const resource: { [key: string]: string };
  export = resource;
}

declare module "*.module.css" {
  const resource: { [key: string]: string };
  export = resource;
}
