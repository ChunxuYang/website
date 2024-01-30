import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PUBLICATIONS } from "@/configs/publications";
import {
  CodeIcon,
  FileTextIcon,
  GitHubLogoIcon,
  GlobeIcon,
  VideoIcon,
} from "@radix-ui/react-icons";

export default function PublicationsPage() {
  return (
    <section className="sm:py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-12">Selected Publications</h2>
        <ul className="flex flex-col gap-4">
          {PUBLICATIONS.map((publication) => {
            return (
              <li key={publication.title} className="flex flex-col gap-2">
                <Link
                  href={
                    publication.doi ||
                    publication.pdf ||
                    publication.website ||
                    "#"
                  }
                  className="text-md sm:text-xl font-semibold hover:underline underline-offset-4"
                >
                  {publication.title}
                </Link>
                <h4 className="text-sm text-muted-foreground">
                  {publication.authors.join(", ")}
                </h4>
                <h4 className="italic text-sm">{publication.conference}</h4>
                <div className="flex flex-row">
                  {publication.pdf && (
                    <Link
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                      })}
                      // icon={<AiFillFilePdf />}
                      target="_blank"
                      href={publication.pdf}
                      // newTab
                    >
                      <FileTextIcon className="mr-1" />
                      PDF
                    </Link>
                  )}
                  {publication.code && (
                    <Link
                      target="_blank"
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                      })}
                      href={publication.code}
                    >
                      <GitHubLogoIcon className="mr-1" />
                      Github
                    </Link>
                  )}
                  {publication.website && (
                    <Link
                      target="_blank"
                      href={publication.website}
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                      })}
                    >
                      <GlobeIcon className="mr-1" />
                      Website
                    </Link>
                  )}
                  {publication.doi && (
                    <Link
                      target="_blank"
                      href={publication.doi}
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                      })}
                    >
                      <CodeIcon className="mr-1" />
                      DOI
                    </Link>
                  )}
                  {publication.video && (
                    <Link
                      target="_blank"
                      href={publication.video}
                      className={buttonVariants({
                        variant: "link",
                        size: "sm",
                      })}
                    >
                      <VideoIcon className="mr-1" />
                      Video
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
