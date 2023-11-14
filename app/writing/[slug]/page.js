import HelloWorld from "@/content/hello-world.mdx";
import { join } from "path";
import { readFileSync } from "fs";
import * as matter from "gray-matter";

const filePath = join(process.cwd(), "content", "hello-world.mdx");
const fileContent = readFileSync(filePath, "utf8");

const Writing = () => {
  console.log(matter(fileContent));

  return (
    <article className="flex flex-col w-full max-w-2xl pt-20 pb-5 mx-auto prose lg:py-20">
      {/* <HelloWorld /> */}
    </article>
  );
};

export default Writing;
