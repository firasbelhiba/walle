import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "lvj5t7kw",
  dataset: "production",
  apiVersion: "2021-10-21", // use a UTC date string
  token:
    "sk0L0iIBK2wbws994O1pcM3oGlvWjq7sagN0VNEYY4JmWKBHdonF7xWe65SS8IiIHnjCQcMmiDmN036Zxx0SufUmmUKsNzISJp4M3koZ19N1rODQZaiEh09BwCtimgZm9XDcnehhYDF0Rtq7AOwdmyET5I5Y9xpDoObJXi7j4J69nN1DzcJG", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});
