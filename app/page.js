import projectGroups from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UnderlineLink from "@/components/UnderlineLink";
import HandDrawnBadge from "@/components/HandDrawnBadge";
import PhotoCarousel from "@/components/PhotoCarousel";
import ProjectGroup from "@/components/ProjectGroup";
import MarkerUnderline from "@/components/MarkerUnderline";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="w-full h-auto min-h-screen px-4 lg:px-0">
        <div className="flex flex-col w-full max-w-xl pt-6 md:pt-12 mx-auto">
          <div className="flex items-center space-x-4">
            <span className="relative inline-block text-[46px] lg:text-[58px] font-handwritten text-neutral-900">
              Viktor Atanasov
              <MarkerUnderline />
            </span>
          </div>

          <div className="flex flex-col space-y-4 w-full mt-8 lg:mt-10">
            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              Hi, I'm Viktor I build things.
            </p>

            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              I'm currently based in Sofia, Bulgaria, although over the last
              decade I've also lived in London, Dublin, Northampton, Reading,
              Leicester, and for a brief period - Ningbo, China.
            </p>

            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              I like designing products, writing code, and turning ideas into
              something tangible. Most of my work sits somewhere between design,
              engineering, and business, and I enjoy wearing all three hats.
            </p>

            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              Along the way I've worked at{" "}
              <UnderlineLink href="https://microsoft.com" external>
                Microsoft
              </UnderlineLink>{" "}
              and{" "}
              <UnderlineLink href="https://vercel.com" external>
                Vercel
              </UnderlineLink>
              , but I've always found myself gravitating towards building
              outside of work too—launching side projects, experimenting with
              new ideas, and learning by making.
            </p>
            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              This website is a collection of some of those projects, thoughts,
              and things I'm currently exploring.
            </p>
          </div>

          <PhotoCarousel />

          <div className="mt-16 lg:mt-20">
            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              Over the years, I've designed and shipped a lot of things and it's
              difficult to put them under one label. I've created:
            </p>

            <div className="flex flex-col my-8">
              {projectGroups.map((group, index) => (
                <ProjectGroup
                  key={group.label}
                  label={group.label}
                  defaultOpen={index === 0}
                >
                  {group.projects.map((project) => (
                    <div key={project.name} className="flex flex-col">
                      <div className="flex items-center gap-3">
                        <UnderlineLink href={project.href} external>
                          <span className="font-geist text-[16px] font-normal text-neutral-900">
                            {project.name}
                          </span>
                        </UnderlineLink>
                        {project.status === "Acquired" && (
                          <HandDrawnBadge color="#22c55e">
                            Acquired
                          </HandDrawnBadge>
                        )}
                      </div>
                      <p className="font-geist text-[15px] font-light leading-7 text-neutral-500 mt-1.5">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </ProjectGroup>
              ))}

              <ProjectGroup label="writing" defaultOpen={false}>
                {[
                  {
                    title: "How I taught myself how to code",
                    slug: "how-I-taught-myself-how-to-code",
                    description:
                      "My journey from business graduate to self-taught developer.",
                  },
                  {
                    title: "Networking events are broken",
                    slug: "networking-events-are-broken",
                    description:
                      "Why most networking events fail and what would actually work.",
                  },
                  {
                    title: "A fun business idea",
                    slug: "a-fun-business-idea",
                    description:
                      "A dinner party concept inspired by Come Dine with Me.",
                  },
                  {
                    title: "Leaving Microsoft to start a business",
                    slug: "leaving-microsoft-to-start-a-business",
                    description:
                      "Walking away from a corporate job to bet on myself.",
                  },
                ].map((post) => (
                  <div key={post.slug} className="flex flex-col">
                    <UnderlineLink href={`/writing/${post.slug}`}>
                      <span className="font-geist text-[16px] font-normal text-neutral-900">
                        {post.title}
                      </span>
                    </UnderlineLink>
                    {post.description && (
                      <p className="font-geist text-[15px] font-light leading-7 text-neutral-500 mt-1.5">
                        {post.description}
                      </p>
                    )}
                  </div>
                ))}
              </ProjectGroup>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
