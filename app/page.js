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
              Hi, I am Viktor. I like to build things.
            </p>

            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              Over the last few years I've built all kinds of products—some for
              myself, others with clients through Simple Suite, a startup studio
              I co-founded in London. Some became real businesses, one was
              acquired, plenty never made it past the MVP, but every project
              taught me something.
            </p>

            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              Along the way, I also spent time at Microsoft and Vercel in
              technical customer-facing roles. I was always drawn to working
              close to the product, the engineers building it, and the customers
              using it every day.
            </p>

            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              I'm currently based in Sofia, Bulgaria, after spending the last
              decade living across the UK, Ireland, and even a short stint in
              China.
            </p>

            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              This website is where I share some of those projects, thoughts,
              and whatever I'm currently exploring.
            </p>
          </div>

          <PhotoCarousel />

          <div className="mt-16 lg:mt-20">
            <p className="font-geist text-[17px] font-light leading-7 text-neutral-900">
              I’ve been fortunate enough to work on all kinds of projects over
              the years. They’re difficult to fit under one umbrella, but here’s
              my best attempt at organising them:
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
                      <p className="font-geist text-[15px] font-light leading-6 text-neutral-500 mt-1.5">
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
                      "When I moved to London, I thought networking events would be one of the best ways to meet interesting people. They weren’t. This is my rant on why most networking events fail.",
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
                      "Quitting Microsoft to build Numerro full-time felt both exciting and terrifying. A few years later, I’m looking back on that decision and what it taught me.",
                  },
                ].map((post) => (
                  <div key={post.slug} className="flex flex-col">
                    <UnderlineLink href={`/writing/${post.slug}`}>
                      <span className="font-geist text-[16px] font-normal text-neutral-900">
                        {post.title}
                      </span>
                    </UnderlineLink>
                    {post.description && (
                      <p className="font-geist text-[15px] font-light leading-6 text-neutral-500 mt-1.5">
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
