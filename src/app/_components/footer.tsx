import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";



export function Footer() {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <p className="text-center text-sm text-neutral-600 dark:text-slate-200">
            © {currentYear} ni18 Blog. All rights reserved. 
            Content & resources protected under 
            <a 
              href="https://blog.ni18.in/" 
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-neutral-700 hover:text-neutral-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors underline"
            >
              ni18.in
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;