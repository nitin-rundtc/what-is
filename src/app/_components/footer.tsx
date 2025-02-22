import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";


export function Footer() {
  const morePosts = getAllPosts();
  
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <MoreStories posts={morePosts} />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
