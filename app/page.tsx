import Image from "next/image";
import Link from "next/link";

import AvatarImage from "@/assets/avatar.png";
import { buttonVariants } from "@/components/ui/button";
import { PUBLIC_GITHUB, PUBLIC_LINKEDIN, PUBLIC_TWITTER } from "@/configs/info";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <section className="py-12">
      <div className="container sm:max-w-xl mx-auto my-auto space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Image
            src={AvatarImage}
            alt="Avatar"
            width={150}
            height={150}
            className="rounded-full p-4"
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">
              Chunxu &apos;Henry&apos; Yang
            </h1>

            <div>
              <Link href="mailto:chunxuyang@g.ucla.edu" className="inline-link">
                chunxuyang [at] ucla [dot] edu
              </Link>
            </div>

            <div className="flex gap-4 ml-auto">
              <Link
                href={PUBLIC_GITHUB}
                className={buttonVariants({
                  variant: "link",
                  size: "link",
                })}
              >
                <GitHubLogoIcon className="mr-1" />
                Github
              </Link>
              │
              <Link
                href={PUBLIC_LINKEDIN}
                className={buttonVariants({
                  variant: "link",
                  size: "link",
                })}
              >
                <LinkedInLogoIcon className="mr-1" />
                LinkedIn
              </Link>
              │
              <Link
                href={PUBLIC_TWITTER}
                className={buttonVariants({
                  variant: "link",
                  size: "link",
                })}
              >
                <TwitterLogoIcon className="mr-1" />
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <p>
          My name is Chunxu &apos;Henry&apos; Yang, I&apos;m currently a M.S.
          student at{" "}
          <Link href="https://www.ee.ucla.edu/" className="inline-link">
            UCLA Samueli School of Engineering
          </Link>
          , majoring in Electrical and Computer Engineering. I&apos;m also a
          graduate student researcher at{" "}
          <Link href="https://hci.ucla.edu/" className="inline-link">
            UCLA HCI Research
          </Link>{" "}
          advised by Prof.{" "}
          <Link href="https://hci.prof" className="inline-link">
            Xiang &apos;Anthony&apos; Chen
          </Link>
          . My research is focused on human-AI collaboration technologies within
          areas of pathology, AI-aided creativity, and natural language
          processing.
        </p>
        <p>
          Before my M.S. study, I obtained a BSc. in{" "}
          <Link
            href="https://cs.pku.edu.cn/English/Home.htm"
            className="inline-link"
          >
            Computer Science and Technology
          </Link>{" "}
          and a B.A. in{" "}
          <Link href="https://chinese.pku.edu.cn/" className="inline-link">
            Chinese Language and Literature
          </Link>{" "}
          from{" "}
          <Link href="https://english.pku.edu.cn" className="inline-link">
            Peking University
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
